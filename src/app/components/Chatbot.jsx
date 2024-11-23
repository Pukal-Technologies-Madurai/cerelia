"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { BotMessageSquare, X, Send } from "lucide-react";

const CHAT_CONSTANTS = {
    INITIAL_MESSAGE: "Welcome to Cerelia! Thank you for visiting us.",
    DEBOUNCE_DELAY: 100,
    ANIMATION_DELAY: 300,
    SUGGESTION_SETS: {
        default: ["Hi", "Help", "Contact", "Products", "Email"],
        help: ["Contact", "Email", "Products", "Home"],
        products: ["Pearl Millet", "Masala Snacks", "View All Products", "Home"],
    },
    PRODUCT_RESPONSE: "You've found a delicious popped grain snack! Check it out here: https://www.cerelia.org/product",
    HOME_RESPONSE: "Welcome back to the main menu! How can I help you today?",
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
}, (prevProps, nextProps) => prevProps.message.text === nextProps.message.text);

ChatMessage.displayName = "ChatMessage";

const useChatState = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [messages, setMessages] = useState([
        { text: CHAT_CONSTANTS.INITIAL_MESSAGE, sender: "bot" }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [suggestions, setSuggestions] = useState(CHAT_CONSTANTS.SUGGESTION_SETS.default);

    const updateSuggestions = useCallback((message) => {
        const normalizedMessage = message?.toLowerCase() || "";

        if (normalizedMessage === "home") {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.default);
            setMessages(prev => [...prev, { text: CHAT_CONSTANTS.HOME_RESPONSE, sender: "bot" }]);
        } else if (normalizedMessage === "View All Products") {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.products);
            setMessages(prev => [...prev, { text: CHAT_CONSTANTS.PRODUCT_RESPONSE, sender: "bot" }]);
        } else if (normalizedMessage.includes("products")) {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.products);
            setMessages(prev => {
                const hasProductResponse = prev.some(msg => msg.text === CHAT_CONSTANTS.PRODUCT_RESPONSE);
                if (!hasProductResponse) {
                    return [...prev, { text: CHAT_CONSTANTS.PRODUCT_RESPONSE, sender: "bot" }];
                }
                return prev;
            });
        } else if (normalizedMessage.includes("help")) {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.help);
        }
    }, []);

    return {
        isOpen,
        setIsOpen,
        isVisible,
        setIsVisible,
        messages,
        setMessages,
        inputMessage,
        setInputMessage,
        isLoading,
        setIsLoading,
        suggestions,
        setSuggestions,
        updateSuggestions,
    };
};

const Chatbot = () => {
    const {
        isOpen,
        setIsOpen,
        isVisible,
        setIsVisible,
        messages,
        setMessages,
        inputMessage,
        setInputMessage,
        isLoading,
        setIsLoading,
        suggestions,
        setSuggestions,
        updateSuggestions,
    } = useChatState();

    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

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
        let timer;
        if (isOpen) {
            setIsVisible(true);
        } else {
            timer = setTimeout(() => setIsVisible(false), CHAT_CONSTANTS.ANIMATION_DELAY);
        }
        return () => clearTimeout(timer);
    }, [isOpen, setIsVisible]);

    const sendMessageToBot = useCallback(async (messageText) => {
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: messageText.trim() }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error("Error details:", error);
            return `I apologize, but I'm having trouble connecting. Please try again later.`;
        }
    }, []);

    const handleSendMessage = async (e) => {
        e?.preventDefault();

        const trimmedMessage = inputMessage.trim();
        if (!trimmedMessage) return;

        setMessages(prev => [...prev, { text: trimmedMessage, sender: "user" }]);
        setIsLoading(true);
        setInputMessage("");

        const botResponse = await sendMessageToBot(trimmedMessage);
        setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
        setIsLoading(false);

        updateSuggestions(trimmedMessage);
    };

    const handleSuggestionClick = async (suggestion) => {
        if (isLoading) return;

        setMessages(prev => [...prev, { text: suggestion, sender: "user" }]);

        if (suggestion.toLowerCase() === "home") {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.default);
            setMessages(prev => [...prev, { text: CHAT_CONSTANTS.HOME_RESPONSE, sender: "bot" }]);
            return;
        }

        if (suggestion.toLowerCase() === "View All Products") {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.products);
            setMessages(prev => [...prev, { text: CHAT_CONSTANTS.PRODUCT_RESPONSE, sender: "bot" }]);
            return;
        }

        if (suggestion.toLowerCase() === "products") {
            setSuggestions(CHAT_CONSTANTS.SUGGESTION_SETS.products);
            setMessages(prev => [...prev, { text: CHAT_CONSTANTS.PRODUCT_RESPONSE, sender: "bot" }]);
            return;
        }

        setIsLoading(true);
        const botResponse = await sendMessageToBot(suggestion);
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

            {(isVisible || isOpen) && (
                <div
                    className={`absolute bottom-0 right-0
                    transition-all duration-300 ease-in-out
                    ${isOpen
                            ? "scale-100 opacity-100 translate-y-0"
                            : "scale-95 opacity-0 translate-y-12"
                        }`}
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