"use client";
import React from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { ShoppingCart, X, SlidersHorizontal } from "lucide-react";

// Derive all unique flavors from the products data
const allFlavors = ["All", ...Array.from(
  new Set(products.flatMap((p) => p.flavor ?? []))
).sort()];

export default function Product() {
  const [selectedFlavor, setSelectedFlavor] = React.useState("All");
  const [filterOpen, setFilterOpen] = React.useState(false);
  const filterPanelRef = React.useRef(null);

  // Close panel when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterPanelRef.current && !filterPanelRef.current.contains(e.target)) {
        setFilterOpen(false);
      }
    };
    if (filterOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filterOpen]);

  const filteredProducts =
    selectedFlavor === "All"
      ? products
      : products.filter((p) => p.flavor?.includes(selectedFlavor));

  const handleBuyNow = (product) => {
    if (product?.url) {
      let finalUrl = product.url;
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isWhatsApp = finalUrl.includes("wa.me") || finalUrl.includes("whatsapp.com");

      if (isMobile && product.mobileUrl) {
        finalUrl = product.mobileUrl;
      }

      if (isWhatsApp) {
        if (isMobile && finalUrl.includes("/product/")) {
          finalUrl = finalUrl.replace(/(web\.)?whatsapp\.com\/product\//, "wa.me/p/");
        }

        const messageParts = [];
        if (product.whatsappMessage) {
          messageParts.push(product.whatsappMessage);
        } else {
          messageParts.push(`Order ${product.name}`);
        }

        if (product.sku) messageParts.push(`(SKU: ${product.sku})`);

        const fullMessage = messageParts.join(" - ");
        const separator = finalUrl.includes("?") ? "&" : "?";
        finalUrl = `${finalUrl}${separator}text=${encodeURIComponent(fullMessage)}`;

        const isCatalog = finalUrl.includes("/p/") || finalUrl.includes("/product/");
        if (isCatalog) {
          const phoneMatch = finalUrl.match(/\/(\d{10,15})(\?|&|$)/) || finalUrl.match(/phone=(\d{10,15})/);
          if (phoneMatch) {
            const phone = phoneMatch[1];
            finalUrl = `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;
          }
        }
      }

      if (isMobile) {
        window.location.href = finalUrl;
      } else {
        window.open(finalUrl, "_blank");
      }
    } else {
      window.open("https://my-estore.com/cerelia/", "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ── Header ── */}
      <div className="bg-[#8B6F47] text-white py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Our Products</h1>

          <div className="relative" ref={filterPanelRef}>
            {/* Filter trigger button */}
            <button
              id="filter-toggle-btn"
              onClick={() => setFilterOpen((prev) => !prev)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 border ${filterOpen || selectedFlavor !== "All"
                  ? "bg-white text-[#8B6F47] border-white"
                  : "bg-white/20 hover:bg-white/30 text-white border-white/40"
                }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {selectedFlavor !== "All" && (
                <span className="bg-[#8B6F47] text-white text-xs rounded-full px-2 py-0.5 ml-1">
                  1
                </span>
              )}
            </button>

            {/* ── Filter Dropdown Panel ── */}
            {filterOpen && (
              <div
                id="filter-panel"
                className="absolute right-0 top-12 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-40 animate-fadeIn"
              >
                {/* Panel header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    Filter by Flavour
                  </span>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Flavour chips — dynamically mapped from products */}
                <div className="flex flex-wrap gap-2">
                  {allFlavors.map((flavor) => (
                    <button
                      key={flavor}
                      id={`flavor-filter-${flavor.replace(/\s+/g, "-").toLowerCase()}`}
                      onClick={() => {
                        setSelectedFlavor(flavor);
                        setFilterOpen(false);
                      }}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${selectedFlavor === flavor
                          ? "bg-[#8B6F47] text-white border-[#8B6F47] shadow-sm"
                          : "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#8B6F47] hover:text-[#8B6F47]"
                        }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>

                {/* Clear filter */}
                {selectedFlavor !== "All" && (
                  <button
                    onClick={() => {
                      setSelectedFlavor("All");
                      setFilterOpen(false);
                    }}
                    className="mt-4 w-full text-xs text-gray-500 hover:text-[#8B6F47] underline transition-colors"
                  >
                    Clear filter
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Active filter badge ── */}
      {selectedFlavor !== "All" && (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center gap-2">
          <span className="text-sm text-gray-500">Showing flavour:</span>
          <span className="inline-flex items-center gap-1.5 bg-[#8B6F47]/10 text-[#8B6F47] text-sm font-medium px-3 py-1 rounded-full border border-[#8B6F47]/30">
            {selectedFlavor}
            <button
              onClick={() => setSelectedFlavor("All")}
              className="hover:text-[#6B5537] transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </span>
          <span className="text-sm text-gray-400">
            ({filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""})
          </span>
        </div>
      )}

      {/* ── Products Grid ── */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-medium">No products found for &quot;{selectedFlavor}&quot;</p>
            <button
              onClick={() => setSelectedFlavor("All")}
              className="mt-4 text-sm text-[#8B6F47] underline hover:text-[#6B5537]"
            >
              Show all products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="aspect-square p-6 flex items-center justify-center bg-white">
                  <Link href={`/productInfo?id=${product.id}`}>
                    <img
                      src={product.image || "/images/product-1.png"}
                      alt={product.name}
                      className="w-full h-full object-contain max-h-48 cursor-pointer hover:scale-105 transition-transform duration-200"
                    />
                  </Link>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3 min-h-[4rem]">
                    <h3 className="text-lg font-normal text-gray-900 flex-1 pr-2">
                      {product.name}
                    </h3>
                    <p className="text-xl font-normal text-green-600 whitespace-nowrap">
                      {product.price}
                    </p>
                  </div>

                  {/* Flavour tags */}
                  {product.flavor && product.flavor.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.flavor.map((f) => (
                        <span
                          key={f}
                          className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mx-10">
                    <button
                      onClick={() => handleBuyNow(product)}
                      className="flex-1 bg-[#EFAA2B] hover:bg-[#6B5537] text-white py-2 px-4 rounded-full font-medium transition-colors duration-200 text-sm"
                    >
                      Buy now
                      <ShoppingCart className="w-4 h-4 inline-block ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
