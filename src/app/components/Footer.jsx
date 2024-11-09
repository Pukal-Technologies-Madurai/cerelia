"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About Section */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/images/logo.png"
                                width={180}
                                height={60}
                                alt="Cerelia Logo"
                                className="mb-4"
                            />
                        </Link>
                        <p className="text-gray-300 text-sm mt-4">
                            Providing quality products and services since 2020. Your trusted partner in excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-center md:justify-start text-gray-300">
                                <Phone className="h-5 w-5 mr-2" />
                                <span>+91 902 531 6142</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start text-gray-300">
                                <Mail className="h-5 w-5 mr-2" />
                                <span>cereliaecom@gmail.com</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start text-gray-300">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span>SIDCO Industrial Estate, Madurai.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <Instagram className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-300 text-sm mb-4 md:mb-0">
                            &copy; {currentYear} Cerelia™. All Rights Reserved.
                        </div>
                        <div className="flex space-x-4 text-sm text-gray-300">
                            <Link href="#" className="hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors duration-200">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer