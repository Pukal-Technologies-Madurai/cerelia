import { NextResponse } from "next/server";

const RESPONSES = {
  hi: "Hi there! How can I help you?",
  "how are you": "I'm doing well, thanks for asking!",
  bye: "Goodbye! Have a great day!",
  help: "I can help you with basic questions. Try asking about our products, contact information, or say hi!",
  contact:
    "Have questions? Feel free to reach out to us on WhatsApp: http://wa.me/+919025316142",
  mail: "You can visit our contact page at https://www.cerelia.org/contact for more details or to get in touch directly.",
  product:
    "Thanks for your interest! You can check out our product page here: https://www.cerelia.org/product",
};

// Response patterns for better matching
const RESPONSE_PATTERNS = {
  contact: /\b(contact|number|whatsapp)\b/i,
  email: /\b(mail|email)\b/i,
  product: /\b(pearl|millet|masala|product)\b/i,
};

// Product utility functions
const getProductResponse = (productId) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.cerelia.org";
  return `You've found a delicious popped grain snack! Check it out here: ${baseUrl}/productInfo/?id=${productId}`;
};

const determineProductId = (message) => {
  if (message.includes("pearl") || message.includes("millet")) return 2;
  if (message.includes("masala")) return 3;
  return 1;
};

// Main POST handler
export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json(
        { response: "Message is required." },
        { status: 400 }
      );
    }

    const normalizedMessage = message.toLowerCase().trim();
    let response;

    switch (true) {
      case RESPONSE_PATTERNS.contact.test(normalizedMessage):
        response = RESPONSES.contact;
        break;
      case RESPONSE_PATTERNS.email.test(normalizedMessage):
        response = RESPONSES.mail;
        break;
      case RESPONSE_PATTERNS.product.test(normalizedMessage):
        const productId = determineProductId(normalizedMessage);
        response = getProductResponse(productId);
        break;
      default:
        response =
          RESPONSES[normalizedMessage] ||
          "I'm not sure how to respond to that. Try asking about our products, contact information, or say hi!";
    }

    // Add artificial delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { response: "Sorry, I encountered an error. Please try again." },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export function GET() {
  return new Response(
    JSON.stringify({ message: "Hello from a static export!" }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
