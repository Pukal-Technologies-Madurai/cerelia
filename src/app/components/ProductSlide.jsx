"use client"

import React, { useState, useRef, useEffect } from "react";
import { products } from "@/data/products";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export const ProductSlide = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleBuyNow = (product) => {
        const number = product?.whatsappNumber?.replace(/\D/g, ""); // strip non-digits e.g. "+"
        const message = product?.whatsappMessage;
        if (!number || !message) return;

        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // Display first 8 products or fewer if not available
    const displayProducts = products.slice(0, 8);

    // Testimonials data
    const testimonials = [
        {
            name: "Kapilan Pukalenthi",
            role: "CEO, Pukalfoods",
            avatar: "/images/avatar.png",
            quote: "OUR GRAIN-BASED SNACKS REPRESENT THE PERFECT BLEND OF HEALTH AND TASTE. EVERY PRODUCT IS CRAFTED WITH PREMIUM INGREDIENTS AND ZERO COMPROMISE ON QUALITY. THIS IS WHAT CERELIA IS ALL ABOUT – MAKING WHOLESOME NUTRITION ACCESSIBLE AND DELICIOUS FOR EVERYONE.",
            bgcolor: "10B981"
        },
        {
            name: "Rajahariharan",
            role: "Marketing Manager, Pukalfoods",
            avatar: "/images/avatar-3.png",
            quote: "CERELIA'S STORY IS COMPELLING. FROM POPPED WHEAT TO DIVERSE GRAIN-BASED SNACKS, OUR PORTFOLIO RESONATES WITH HEALTH-CONSCIOUS CONSUMERS. THE MARKET RESPONSE HAS BEEN REMARKABLE. THESE AREN'T JUST SNACKS – THEY'RE A WELLNESS REVOLUTION THAT COMBINES ANCIENT GRAINS WITH MODERN LIFESTYLE NEEDS.",
            bgcolor: "F59E0B"
        },
        {
            name: "Bala krishnan",
            role: "HR, Pukalfoods",
            avatar: "/images/avatar-2.png",
            quote: "WORKING AT PUKALFOODS, I'VE SEEN THE DEDICATION TO QUALITY AND EMPLOYEE WELLNESS. CERELIA'S SNACKS ARE TRUSTED BY OUR ENTIRE TEAM. THEY'RE NOT JUST PRODUCTS – THEY'RE A REFLECTION OF OUR COMMITMENT TO CREATING HEALTHY CHOICES FOR FAMILIES EVERYWHERE. PROUD TO BE PART OF THIS JOURNEY.",
            bgcolor: "8B5CF6"
        },
        {
            name: "Sasidharan",
            role: "Managing Director, Pukal-Tech",
            avatar: "/images/avatar-1.png",
            quote: "THE INNOVATION BEHIND CERELIA'S SNACKS IS REMARKABLE. FROM POPPED WHEAT TO MILLET BITES, EACH PRODUCT COMBINES TRADITIONAL GRAINS WITH MODERN PROCESSING TECHNIQUES. OUR TECHNOLOGY ENSURES EVERY SNACK MAINTAINS ITS NUTRITIONAL VALUE WHILE DELIVERING EXCEPTIONAL TASTE AND CRUNCH.",
            bgcolor: "3B82F6"
        },
    ];

    // Number of cards visible depends on breakpoint:
    // lg: 3, md: 2, sm: 1
    // We calculate the max slide so empty space is never shown.
    const getItemsPerView = () => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const update = () => setItemsPerView(getItemsPerView());
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxSlide = Math.max(0, testimonials.length - itemsPerView);

    const nextSlide = () => {
        setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };

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
                                    <Link href={`/productInfo?id=${product.id}`}>
                                        <img
                                            src={product.image || "/images/product-1.png"}
                                            alt={product.name}
                                            className="w-full h-full object-contain max-h-48 cursor-pointer hover:scale-105 transition-transform duration-200"
                                        />
                                    </Link>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'cursive' }}>
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
                                    Premium Healthy Snacks!
                                </h2>
                                <h3 className="text-2xl font-script text-gray-700 mb-6" style={{ fontFamily: 'cursive' }}>
                                    Grain-Based Goodness
                                </h3>
                                <p className="text-lg text-gray-600 mb-8">
                                    Discover our range of nutritious, delicious snacks made from premium grains.
                                    From popped wheat to millet bites – healthy eating has never tasted better!
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'cursive' }}>
                            TRUSTED BY OUR TEAM
                        </h2>
                    </div>

                    {/* Testimonials Carousel */}
                    <div className="relative">
                        {/* Navigation Arrow Left */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-[#2F6B4F] hover:bg-[#276443] text-white p-3 rounded-full shadow-lg z-10 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Testimonials Container */}
                        <div className="overflow-hidden mx-8">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                                    >
                                        <div className="bg-white rounded-2xl p-5 shadow-lg h-full flex flex-col">
                                            <div className="flex items-center mb-3">
                                                <div className="w-8 h-8 bg-[#2F6B4F]/42 rounded-full flex items-center justify-center mr-3">
                                                    <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                                    </svg>
                                                </div>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="m9.049 2.927 1.88 3.812a.79.79 0 0 0 .594.433l4.203.61c.39.057.546.537.264.812l-3.042 2.966a.79.79 0 0 0-.227.699l.719 4.186c.067.39-.341.688-.688.512L10 15.347l-3.76 1.964c-.347.176-.755-.122-.688-.512l.719-4.186a.79.79 0 0 0-.227-.699L2.002 8.948c-.282-.275-.126-.755.264-.812l4.203-.61a.79.79 0 0 0 .594-.433L9.049 2.927z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-gray-700 font-medium mb-4 text-xs leading-relaxed flex-grow">
                                                {testimonial.quote}
                                            </p>
                                            <div className="flex items-center">
                                                <div
                                                    className="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                                                    style={{ backgroundColor: `#${testimonial.bgcolor}` }}
                                                >
                                                    {testimonial.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrow Right */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-[#2F6B4F] hover:bg-[#276443] text-white p-3 rounded-full shadow-lg z-10 transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Slide Indicators */}
                        <div className="flex justify-center gap-2 mt-6">
                            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-[#2F6B4F] w-6" : "bg-gray-300 w-2"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}