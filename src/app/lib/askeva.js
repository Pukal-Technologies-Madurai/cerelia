/**
 * askeva.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Helper to call the Askeva WhatsApp Business API.
 *
 * Askeva API docs: https://askeva.io/docs  (check your dashboard)
 * API Key:  stored in .env.local → ASKEVA_API_KEY
 * ─────────────────────────────────────────────────────────────────────────────
 */

const ASKEVA_API_URL = process.env.ASKEVA_API_URL || "https://api.askeva.io";
const ASKEVA_API_KEY = process.env.ASKEVA_API_KEY;
const WA_PHONE_NUMBER = process.env.WA_PHONE_NUMBER || "919944488350";

if (!ASKEVA_API_KEY) {
    console.warn("[Askeva] ASKEVA_API_KEY is not set in .env.local");
}

/**
 * Make an authenticated request to the Askeva API.
 */
async function askevaFetch(path, options = {}) {
    const url = `${ASKEVA_API_URL}${path}`;
    const res = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ASKEVA_API_KEY}`,
            ...(options.headers || {}),
        },
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
        console.error("[Askeva] API error:", res.status, data);
        throw new Error(`Askeva API error ${res.status}: ${JSON.stringify(data)}`);
    }
    return data;
}

/**
 * Send a plain text WhatsApp message to a phone number via Askeva.
 *
 * @param {string} to    - recipient phone number with country code (e.g. "919944488350")
 * @param {string} text  - message body text
 */
export async function sendTextMessage(to, text) {
    return askevaFetch("/v1/messages", {
        method: "POST",
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to,
            type: "text",
            text: { body: text },
        }),
    });
}

/**
 * Send a WhatsApp interactive button message via Askeva.
 *
 * @param {string}   to      - recipient phone number
 * @param {string}   body    - message body text
 * @param {string[]} buttons - array of button titles (max 3)
 */
export async function sendButtonMessage(to, body, buttons) {
    const btnRows = buttons.slice(0, 3).map((title, i) => ({
        type: "reply",
        reply: { id: `btn_${i}`, title: title.slice(0, 20) },
    }));

    return askevaFetch("/v1/messages", {
        method: "POST",
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to,
            type: "interactive",
            interactive: {
                type: "button",
                body: { text: body },
                action: { buttons: btnRows },
            },
        }),
    });
}

/**
 * Send a WhatsApp list message via Askeva.
 *
 * @param {string} to         - recipient phone number
 * @param {string} body       - message body
 * @param {string} buttonText - button label (e.g. "Select Here")
 * @param {Array}  sections   - array of { title, rows: [{ id, title }] }
 */
export async function sendListMessage(to, body, buttonText, sections) {
    return askevaFetch("/v1/messages", {
        method: "POST",
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to,
            type: "interactive",
            interactive: {
                type: "list",
                body: { text: body },
                action: { button: buttonText, sections },
            },
        }),
    });
}

export { WA_PHONE_NUMBER };
