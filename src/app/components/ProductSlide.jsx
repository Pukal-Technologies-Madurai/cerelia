"use client"

import React from "react";
import { products } from "@/data/products";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export const ProductSlide = () => {
    const handleBuyNow = (product) => {
        if (product?.url) {
            window.open(product.url, "_blank");
        } else {
            console.error("No URL available for the product.");
        }
    };

    // Display first 8 products or fewer if not available
    const displayProducts = products.slice(0, 8);

    return (
        <div>
            {/* Products Section */}
            <div className="bg-[#F5EFE6] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            OUR MOST LOVED SNACKS
                        </h2>
                        <p className="text-lg text-gray-600">
                            Tried, Tasted, and Trusted By Thousand Of Healthy Snackers
                        </p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayProducts.map((product) => (
                            <div 
                                key={product.id} 
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                            >
                                {/* Product Image */}
                                <div className="aspect-square p-6 flex items-center justify-center bg-gray-50">
                                    <img
                                        src={"/images/product-1.png"}
                                        alt={product.name}
                                        className="w-full h-full object-contain max-h-48"
                                    />
                                </div>

                                {/* Product Content */}
                                <div className="p-4 flex flex-col grow">
                                    <div className="flex items-start justify-between mb-4 min-h-[4em]">
                                        <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-2">
                                            {product.name}
                                        </h3>
                                        <span className="text-xl font-bold text-primary whitespace-nowrap">
                                            {product.price}
                                        </span>
                                    </div>

                                    {/* Buy Now Button - pushed to bottom */}
                                    <div className="mt-auto mx-7">
                                        <button
                                            onClick={() => handleBuyNow(product)}
                                            className="w-full bg-[#EFAA2B] hover:bg-[#d99a1f] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200"
                                        >
                                            Buy now <ShoppingCart className="w-4 h-4 inline-block ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{fontFamily: 'cursive'}}>
                            How It Works!
                        </h2>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#E3A041] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <img
                                    src="/images/shop-one.png"
                                    alt="Snack Combo Packs"
                                    className="w-10 h-10 rounded-lg object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Confirmed</h3>
                            <p className="text-gray-600">Choose your snacks and confirm your order</p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#98C952] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <img
                                    src="/images/supplier.png"
                                    alt="Snack Combo Packs"
                                    className="w-10 h-10 rounded-lg object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Order Dispatched</h3>
                            <p className="text-gray-600">We prepare and dispatch your snacks fast</p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#52A5C9] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <img
                                    src="/images/truck.png"
                                    alt="Snack Combo Packs"
                                    className="w-10 h-10 rounded-lg object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
                            <p className="text-gray-600">Fresh snacks delivered in 24-48 hours</p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#C97652] rounded-lg flex items-center justify-center mx-auto mb-4">
                                <img
                                    src="/images/meals.png"
                                    alt="Snack Combo Packs"
                                    className="w-10 h-10 rounded-lg object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Snack & Enjoy</h3>
                            <p className="text-gray-600">Sit back and enjoy every bite</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Snack Combo Packs Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#7A5C3E]/34  rounded-2xl overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Left Content */}
                            <div className="p-8 lg:p-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Snack Combo Packs!
                                </h2>
                                <h3 className="text-2xl font-script text-gray-700 mb-6" style={{fontFamily: 'cursive'}}>
                                    Value Snack Combos
                                </h3>
                                <p className="text-lg text-gray-600 mb-8">
                                    A perfect mix of our best-selling snacks in one pack. 
                                    More variety, more flavor, and better value for every craving
                                </p>
                                <button className="bg-[#EFAA2B] hover:bg-[#d99a1f] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200">
                                    <ShoppingCart className="w-5 h-5 inline-block mr-2" />
                                    Grab Here &gt;&gt;
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className="p-4 lg:p-8 flex items-center justify-center">
                                <img
                                    src="/images/banner-img.png"
                                    alt="Snack Combo Packs"
                                    className="w-full h-auto max-w-none scale-105 lg:scale-110 rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-[#F5EFE6] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{fontFamily: 'cursive'}}>
                            LOVED BY SNACKERS
                        </h2>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="relative">
                        {/* Navigation Arrow Left */}
                        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-[#2F6B4F] hover:bg-[#276443] text-white p-3 rounded-full shadow-lg z-10 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Testimonials */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8">
                            {/* Testimonial 1 */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-[#2F6B4F]/42 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                        </svg>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m9.049 2.927 1.88 3.812a.79.79 0 0 0 .594.433l4.203.61c.39.057.546.537.264.812l-3.042 2.966a.79.79 0 0 0-.227.699l.719 4.186c.067.39-.341.688-.688.512L10 15.347l-3.76 1.964c-.347.176-.755-.122-.688-.512l.719-4.186a.79.79 0 0 0-.227-.699L2.002 8.948c-.282-.275-.126-.755.264-.812l4.203-.61a.79.79 0 0 0 .594-.433L9.049 2.927z"/>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700 font-medium mb-6 text-sm leading-relaxed">
                                    FRESH, CRUNCHY, AND ABSOLUTELY DELICIOUS! YOU CAN REALLY TASTE THE NATURAL INGREDIENTS
                                </p>
                                <div className="flex items-center">
                                    <img 
                                        src="/images/avatar.png" 
                                        alt="PRIYA" 
                                        className="w-10 h-10 rounded-full mr-3"
                                        onError={(e) => {
                                            e.target.src = 'https://ui-avatars.com/api/?name=PRIYA&background=10B981&color=fff';
                                        }}
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-900">PRIYA</p>
                                        <p className="text-sm text-gray-500">Dec 12/2025</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-[#2F6B4F]/42 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                        </svg>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m9.049 2.927 1.88 3.812a.79.79 0 0 0 .594.433l4.203.61c.39.057.546.537.264.812l-3.042 2.966a.79.79 0 0 0-.227.699l.719 4.186c.067.39-.341.688-.688.512L10 15.347l-3.76 1.964c-.347.176-.755-.122-.688-.512l.719-4.186a.79.79 0 0 0-.227-.699L2.002 8.948c-.282-.275-.126-.755.264-.812l4.203-.61a.79.79 0 0 0 .594-.433L9.049 2.927z"/>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700 font-medium mb-6 text-sm leading-relaxed">
                                    FRESH, CRUNCHY, AND ABSOLUTELY DELICIOUS! YOU CAN REALLY TASTE THE NATURAL INGREDIENTS
                                </p>
                                <div className="flex items-center">
                                    <img 
                                        src="/images/avatar-1.png" 
                                        alt="AJITH" 
                                        className="w-10 h-10 rounded-full mr-3"
                                        onError={(e) => {
                                            e.target.src = 'https://ui-avatars.com/api/?name=AJITH&background=3B82F6&color=fff';
                                        }}
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-900">AJITH</p>
                                        <p className="text-sm text-gray-500">Nov 9/2025</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-[#2F6B4F]/42 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                        </svg>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m9.049 2.927 1.88 3.812a.79.79 0 0 0 .594.433l4.203.61c.39.057.546.537.264.812l-3.042 2.966a.79.79 0 0 0-.227.699l.719 4.186c.067.39-.341.688-.688.512L10 15.347l-3.76 1.964c-.347.176-.755-.122-.688-.512l.719-4.186a.79.79 0 0 0-.227-.699L2.002 8.948c-.282-.275-.126-.755.264-.812l4.203-.61a.79.79 0 0 0 .594-.433L9.049 2.927z"/>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700 font-medium mb-6 text-sm leading-relaxed">
                                    FRESH, CRUNCHY, AND ABSOLUTELY DELICIOUS! YOU CAN REALLY TASTE THE NATURAL INGREDIENTS
                                </p>
                                <div className="flex items-center">
                                    <img 
                                        src="/images/avatar-2.png" 
                                        alt="SELVA" 
                                        className="w-10 h-10 rounded-full mr-3"
                                        onError={(e) => {
                                            e.target.src = 'https://ui-avatars.com/api/?name=SELVA&background=8B5CF6&color=fff';
                                        }}
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-900">SELVA</p>
                                        <p className="text-sm text-gray-500">Jan 4/2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrow Right */}
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-[#2F6B4F] hover:bg-[#276443] text-white p-3 rounded-full shadow-lg z-10 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>



        </div>
    );
}