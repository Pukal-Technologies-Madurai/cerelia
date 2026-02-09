"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const productCategories = [
  { label: "Popped Pearl Millet", href: "/product?category=popped-pearl-millet" },
  { label: "Popped Wheat", href: "/product?category=popped-wheat" },
  { label: "Millet Puffs", href: "/product?category=millet-puffs" },
  { label: "Millet Bites", href: "/product?category=millet-bites" },
  { label: "View All Products", href: "/product" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileProductsOpen(false);
  }, [pathname]);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsProductsOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Our Brand Story" },
    { href: "/product", label: "Products", hasDropdown: false },
    { href: "#", label: "Combos" },
    { href: "/contact", label: "Contact Us", isButton: true },
  ];

  const isActiveLink = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`bg-accent border-b border-[#e8e0d4] transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-md" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Cerelia - Festival of Grains"
                className="h-11 sm:h-9 w-auto"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              // Products with dropdown
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`
                        inline-flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide
                        transition-all duration-200
                        ${
                          isActiveLink(link.href)
                            ? "text-[#2c5f4b] underline underline-offset-4 decoration-[#2c5f4b]"
                            : "text-[#3d3d3d] hover:text-[#2c5f4b]"
                        }
                      `}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={`
                        absolute top-full left-0 mt-1 w-56
                        bg-white rounded-xl shadow-xl border border-[#e8e0d4]
                        transition-all duration-200 origin-top
                        ${
                          isProductsOpen
                            ? "opacity-100 scale-100 visible"
                            : "opacity-0 scale-95 invisible"
                        }
                      `}
                    >
                      <div className="py-2">
                        {productCategories.map((cat) => (
                          <Link
                            key={cat.href}
                            href={cat.href}
                            className="block px-4 py-2.5 text-sm text-[#3d3d3d] hover:bg-accent hover:text-[#2c5f4b] transition-colors duration-150"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Contact Us — pill/outlined button
              if (link.isButton) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      ml-2 px-5 py-2 text-sm font-medium tracking-wide rounded-full
                      border-2 transition-all duration-200
                      ${
                        isActiveLink(link.href)
                          ? "border-[#2c5f4b] text-[#2c5f4b] bg-[#2c5f4b]/5"
                          : "border-[#3d3d3d] text-[#3d3d3d] hover:border-[#2c5f4b] hover:text-[#2c5f4b]"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              }

              // Regular link
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 text-sm font-medium tracking-wide
                    transition-all duration-200
                    ${
                      isActiveLink(link.href)
                        ? "text-[#2c5f4b] underline underline-offset-4 decoration-[#2c5f4b]"
                        : "text-[#3d3d3d] hover:text-[#2c5f4b]"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Side — Store Icons + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Amazon */}
            <a
              href="https://www.amazon.in/s?k=cerelia"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all duration-200"
              aria-label="Buy on Amazon"
              title="Buy on Amazon"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3d3d3d]" fill="currentColor">
                <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.748.074-1.051-.872-1.238-1.276-1.814-2.106-1.736 1.77-2.962 2.3-5.209 2.3-2.66 0-4.731-1.641-4.731-4.923 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.058-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66C6.066 1.672 9.068 0 11.684 0c1.357 0 3.134.361 4.205 1.387C17.178 2.6 17.144 4.24 17.144 5.89v5.336c0 1.604.667 2.307 1.292 3.173.221.308.27.678-.012.907-.707.593-1.962 1.693-2.652 2.313l-.628-.176z" />
                <path d="M21.894 19.52C20.466 20.57 18.282 21.5 16.476 21.5c-2.834 0-5.384-1.047-7.312-2.793-.152-.137-.016-.324.166-.218 2.082 1.212 4.659 1.941 7.319 1.941 1.793 0 3.765-.372 5.578-1.142.274-.12.504.178.246.393l-.579-.161z" />
                <path d="M22.658 18.684c-.207-.265-1.37-.125-1.893-.063-.159.019-.183-.119-.04-.219 .927-.651 2.447-.464 2.624-.245.178.222-.047 1.756-.916 2.488-.134.112-.261.053-.202-.095.196-.487.634-1.579.427-1.866z" />
              </svg>
            </a>

            {/* Blinkit */}
            <a
              href="https://blinkit.com/s/?q=cerelia"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all duration-200"
              aria-label="Buy on Blinkit"
              title="Buy on Blinkit"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#f5c731]" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="#f5c731" />
                <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff" fontFamily="sans-serif">B</text>
              </svg>
            </a>

            {/* Quick Buy */}
            <a
              href="https://mobite.dotpe.in/store/1/delivery#6095533"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all duration-200"
              aria-label="Quick Buy"
              title="Quick Buy"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3d3d3d]" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-[#3d3d3d]" />
              ) : (
                <Menu className="h-5 w-5 text-[#3d3d3d]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-accent border-t border-[#e8e0d4] px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg
                      text-base font-medium transition-colors duration-200
                      ${
                        isActiveLink(link.href)
                          ? "text-[#2c5f4b] bg-[#2c5f4b]/5"
                          : "text-[#3d3d3d] hover:bg-[#2c5f4b]/5 hover:text-[#2c5f4b]"
                      }
                    `}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isMobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isMobileProductsOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 py-1 space-y-1">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.href}
                          href={cat.href}
                          className="block px-4 py-2 text-sm text-[#3d3d3d] hover:text-[#2c5f4b] rounded-lg hover:bg-[#2c5f4b]/5 transition-colors duration-150"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  block px-4 py-3 rounded-lg text-base font-medium
                  transition-colors duration-200
                  ${
                    link.isButton
                      ? `text-center border-2 rounded-full mx-4 mt-2 ${
                          isActiveLink(link.href)
                            ? "border-[#2c5f4b] text-[#2c5f4b]"
                            : "border-[#3d3d3d] text-[#3d3d3d] hover:border-[#2c5f4b] hover:text-[#2c5f4b]"
                        }`
                      : isActiveLink(link.href)
                        ? "text-[#2c5f4b] bg-[#2c5f4b]/5"
                        : "text-[#3d3d3d] hover:bg-[#2c5f4b]/5 hover:text-[#2c5f4b]"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Mobile Store Links */}
          <div className="flex items-center justify-center gap-3 pt-4 border-t border-[#e8e0d4] mt-3">
            <a
              href="https://www.amazon.in/s?k=cerelia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a96e] text-sm text-[#3d3d3d] hover:bg-[#c9a96e]/10 transition-all"
            >
              Amazon
            </a>
            <a
              href="https://blinkit.com/s/?q=cerelia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a96e] text-sm text-[#3d3d3d] hover:bg-[#c9a96e]/10 transition-all"
            >
              Blinkit
            </a>
            <a
              href="https://mobite.dotpe.in/store/1/delivery#6095533"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a96e] text-sm text-[#3d3d3d] hover:bg-[#c9a96e]/10 transition-all"
            >
              Quick Buy
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
