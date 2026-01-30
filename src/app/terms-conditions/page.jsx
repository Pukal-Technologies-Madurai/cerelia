import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata = {
    title: 'Terms & Conditions | Cerelia',
    description: 'Terms and Conditions for Cerelia - Festival of Grains, marketed by Pukal Foods',
};

const TermsConditions = () => {
    return (
        <>
            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="bg-white text-gray-900 py-16 sm:py-20 lg:py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Terms & Conditions
                        </h1>
                        <div className="text-xl sm:text-2xl font-light mb-6">
                            Cerelia – Marketed by Pukal Foods Pvt. Ltd.
                        </div>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            Welcome to cerelia.org. These terms govern your access to and use of our website and services.
                        </p>
                    </div>
                </div>

                {/* Quick Info Cards */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Legal</h3>
                            <p className="text-gray-600">Governed by Indian laws with secure practices</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Protected Content</h3>
                            <p className="text-gray-600">All intellectual property is protected</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Always Here</h3>
                            <p className="text-gray-600">Contact us for any questions or concerns</p>
                        </div>
                    </div>
                </div>

                {/* Introduction */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 text-center">
                        <div className="text-2xl mb-4">📋</div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Agreement Notice</h2>
                        <p className="text-gray-700 leading-relaxed">
                            By browsing, shopping, or using this website, you agree to comply with and be bound by the terms outlined below.
                        </p>
                        <div className="bg-white border border-gray-300 rounded-lg p-4 mt-4">
                            <p className="text-gray-800 font-medium">
                                If you do not agree with any part of these Terms, we kindly ask that you do not use our website.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

                    {/* Section 1 - About Us */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-primary px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                About Us
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        🏢
                                    </div>
                                    <span className="text-gray-700">Cerelia is a snack brand marketed by <strong>Pukal Foods Pvt Ltd.</strong></span>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        🌐
                                    </div>
                                    <span className="text-gray-700">The website <strong>cerelia.org</strong> is operated for showcasing, marketing, and selling Cerelia products.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 - Website Use */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-gray-600 px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Use of the Website
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <p className="text-gray-700 mb-6">By using this website, you agree that you will:</p>
                            <div className="grid sm:grid-cols-1 gap-4 mb-6">
                                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                                    <div className="text-gray-600 mr-3 text-lg">✓</div>
                                    <span className="text-gray-700">Use the site only for <strong>lawful purposes</strong></span>
                                </div>
                                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                                    <div className="text-gray-600 mr-3 text-lg">✗</div>
                                    <span className="text-gray-700">Not misuse, disrupt, or attempt to gain <strong>unauthorized access</strong> to the website</span>
                                </div>
                                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                                    <div className="text-gray-600 mr-3 text-lg">⚠️</div>
                                    <span className="text-gray-700">Not copy, reproduce, or exploit website content <strong>without written permission</strong></span>
                                </div>
                            </div>
                            <div className="bg-gray-50 border-l-4 border-primary p-4 rounded-r-lg">
                                <p className="text-gray-800 font-medium">
                                    We reserve the right to restrict or terminate access if these terms are violated.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 - Product Information */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-primary px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Product Information
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <p className="text-gray-700 mb-6">We make every effort to display product descriptions, images, pricing, and availability as accurately as possible. However:</p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                        📷
                                    </div>
                                    <span className="text-gray-700">Product images are for <strong>illustrative purposes only</strong></span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                        📦
                                    </div>
                                    <span className="text-gray-700">Actual packaging, colors, or details <strong>may vary slightly</strong></span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                        💰
                                    </div>
                                    <span className="text-gray-700">Prices and availability are <strong>subject to change without notice</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 - Orders & Payments */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-gray-600 px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Orders & Payments
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        📋
                                    </div>
                                    <span className="text-gray-700">All orders placed on cerelia.org are <strong>subject to acceptance and availability</strong></span>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        🔒
                                    </div>
                                    <span className="text-gray-700">Payments are processed <strong>securely through trusted third-party payment gateways</strong></span>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        ⚖️
                                    </div>
                                    <span className="text-gray-700">We reserve the right to <strong>cancel or refuse any order at our discretion</strong></span>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        💸
                                    </div>
                                    <span className="text-gray-700">In case of order cancellation after payment, applicable refunds will be processed as per our <strong>Refund Policy</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sections 5-8 - Compact Layout */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping & Delivery</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p>• Delivery timelines are estimates</p>
                                <p>• May vary based on location and logistics</p>
                                <p>• Not responsible for third-party delays</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Returns & Refunds</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p>• Governed by our Return Policy</p>
                                <p>• Available on website</p>
                                <p>• Review carefully before ordering</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Intellectual Property</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p>• All content is protected</p>
                                <p>• Property of Cerelia/Pukal Foods</p>
                                <p>• Written permission required for use</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Links</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p>• May contain external links</p>
                                <p>• We don't control their content</p>
                                <p>• Not responsible for their practices</p>
                            </div>
                        </div>
                    </div>

                    {/* Legal Sections 9-12 */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-primary px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Legal Provisions
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                        Limitation of Liability
                                    </h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-800 text-sm font-medium mb-2">To the fullest extent permitted by law:</p>
                                        <ul className="text-gray-700 text-sm space-y-1">
                                            <li>• Not liable for indirect damages</li>
                                            <li>• Use website at your own risk</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                        Indemnification
                                    </h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-800 text-sm">You agree to hold harmless Cerelia and Pukal Foods from claims arising from misuse or violation of terms.</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                        Governing Law
                                    </h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-800 text-sm">These Terms shall be governed by and interpreted in accordance with the <strong>laws of India</strong>.</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                        Changes to Terms
                                    </h3>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-800 text-sm">We may update these Terms from time to time. Changes will be effective immediately upon posting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-primary text-white rounded-xl shadow-lg p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
                        <p className="text-white/90 mb-8 text-lg">Contact us for questions about these Terms & Conditions or our services</p>

                        <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                            <div className="text-2xl font-bold mb-2">Cerelia – Snack-time, Redefined</div>
                            <div className="text-lg opacity-90 mb-6">Marketed by Pukal Foods Pvt. Ltd.</div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <a href="https://cerelia.org"
                                    className="flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    cerelia.org
                                </a>
                                <a href="mailto:marketing@pukal.org"
                                    className="flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    marketing@pukal.org
                                </a>
                                <a href="tel:+919944488350"
                                    className="flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors sm:col-span-2 lg:col-span-1">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    +91-9944488350
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};

export default TermsConditions;