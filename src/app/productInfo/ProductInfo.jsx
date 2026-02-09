"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductInfo() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedIngredient, setSelectedIngredient] = useState("Peri Peri");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const searchParams = useSearchParams();

    React.useEffect(() => {
        const productId = searchParams.get("id");
        const foundProduct = products.find(p => p.id === parseInt(productId));
        setProduct(foundProduct);
    }, [searchParams]);

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
        if (product?.url) {
            window.open(product.url, "_blank");
        }
    };

    const handleAddCart = () => {
        console.log("Adding to cart:", product.name, "Quantity:", quantity);
    };

    const ingredients = ["Peri Peri", "Salty", "Cheese", "Mint"];
    const features = ["Guilt Free", "No Preservatives", "No Preservatives", "Air Fried", "Minimally Processed", "Crunchy & Tasty"];
    
    // Mock images - in real app, these would come from product data
    const productImages = [
        "/images/product-1.png",
        "/images/product-1.png", 
        "/images/product-1.png",
        "/images/product-1.png"
    ];

    const getSimilarProducts = () => {
        return products.filter(p => p.id !== product.id).slice(0, 3);
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Image Gallery */}
                    <div className="space-y-4">
                        {/* Main Product Image */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 aspect-square flex items-center justify-center">
                            <img
                                src={productImages[currentImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-contain max-h-96"
                            />
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center space-x-2">
                            {productImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                        index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Thumbnail Images */}
                        <div className="grid grid-cols-4 gap-4">
                            {productImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`aspect-square rounded-xl border-2 p-2 transition-colors duration-200 ${
                                        index === currentImageIndex 
                                            ? 'border-gray-800 bg-gray-50' 
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right - Product Details */}
                    <div className="space-y-6">
                        {/* Product Name & Quantity */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                Cerelia - Jowar Bites 
                                <span className="text-lg font-normal text-gray-600 ml-2">(Qty:150G)</span>
                            </h1>
                            <p className="text-gray-600">
                                Using carefully selected grains and clean processes, we craft snacks that are wholesome and delicious
                            </p>
                        </div>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2">
                            {features.map((feature, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                >
                                    <span className="mr-1">✓</span>
                                    {feature}
                                </span>
                            ))}
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m9.049 2.927 1.88 3.812a.79.79 0 0 0 .594.433l4.203.61c.39.057.546.537.264.812l-3.042 2.966a.79.79 0 0 0-.227.699l.719 4.186c.067.39-.341.688-.688.512L10 15.347l-3.76 1.964c-.347.176-.755-.122-.688-.512l.719-4.186a.79.79 0 0 0-.227-.699L2.002 8.948c-.282-.275-.126-.755.264-.812l4.203-.61a.79.79 0 0 0 .594-.433L9.049 2.927z"/>
                                    </svg>
                                ))}
                            </div>
                            <span className="text-gray-600 font-medium">(2.7K)</span>
                        </div>

                        {/* Price & Quantity */}
                        <div className="flex items-center justify-between">
                            <div className="text-3xl font-bold text-green-600">
                                Rs.₹50
                            </div>
                            <div className="flex items-center border border-gray-300 rounded-full">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-l-full"
                                >
                                    −
                                </button>
                                <span className="px-4 py-2 font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-r-full"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Choose Ingredient */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Ingredient</h3>
                            <div className="grid grid-cols-4 gap-3">
                                {ingredients.map((ingredient, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedIngredient(ingredient)}
                                        className={`flex flex-col items-center p-3 rounded-full border-2 transition-colors duration-200 ${
                                            selectedIngredient === ingredient
                                                ? 'border-gray-800 bg-gray-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        <div className="w-8 h-8 bg-orange-100 rounded-full mb-2 flex items-center justify-center">
                                            <img
                                                src="/images/product-1.png"
                                                alt={ingredient}
                                                className="w-6 h-6 object-contain"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{ingredient}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-200"
                            >
                                🛒 Buy now
                            </button>
                            <button
                                onClick={handleAddCart}
                                className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-200"
                            >
                                🛒 Add Cart
                            </button>
                        </div>
                    </div>
                </div>

                {/* Similar Products Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getSimilarProducts().map((similarProduct) => (
                            <div
                                key={similarProduct.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="aspect-square p-6 flex items-center justify-center bg-gray-50">
                                    <img
                                        src="/images/product-1.png"
                                        alt={similarProduct.name}
                                        className="w-full h-full object-contain max-h-40"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Popped Wheat</h3>
                                    <p className="text-xl font-bold text-green-600 mb-4">₹15.00</p>
                                    <div className="flex space-x-2">
                                        <button className="flex-1 bg-white border border-orange-300 text-orange-600 py-2 px-4 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-200 text-sm">
                                            🛒 Add Cart
                                        </button>
                                        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
                                            Buy now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}