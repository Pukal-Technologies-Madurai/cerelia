import React from "react";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const combos = [
    {
        id: 101,
        title: "Crunchy Bytes Combo",
        price: 199,
        mrp: 400,
        endIn: "2d",
        color: "#457B62", // Terracotta/Red
        features: ["Salted Popcorn", "Pearl Millet", "Popped Wheat"],
        image: "/images/combos.png",
    },
    {
        id: 102,
        title: "Crunchy Bytes Combo",
        price: 199,
        mrp: 400,
        endIn: "2d",
        color: "#457B62", // Green
        features: ["Salted Popcorn", "Pearl Millet", "Popped Wheat"],
        image: "/images/combos.png",
    },
    {
        id: 103,
        title: "Crunchy Bytes Combo",
        price: 199,
        mrp: 400,
        endIn: "1d",
        color: "#457B62", // Grey
        features: ["Salted Popcorn", "Pearl Millet", "Popped Wheat"],
        image: "/images/combos.png",
    },
    {
        id: 104,
        title: "Crunchy Bytes Combo",
        price: 199,
        mrp: 400,
        endIn: "2d",
        color: "#457B62", // Brown
        features: ["Salted Popcorn", "Pearl Millet", "Popped Wheat"],
        image: "/images/combos.png",
    },
    {
        id: 105,
        title: "Crunchy Bytes Combo",
        price: 199,
        mrp: 400,
        endIn: "3d",
        color: "#457B62", // Gold
        features: ["Salted Popcorn", "Pearl Millet", "Popped Wheat"],
        image: "/images/combos.png",
    },
    {
        id: 106,
        title: "Crunchy Bytes Combo",
        price: 199,
        mrp: 400,
        endIn: "5d",
        color: "#457B62", // Teal
        features: ["Salted Popcorn", "Pearl Millet", "Popped Wheat"],
        image: "/images/combos.png",
    },
];

export default function CombosPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* Header Banner */}
            <div className="bg-[#8B6A4F] w-full py-4 px-4 sm:px-6 lg:px-8 shadow-sm">
                <div className="max-w-8xl mx-auto">
                    <h1 className="text-white text-xl font-medium tracking-wide">
                        Combos Pack
                    </h1>
                </div>
            </div>

            {/* Main Grid */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {combos.map((combo) => (
                        <div
                            key={combo.id}
                            className="relative rounded-2xl overflow-hidden shadow-2xl bg-white group hover:shadow-xl transition-all duration-300 border border-[#bab4b0]"
                        >
                            {/* Timer Badge */}
                            <div className="absolute top-3 right-3 z-20">
                                <span className="bg-[#A53F2B] text-white text-[15px] font-bold px-4 py-1.5 rounded-full shadow-sm">
                                    End in : {combo.endIn}
                                </span>
                            </div>

                            {/* Product Image Area */}
                            <div className="relative h-72 w-full bg-white flex items-end justify-center pb-12 pt-12 z-10">
                                {/* Background Circle if needed, otherwise image handles it */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-[85%] aspect-square  opacity-50 translate-y-4"></div>
                                </div>

                                <img
                                    src={combo.image}
                                    alt={combo.title}
                                    className="w-56 h-auto object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500 ease-out z-10"
                                />
                            </div>

                            {/* Colored Bottom Section */}
                            <div
                                className="relative pt-14 pb-10 px-6 text-center text-white -mt-12"
                                style={{
                                    backgroundColor: combo.color,
                                    borderTopLeftRadius: "3rem",
                                    borderTopRightRadius: "3rem",
                                }}
                            >
                                {/* Save Badge - Positioned Absolute Overlapping */}
                                <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                                    <div className="bg-[#EFAA2B] text-white text-sm font-medium py-1.5 px-6 rounded-md shadow-md border border-[#D99522]">
                                        Save - ₹199
                                    </div>
                                </div>

                                <div className="mt-5 space-y-2">
                                    <h3 className="text-3xl font-black tracking-wide uppercase font-serif drop-shadow-md leading-tight" style={{ fontFamily: 'var(--font-roboto-serif), serif' }}>
                                        {combo.title}
                                    </h3>
                                </div>

                                {/* Ribbon Feature Strip */}
                                <div className="relative mt-4 flex justify-center">
                                    <div className="bg-[#EFAA2B] text-white text-[10px] sm:text-xs font-bold py-1.5 px-8 relative shadow-sm flex items-center gap-2"
                                        style={{
                                            clipPath: "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%)"
                                        }}
                                    >
                                        <span>• Salted Popcorn</span>
                                        <span>• Pearl Millet</span>
                                        <span>• Popped Wheat</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-center gap-3">
                                    <span className="text-base font-medium text-white/80 relative">
                                        MRP:{combo.mrp}
                                        <span className="absolute left-0 right-0 top-1/2 h-0.5 bg-red-600 -rotate-3 transform origin-center"></span>
                                    </span>
                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-bold">₹ {combo.price}</span>
                                        <span className="text-lg font-normal ml-1">/only</span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Link href={`/productInfo?id=${combo.id}`}>
                                        <button className="bg-[#EFAA2B] hover:bg-[#D99522] text-white text-sm font-bold py-3 px-10 rounded-full shadow-lg shadow-black/20 transition-all transform active:scale-95 flex items-center justify-center gap-2 mx-auto tracking-wide border border-[#D99522]">
                                            Buy now <ShoppingCart className="w-4 h-4 fill-white" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
