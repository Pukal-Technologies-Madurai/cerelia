"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductInfo() {
    const searchParams = useSearchParams();
    const productId = searchParams.get("id");

    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
                    <Link href="/product" className="mt-4 inline-block text-primary hover:text-cyan-700">
                        Return to Products
                    </Link>
                </div>
            </div>
        );
    }

    const handleBuyNow = () => {
        window.open("https://pukalfoods.com/cerelia/", "_blank");
    };


    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="bg-white rounded-2xl shadow-lg p-32">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                        <p className="text-lg text-gray-600 mb-6">{product.longDescription}</p>

                        {/* Price and Stock Status */}
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                In Stock
                            </span>
                        </div>

                        {/* Nutritional Information */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Nutritional Information</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                                    <div key={key} className="bg-gray-50 p-3 rounded-lg">
                                        <span className="block text-sm text-gray-500 capitalize">{key}</span>
                                        <span className="block text-lg font-semibold">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="space-y-4">
                            <button
                                onClick={handleBuyNow}
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent 
                                text-base font-medium rounded-lg text-white bg-primary hover:bg-cyan-700 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 
                                transform hover:scale-[1.02] transition-all duration-200"
                            >
                                Buy Now
                            </button>

                            <Link
                                href="/product"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 
                                text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                            >
                                Back to Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}