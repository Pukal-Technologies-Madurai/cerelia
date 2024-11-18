"use client"
import Link from "next/link";
import React from "react";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-primary text-white w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                <div className="py-2 sm:py-4 lg:py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                        <div className="w-52 sm:w-56 md:w-64 lg:w-72 xl:w-80 shrink-0">
                            <Link href="/" className="block">
                                <img src="/images/logo.png"
                                    alt="Cerelia Logo"
                                    className="w-full h-auto object-contain max-h-52 lg:max-h-60"
                                    loading="lazy"
                                />
                            </Link>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-right bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                                Stay healthy with us
                            </h2>
                            <div className="flex items-center gap-6">
                                <Link href="https://www.facebook.com/CereliaFestivalofgrains"
                                    target="_blank"
                                    className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#3b5998]"
                                    aria-label="Follow us on Facebook"
                                >
                                    <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
                                </Link>
                                <Link href="https://www.instagram.com/cereliaindia/profilecard"
                                    target="_blank"
                                    className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-[#8a3ab9]"
                                    aria-label="Follow us on Instagram"
                                >
                                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6 sm:my-8" />

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