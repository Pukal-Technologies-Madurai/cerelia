"use client"

import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import Link from "next/link";

export const ProductSlide = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prev) => (prev + 1) % products.length);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextProduct = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const currentProduct = products[currentIndex];

    const handleBuyNow = () => {
        if (currentProduct?.url) {
            window.open(currentProduct.url, "_blank");
        } else {
            console.error("No URL available for the current product.");
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <div className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
                {/* Previous Button */}
                <button
                    onClick={prevProduct}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 
                             bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors
                             duration-200"
                    aria-label="Previous product"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Product Display */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                    {/* Image Section - Adjusted for better responsive sizing */}
                    <div className="relative w-full">
                        <div className="aspect-square max-w-md mx-auto">
                            <img
                                src={currentProduct.image}
                                alt={currentProduct.name}
                                className="object-contain w-full h-full 
                                         px-4 sm:px-6 md:px-8
                                         max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col space-y-4 md:space-y-6 px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{currentProduct.name}</h2>
                        <p className="text-base md:text-lg text-gray-600">{currentProduct.description}</p>

                        {/* Buttons */}
                        <div className="flex space-x-4 pt-2">
                            <Link href={`/productInfo?id=${currentProduct.id}`}
                                className="flex-1 bg-white text-primary border-2 border-primary 
                                         py-2 px-4 md:px-6 rounded-lg font-semibold text-sm md:text-base
                                         hover:bg-primary hover:text-white transition-colors duration-200 
                                         text-center">
                                Learn More
                            </Link>
                            <button
                                onClick={() => handleBuyNow()}
                                className="flex-1 bg-primary text-white py-2 px-4 md:px-6 rounded-lg 
                                         font-semibold text-sm md:text-base
                                         hover:bg-primary-dark transition-colors duration-200">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextProduct}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 
                             bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors
                             duration-200"
                    aria-label="Next product"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
                {products.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to product ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
}