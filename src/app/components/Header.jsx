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
    { href: "/combos", label: "Combos" },
    { href: "/contact", label: "Contact Us", isButton: false },
  ];

  const isActiveLink = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`bg-accent border-b border-[#e8e0d4] transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-md" : "relative"
        }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        inline-flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide rounded-full border-2
                        transition-all duration-200
                        ${isActiveLink(link.href)
                          ? "border-[#2c5f4b] text-[#2c5f4b] bg-[#2c5f4b]/5"
                          : "border-transparent text-[#3d3d3d] hover:border-[#2c5f4b] hover:text-[#2c5f4b]"
                        }
                      `}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""
                          }`}
                      />
                    </Link>

                    {/* Dropdown */}
                    <div
                      className={`
                        absolute top-full left-0 mt-1 w-56
                        bg-white rounded-xl shadow-xl border border-[#e8e0d4]
                        transition-all duration-200 origin-top
                        ${isProductsOpen
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
                      ${isActiveLink(link.href)
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
                    px-4 py-2 text-sm font-medium tracking-wide rounded-full border-2
                    transition-all duration-200
                    ${isActiveLink(link.href)
                      ? "border-[#2c5f4b] text-[#2c5f4b] bg-[#2c5f4b]/5"
                      : "border-transparent text-[#3d3d3d] hover:border-[#2c5f4b] hover:text-[#2c5f4b]"
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
              <img
                src="/images/header-amazon.png"
                alt="Amazon"
                className="w-5 h-5 object-contain"
              />
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
              <img
                src="/images/header-blinkit.png"
                alt="Blinkit"
                className="w-10 h-10 object-contain"
              />
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
                      ${isActiveLink(link.href)
                        ? "text-[#2c5f4b] bg-[#2c5f4b]/5"
                        : "text-[#3d3d3d] hover:bg-[#2c5f4b]/5 hover:text-[#2c5f4b]"
                      }
                    `}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${isMobileProductsOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
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
                  ${link.isButton
                    ? `text-center border-2 rounded-full mx-4 mt-2 ${isActiveLink(link.href)
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
