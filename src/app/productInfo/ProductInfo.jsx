// ... imports
import { products } from "@/data/products";
import { ShoppingCart, Home, ChevronRight, Check, Star, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const PRODUCT_TABS = [
    "Ingredients",
    "Health Benefits",
    "Product Highlights",
    "Product Measurements",
    "Nutrition Facts",
    "FAQ",
];

export default function ProductInfo() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
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
        if (foundProduct?.flavor && foundProduct.flavor.length > 0) {
            setSelectedFlavor(foundProduct.flavor[0]);
        }
    }, [searchParams]);

    const currentFlavorSet = useMemo(() => new Set(product?.flavor || []), [product]);

    const similarProducts = useMemo(() => {
        if (!product) return [];
        return products
            .filter((p) => p.id !== product.id && p.flavor?.some((f) => currentFlavorSet.has(f)))
            .sort((a, b) => {
                const aCount = a.flavor?.filter((f) => currentFlavorSet.has(f)).length || 0;
                const bCount = b.flavor?.filter((f) => currentFlavorSet.has(f)).length || 0;
                return bCount - aCount;
            })
            .slice(0, 8);
    }, [product, currentFlavorSet]);

    const relatedProducts = useMemo(() => {
        if (!product) return [];
        return products
            .filter((p) => p.id !== product.id && !p.flavor?.some((f) => currentFlavorSet.has(f)))
            .slice(0, 8);
    }, [product, currentFlavorSet]);

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
        const url = product?.url || product?.mobileUrl;
        if (!url) return;
        window.open(url, "_blank");
    };

    const flavors = product.flavor?.map(f => ({
        name: f,
        image: product.image || "/images/product-1.png"
    })) || [];

    const productImages = [
        product.image || "/images/product-1.png",
        product.image || "/images/product-1.png",
        product.image || "/images/product-1.png",
        product.image || "/images/product-1.png"
    ];

    return (
        <div className="min-h-screen bg-[#F6F1EA]">
            {/* Breadcrumb Header */}
            <div className="border-b border-[#E8DDD0] bg-[#FBF8F4] w-full">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-[#8B7B6C]">
                        <Link href="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
                            <Home className="w-4 h-4 text-[#7A5C3E]" />
                        </Link>
                        <ChevronRight className="w-4 h-4 text-[#B7A99B]" />
                        <Link href="/product" className="hover:text-[#7A5C3E] transition-colors">
                            Products
                        </Link>
                        <ChevronRight className="w-4 h-4 text-[#B7A99B]" />
                        <span className="truncate font-medium text-[#4D4035]">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                        {/* Left - Product Image */}
                        <div className="space-y-5 rounded-3xl border border-[#E8DDD0] bg-white p-4 shadow-[0_16px_45px_rgba(108,82,54,0.08)] sm:p-6">
                            {/* Main Product Image Container */}
                            <div className="relative flex min-h-[350px] items-center justify-center overflow-hidden rounded-2xl  p-5 sm:min-h-[430px]">
                                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#7A5C3E] shadow-sm">
                                    Cerelia original
                                </span>
                                <img
                                    src={productImages[currentImageIndex]}
                                    alt={product.name}
                                    className="h-auto max-h-[390px] w-full object-contain transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col space-y-3">
                                {/* Rating & Pagination */}
                                <div className="flex items-center justify-between px-1">
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
                                            className={`aspect-square rounded-2xl border bg-[#FBF8F4] p-1.5 transition-all duration-200 ${index === currentImageIndex
                                                ? 'border-[#7A5C3E] bg-white shadow-sm ring-2 ring-[#7A5C3E]/15'
                                                : 'border-[#E8DDD0] hover:border-[#BDA990]'
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
                        <div className="space-y-6 rounded-3xl border border-[#E8DDD0] bg-white p-5 shadow-[0_16px_45px_rgba(108,82,54,0.08)] sm:p-8">
                            {/* Product Name & Description */}
                            <div>
                                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#A47A55]">Grain-based goodness</p>
                                <h1 className="mb-3 flex items-baseline flex-wrap text-3xl font-roboto-serif font-bold leading-tight text-[#2D2925] sm:text-4xl">
                                    {product.name}
                                </h1>
                                <p className="mb-5 text-base leading-relaxed text-[#766D64]">
                                    Using carefully selected grains and clean processes, we craft snacks that are wholesome and delicious
                                </p>

                                {/* Benefits List */}
                                <div className="mb-5 grid gap-2 rounded-2xl bg-[#F7F3ED] p-4 text-[#2B3E14] sm:grid-cols-2">
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
                                <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[#EEE6DD] pt-4">
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
                            {flavors.length > 0 && (
                                <div className="border-t border-[#EEE6DD] pt-5">
                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="text-base font-semibold text-[#2D2925]">Choose Flavor</h3>
                                        <span className="text-xs font-medium text-[#A47A55]">{selectedFlavor}</span>
                                    </div>
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
                            )}

                            {/* Pricing */}
                             <div className="space-y-2 border-t border-[#EEE6DD] pt-5">
                                <div className="flex items-center space-x-3">
                                     <span className="text-4xl font-bold tracking-tight text-[#1D4D3A]">{product.price}</span>
                                    {product.mrp && (
                                        <span className="text-lg text-gray-400 line-through decoration-1">MRP: {product.mrp}</span>
                                    )}
                                    {product.discount && (
                                        <span className="bg-[#A22913] text-white text-xs font-bold px-2 py-0.5 rounded">{product.discount}</span>
                                    )}
                                </div>
                                <p className="text-gray-500 text-xs font-medium">Inclusive of all taxes</p>
                            </div>

                            {/* Quantity & Buy Button */}
                            <div className="flex flex-col gap-3 border-t border-[#EEE6DD] pt-5 sm:flex-row sm:items-center sm:gap-5">
                                <div className="flex h-12 w-full shrink-0 items-center justify-between rounded-full border border-[#DCCFC1] bg-[#FBF8F4] px-1 sm:w-28">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="h-full w-8 rounded-full text-lg font-medium text-gray-600 transition-colors hover:bg-white"
                                    >
                                        −
                                    </button>
                                    <span className="font-bold text-gray-900 text-base tabular-nums">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="h-full w-8 rounded-full text-lg font-medium text-gray-600 transition-colors hover:bg-white"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleBuyNow}
                                    aria-label={`Buy ${product.name} now`}
                                    className="group inline-flex min-h-12 w-full flex-1 items-center justify-center gap-2 rounded-full bg-[#EFAA2B] px-6 text-base font-bold tracking-wide text-[#332417] shadow-[0_8px_20px_rgba(205,137,24,0.24)] outline-none transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D99522] hover:shadow-[0_10px_24px_rgba(205,137,24,0.32)] focus-visible:ring-2 focus-visible:ring-[#7A5C3E] focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
                                >
                                    <ShoppingCart className="h-5 w-5 fill-current transition-transform bg duration-200 group-hover:scale-110" />
                                    <span className="font-bold text-[#332417] text-base tabular-nums">Buy now</span>
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-2 border-t border-[#EEE6DD] pt-5 sm:gap-4">
                                {[
                                    { label: "Free Delivery", img: "/images/product-detail.png" },
                                    { label: "Secure Transaction", img: "/images/secure.png" },
                                    { label: "Non - Returnable", img: "/images/no-refunds.png" }
                                ].map((badge, i) => (
                                    <div key={i} className="text-center group flex flex-col items-center">
                                        <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F3ED] p-3 transition-colors group-hover:bg-[#EEE5DA] sm:h-16 sm:w-16">
                                            <img src={badge.img} alt={badge.label} className="w-full h-full object-contain" />
                                        </div>
                                        <p className="text-[11px] font-medium text-gray-500 transition-colors group-hover:text-gray-800">{badge.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            {/* Product Details Tabs Section */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-4">
                <div className="overflow-hidden rounded-3xl border border-[#E4DBD0] bg-[#FBF9F6] shadow-sm">
                    <div className="flex items-center justify-between gap-4 border-b border-[#E4DBD0] px-5 py-5 sm:px-8">
                        <div>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#A47A55]">Product guide</p>
                            <h2 className="font-roboto-serif text-xl font-bold text-[#2B2B2B] sm:text-2xl">Everything you need to know</h2>
                        </div>
                        <button
                            onClick={() => setIsTabsExpanded(!isTabsExpanded)}
                            aria-label={isTabsExpanded ? "Collapse product information" : "Expand product information"}
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E4DBD0] bg-white text-[#7A5C3E] transition hover:bg-[#F1E9DF]"
                        >
                            <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${isTabsExpanded ? "-rotate-90" : "rotate-90"}`} />
                        </button>
                    </div>

                    <div className="border-b border-[#E4DBD0] bg-white px-3 py-3 sm:px-5">
                        <div role="tablist" aria-label="Product information" className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                            {PRODUCT_TABS.map((tab, index) => (
                                <button
                                    key={tab}
                                    role="tab"
                                    aria-selected={activeTab === tab}
                                    onClick={() => {
                                        setActiveTab(tab);
                                        setIsTabsExpanded(true);
                                    }}
                                    className={`flex min-w-max items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${activeTab === tab
                                        ? "bg-[#7A5C3E] text-white shadow-md shadow-[#7A5C3E]/20"
                                        : "bg-[#F8F5F2] text-[#766D64] hover:bg-[#EEE5DA] hover:text-[#4B4036]"
                                        }`}
                                >
                                    <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${activeTab === tab ? "bg-white/20 text-white" : "bg-white text-[#A47A55]"}`}>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isTabsExpanded ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="min-h-[200px] p-5 sm:p-8">
                        {activeTab === "Ingredients" && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 font-roboto-serif">Ingredient List</h3>
                                {product.ingredients ? (
                                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base marker:text-gray-400">
                                        {product.ingredients.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-400 italic">Ingredient details coming soon.</p>
                                )}
                            </div>
                        )}
                        {activeTab === "Health Benefits" && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 font-roboto-serif">Health Benefits</h3>
                                {product.healthBenefits ? (
                                    <ul className="space-y-3">
                                        {product.healthBenefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-green-100 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                                                </span>
                                                <span className="text-gray-700 text-base">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-400 italic">Health benefit details coming soon.</p>
                                )}
                            </div>
                        )}
                        {activeTab === "Product Highlights" && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 font-roboto-serif">Product Highlights</h3>
                                {product.productHighlights ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {product.productHighlights.map((highlight, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-[#D8CFC4]">
                                                <span className="w-2 h-2 rounded-full bg-[#7A5C3E] flex-shrink-0" />
                                                <span className="text-gray-700 text-sm font-medium">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-400 italic">Product highlight details coming soon.</p>
                                )}
                            </div>
                        )}
                        {activeTab === "Product Measurements" && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 font-roboto-serif">Product Measurements</h3>
                                {product.productMeasurements ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {Object.entries(product.productMeasurements).map(([key, value]) => {
                                            const labels = {
                                                netWeight: "Net Weight",
                                                servingSize: "Serving Size",
                                                servingsPerPack: "Servings Per Pack",
                                                packaging: "Packaging",
                                                shelfLife: "Shelf Life",
                                                storage: "Storage"
                                            };
                                            return (
                                                <div key={key} className="bg-white rounded-lg px-4 py-3 border border-[#D8CFC4]">
                                                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{labels[key] || key}</p>
                                                    <p className="text-gray-800 text-sm font-medium">{value}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <p className="text-gray-400 italic">Measurement details coming soon.</p>
                                )}
                            </div>
                        )}
                        {activeTab === "FAQ" && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 font-roboto-serif">Frequently Asked Questions</h3>
                                {product.faq ? (
                                    <div className="space-y-4">
                                        {product.faq.map((item, i) => (
                                            <div key={i} className="bg-white rounded-lg px-5 py-4 border border-[#D8CFC4]">
                                                <p className="text-gray-900 font-semibold text-sm mb-1">Q: {item.question}</p>
                                                <p className="text-gray-600 text-sm">A: {item.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-400 italic">FAQs coming soon.</p>
                                )}
                            </div>
                        )}
                        {activeTab === "Nutrition Facts" && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 font-roboto-serif">Nutrition Facts</h3>
                                <p className="text-sm text-gray-500 mb-5">Approximate values per serving and per 100g</p>
                                {product.nutritionFacts ? (
                                    <div className="overflow-x-auto rounded-lg border border-[#D8CFC4]">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-[#7A5C3E] text-white">
                                                    <th className="text-left px-5 py-3 font-semibold">Nutrient</th>
                                                    <th className="text-left px-5 py-3 font-semibold">Per 100 GM</th>
                                                    <th className="text-left px-5 py-3 font-semibold">RDA % Per 30 GM</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {product.nutritionFacts.map((row, i) => (
                                                    <tr
                                                        key={i}
                                                        className={`border-t border-[#D8CFC4] ${i % 2 === 0 ? "bg-white" : "bg-[#F8F5F2]"}`}
                                                    >
                                                        <td className="px-5 py-3 text-gray-800 font-medium">{row.nutrient}</td>
                                                        <td className="px-5 py-3 text-gray-700">{row.per100g}</td>
                                                        <td className="px-5 py-3 text-gray-500">{row.rdaPer30g || "—"}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <p className="text-gray-400 italic">Nutrition facts coming soon.</p>
                                )}
                            </div>
                        )}
                    </div>
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
                            <Link href={`/productInfo?id=${product.id}`} className="w-full">
                                <div className="w-full aspect-square mb-3 relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="w-full flex justify-between items-start mb-4 gap-2">
                                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2 flex-1">{product.name}</h4>
                                    <span className="text-sm font-bold text-[#1D4D3A] whitespace-nowrap">{product.price}</span>
                                </div>
                            </Link>

                            <Link href={`/productInfo?id=${product.id}`} className="w-full">
                                <button className="w-full bg-[#EEA931] hover:bg-[#D99522] text-white text-xs font-bold py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors">
                                    Buy now <ShoppingCart className="w-3 h-3 fill-white" />
                                </button>
                            </Link>
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
