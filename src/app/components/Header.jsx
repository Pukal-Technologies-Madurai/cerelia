"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-primary shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">

                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="Cerelia Logo"
                                width={500}
                                height={500}
                                className="h-8 w-auto md:h-10"
                                priority
                            />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/"
                            className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link href="/product"
                            className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Product
                        </Link>
                        <Link href="/contact"
                            className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="md:hidden">
                        <button onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-primary">
                            <Link
                                href="/"
                                className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                Product
                            </Link>
                            <Link
                                href="#"
                                className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium transition-colors duration-200"
                                onClick={toggleMenu}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;