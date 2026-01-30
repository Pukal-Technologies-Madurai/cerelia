import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata = {
    title: 'Privacy Policy | Cerelia',
    description: 'Privacy Policy for Cerelia - Festival of Grains, marketed by Pukal Foods',
};

const PrivacyPolicy = () => {
    return (
        <>
            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="bg-white text-gray-900 py-16 sm:py-20 lg:py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Privacy Policy
                        </h1>
                        <div className="text-xl sm:text-2xl font-light mb-6">
                            Cerelia – Marketed by Pukal Foods
                        </div>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            Your trust is important to us. Learn how we protect and use your information.
                        </p>
                    </div>
                </div>

                {/* Quick Info Cards */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">We Keep It Safe</h3>
                            <p className="text-gray-600">Your data is protected with industry-standard security measures</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Selling Data</h3>
                            <p className="text-gray-600">We never sell your personal information to third parties</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">You Have Control</h3>
                            <p className="text-gray-600">Access, update, or delete your information anytime</p>
                        </div>
                    </div>
                </div>

                {/* Agreement Notice */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 text-center">
                        <div className="text-2xl mb-4">🤝</div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Agreement Notice</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            By using our website, you agree to the practices described below.
                        </p>
                        <p className="text-gray-600 italic">
                            At Cerelia, your trust is as important to us. This Privacy Policy explains how Pukal Foods, the
                            marketers of Cerelia, collect, use, and protect your personal information.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

                    {/* Section 1 - Information We Collect */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-primary px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white">
                                The Information We Collect
                            </h2>
                            <p className="text-white/90 mt-2">We collect only what's needed to serve you better</p>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Information You Share</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {["Name and contact details", "Shipping and billing address", "Payment info (via secure partners like RazorPay)"].map((item, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Automatically Collected</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {["Device and browser details", "IP address", "Pages viewed and interactions", "Cookies and similar technologies"].map((item, index) => (
                                            <div key={index} className="flex items-start">
                                                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 - How We Use Information */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-gray-600 px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white">
                                How We Use Your Information
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <p className="text-gray-700 mb-6">Your information allows us to:</p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { icon: "📦", title: "Process Orders", desc: "Handle and deliver your Cerelia purchases" },
                                    { icon: "💬", title: "Communicate", desc: "Send updates and respond to your questions" },
                                    { icon: "🔧", title: "Improve Services", desc: "Enhance our products and website experience" },
                                    { icon: "🎉", title: "Share Offers", desc: "Notify about new launches (with your permission)" },
                                    { icon: "🛡️", title: "Maintain Security", desc: "Protect against fraud and unauthorized access" },
                                    { icon: "📊", title: "Analytics", desc: "Understand how our website performs" }
                                ].map((item, index) => (
                                    <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                        <div className="text-3xl mb-3">{item.icon}</div>
                                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 3 - Data Sharing */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-primary px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white">
                                Data Sharing Policy
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="bg-gray-50 border-l-4 border-primary p-6 mb-6 rounded-r-lg">
                                <div className="flex items-center">
                                    <div className="text-2xl mr-3">🚫</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">We Never Sell Your Data</h3>
                                        <p className="text-gray-700">Your personal information is never sold to third parties, period.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6">We only share data with trusted partners who help us serve you:</p>
                            <div className="flex flex-wrap gap-3">
                                {["Payment Processors", "Delivery Partners", "Website Analytics", "Customer Support Tools"].map((partner, index) => (
                                    <span key={index} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                                        ✓ {partner}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 4 - GDPR Rights */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-gray-600 px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white">
                                Your Rights (GDPR)
                            </h2>
                            <p className="text-white/90 mt-2">For users in the European Economic Area</p>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { title: "Access Data", desc: "View what information we have about you" },
                                    { title: "Correct Info", desc: "Update inaccurate information" },
                                    { title: "Delete Data", desc: "Request removal of your personal data" },
                                    { title: "Restrict Processing", desc: "Limit how we use your information" },
                                    { title: "Data Portability", desc: "Get your data in a readable format" },
                                    { title: "Withdraw Consent", desc: "Opt out of marketing communications" }
                                ].map((right, index) => (
                                    <div key={index} className="border-l-4 border-gray-400 pl-4 py-2">
                                        <h3 className="font-semibold text-gray-900">{right.title}</h3>
                                        <p className="text-sm text-gray-600">{right.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Additional Important Information */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🍪 Cookies</h3>
                            <p className="text-sm text-gray-700">We use cookies to improve your experience. You can manage them in your browser settings.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">👶 Children's Privacy</h3>
                            <p className="text-sm text-gray-700">Our services are not intended for children under 13. We don't knowingly collect their information.</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔄 Policy Updates</h3>
                            <p className="text-sm text-gray-700">We may update this policy occasionally. Changes will be posted here with notifications.</p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-primary text-white rounded-xl shadow-lg p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
                        <p className="text-white/90 mb-8 text-lg">We're here to help and happy to answer any questions</p>

                        <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                            <div className="text-2xl font-bold mb-2">Cerelia – Snack-time, Redefined</div>
                            <div className="text-lg opacity-90 mb-6">Marketed by Pukal Foods</div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <a href="mailto:marketing@pukal.org"
                                    className="flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    marketing@pukal.org
                                </a>
                                <a href="tel:+919944488350"
                                    className="flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +91-9944488350
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </main >
        </>
    );
};

export default PrivacyPolicy;