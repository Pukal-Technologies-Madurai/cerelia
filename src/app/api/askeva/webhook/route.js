/**
 * /api/askeva/webhook/route.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Next.js App Router API Route — Askeva WhatsApp Business Webhook
 *
 * 1. Set this URL in Askeva dashboard → "Webhook Message Configurations":
 *    https://cerelia.org/api/askeva/webhook
 *
 * 2. The Chatbot.json flow drives all replies — same logic as the web chatbot.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from "next/server";
import { sendTextMessage, sendButtonMessage } from "@/app/lib/askeva";
import chatbotData from "@/app/components/Chatbot.json";

// ─── Build the same node maps used by Chatbot.jsx ────────────────────────────
const buildMaps = (data) => {
    const nodes = data.nodes || [];
    const edges = data.edges || [];

    const nodeById = new Map();
    const nodeByIxId = new Map();
    const nodeByKeyword = new Map();
    let rootNode = null;

    nodes.forEach((n) => {
        if (n.nodeId === "root" && !rootNode) rootNode = n;
        if (!nodeById.has(n.nodeId)) nodeById.set(n.nodeId, n);
        if (n.interactiveId && !nodeByIxId.has(n.interactiveId))
            nodeByIxId.set(n.interactiveId, n);
        (n.keywords || []).forEach((kw) => {
            const lk = kw.toLowerCase();
            if (!nodeByKeyword.has(lk)) nodeByKeyword.set(lk, n);
        });
    });

    const seenEdgeIds = new Set();
    const buttonToNode = new Map();
    const flowChildById = new Map();

    nodes.forEach((n) => {
        (n.data?.action?.buttons || []).forEach((btn) => {
            if (btn.type !== "reply" || !btn.reply?.title) return;
            const title = btn.reply.title.toLowerCase();
            if (buttonToNode.has(title)) return;
            let target = nodeByIxId.get(btn.reply.id);
            if (!target) {
                const outEdges = (edges.filter(
                    (e) => e.fromNodeId === n.nodeId && !seenEdgeIds.has(e.edgeId)
                ));
                const edge = outEdges.find(
                    (e) => e.interactiveId === btn.reply.id || e.label?.toLowerCase() === title
                );
                if (edge) target = nodeById.get(edge.toNodeId);
            }
            if (target) buttonToNode.set(title, target);
        });
    });

    edges.forEach((e) => {
        if (seenEdgeIds.has(e.edgeId)) return;
        seenEdgeIds.add(e.edgeId);
        if (
            !flowChildById.has(e.fromNodeId) &&
            (e.keywords?.some((k) => k.toLowerCase() === "flow submitted") ||
                e.intentName?.toLowerCase().includes("flow submitted"))
        ) {
            const t = nodeById.get(e.toNodeId);
            if (t) flowChildById.set(e.fromNodeId, t);
        }
    });

    return { nodeById, nodeByKeyword, buttonToNode, flowChildById, rootNode };
};

const { nodeByKeyword, buttonToNode, rootNode } = buildMaps(chatbotData);

// ─── Find the best node response for a user message ──────────────────────────
const getNodeButtons = (node) =>
    (node?.data?.action?.buttons || [])
        .filter((b) => b.type === "reply" && b.reply?.title)
        .map((b) => b.reply.title)
        .filter((t) => !t.toLowerCase().startsWith("button"));

const getRootButtons = () => getNodeButtons(rootNode) || ["Order Snacks", "Get Support", "Become Retailer"];

const resolveNode = (message) => {
    const lower = message.toLowerCase().trim();
    if (buttonToNode.has(lower)) return buttonToNode.get(lower);
    const greetings = rootNode?.keywords || ["hi", "hello", "hai"];
    if (greetings.some((g) => lower.includes(g.toLowerCase()))) return rootNode;
    for (const [kw, node] of nodeByKeyword.entries()) {
        if (lower.includes(kw) || kw.includes(lower)) return node;
    }
    return null;
};

// ─── Send the appropriate WhatsApp reply based on the matched node ────────────
async function replyToUser(to, node) {
    if (!node) {
        return sendTextMessage(
            to,
            "I'm not sure how to help with that.\nType *hi* to see the main menu."
        );
    }

    const body = node.data?.body || "";
    const buttons = getNodeButtons(node).slice(0, 3);

    if (buttons.length > 0) {
        // Interactive button reply
        return sendButtonMessage(to, body, buttons);
    }

    // Plain text reply (text / questionnaire nodes)
    const questions = node.data?.questions || [];
    const qText = questions.map((q) => `*${q.key}*\n${q.value}`).join("\n\n");
    const fullText = [body, qText].filter(Boolean).join("\n\n");

    return sendTextMessage(to, fullText || "How can I help you?");
}

// ─── POST — receives incoming WhatsApp messages from Askeva ──────────────────
export async function POST(request) {
    try {
        const payload = await request.json();
        console.log("[Askeva Webhook] Received:", JSON.stringify(payload, null, 2));

        /**
         * Askeva forwards the standard WhatsApp Cloud API payload format:
         * {
         *   "object": "whatsapp_business_account",
         *   "entry": [{
         *     "id": "...",
         *     "changes": [{
         *       "value": {
         *         "messaging_product": "whatsapp",
         *         "metadata": { "display_phone_number": "...", "phone_number_id": "..." },
         *         "contacts": [{ "profile": { "name": "..." }, "wa_id": "..." }],
         *         "messages": [{ "from": "...", "id": "...", "text": { "body": "..." }, "type": "text" }]
         *       }
         *     }]
         *   }]
         * }
         */

        const changes = payload?.entry?.[0]?.changes?.[0]?.value;
        const messages = changes?.messages || [];

        for (const msg of messages) {
            const from = msg.from;          // sender's phone number
            const messageType = msg.type;          // "text", "interactive", etc.

            let userText = "";

            if (messageType === "text") {
                userText = msg.text?.body || "";
            } else if (messageType === "interactive") {
                // User tapped a button reply
                userText =
                    msg.interactive?.button_reply?.title ||
                    msg.interactive?.list_reply?.title ||
                    "";
            }

            if (!userText) continue;

            console.log(`[Askeva Webhook] Message from ${from}: "${userText}"`);

            const matchedNode = resolveNode(userText);
            await replyToUser(from, matchedNode ?? rootNode);
        }

        return NextResponse.json({ status: "ok" }, { status: 200 });

    } catch (err) {
        console.error("[Askeva Webhook] Error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

// ─── GET — Webhook verification (Askeva may send a challenge) ────────────────
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const challenge = searchParams.get("hub.challenge");
    const verify = searchParams.get("hub.verify_token");
    const secret = process.env.ASKEVA_WEBHOOK_SECRET;

    if (verify === secret && challenge) {
        // Return the challenge to verify webhook ownership
        return new Response(challenge, { status: 200 });
    }

    return NextResponse.json(
        { error: "Verification failed. Check ASKEVA_WEBHOOK_SECRET." },
        { status: 403 }
    );
}
