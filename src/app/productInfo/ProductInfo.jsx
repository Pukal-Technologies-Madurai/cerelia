"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { ShoppingCart } from "lucide-react";

export default function ProductInfo() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedFlavor, setSelectedFlavor] = useState("Peri Peri");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [couponApplied, setCouponApplied] = useState(true);
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

    const flavors = ["Peri Peri", "Salty", "Cheese", "Mint"];
    
    // Use product image, fallback to product-1.png
    const productImages = [
        "/images/product-1.png",
        "/images/product-1.png", 
        "/images/product-1.png",
        "/images/product-1.png"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Left - Product Image */}
                    <div className="space-y-4">
                        {/* Main Product Image */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-8 aspect-square flex items-center justify-center">
                            <img
                                src={productImages[currentImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-contain max-h-96"
                            />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m9.049 2.927 1.88 3.812a.79.79 0 0 0 .594.433l4.203.61c.39.057.546.537.264.812l-3.042 2.966a.79.79 0 0 0-.227.699l.719 4.186c.067.39-.341.688-.688.512L10 15.347l-3.76 1.964c-.347.176-.755-.122-.688-.512l.719-4.186a.79.79 0 0 0-.227-.699L2.002 8.948c-.282-.275-.126-.755.264-.812l4.203-.61a.79.79 0 0 0 .594-.433L9.049 2.927z"/>
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600 font-medium">(27)</span>
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
                        <div className="grid grid-cols-4 gap-3">
                            {productImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`aspect-square rounded-xl border-2 p-2 transition-colors duration-200 ${
                                        index === currentImageIndex 
                                            ? 'border-gray-400 bg-gray-50' 
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
                        {/* Product Name & Description */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.name}
                                <span className="text-xl font-normal text-gray-600 ml-2">(Qty:120G)</span>
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {product.description || "Using carefully selected grains and clean processes, we craft snacks that are wholesome and delicious"}
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-2 mb-6">
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-600 text-sm mt-0.5">✅</span>
                                    <span className="text-sm text-gray-700">
                                        <strong>High in Fiber</strong> - Supports better digestion and keeps you full longer.
                                    </span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-600 text-sm mt-0.5">✅</span>
                                    <span className="text-sm text-gray-700">
                                        <strong>Rich in Protein</strong> - Helps boost energy and supports muscle health.
                                    </span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-600 text-sm mt-0.5">✅</span>
                                    <span className="text-sm text-gray-700">
                                        <strong>Gluten-Free Grain</strong> - A great snack option for gluten-sensitive diets.
                                    </span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-600 text-sm mt-0.5">✅</span>
                                    <span className="text-sm text-gray-700">
                                        <strong>Packed with Minerals</strong> - Contains iron, magnesium, and other essential nutrients.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-3">
                            {["Guilt-Free", "No Preservatives", "Air Fried", "Minimally Processed", "Crunchy & Tasty"].map((feature, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                >
                                    <span className="mr-1">🍃</span>
                                    {feature}
                                </span>
                            ))}
                        </div>

                        {/* Choose Flavor */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Flavor</h3>
                            <div className="grid grid-cols-4 gap-3">
                                {flavors.map((flavor, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <button
                                            onClick={() => setSelectedFlavor(flavor)}
                                            className={`w-16 h-16 rounded-full border-2 p-2 flex items-center justify-center transition-colors duration-200 ${
                                                selectedFlavor === flavor
                                                    ? 'border-orange-500 bg-orange-50'
                                                    : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                        >
                                            <img
                                                src={"/images/product-1.png"}
                                                alt={flavor}
                                                className="w-10 h-10 object-contain"
                                            />
                                        </button>
                                        <span className="text-sm font-medium text-gray-700 mt-2">{flavor}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <span className="text-3xl font-bold text-[#2F6B4F]">{product.price}</span>
                                <span className="text-lg text-gray-500 line-through">MRP ₹65</span>
                                <span className="bg-[#A22913] text-white text-sm px-2 py-1 rounded">20% off</span>
                            </div>
                            <p className="text-sm text-gray-600">Inclusive of all taxes</p>
                            <div className="flex items-center space-x-2">
                                <span className="bg-[#EFAA2B] text-white text-xs px-2 py-1 rounded font-medium">Coupon:</span>
                                <div className="flex items-center space-x-1">
                                    <button
                                        onClick={() => setCouponApplied(!couponApplied)}
                                        className={`w-4 h-4 flex items-center justify-center rounded-sm border transition-colors duration-200 ${
                                            couponApplied 
                                                ? 'bg-green-500 border-green-500 text-white' 
                                                : 'bg-white border-gray-300 hover:border-gray-400'
                                        }`}
                                    >
                                        {couponApplied && (
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                    <span className="text-sm text-gray-600">
                                        {couponApplied ? '2% off coupon applied' : 'Apply 2% off coupon'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quantity & Buy Button */}
                        <div className="flex items-center space-x-4">
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
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full font-semibold transition-colors duration-200"
                            >
                                <ShoppingCart className="w-4 h-4 inline-block mr-2"/> Buy now
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                            <div className="text-center">
                                <div className="w-15 h-15 rounded-full mx-auto mb-2 flex items-center justify-center">
                                    <img src="/images/product-detail.png" alt="Free Delivery" className="object-contain" />
                                </div>
                                <p className="text-xs text-gray-600 font-medium">Free Delivery</p>
                            </div>
                            <div className="text-center">
                                <div className="w-15 h-15 rounded-full mx-auto mb-2 flex items-center justify-center">
                                    <img src="/images/secure.png" alt="Free Delivery" className="object-contain" />
                                </div>
                                <p className="text-xs text-gray-600 font-medium">Secure Transaction</p>
                            </div>
                            <div className="text-center">
                                <div className="w-15 h-15 rounded-full mx-auto mb-2 flex items-center justify-center">
                                    <img src="/images/no-refunds.png" alt="Free Delivery" className="object-contain" />
                                </div>
                                <p className="text-xs text-gray-600 font-medium">Non - Returnable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}