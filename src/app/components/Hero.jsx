"use client";

import { useRouter } from 'next/navigation'

export const Hero = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-16" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to our{' '}
              <span className="text-transparent bg-clip-text bg-primary">
                culinary home
              </span>
            </h1>

            <p className="text-justify break-normal text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              We invite you to learn more about our food products.
              Crafted to fuel your body with clean, high quality ingredients.
              Each product is packed with plant or whey protein, fiber and naturally sourced flavours to keep you
              energized without sugars or artificial fillers. We are providing a satisfying crunch and flavour
              you'll crave. Perfect for workouts, busy mornings or any time you need a healthy snack.
              Enjoy a boost of natural energy wherever you go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button type="button"
                onClick={() => router.push("/product")}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-medium
                  hover:bg-[#008677] transform hover:scale-105 transition-all duration-200 shadow-lg 
                  hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-cyan-500 group"
              >
                Explore Menu
                <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative group">
            <div className="relative aspect-square overflow-hidden rounded-2xl p-10">
              <img
                src="/images/festival-of-gains.png"
                alt="Delicious Food"
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
