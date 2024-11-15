"use client"
import React from "react";
import Link from "next/link";
import { products } from "@/data/products";

export default function Product() {

    const handleBuyNow = () => {
        window.open("https://pukalfoods.com/cerelia/", "_blank");
    };

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Our Products
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our range of healthy and delicious snacks, crafted with care using the finest ingredients.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden 
                transform hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="aspect-square overflow-hidden bg-gray-200">
                                <Link href={`/productInfo?id=${product.id}`} >
                                    <img src={product.image}
                                        alt={product.name}
                                        loading="lazy"
                                        className="w-full h-full object-contain transform 
                                    group-hover:scale-105 transition-transform duration-500 p-6"
                                    />
                                </Link>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[56px]">
                                    {product.name}
                                </h3>
                                <Link href={`/productInfo?id=${product.id}`} >
                                    <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent 
                    text-base font-medium rounded-lg text-white bg-primary hover:bg-cyan-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 
                    transform hover:scale-[1.02] transition-all duration-200"
                                    >
                                        More Info
                                        <svg className="ml-2 -mr-1 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            />
                                        </svg>
                                    </button>
                                </Link>
                            </div>

                            <div className="absolute top-0 right-0 -mt-2 -mr-2 h-16 w-16 opacity-10">
                                <svg className="h-full w-full text-gray-900"
                                    viewBox="0 0 64 64"
                                    fill="currentColor"
                                >
                                    <path d="M32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm0-5.333c14.727 0 26.667-11.94 26.667-26.667 0-14.727-11.94-26.667-26.667-26.667C17.273 5.333 5.333 17.273 5.333 32c0 14.727 11.94 26.667 26.667 26.667z" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}