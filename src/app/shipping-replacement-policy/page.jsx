import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata = {
    title: 'Shipping, Cancellation & Replacement Policy | Cerelia',
    description: 'Shipping, Cancellation and Replacement Policy for Cerelia - Festival of Grains, marketed by Pukal Foods',
};

const ShippingReplacementPolicy = () => {
    return (
        <>
            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="bg-white text-gray-900 py-16 sm:py-20 lg:py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Shipping, Cancellation & Replacement Policy
                        </h1>
                        <div className="text-xl sm:text-2xl font-light mb-6">
                            Cerelia – Marketed by Pukal Foods Pvt. Ltd.
                        </div>
                        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            We aim to deliver your snacks fresh and on time. Here's everything you need to know about our delivery process.
                        </p>
                    </div>
                </div>

                {/* Quick Info Cards */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Delivery</h3>
                            <p className="text-gray-600">On orders ₹200 and above</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">24 Hour Window</h3>
                            <p className="text-gray-600">Report issues within 24 hours for replacement</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Partners</h3>
                            <p className="text-gray-600">Rapido, Blinkit, Amazon & more</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

                    {/* Section 1 - Shipping & Delivery */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-primary px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Shipping & Delivery
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                                            🤝
                                        </div>
                                        Delivery Partners
                                    </h3>
                                    <p className="text-gray-700 mb-4">Cerelia fulfills orders through trusted third-party delivery partners such as:</p>
                                    <div className="flex flex-wrap gap-3">
                                        {["Rapido", "Blinkit", "Amazon", "Other logistics providers"].map((partner, index) => (
                                            <span key={index} className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                                                ✓ {partner}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gray-50 rounded-lg p-5">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                            <span className="text-2xl mr-2">📍</span>
                                            Delivery Coverage
                                        </h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 text-sm">•</span>
                                                Home delivery in select serviceable locations
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-green-500 mr-2 text-sm">•</span>
                                                Availability varies by location and partner operations
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                            <span className="text-2xl mr-2">⏰</span>
                                            Delivery Timelines
                                        </h3>
                                        <p className="text-gray-700 text-sm">
                                            <strong>Important:</strong> All delivery timelines are estimates. Delays caused by third-party partners, weather, or operational constraints are beyond our direct control.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 - Delivery Charges */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-gray-600 px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Delivery Charges
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <div className="text-center">
                                        <div className="text-3xl mb-3">🎉</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">FREE Delivery</h3>
                                        <p className="text-gray-700">On orders with total product value of</p>
                                        <div className="text-2xl font-bold text-gray-800 mt-2">₹200 & above</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700">Orders below ₹200 may attract a delivery fee, clearly displayed at checkout</span>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-700">Delivery charges, once applied, are <strong>non-refundable</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 - Order Processing */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-primary px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Order Processing
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        💳
                                    </div>
                                    <span className="text-gray-700">Orders are processed after successful payment confirmation</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        📧
                                    </div>
                                    <span className="text-gray-700">Order updates shared via email, SMS, or delivery partner notifications</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        ⚖️
                                    </div>
                                    <span className="text-gray-700">Cerelia / Pukal Foods Pvt. Ltd. reserves the right to modify or cancel orders in case of operational or stock-related issues</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 - Cancellation Policy */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-gray-600 px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Cancellation Policy
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6 rounded-r-lg">
                                <div className="flex items-center mb-2">
                                    <div className="text-2xl mr-3">⚠️</div>
                                    <h3 className="text-lg font-semibold text-red-800">Important Notice</h3>
                                </div>
                                <p className="text-red-700">Once an order has been prepared, packed, or handed over to a delivery partner, cancellation may not be possible.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        📧
                                    </div>
                                    <div>
                                        <p className="text-gray-700">Cancellation requests must be sent via email to:</p>
                                        <a href="mailto:sales@pukal.org" className="text-blue-600 hover:text-blue-800 font-semibold">sales@pukal.org</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        🔍
                                    </div>
                                    <span className="text-gray-700">Cancellation requests are reviewed on a case-by-case basis</span>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        ⚖️
                                    </div>
                                    <span className="text-gray-700">Approval or rejection is solely at the discretion of Pukal Foods Pvt. Ltd., based on validity of reason and order status</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5 - Replacement Policy */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-primary px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Replacement Policy
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                                <div className="flex items-center">
                                    <div className="text-2xl mr-3">ℹ️</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-blue-800">Refund Policy</h3>
                                        <p className="text-blue-700">Due to the consumable nature of our products, refunds are not applicable.</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Replacements may be offered for:</h3>
                            <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-4 border border-gray-200 rounded-lg">
                                    <div className="text-2xl mb-2">📦</div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Damaged Packaging</h4>
                                    <p className="text-sm text-gray-600">Leaked or broken packaging</p>
                                </div>
                                <div className="text-center p-4 border border-gray-200 rounded-lg">
                                    <div className="text-2xl mb-2">❌</div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Wrong Product</h4>
                                    <p className="text-sm text-gray-600">Incorrect item delivered</p>
                                </div>
                                <div className="text-center p-4 border border-gray-200 rounded-lg">
                                    <div className="text-2xl mb-2">📅</div>
                                    <h4 className="font-semibold text-gray-800 mb-1">Expired Product</h4>
                                    <p className="text-sm text-gray-600">Past expiry date at delivery</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 6 - Reporting Issues */}
                    <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden">
                        <div className="bg-gray-600 px-6 sm:px-8 py-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                Reporting an Issue
                            </h2>
                        </div>
                        <div className="p-6 sm:p-8">
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                                <div className="flex items-center mb-2">
                                    <div className="text-2xl mr-3">⏰</div>
                                    <h3 className="text-lg font-semibold text-orange-800">24-Hour Window</h3>
                                </div>
                                <p className="text-orange-700">Replacement requests must be raised within 24 hours of delivery. Requests beyond this timeframe may not be eligible.</p>
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your request should include:</h3>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        🔢
                                    </div>
                                    <span className="text-gray-700 font-medium">Order ID</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        📸
                                    </div>
                                    <span className="text-gray-700 font-medium">Clear photos of the product and outer packaging</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                        📝
                                    </div>
                                    <span className="text-gray-700 font-medium">Brief description of the issue</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sections 7-9 - Compact Layout */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                <span className="font-bold text-gray-600">7</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Replacement Process</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p>• Request reviewed and approved</p>
                                <p>• Replacement arranged at no cost</p>
                                <p>• Timeline depends on availability</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                <span className="font-bold text-gray-600">8</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Platforms</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p>• Blinkit, Amazon, Rapido orders</p>
                                <p>• Their policies apply</p>
                                <p>• Platform handles resolutions</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <div className="bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                                <span className="font-bold text-gray-600">9</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Policy Updates</h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <p>• Updated from time to time</p>
                                <p>• Changes posted on this page</p>
                                <p>• Reflects operational changes</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-primary rounded-xl shadow-lg text-white p-8 text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Help with Your Order?</h2>
                        <p className="text-white/90 mb-8 text-lg">Contact us for cancellation requests or shipping support</p>

                        <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
                            <div className="text-2xl font-bold mb-2">Cerelia – Snack-time, Redefined</div>
                            <div className="text-lg opacity-90 mb-6">Marketed by Pukal Foods Pvt. Ltd.</div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <a href="https://cerelia.org"
                                    className="flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    cerelia.org
                                </a>
                                <a href="mailto:sales@pukal.org"
                                    className="flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg p-4 transition-colors">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    sales@pukal.org
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};

export default ShippingReplacementPolicy;