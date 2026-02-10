"use client";
import React from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ShoppingCart } from "lucide-react";

export default function Product() {
  const handleBuyNow = (product) => {
    if (product?.url) {
      window.open(product.url, "_blank");
    } else {
      window.open("https://my-estore.com/cerelia/", "_blank");
    }
  };

  const handleAddCart = (product) => {
    console.log("Adding to cart:", product.name);
    // Add your cart functionality here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#8B6F47] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Our Products</h1>
          <div className="flex space-x-3">
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors duration-200">
              Price
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors duration-200">
              Filters ≡
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="aspect-square p-6 flex items-center justify-center bg-white">
                <Link href={`/productInfo?id=${product.id}`}>
                  <img
                    src={"/images/product-1.png"}
                    alt={product.name}
                    className="w-full h-full object-contain max-h-48 cursor-pointer hover:scale-105 transition-transform duration-200"
                  />
                </Link>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-4 min-h-[4rem]">
                  <h3 className="text-lg font-normal text-gray-900 flex-1 pr-2">
                    {product.name}
                  </h3>
                  <p className="text-xl font-normal text-green-600 whitespace-nowrap">
                    {product.price}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 mx-10">
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="flex-1 bg-[#EFAA2B] hover:bg-[#6B5537] text-white py-2 px-4 rounded-full font-medium transition-colors duration-200 text-sm"
                  >
                    Buy now
                    <ShoppingCart className="w-4 h-4 inline-block ml-2"/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
