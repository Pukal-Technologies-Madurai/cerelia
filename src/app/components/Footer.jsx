"use client"
import Link from "next/link";
import React from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navCol1 = [
        { label: "Home", href: "/" },
        { label: "Our Brand Story", href: "/about" },
        { label: "Products", href: "/product" },
        { label: "Combos", href: "/product" },
    ];

    const navCol2 = [
        { label: "Organic", href: "/product" },
        { label: "Spicy & Salty", href: "/product" },
        { label: "Popcorn", href: "/product" },
        { label: "Proteins", href: "/product" },
    ];

    const navCol3 = [
        { label: "Feedback Form", href: "/contact" },
        { label: "Shipping & Cancellations", href: "/shipping-replacement-policy" },
        { label: "Shop Near Me", href: "/contact" },
    ];

    return (
        <footer className="bg-white w-full">
            {/* Main Footer */}
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Column 1 — Logo + Contact + Social */}
                    <div className="lg:col-span-3 flex flex-col items-center md:items-start">
                        {/* Logo */}
                        <Link href="/" className="block mb-6">
                            <img
                                src="/images/logo.png"
                                alt="Cerelia - Festival of Grains"
                                className="h-8 sm:h-20 w-auto object-contain"
                                loading="lazy"
                            />
                        </Link>

                        {/* Contact Info */}
                        <div className="space-y-3 text-center md:text-left">
                            <a href="tel:+919025316142"
                                className="flex items-center gap-2 text-sm text-[#3d3d3d] hover:text-[#2c5f4b] transition-colors"
                            >
                                <Phone className="w-4 h-4 text-[#2c5f4b] shrink-0" />
                                <span>+91 90253 16142</span>
                            </a>
                            <a href="mailto:Cerelia12@gmail.com"
                                className="flex items-center gap-2 text-sm text-[#3d3d3d] hover:text-[#2c5f4b] transition-colors"
                            >
                                <Mail className="w-4 h-4 text-[#2c5f4b] shrink-0" />
                                <span>Cerelia12@gmail.com</span>
                            </a>
                            <div className="flex items-start gap-2 text-sm text-[#3d3d3d]">
                                <MapPin className="w-4 h-4 text-[#2c5f4b] shrink-0 mt-0.5" />
                                <span>DP.NO.CS 8, SIDCO Industrial Estate, near Kappalur, Madurai, Tamil Nadu 625008</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-5">
                            <Link href="https://www.facebook.com/CereliaFestivalofgrains"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#3b5998] hover:text-white hover:border-[#3b5998] transition-all duration-200"
                                aria-label="Facebook"
                            >
                                <img
                                    src="/images/facebook.png"
                                    alt="Cerelia - Festival of Grains"
                                />
                            </Link>
                            <a href="https://wa.me/+919025316142"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200"
                                aria-label="WhatsApp"
                            >
                                <img
                                    src="/images/whatspp.png"
                                    alt="Cerelia - Festival of Grains"
                                />
                            </a>
                            <Link href="https://www.instagram.com/cereliaindia/profilecard"
                                target="_blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-200"
                                aria-label="Instagram"
                            >
                                <img
                                    src="/images/instagram.png"
                                    alt="Cerelia - Festival of Grains"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Divider — visible only on lg */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="w-px h-full bg-[#d4cec4] mx-auto" />
                    </div>

                    {/* Column 2 — Nav Links (3 sub-columns) */}
                    <div className="lg:col-span-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                            {/* Nav Sub-col 1 */}
                            <div className="space-y-3">
                                {navCol1.map((link) => (
                                    <Link key={link.label} href={link.href}
                                        className="block text-sm text-[#3d3d3d] hover:text-[#2c5f4b] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            {/* Nav Sub-col 2 */}
                            <div className="space-y-3">
                                {navCol2.map((link) => (
                                    <Link key={link.label} href={link.href}
                                        className="block text-sm text-[#3d3d3d] hover:text-[#2c5f4b] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            {/* Nav Sub-col 3 */}
                            <div className="space-y-3 col-span-2 sm:col-span-1">
                                {navCol3.map((link) => (
                                    <Link key={link.label} href={link.href}
                                        className="block text-sm text-[#3d3d3d] hover:text-[#2c5f4b] transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Divider — visible only on lg */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="w-px h-full bg-[#d4cec4] mx-auto" />
                    </div>

                    {/* Column 3 — Certifications */}
                    <div className="lg:col-span-3 flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-[#2c5f4b] underline underline-offset-4 decoration-[#2c5f4b] mb-6">
                            We Are Certified
                        </h3>
                        <div className="flex items-center gap-6">
                            <img
                                src="/images/footer-nabh.png"
                                alt="NABL Pre Accredited"
                                className="h-16 sm:h-20 w-auto object-contain"
                                loading="lazy"
                            />
                            <img
                                src="/images/footer-fssai.png"
                                alt="FSSAI Certified"
                                className="h-14 sm:h-18 w-auto object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#d4cec4]">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#3d3d3d]">

                        {/* Left — Policy Links */}
                        <div className="flex items-center gap-4">
                            <Link href="/privacy-policy" className="hover:text-[#2c5f4b] transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms-conditions" className="hover:text-[#2c5f4b] transition-colors">
                                Terms & Condition
                            </Link>
                        </div>

                        {/* Center — Copyright */}
                        <p className="text-center">
                            Copyright &copy; {currentYear} by Shri Foods &amp; Pukal Foods
                        </p>

                        {/* Right — Manufacturer & Marketer */}
                        <div className="flex items-center gap-4 flex-wrap justify-center">
                            <span className="flex items-center gap-1.5">
                                Manufacturer by Shri Foods
                                <img src="/images/footer-shrifoods.png" alt="Shri Foods" className="h-6 w-auto object-contain" loading="lazy" />
                            </span>
                            <span className="flex items-center gap-1.5">
                                Marketed by Pukal Foods
                                <img src="/images/footer-pukalfoods.png" alt="Pukal Foods" className="h-6 w-auto object-contain" loading="lazy" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}