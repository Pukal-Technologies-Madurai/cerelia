"use client"

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ProductSlide = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const products = [
        {
            id: 1,
            name: "Popped Pearl Millet - Dahi Puri",
            image: "/images/Popped Pearl Millet - Dahi Puri.png",
            description: "Rich in protein and calcium",
        },
        {
            id: 2,
            name: "Popped Pearl Millet - Peri Peri",
            image: "/images/Popped Pearl Millet - Peri Peri.png",
            description: "Spicy flavored healthy snack",
        },
        {
            id: 3,
            name: "Popped Pearl Millet - Salt & Pepper",
            image: "/images/Popped Pearl Millet - Salt & Pepper.png",
            description: "Sweet flavored healthy snack",
        },
        {
            id: 4,
            name: "Popped Wheat - Dahi Puri",
            image: "/images/Popped Wheat - Dahi Puri.png",
            description: "Masala flavored healthy snack",
        },
        {
            id: 5,
            name: "Popped Wheat - Peri Peri",
            image: "/images/Popped Wheat - Peri Peri.png",
            description: "Cheese flavored healthy snack",
        },
        {
            id: 6,
            name: "Popped Wheat - Salt & Pepper",
            image: "/images/Popped Wheat - Salt & Pepper.png",
            description: "Classic flavored healthy snack",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    React.useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
            {/* Main slideshow container */}
            <div className="relative h-[500px] bg-gray-50">
                {/* Products */}
                <div className="relative h-full">
                    {products.map((product, index) => (
                        <div key={product.id}
                            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
                ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                                {/* Image section */}
                                <div className="relative flex items-center justify-center p-8">
                                    <Image
                                        width={200}
                                        height={100}
                                        src={product.image}
                                        alt={product.name}
                                        className="max-h-[400px] object-contain"
                                    />
                                </div>

                                {/* Content section */}
                                <div className="flex flex-col justify-center p-8">
                                    <h2 className="text-3xl font-bold text-green-800 mb-4">
                                        {product.name}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-6">
                                        {product.description}
                                    </p>
                                    <div className="flex space-x-4">
                                        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                            Learn More
                                        </button>
                                        <button className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50 transition-colors">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                    <ChevronLeft className="w-6 h-6 text-green-800" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                    <ChevronRight className="w-6 h-6 text-green-800" />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors
                ${index === currentSlide ? 'bg-green-600' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductSlide