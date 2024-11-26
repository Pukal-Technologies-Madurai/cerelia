"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { BotMessageSquare, X, Send } from "lucide-react";

const CHAT_RESPONSES = {
    default: {
        patterns: [],
        responses: [
            "I'm not sure how to respond to that. Try asking about our products, contact information, or say hi!",
            "Could you rephrase that? I can help with product or contact information.",
            "I'm listening! Feel free to ask about our products or how to contact us."
        ]
    },
    greetings: {
        patterns: ["hi", "hello", "hola", "hey", "greeting"],
        responses: [
            "Hi there! How can I help you today?",
            "Hello! Welcome to Cerelia. What can I assist you with?",
            "Hey! Great to see you. How can I help?"
        ]
    },
    help: {
        patterns: ["help", "support", "assist"],
        responses: [
            "I can help you with information about our products, contact details, or general queries.",
            "Sure, I'm here to help! What would you like to know about Cerelia?",
            "Need assistance? I can provide information about our products and contact methods."
        ]
    },
    products: {
        patterns: ["product", "millet", "snacks", "food", "pearl", "masala"],
        responses: [
            "You've found our delicious popped grain snacks! We offer Pearl Millet and Masala Snacks. Would you like to know more?",
            "Our product line includes premium Pearl Millet and flavorful Masala Snacks. Interested in learning details?",
            "Check out our delightful range of popped grain snacks! We have Pearl Millet and Masala varieties."
        ],
        productLinks: [
            "https://www.cerelia.org/product",
            "https://www.cerelia.org/productInfo/?id=1",
            "https://www.cerelia.org/productInfo/?id=2",
            "https://www.cerelia.org/productInfo/?id=3",
        ]
    },
    contact: {
        patterns: ["contact", "email", "whatsapp", "phone", "reach", "mail"],
        responses: [
            "Contact us on WhatsApp: http://wa.me/+919025316142",
            "Email us at: pukalfoods@gmail.com",
            "You can reach us via WhatsApp at +91 9025316142 or email pukalfoods@gmail.com"
        ]
    }
};

const CHAT_CONSTANTS = {
    INITIAL_MESSAGE: "Welcome to Cerelia! Thank you for visiting us.",
    DEBOUNCE_DELAY: 100,
    ANIMATION_DELAY: 300,
    HOME_RESPONSE: "Welcome back to the main menu!",
    PRODUCT_RESPONSE: "Here are our available products at Cerelia.",
    SUGGESTION_SETS: {
        default: ["hi", "help", "contact", "product", "email"],
        help: ["contact", "email", "phone", "Home"],
        products: ["millet", "pearl", "masala", "snacks", "View all", "Home"],
    },
};

const findBestResponse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    const categories = ["greetings", "help", "products", "contact"];

    for (const category of categories) {
        if (CHAT_RESPONSES[category].patterns.some(pattern => lowerCaseMessage.includes(pattern))) {
            const responses = CHAT_RESPONSES[category].responses;
            const productLinks = CHAT_RESPONSES[category].productLinks || [];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            return productLinks.length > 0 && Math.random() > 0.5
                ? `${randomResponse} Check out: ${productLinks[Math.floor(Math.random() * productLinks.length)]}`
                : randomResponse;
        }
    }

    const defaultResponses = CHAT_RESPONSES.default.responses;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const isValidUrl = (word) => /^https?:\/\//i.test(word);
const isValidEmail = (word) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(word);

const ChatMessage = React.memo(({ message }) => {
    const isUser = message.sender === "user";

    const formatMessageContent = useCallback((text) => {
        return text.split(" ").map((word, idx) => {
            if (isValidUrl(word)) {
                return (
                    <a
                        key={idx}
                        href={word}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        {word}
                    </a>
                );
            }
            if (isValidEmail(word)) {
                return (
                    <a
                        key={idx}
                        href={`mailto:${word}`}
                        className="text-blue-500 underline"
                    >
                        {word}
                    </a>
                );
            }
            return <span key={idx}>{word} </span>;
        });
    }, []);

    return (
        <div className={`mb-4 ${isUser ? "text-right" : "text-left"} animate-fadeIn`}>
            <div
                className={`inline-block p-2 rounded-lg 
                transition-all duration-300 ease-in-out
                transform hover:scale-[1.02]
                ${isUser ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}`}
            >
                {formatMessageContent(message.text)}
            </div>
        </div>
    );
});

ChatMessage.displayName = "ChatMessage";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: CHAT_CONSTANTS.INITIAL_MESSAGE, sender: "bot" }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState(CHAT_CONSTANTS.SUGGESTION_SETS.default);

    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    const updateSuggestions = useCallback((message) => {
        const normalizedMessage = message?.toLowerCase() || "";

        if (normalizedMessage === "home") {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.default);
            setMessages(prev => [...prev, { text: CHAT_CONSTANTS.HOME_RESPONSE, sender: "bot" }]);
        } else if (normalizedMessage === "View all") {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.products);
            setMessages(prev => [...prev, { text: CHAT_CONSTANTS.PRODUCT_RESPONSE, sender: "bot" }]);
        } else if (normalizedMessage.includes("products")) {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.products);
        } else if (normalizedMessage.includes("help")) {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.help);
        }
    }, []);

    const scrollToBottom = useCallback(
        debounce(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, CHAT_CONSTANTS.DEBOUNCE_DELAY),
        []
    );

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    useEffect(() => {
        const lastMessage = messages[messages.length - 1]?.text.toLowerCase();

        if (lastMessage?.includes("products")) {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.products);
        } else if (lastMessage?.includes("help")) {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.help);
        } else {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.default);
        }
    }, [messages]);

    const simulateBotResponse = useCallback((userMessage) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const botResponse = findBestResponse(userMessage);
                resolve(botResponse);
            }, 500);
        });
    }, []);

    const handleSendMessage = async (e) => {
        e?.preventDefault();

        const trimmedMessage = inputMessage.trim();
        if (!trimmedMessage) return;

        setMessages(prev => [...prev, { text: trimmedMessage, sender: "user" }]);
        setIsLoading(true);
        setInputMessage("");

        const botResponse = await simulateBotResponse(trimmedMessage);
        setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
        setIsLoading(false);

        updateSuggestions(trimmedMessage);
    };

    const handleSuggestionClick = async (suggestion) => {
        if (isLoading) return;

        // Add suggestion as user message
        setMessages(prev => [...prev, { text: suggestion, sender: "user" }]);
        setIsLoading(true);

        // Simulate bot response
        const botResponse = await simulateBotResponse(suggestion);

        // Add bot response
        setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
        setIsLoading(false);

        updateSuggestions(suggestion);
    };

    return (
        <div className="fixed bottom-24 right-6 z-50">
            <button
                onClick={() => setIsOpen(true)}
                className={`bg-primary text-white p-4 rounded-full hover:bg-blue-600 shadow-lg
                transition-all duration-300 ease-in-out
                ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}
                hover:scale-110`}
                aria-label="Open chat"
            >
                <BotMessageSquare size={32} />
            </button>

            {isOpen && (
                <div
                    className={`absolute bottom-0 right-0
                    transition-all duration-300 ease-in-out
                    scale-100 opacity-100 translate-y-0`}
                    role="dialog"
                    aria-label="Chat window"
                >
                    <div className="w-80 bg-white rounded-lg shadow-lg">
                        <div onClick={() => setIsOpen(false)} className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Chat Support</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gray-200 transition-transform duration-300 hover:rotate-90"
                                aria-label="Close chat"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div
                            ref={chatContainerRef}
                            className="h-96 overflow-y-auto p-4 scroll-smooth"
                            role="log"
                            aria-live="polite"
                        >
                            {messages.map((message, index) => (
                                <ChatMessage key={`${message.sender}-${index}`} message={message} />
                            ))}

                            {isLoading && (
                                <div className="text-left mb-4">
                                    <div className="inline-block p-2 rounded-lg bg-gray-200">
                                        Typing...
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-2">
                                {suggestions.map((suggestion, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-3 rounded-lg shadow-sm"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSendMessage} className="p-4 border-t">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage(e)}
                                    placeholder="Type your message..."
                                    className="flex-1 p-2 border rounded-lg 
                                    focus:outline-none focus:border-blue-500
                                    transition-all duration-300 ease-in-out"
                                    disabled={isLoading}
                                    aria-label="Message input"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !inputMessage.trim()}
                                    className="bg-primary text-white p-2 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 disabled:opacity-50"
                                    aria-label="Send message"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;