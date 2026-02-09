"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const marqueeMessages = [
  { emoji: "❤️", text: "Healthy Snacks at Your Door in 24–48 Hours" },
  { emoji: "🎋", text: "Freshly Packed & Delivered Within 24–48 Hours" },
  { emoji: "🧁", text: "Fresh Snacks, Delivered in Just 24–48 Hours" },
];

const features = [
  {
    icon: "/images/tree.png",
    title: "Natural Grains",
    desc: "Made with wholesome, natural grains",
  },
  {
    icon: "/images/leaf.png",
    title: "Pure Ingredients",
    desc: "No artificial colors or preservatives.",
  },
  {
    icon: "/images/heart.png",
    title: "Healthy Snacking",
    desc: "Tasty snacks you can feel good about",
  },
];

const categories = [
  {
    name: "Wheat Products",
    image: "/images/category-2.png",
    href: "/product?category=wheat",
  },
  {
    name: "Ragi Products",
    image: "/images/category-2.png",
    href: "/product?category=ragi",
  },
  {
    name: "Millet Products",
    image: "/images/category-2.png",
    href: "/product?category=millet",
  },
  {
    name: "Jowar Products",
    image: "/images/category-1.png",
    href: "/product?category=jowar",
  },
  {
    name: "Popcorn",
    image: "/images/category-1.png",
    href: "/product?category=popcorn",
  },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const maxIndex = Math.max(0, categories.length - visibleCount);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  return (
    <section className="w-full">
      {/* ── Marquee Ticker Bar ── */}
      <div className="w-full bg-white border-b border-gray-100 overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap py-2.5 px-4">
          {[...marqueeMessages, ...marqueeMessages].map((msg, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2c5f4b]"
            >
              <span>{msg.emoji}</span>
              {msg.text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Features Bar ── */}
      <div className="w-full bg-[#7A5C3E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4 justify-center sm:justify-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-white flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Category Carousel Section ── */}
      <div className="w-full bg-white py-10 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold italic text-gray-900">
              Shop Our Top Category
            </h2>
            <Link
              href="/product"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-[#2c5f4b] text-white text-sm font-medium rounded-full hover:bg-[#234d3d] transition-colors duration-200"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Prev Arrow */}
            <button
              onClick={prevSlide}
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#6b5b4e] text-white
                flex items-center justify-center shadow-lg
                hover:bg-[#5a4a3e] transition-colors duration-200"
              aria-label="Previous category"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden mx-4 sm:mx-8">
              <div
                className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                }}
              >
                {categories.map((cat) => (
                  <div
                    key={cat.name}
                    className="shrink-0"
                    style={{ width: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * (visibleCount <= 1 ? 16 : 24)) / visibleCount}px)` }}
                  >
                    <Link href={cat.href} className="block group">
                      <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                        {/* Image */}
                        <div className="aspect-4/3 overflow-hidden">
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                        {/* Label Bar */}
                        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 bg-white">
                          <span className="text-sm sm:text-base font-semibold text-gray-900">
                            {cat.name}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-[#2c5f4b] font-medium border border-[#2c5f4b] rounded-full px-3 py-1 group-hover:bg-[#2c5f4b] group-hover:text-white transition-colors duration-200">
                            View All
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#6b5b4e] text-white
                flex items-center justify-center shadow-lg
                hover:bg-[#5a4a3e] transition-colors duration-200"
              aria-label="Next category"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Mobile View All */}
          <div className="flex sm:hidden justify-center mt-6">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2c5f4b] text-white text-sm font-medium rounded-full hover:bg-[#234d3d] transition-colors duration-200"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
