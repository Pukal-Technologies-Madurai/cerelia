"use client"

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });

    const [notification, setNotification] = useState({
        show: false,
        message: "",
        type: "success"
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/xvgornaq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setNotification({
                    show: true,
                    message: "Message sent successfully! We\'ll get back to you soon.",
                    type: "success"
                });
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                setTimeout(() => setNotification({ ...notification, show: false }), 10000);
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            console.error("Error:", error);
            setNotification({
                show: true,
                message: "Failed to send message. Please try again later.",
                type: "error"
            });
            setTimeout(() => setNotification({ ...notification, show: false }), 10000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "phone") {
            if (!value.startsWith("+91")) {
                setFormData(prev => ({
                    ...prev,
                    [name]: "+91 " + value.replace("+91 ", "")
                }));
            } else {
                setFormData(prev => ({ ...prev, [name]: value }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <section className="bg-linear-to-b from-white to-gray-50 py-16 sm:py-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {notification.show && (
                    <div className={`mb-6 p-4 rounded-lg transition-all duration-1000 ${notification.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                        }`}
                        role="alert"
                    >
                        <p className="text-sm font-medium">{notification.message}</p>
                    </div>
                )}

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
                        <h1 className="text-4xl sm:text-5xl font-bold bg-primary bg-clip-text text-transparent mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Have a question or need help? We're here to assist you.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-2 border-gray-500 bg-gray-50 p-2 shadow-sm 
        focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-2 border-gray-500 bg-gray-50 p-2 shadow-sm 
        focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-2 border-gray-500 bg-gray-50 p-2 shadow-sm 
        focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-2 border-gray-500 bg-gray-50 p-2 shadow-sm 
        focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-lg border-2 border-gray-500 bg-gray-50 p-2 shadow-sm 
        focus:border-cyan-500 focus:ring-cyan-500 transition-colors duration-200"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 
                                border border-transparent text-base font-medium rounded-lg text-white 
                                bg-primary hover:from-cyan-700 
                                hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                focus:ring-cyan-500 transform hover:scale-[1.02] transition-all duration-200"
                            >
                                Send Message
                                <Send className="ml-2 h-5 w-5" />
                            </button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        {/* Company Info Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
                            <h2 className="text-2xl font-bold bg-primary bg-clip-text text-transparent mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4 group">
                                    <MapPin className="shrink-0 h-6 w-6 text-cyan-600 mt-1 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Address</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Shri Foods<br />
                                            DP.NO.CS 8, SIDCO Industrial Estate,<br />
                                            near Kappalur, Madurai,<br />
                                            Tamil Nadu 625008
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <Phone className="shrink-0 h-6 w-6 text-cyan-600 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Phone</h3>
                                        <a href="tel:+919025316142"
                                            className="text-cyan-600 hover:text-cyan-700 transition-colors">
                                            +91 90253 16142
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <Mail className="shrink-0 h-6 w-6 text-cyan-600 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Email</h3>
                                        <a href="mailto:pukalfoods@gmail.com"
                                            className="text-cyan-600 hover:text-cyan-700 transition-colors">
                                            pukalfoods@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-2 h-[400px] transform hover:shadow-xl transition-all duration-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.1968784425735!2d78.0299635741444!3d9.833825675873847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d15e9b826e2b%3A0x72d8eeda445cb1f3!2sShri%20Foods!5e0!3m2!1sen!2sin!4v1728039921892!5m2!1sen!2sin"
                                className="w-full h-full rounded-xl"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Shri Foods Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}