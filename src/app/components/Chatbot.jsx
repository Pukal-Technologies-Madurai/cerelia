"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
    BotMessageSquare, X, Send, ShoppingBag, Headphones, Store,
    ChevronRight, CreditCard, CheckCircle, XCircle, HelpCircle,
    PackageCheck, Truck, AlertCircle, ClipboardList, ExternalLink,
    ShoppingCart, Flame, Leaf, MessageCircle,
} from "lucide-react";
import chatbotData from "./Chatbot.json";
import { products } from "../data/products";

// ─────────────────────────────────────────────────────────────────────────────
// 1. SKU → product lookup  (from products.js)
// ─────────────────────────────────────────────────────────────────────────────
const productBySku = new Map();
products.forEach((p) => {
    if (p.sku) productBySku.set(p.sku, p);
});

// ─────────────────────────────────────────────────────────────────────────────
// 2. Build navigation maps from JSON  (nodes + edges)
// ─────────────────────────────────────────────────────────────────────────────
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

    /* Deduplicated edge maps */
    const seenEdgeIds = new Set();
    const edgesByFrom = new Map();
    edges.forEach((e) => {
        if (seenEdgeIds.has(e.edgeId)) return;
        seenEdgeIds.add(e.edgeId);
        if (!edgesByFrom.has(e.fromNodeId)) edgesByFrom.set(e.fromNodeId, []);
        edgesByFrom.get(e.fromNodeId).push(e);
    });

    /* Button title → target node */
    const buttonToNode = new Map();
    nodes.forEach((n) => {
        (n.data?.action?.buttons || []).forEach((btn) => {
            if (btn.type !== "reply" || !btn.reply?.title) return;
            const title = btn.reply.title.toLowerCase();
            if (buttonToNode.has(title)) return;
            let target = nodeByIxId.get(btn.reply.id);
            if (!target) {
                const edge = (edgesByFrom.get(n.nodeId) || []).find(
                    (e) => e.interactiveId === btn.reply.id || e.label?.toLowerCase() === title
                );
                if (edge) target = nodeById.get(edge.toNodeId);
            }
            if (target) buttonToNode.set(title, target);
        });
    });

    /* flow submitted child  ( fromNodeId → child node ) */
    const flowChildById = new Map();
    edges.forEach((e) => {
        if (
            !flowChildById.has(e.fromNodeId) &&
            (e.keywords?.some((k) => k.toLowerCase() === "flow submitted") ||
                e.intentName?.toLowerCase().includes("flow submitted"))
        ) {
            const t = nodeById.get(e.toNodeId);
            if (t) flowChildById.set(e.fromNodeId, t);
        }
    });

    /* questionnaire complete child */
    const questionnaireChildById = new Map();
    edges.forEach((e) => {
        if (!questionnaireChildById.has(e.fromNodeId) && e.intentName?.toLowerCase().includes("questionnaire")) {
            const t = nodeById.get(e.toNodeId);
            if (t) questionnaireChildById.set(e.fromNodeId, t);
        }
    });

    /* catalog sections per node (for product display) */
    const catalogSectionsByNode = new Map();
    nodes.forEach((n) => {
        const sections = n.data?.action?.sections;
        if (n.type === "catalog" && sections?.length) {
            if (!catalogSectionsByNode.has(n.nodeId))
                catalogSectionsByNode.set(n.nodeId, sections);
        }
    });

    return {
        nodeById, nodeByIxId, nodeByKeyword, buttonToNode,
        flowChildById, questionnaireChildById, catalogSectionsByNode, rootNode,
    };
};

const {
    nodeByKeyword, buttonToNode,
    flowChildById, questionnaireChildById,
    catalogSectionsByNode, rootNode,
} = buildMaps(chatbotData);

// ─────────────────────────────────────────────────────────────────────────────
// 3. Helpers
// ─────────────────────────────────────────────────────────────────────────────
const CHATBOT_NAME = chatbotData?.chatbot?.name || "Cerelia Support";
const INITIAL_MSG = rootNode?.data?.body;

// ─── WhatsApp Business Integration ───────────────────────────────────────────
// Phone number extracted from product URLs: wa.me/p/.../{PHONE}
const WA_PHONE = "919944488350";

/**
 * Build a wa.me deep-link that opens WhatsApp with a pre-filled message.
 * This maps the web chatbot flow → the real askeva.io WhatsApp Business flow
 * by sending the exact keyword the Askeva chatbot listens for.
 *
 * @param {string} text  - pre-filled message text
 * @returns {string}     - wa.me URL
 */
const buildWaLink = (text) =>
    `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text || "hi")}`;

const getNodeWaKeyword = (node) => {
    if (!node) return "hi";
    // Prefer keywords that match the actual WhatsApp flow trigger words.
    // Root greetings use "hi"; other nodes use their first real keyword.
    const kws = (node.keywords || []).filter(
        (k) => !k.toLowerCase().startsWith("button")
    );
    return kws[0] || node.data?.body?.split(" ").slice(0, 5).join(" ") || "hi";
};

const getNodeButtons = (node) =>
    (node?.data?.action?.buttons || [])
        .filter((b) => b.type === "reply" && b.reply?.title)
        .map((b) => b.reply.title)
        .filter((t) => !t.toLowerCase().startsWith("button"));

const getRootButtons = () =>
    rootNode ? getNodeButtons(rootNode) : ["Order Snacks", "Get Support", "Become Retailer"];

const buildResponse = (node) => {
    if (!node) return {
        text: "I'm not sure how to help. Please select an option or type 'hi' to start over.",
        buttons: getRootButtons(), flowCta: null, header: null,
        questions: null, nodeType: "text", nodeId: null, catalogSkus: null,
    };

    const nodeType = node.type || "interactive";
    const text = node.data?.body || "";
    const flowCta = node.data?.action?.flow_cta || null;
    const header = node.data?.header?.type === "text" ? node.data.header.text : null;
    const questions = node.data?.questions || null;
    const rawBtns = getNodeButtons(node);
    const isFlowLike = ["flow", "questionnaire"].includes(nodeType);

    /* Pull product SKUs for catalog nodes */
    const catalogSkus = nodeType === "catalog"
        ? (catalogSectionsByNode.get(node.nodeId)?.[0]?.product_items ?? null)
        : null;

    const displayBtns = isFlowLike || nodeType === "catalog"
        ? getRootButtons()
        : rawBtns.length > 0 ? rawBtns : getRootButtons();

    /* WhatsApp keyword for this node – used to build the wa.me handoff link */
    const waKeyword = getNodeWaKeyword(node);

    return { text, buttons: displayBtns, flowCta, header, questions, nodeType, nodeId: node.nodeId, catalogSkus, waKeyword };
};

const findBestResponse = (message) => {
    const lower = message.toLowerCase().trim();
    if (buttonToNode.has(lower)) return buildResponse(buttonToNode.get(lower));
    const greetings = rootNode?.keywords || ["hi", "hello", "hai"];
    if (greetings.some((g) => lower.includes(g.toLowerCase()))) return buildResponse(rootNode);
    for (const [kw, node] of nodeByKeyword.entries()) {
        if (lower.includes(kw) || kw.includes(lower)) return buildResponse(node);
    }
    return {
        text: "I'm not sure how to help. Please select an option or type 'hi' to start over.",
        buttons: getRootButtons(), flowCta: null, header: null,
        questions: null, nodeType: "text", nodeId: null, catalogSkus: null,
        waKeyword: "hi",
    };
};

const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const isUrl = (w) => /^https?:\/\//i.test(w);
const isEmail = (w) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w);

// ─────────────────────────────────────────────────────────────────────────────
// 4. Product Card  (rendered inside catalog bot messages)
// ─────────────────────────────────────────────────────────────────────────────
const ProductCard = ({ product }) => {
    const isMobile = typeof navigator !== "undefined" &&
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const orderUrl = isMobile ? product.mobileUrl : product.url;

    return (
        <div className="flex-shrink-0 w-[160px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 snap-start">
            {/* Product image */}
            <div className="relative h-[100px] w-full overflow-hidden bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { e.target.style.display = "none"; }}
                />
                {/* Price badge */}
                <span className="absolute top-1.5 right-1.5 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow">
                    {product.price}
                </span>
            </div>

            {/* Info */}
            <div className="p-2 space-y-1">
                <p className="text-[11px] font-semibold text-gray-800 leading-tight line-clamp-2">{product.name}</p>
                <p className="text-[10px] text-gray-500 line-clamp-1">{product.description}</p>

                {/* Flavours */}
                {product.flavor?.length > 0 && (
                    <div className="flex items-center gap-1">
                        <Flame size={9} className="text-orange-400 flex-shrink-0" />
                        <span className="text-[10px] text-orange-500 truncate">{product.flavor.join(", ")}</span>
                    </div>
                )}

                {/* Nutrition mini-row */}
                <div className="flex gap-1.5 text-[9px] text-gray-400">
                    <span>P:{product.nutritionalInfo?.protein}</span>
                    <span>·</span>
                    <span>{product.nutritionalInfo?.calories}</span>
                </div>

                {/* Order button */}
                <a
                    href={orderUrl || product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 w-full mt-1 py-1 rounded-lg bg-primary text-white text-[10px] font-semibold hover:bg-blue-600 transition-colors"
                    aria-label={`Order ${product.name}`}
                >
                    <ShoppingCart size={10} />
                    Order on WhatsApp
                </a>
            </div>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. Catalog Grid  (horizontal scroll strip)
// ─────────────────────────────────────────────────────────────────────────────
const CatalogStrip = ({ skus }) => {
    const matchedProducts = skus
        .map((sku) => productBySku.get(sku))
        .filter(Boolean);

    if (!matchedProducts.length) return null;

    return (
        <div className="mt-2">
            <div className="flex items-center gap-1.5 mb-2">
                <Leaf size={12} className="text-green-500" />
                <span className="text-xs font-semibold text-gray-600">{matchedProducts.length} healthy snacks available</span>
            </div>
            <div
                className="flex gap-2.5 overflow-x-auto pb-2 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {matchedProducts.map((p) => (
                    <ProductCard key={p.sku} product={p} />
                ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                <ExternalLink size={9} />
                Scroll to see all products · Orders via WhatsApp
            </p>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. Minor UI components
// ─────────────────────────────────────────────────────────────────────────────
const TypingIndicator = () => (
    <div className="flex items-center gap-1 py-2 px-3 bg-gray-100 rounded-2xl rounded-bl-sm w-fit">
        {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-400"
                style={{ animation: "chatDot 1.2s ease-in-out infinite", animationDelay: `${i * 0.2}s` }} />
        ))}
    </div>
);

const TYPE_CFG = {
    catalog: { Icon: ShoppingBag, color: "#6366f1", bg: "#6366f115", label: "Product Catalog" },
    payment: { Icon: CreditCard, color: "#f59e0b", bg: "#f59e0b15", label: "Payment Required" },
    order_status: { Icon: PackageCheck, color: "#10b981", bg: "#10b98115", label: "Order Status" },
    flow: { Icon: ClipboardList, color: "#3b82f6", bg: "#3b82f615", label: "Fill a Form" },
    questionnaire: { Icon: HelpCircle, color: "#8b5cf6", bg: "#8b5cf615", label: "Please Answer" },
};

const TypeBadge = ({ type }) => {
    const cfg = TYPE_CFG[type];
    if (!cfg) return null;
    const { Icon, color, bg, label } = cfg;
    return (
        <div className="inline-flex items-center gap-1 mt-1.5 text-xs font-medium px-2 py-1 rounded-full"
            style={{ background: bg, color }}>
            <Icon size={11} /> {label}
        </div>
    );
};

const BTN_ICONS = {
    "order snacks": ShoppingBag,
    "get support": Headphones,
    "become retailer": Store,
    "order issue": AlertCircle,
    "payment issue": CreditCard,
    "delivery issue": Truck,
    "order placed issue": PackageCheck,
    "product issue": ShoppingBag,
    "other issue": HelpCircle,
    "payment success": CheckCircle,
    "payment failure": XCircle,
};

const SuggestionChip = ({ label, onClick, disabled }) => {
    const Icon = BTN_ICONS[label.toLowerCase()];
    return (
        <button onClick={onClick} disabled={disabled}
            className={`inline-flex items-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded-full border
                transition-all duration-200 select-none
                ${disabled
                    ? "opacity-40 cursor-not-allowed border-gray-200 text-gray-400"
                    : "border-primary/30 text-primary bg-primary/5 hover:bg-primary hover:text-white hover:border-primary hover:shadow-sm active:scale-95"}`}>
            {Icon && <Icon size={12} />}
            {label}
        </button>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. WhatsApp Handoff Button
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Renders a "Continue on WhatsApp" button that opens the WA Business account
 * with the exact keyword pre-filled, triggering the same flow in the real
 * askeva.io WhatsApp chatbot.
 */
const WhatsAppHandoff = ({ waKeyword }) => {
    if (!waKeyword) return null;
    const href = buildWaLink(waKeyword);
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-semibold
                text-emerald-600 border border-emerald-200 bg-emerald-50
                hover:bg-emerald-500 hover:text-white hover:border-emerald-500
                px-2.5 py-1 rounded-full transition-all duration-200 group"
            aria-label="Continue this conversation on WhatsApp"
        >
            <MessageCircle size={12} className="group-hover:scale-110 transition-transform" />
            Continue on WhatsApp
            <ExternalLink size={10} className="opacity-60" />
        </a>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. ChatMessage bubble
// ─────────────────────────────────────────────────────────────────────────────
const ChatMessage = React.memo(({ message, onFlowCtaClick, onQuestionnaireSubmit }) => {
    const isUser = message.sender === "user";
    const [ctaUsed, setCtaUsed] = useState(false);

    const renderText = useCallback((text) =>
        text.split(" ").map((word, i) => {
            if (isUrl(word)) return <a key={i} href={word} target="_blank" rel="noopener noreferrer" className="underline opacity-80 hover:opacity-100">{word} </a>;
            if (isEmail(word)) return <a key={i} href={`mailto:${word}`} className="underline opacity-80 hover:opacity-100">{word} </a>;
            return <span key={i}>{word} </span>;
        }), []);

    const doFlowCta = () => {
        if (ctaUsed) return;
        setCtaUsed(true);
        onFlowCtaClick?.(message.nodeId, message.flowCta);
    };
    const doPayment = (intent) => {
        if (ctaUsed) return;
        setCtaUsed(true);
        onFlowCtaClick?.(message.nodeId, intent);
    };
    const doQSubmit = () => {
        if (ctaUsed) return;
        setCtaUsed(true);
        onQuestionnaireSubmit?.(message.nodeId);
    };

    const isPayment = message.nodeType === "payment";

    return (
        <div className={`flex mb-3 ${isUser ? "justify-end" : "justify-start"} animate-chatFadeIn`}>
            {!isUser && (
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center mr-2 mt-1 shadow-sm">
                    <BotMessageSquare size={14} className="text-white" />
                </div>
            )}
            <div className={`${isUser ? "max-w-[78%]" : "max-w-[85%]"} space-y-1.5`}>
                {/* Header label */}
                {!isUser && message.header && (
                    <div className="flex items-center gap-1 text-xs font-semibold text-primary">
                        <ShoppingBag size={11} /> {message.header}
                    </div>
                )}

                {/* Text bubble */}
                {message.text && (
                    <div className={`px-3 py-2 text-sm leading-relaxed
                        ${isUser
                            ? "bg-primary text-white rounded-2xl rounded-br-sm shadow-md"
                            : "bg-gray-100 text-gray-800 rounded-2xl rounded-bl-sm shadow-sm"}`}>
                        {renderText(message.text)}
                    </div>
                )}

                {/* ── Product catalog strip ── */}
                {!isUser && message.catalogSkus?.length > 0 && (
                    <CatalogStrip skus={message.catalogSkus} />
                )}

                {/* ── Questionnaire cards + Submit ── */}
                {!isUser && message.questions?.length > 0 && (
                    <div className="space-y-1.5">
                        {message.questions.map((q, i) => (
                            <div key={i} className="bg-violet-50 border border-violet-100 rounded-xl px-3 py-2 text-xs text-violet-700">
                                <p className="font-semibold mb-0.5">{q.key}</p>
                                <p>{q.value}</p>
                            </div>
                        ))}
                        <button onClick={doQSubmit} disabled={ctaUsed}
                            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full shadow transition-all duration-200
                                ${ctaUsed ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "text-white bg-violet-500 hover:bg-violet-600 active:scale-95"}`}>
                            <ChevronRight size={13} />
                            {ctaUsed ? "Submitted ✓" : "Submit"}
                        </button>
                    </div>
                )}

                {/* ── Flow CTA (non-payment) ── */}
                {!isUser && message.flowCta && !isPayment && (
                    <button onClick={doFlowCta} disabled={ctaUsed}
                        className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full shadow transition-all duration-200
                            ${ctaUsed ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "text-white bg-indigo-500 hover:bg-indigo-600 active:scale-95"}`}
                        aria-label={message.flowCta}>
                        <ClipboardList size={13} />
                        {ctaUsed ? "Submitted ✓" : message.flowCta}
                    </button>
                )}

                {/* ── Payment node → Pay / Fail ── */}
                {!isUser && isPayment && (
                    <div className="flex gap-2">
                        <button onClick={() => doPayment("payment success")} disabled={ctaUsed}
                            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full shadow transition-all duration-200
                                ${ctaUsed ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "text-white bg-emerald-500 hover:bg-emerald-600 active:scale-95"}`}>
                            <CheckCircle size={13} /> Pay Now ✓
                        </button>
                        <button onClick={() => doPayment("payment failure")} disabled={ctaUsed}
                            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full shadow transition-all duration-200
                                ${ctaUsed ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "text-white bg-rose-500 hover:bg-rose-600 active:scale-95"}`}>
                            <XCircle size={13} /> Fail
                        </button>
                    </div>
                )}

                {/* Type badge */}
                {!isUser && ["payment", "order_status", "catalog"].includes(message.nodeType) && (
                    <TypeBadge type={message.nodeType} />
                )}

                {/* WhatsApp handoff — shown on every bot bubble (except welcome) */}
                {!isUser && message.waKeyword && (
                    <WhatsAppHandoff waKeyword={message.waKeyword} />
                )}
            </div>
        </div>
    );
});
ChatMessage.displayName = "ChatMessage";

// ─────────────────────────────────────────────────────────────────────────────
// 8. Main Chatbot
// ─────────────────────────────────────────────────────────────────────────────
const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMsgs] = useState([{ text: INITIAL_MSG, sender: "bot" }]);
    const [input, setInput] = useState("");
    const [isLoading, setLoad] = useState(false);
    const [suggestions, setSugg] = useState(getRootButtons());

    const endRef = useRef(null);
    const inputRef = useRef(null);

    const scrollDown = useCallback(debounce(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 80), []);

    useEffect(() => scrollDown(), [messages, scrollDown]);
    useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 300); }, [isOpen]);

    const pushBot = useCallback((resp) => {
        setMsgs((p) => [...p, {
            sender: "bot",
            text: resp.text,
            flowCta: resp.flowCta ?? null,
            header: resp.header ?? null,
            questions: resp.questions ?? null,
            nodeType: resp.nodeType ?? null,
            nodeId: resp.nodeId ?? null,
            catalogSkus: resp.catalogSkus ?? null,
            waKeyword: resp.waKeyword ?? null,
        }]);
        setSugg(resp.buttons || getRootButtons());
    }, []);

    const respond = async (text) => {
        setLoad(true);
        await new Promise((r) => setTimeout(r, 600));
        pushBot(findBestResponse(text));
        setLoad(false);
    };

    const handleSend = async (e) => {
        e?.preventDefault();
        const t = input.trim();
        if (!t || isLoading) return;
        setMsgs((p) => [...p, { text: t, sender: "user" }]);
        setInput("");
        await respond(t);
    };

    const handleChip = async (label) => {
        if (isLoading) return;
        setMsgs((p) => [...p, { text: label, sender: "user" }]);
        await respond(label);
    };

    const handleFlowCta = useCallback(async (nodeId, intent) => {
        if (isLoading) return;
        setMsgs((p) => [...p, { text: intent || "Submitted", sender: "user" }]);
        setLoad(true);
        await new Promise((r) => setTimeout(r, 600));
        let child = null;
        if (intent === "payment success" || intent === "payment failure") {
            child = nodeByKeyword.get(intent);
        }
        if (!child && nodeId) child = flowChildById.get(nodeId);
        pushBot(child ? buildResponse(child) : {
            text: "Thank you! Our team will get back to you shortly.",
            buttons: getRootButtons(), flowCta: null, header: null,
            questions: null, nodeType: "text", nodeId: null, catalogSkus: null,
        });
        setLoad(false);
    }, [isLoading, pushBot]);

    const handleQSubmit = useCallback(async (nodeId) => {
        if (isLoading) return;
        setMsgs((p) => [...p, { text: "Submitted", sender: "user" }]);
        setLoad(true);
        await new Promise((r) => setTimeout(r, 600));
        const next = questionnaireChildById.get(nodeId) ?? null;
        pushBot(next ? buildResponse(next) : {
            text: "Thank you! Our support team will get back to you.",
            buttons: getRootButtons(), flowCta: null, header: null,
            questions: null, nodeType: "text", nodeId: null, catalogSkus: null,
        });
        setLoad(false);
    }, [isLoading, pushBot]);

    return (
        <>
            <style>{`
                @keyframes chatDot {
                    0%,60%,100%{ transform:translateY(0); }
                    30%        { transform:translateY(-6px); }
                }
                @keyframes chatFadeIn {
                    from{ opacity:0; transform:translateY(6px); }
                    to  { opacity:1; transform:translateY(0); }
                }
                @keyframes chatSlideUp {
                    from{ opacity:0; transform:translateY(18px) scale(0.97); }
                    to  { opacity:1; transform:translateY(0) scale(1); }
                }
                @keyframes chatPulse {
                    0%  { transform:scale(1);   opacity:.7; }
                    100%{ transform:scale(1.55); opacity:0; }
                }
                .animate-chatFadeIn  { animation: chatFadeIn  0.25s ease-out forwards; }
                .animate-chatSlideUp { animation: chatSlideUp 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards; }
                .chat-scroll::-webkit-scrollbar        { width:4px; }
                .chat-scroll::-webkit-scrollbar-track  { background:transparent; }
                .chat-scroll::-webkit-scrollbar-thumb  { background:#e5e7eb; border-radius:99px; }
                .chat-scroll::-webkit-scrollbar-thumb:hover { background:#d1d5db; }
                .hide-scrollbar::-webkit-scrollbar { display:none; }
            `}</style>

            <div className="fixed bottom-24 right-6 z-50">
                {/* Toggle button */}
                <div className="relative">
                    {!isOpen && (
                        <span className="absolute inset-0 rounded-full bg-primary"
                            style={{ animation: "chatPulse 2s ease-out infinite" }} />
                    )}
                    <button
                        onClick={() => setIsOpen((v) => !v)}
                        aria-label="Open chat"
                        className={`relative bg-primary text-white p-4 rounded-full shadow-xl transition-all duration-300
                            ${isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100 hover:scale-110 hover:shadow-2xl"}`}>
                        <BotMessageSquare size={28} />
                    </button>
                </div>

                {/* Chat window */}
                {isOpen && (
                    <div className="absolute bottom-0 right-0 animate-chatSlideUp"
                        role="dialog" aria-label="Chat window" aria-modal="true">
                        <div className="w-[350px] sm:w-[370px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
                            style={{ maxHeight: "min(600px, 90vh)" }}>

                            {/* Header */}
                            <div className="bg-primary px-4 py-3 flex items-center justify-between flex-shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                        <BotMessageSquare size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-semibold text-white leading-tight">{CHATBOT_NAME}</h2>
                                        <p className="text-xs text-white/70 flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                                            Online · Cerelia Snacks
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} aria-label="Close chat"
                                    className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1.5 transition-all hover:rotate-90">
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2 chat-scroll"
                                role="log" aria-live="polite" style={{ minHeight: 0 }}>

                                {messages.map((msg, i) => (
                                    <ChatMessage
                                        key={`${msg.sender}-${i}`}
                                        message={msg}
                                        onFlowCtaClick={handleFlowCta}
                                        onQuestionnaireSubmit={handleQSubmit}
                                    />
                                ))}

                                {isLoading && (
                                    <div className="flex items-start mb-3 animate-chatFadeIn">
                                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center mr-2 mt-1">
                                            <BotMessageSquare size={14} className="text-white" />
                                        </div>
                                        <TypingIndicator />
                                    </div>
                                )}

                                {!isLoading && suggestions.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-3 mb-1">
                                        {suggestions.map((s, i) => (
                                            <SuggestionChip key={i} label={s}
                                                onClick={() => handleChip(s)} disabled={isLoading} />
                                        ))}
                                    </div>
                                )}
                                <div ref={endRef} />
                            </div>

                            {/* Input */}
                            <form onSubmit={handleSend}
                                className="px-3 py-3 border-t border-gray-100 bg-gray-50 flex-shrink-0">
                                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm
                                    focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(59,130,246,.1)] transition-all duration-200">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend(e)}
                                        placeholder="Type a message…"
                                        className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                        disabled={isLoading}
                                        aria-label="Message input"
                                    />
                                    <button type="submit" aria-label="Send message"
                                        disabled={isLoading || !input.trim()}
                                        className="bg-primary text-white p-1.5 rounded-full transition-all hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0">
                                        <Send size={15} />
                                    </button>
                                </div>
                                <p className="text-center text-[10px] text-gray-400 mt-1.5">Powered by Cerelia</p>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Chatbot;