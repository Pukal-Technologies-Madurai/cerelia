"use client"
import Link from "next/link";
import React from "react";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-primary text-white w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                <div className="py-8 sm:py-12 lg:py-16">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

                        {/* Logo Section */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80">
                                <Link href="/" className="block">
                                    <img src="/images/logo.png"
                                        alt="Cerelia Logo"
                                        className="w-full h-auto object-contain max-h-48 lg:max-h-56"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Quick Links Section */}
                        <div className="flex flex-col items-center lg:items-start">
                            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center lg:text-left">
                                Quick Links
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-sm">
                                <Link href="/about"
                                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 text-center sm:text-left"
                                >
                                    About Us
                                </Link>
                                <Link href="/product"
                                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 text-center sm:text-left"
                                >
                                    Products
                                </Link>
                                <Link href="/contact"
                                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 text-center sm:text-left"
                                >
                                    Contact
                                </Link>
                                <Link href="/privacy-policy"
                                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 text-center sm:text-left"
                                >
                                    Privacy Policy
                                </Link>
                                <Link href="/shipping-replacement-policy"
                                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 text-center sm:text-left"
                                >
                                    Shipping Policy
                                </Link>
                                <Link href="/terms-conditions"
                                    className="text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 text-center sm:text-left"
                                >
                                    Terms & Conditions
                                </Link>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="flex flex-col items-center lg:items-end">
                            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center lg:text-right">
                                Follow Us
                            </h3>
                            <div className="flex items-center gap-4">
                                <Link href="https://www.facebook.com/CereliaFestivalofgrains"
                                    target="_blank"
                                    className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#3b5998] border border-white/20 hover:border-[#3b5998]"
                                    aria-label="Follow us on Facebook"
                                >
                                    <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
                                </Link>
                                <Link href="https://www.instagram.com/cereliaindia/profilecard"
                                    target="_blank"
                                    className="p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#8a3ab9] border border-white/20 hover:border-[#8a3ab9]"
                                    aria-label="Follow us on Instagram"
                                >
                                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                                </Link>
                            </div>
                            <p className="text-sm text-white/70 mt-4 text-center lg:text-right">
                                Stay healthy with us
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-sm sm:text-base text-white/80">
                            &copy; {currentYear} Cerelia is the registered trade mark of Pukal Foods pvt ltd.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}