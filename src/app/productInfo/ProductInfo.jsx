// ... imports
import { products } from "@/data/products";
import { ShoppingCart, Home, ChevronRight, Check, Star, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ProductInfo() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [couponApplied, setCouponApplied] = useState(true);
    const [selectedFlavor, setSelectedFlavor] = useState("Peri Peri");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("Ingredients");
    const [isTabsExpanded, setIsTabsExpanded] = useState(true);
    const searchParams = useSearchParams();

    // ... (rest of useEffects)

    // ... (rendering code)

    useEffect(() => {
        const productId = searchParams.get("id");
        const foundProduct = products.find(p => p.id === parseInt(productId));
        setProduct(foundProduct);
    }, [searchParams]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F5F1E8]">
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
        const phoneNumber = "919944488350";
        const message = `Hello, I would like to order:
            *Product:* ${product.name}
            *Price:* ${product.price}
            *Quantity:* ${quantity}
            *Flavor:* ${selectedFlavor}
            *Link:* ${window.location.href}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    const flavors = [
        { name: "Peri Peri", image: "/images/product-1.png" },
        { name: "Salty", image: "/images/product-1.png" },
        { name: "Cheese", image: "/images/product-1.png" },
        { name: "Mint", image: "/images/product-1.png" }
    ];

    const productImages = [
        product.image || "/images/product-1.png",
        product.image || "/images/product-1.png",
        product.image || "/images/product-1.png",
        product.image || "/images/product-1.png"
    ];

    return (
        <div className="min-h-screen bg-[#F4F4F4]">
            {/* Breadcrumb Header */}
            <div className="bg-[#7A5C3E] w-full">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
                            <Home className="w-4 h-4" />
                        </Link>
                        <ChevronRight className="w-4 h-4 text-white/60" />
                        <Link href="/product" className="text-white hover:text-gray-200 transition-colors">
                            Products
                        </Link>
                        <ChevronRight className="w-4 h-4 text-white/60" />
                        <span className="text-white font-medium">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="p-2 lg:p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                        {/* Left - Product Image */}
                        <div className="space-y-4 bg-white rounded-sm shadow-xl p-4">
                            {/* Main Product Image Container */}
                            <div className="bg-white flex items-center justify-center min-h-[350px]">
                                <img
                                    src={productImages[currentImageIndex]}
                                    alt={product.name}
                                    className="w-full h-auto object-contain max-h-[400px]"
                                />
                            </div>

                            <div className="flex flex-col space-y-3">
                                {/* Rating & Pagination */}
                                <div className="flex items-center justify-between px-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-[#EFAA2B] fill-[#EFAA2B]" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-700 font-medium">(27)</span>
                                    </div>

                                    <div className="flex space-x-2">
                                        {productImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Thumbnail Images */}
                                <div className="grid grid-cols-4 gap-3">
                                    {productImages.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`aspect-square rounded-xl border p-1.5 transition-all duration-200 ${index === currentImageIndex
                                                ? 'border-gray-400 bg-white shadow-sm ring-1 ring-gray-400'
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
                        </div>

                        {/* Right - Product Details */}
                        <div className="space-y-5">
                            {/* Product Name & Description */}
                            <div>
                                <h1 className="text-2xl font-roboto-serif font-semibold text-gray-900 mb-1 flex items-baseline flex-wrap">
                                    {product.name}
                                    <span className="text-lg font-normal text-gray-600 ml-3">(Qty:150G)</span>
                                </h1>
                                <p className="text-[#666666] text-base leading-relaxed mb-3">
                                    Using carefully selected grains and clean processes, we craft snacks that are wholesome and delicious
                                </p>

                                {/* Benefits List */}
                                <div className="space-y-1 mb-4 text-[#2B3E14]">
                                    {[
                                        { title: "High in Fiber", text: "Supports better digestion and keeps you full longer." },
                                        { title: "Rich in Protein", text: "Helps boost energy and supports muscle health." },
                                        { title: "Gluten-Free Grain", text: "A great snack option for gluten-sensitive diets." },
                                        { title: "Packed with Minerals", text: "Contains iron, magnesium, and other essential nutrients." }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start space-x-2">
                                            <div className="mt-1 bg-green-600 rounded-sm p-0.5 flex-shrink-0">
                                                <Check className="w-2.5 h-2.5 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-sm leading-snug">
                                                <strong className="font-semibold">{benefit.title}</strong> – {benefit.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Feature Tags with Icons */}
                                <div className="flex flex-wrap gap-y-2 gap-x-4">
                                    {[
                                        { label: "Guilt-Free", icon: "/images/plant.png" },
                                        { label: "No Preservatives", icon: "/images/plant.png" },
                                        { label: "Air Fried", icon: "/images/plant.png" },
                                        { label: "Minimally Processed", icon: "/images/plant.png" },
                                        { label: "Crunchy & Tasty", icon: "/images/plant.png" }
                                    ].map((feature, index) => (
                                        <div key={index} className="flex items-center text-[#7A5C3E] font-medium text-sm">
                                            <img src={feature.icon} alt={feature.label} className="w-4 h-4 mr-1.5" />
                                            {feature.label}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Choose Flavor */}
                            <div className="pt-1.5 border-t border-gray-100">
                                <h3 className="text-base font-semibold text-gray-900 mb-3">Choose Flavor</h3>
                                <div className="flex flex-wrap gap-4">
                                    {flavors.map((flavor, index) => (
                                        <div key={index} className="flex flex-col items-center group cursor-pointer" onClick={() => setSelectedFlavor(flavor.name)}>
                                            <div className={`w-16 h-16 rounded-full border p-1 transition-all duration-200 overflow-hidden ${selectedFlavor === flavor.name
                                                ? 'border-gray-800 ring-1 ring-gray-800'
                                                : 'border-gray-200 group-hover:border-gray-400'
                                                }`}>
                                                <div className="w-full h-full rounded-full bg-gray-50 flex items-center justify-center">
                                                    <img
                                                        src={flavor.image}
                                                        alt={flavor.name}
                                                        className="w-full h-full object-contain p-1.5"
                                                    />
                                                </div>
                                            </div>
                                            <span className={`text-xs font-medium mt-2 transition-colors ${selectedFlavor === flavor.name ? 'text-gray-900' : 'text-gray-500'
                                                }`}>{flavor.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pricing */}
                            <div className="space-y-2 pt-2.5 border-t border-gray-100">
                                <div className="flex items-center space-x-3">
                                    <span className="text-4xl font-bold text-[#1D4D3A]">{product.price}</span>
                                    {product.mrp && (
                                        <span className="text-lg text-gray-400 line-through decoration-1">MRP: {product.mrp}</span>
                                    )}
                                    {product.discount && (
                                        <span className="bg-[#A22913] text-white text-xs font-bold px-2 py-0.5 rounded">{product.discount}</span>
                                    )}
                                </div>
                                <p className="text-gray-500 text-xs font-medium">Inclusive of all taxes</p>

                                <div className="flex items-center gap-4 bg-orange-50/50 w-fit pr-3 overflow-hidden">
                                    <span className="bg-[#EFAA2B] text-white text-[10px] px-2 py-1 font-bold uppercase tracking-wider relative">
                                        Coupon:
                                        <div className="absolute top-0 right-[-8px] w-0 h-0 border-t-[12px] border-b-[12px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#EFAA2B]"></div>
                                    </span>
                                    <div className="flex items-center space-x-2 py-0.5 pl-1">
                                        <button
                                            onClick={() => setCouponApplied(!couponApplied)}
                                            className={`w-3.5 h-3.5 flex items-center justify-center rounded-sm border transition-colors duration-200 ${couponApplied
                                                ? 'bg-transparent border-green-600 text-green-600'
                                                : 'bg-white border-gray-300'
                                                }`}
                                        >
                                            {couponApplied && <Check className="w-3 h-3 stroke-[4]" />}
                                        </button>
                                        <span className={`text-xs font-medium ${couponApplied ? 'text-[#2B3E14]' : 'text-gray-500'}`}>
                                            2% off coupon applied
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quantity & Buy Button */}
                            <div className="flex items-center gap-5 pt-1.5 border-t border-gray-100">
                                <div className="flex items-center border border-gray-300 rounded-full h-11 w-32 justify-between px-1 bg-white">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full transition-colors font-medium text-lg pb-0.5"
                                    >
                                        −
                                    </button>
                                    <span className="font-bold text-gray-900 text-base tabular-nums">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-8 h-full flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full transition-colors font-medium text-lg pb-0.5"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={handleBuyNow}
                                    className="flex-1 bg-[#25d366] hover:bg-[#128C4A] text-white text-lg sm:text-xl font-light h-11 px-6 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.239)] transition-all flex items-center justify-center gap-2 transform active:scale-[0.98] tracking-wide whitespace-nowrap"
                                >
                                    <ShoppingCart className="w-5 h-5 fill-white" />
                                    <span className="sm:hidden font-medium">WhatsApp</span>
                                    <span className="hidden sm:inline">Order on WhatsApp</span>
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-6 pt-3">
                                {[
                                    { label: "Free Delivery", img: "/images/product-detail.png" },
                                    { label: "Secure Transaction", img: "/images/secure.png" },
                                    { label: "Non - Returnable", img: "/images/no-refunds.png" }
                                ].map((badge, i) => (
                                    <div key={i} className="text-center group flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-gray-50 mb-3 flex items-center justify-center p-3 group-hover:bg-gray-100 transition-colors">
                                            <img src={badge.img} alt={badge.label} className="w-full h-full object-contain" />
                                        </div>
                                        <p className="text-xs text-gray-500 font-medium group-hover:text-gray-800 transition-colors">{badge.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details Tabs Section */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-4">
                <div className="bg-[#F8F5F2] border-b border-[#D8CFC4] flex flex-wrap gap-2">
                    {["Ingredients", "Health Benefits", "Product Highlights", "Current Offers"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setIsTabsExpanded(true);
                            }}
                            className={`px-6 py-3 text-sm font-medium transition-colors border border-b-0 rounded-t-lg
                                ${activeTab === tab
                                    ? "bg-[#7A5C3E] text-white border-[#7A5C3E]"
                                    : "bg-white text-gray-500 border-[#D8CFC4] hover:bg-gray-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                    <div className="flex-grow border-b border-[#D8CFC4]"></div>
                    <button
                        onClick={() => setIsTabsExpanded(!isTabsExpanded)}
                        className="px-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isTabsExpanded ? "-rotate-90" : "rotate-90"}`} />
                    </button>
                </div>

                <div className={`bg-[#F8F5F2] overflow-hidden transition-all duration-300 ease-in-out ${isTabsExpanded ? "p-8 opacity-100" : "h-0 p-0 opacity-0"}`}>
                    <div style={{ minHeight: "200px" }}>
                        {activeTab === "Ingredients" && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 font-roboto-serif">Ingredient List</h3>
                                <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base marker:text-gray-400">
                                    <li>Jowar (Sorghum)</li>
                                    <li>Cold-pressed oil</li>
                                    <li>Rock salt</li>
                                    <li>Red chilli powder</li>
                                    <li>Black pepper</li>
                                    <li>Cumin powder</li>
                                    <li>Dry mango powder (amchur)</li>
                                </ul>
                            </div>
                        )}
                        {activeTab !== "Ingredients" && (
                            <div className="text-gray-500 italic">Content for {activeTab} goes here...</div>
                        )}
                    </div>
                </div>
            </div>

            {/* Similar Products Carousel */}
            <ProductCarousel title="Similar Products" products={similarProducts} />

            {/* Related Products Carousel */}
            <ProductCarousel title="Related Products" products={relatedProducts} isLast />

        </div >
    );
}

// Reusable Carousel Component
function ProductCarousel({ title, products, isLast }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef.current;
            const scrollAmount = 300;
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <div className={`max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${!isLast ? 'border-b border-gray-200' : ''}`}>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-gray-900">{title}</h3>
            </div>

            <div className="relative group">
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#7A5C3E] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product) => (
                        <div key={product.id} className="min-w-[220px] w-[220px] bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center relative snap-start hover:shadow-md transition-shadow">
                            <div className="w-full aspect-square mb-3 relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="w-full flex justify-between items-start mb-4">
                                <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                                <span className="text-sm font-bold text-[#1D4D3A]">₹{product.price.toFixed(2)}</span>
                            </div>

                            <button className="w-full bg-[#EEA931] hover:bg-[#D99522] text-white text-xs font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors">
                                Buy now <ShoppingCart className="w-3 h-3 fill-white" />
                            </button>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#7A5C3E] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    );
}

// Mock Data
const similarProducts = Array(6).fill({
    id: 1,
    name: "Popped Wheat",
    price: 15.00,
    image: "/images/product-1.png" // Placeholder
}).map((p, i) => ({ ...p, id: i }));

const relatedProducts = Array(6).fill({
    id: 1,
    name: "Popped Wheat",
    price: 15.00,
    image: "/images/product-1.png" // Placeholder
}).map((p, i) => ({ ...p, id: i + 10 }));
