"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();

    const handleBuyNow = () => {
        window.open("https://pukalfoods.com/cerelia", "_blank");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/product", label: "Products" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
        {
            href: "#",
            label: "Buy Now",
            onClick: handleBuyNow,
            className: "bg-white text-center text-primary px-4 py-1 rounded-full hover:bg-opacity-90 transition-all duration-200"
        },
    ];

    const isActiveLink = (path) => {
        if (path === "/") {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    return (
        <header className={`bg-primary shadow-lg ${isSticky ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300" : ""}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <img src="/images/logo.png"
                                alt="Logo"
                                className="h-32 w-auto"
                                loading="lazy"
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href}
                                href={link.href}
                                onClick={link.onClick}
                                className={`
                                    relative py-2
                                    text-sm tracking-wider
                                    transition-colors duration-200
                                    group
                                    ${link.className || ""}
                                    ${!link.className ? (
                                        isActiveLink(link.href)
                                            ? "text-white font-bold after:w-full"
                                            : "text-gray-200 hover:text-white"
                                    ) : ''}
                                    ${!link.className ? `
                                        after:content-[""]
                                        after:absolute
                                        after:bottom-0
                                        after:left-0
                                        after:h-0.5
                                        after:bg-white
                                        after:transition-all
                                        after:duration-300
                                        after:ease-in-out
                                        ${isActiveLink(link.href)
                                            ? "after:w-full"
                                            : "after:w-0 hover:after:w-full"
                                        }
                                    ` : ''}
                                `}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-200 hover:text-white p-2"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href}
                                    onClick={(e) => {
                                        setIsMenuOpen(false);
                                        if (link.onClick) {
                                            e.preventDefault();
                                            link.onClick();
                                        }
                                    }}
                                    className={`
                                        relative block px-3 py-2
                                        text-base font-medium
                                        transition-colors duration-200
                                        ${link.className || ""}
                                        ${!link.className ? (
                                            isActiveLink(link.href)
                                                ? "text-white font-bold border-l-4 border-white pl-2"
                                                : "text-gray-200 hover:text-white hover:border-l-4 hover:border-white hover:pl-2"
                                        ) : ""}
                                        sm:w-auto w-fit
                                    `}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;