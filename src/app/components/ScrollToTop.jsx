"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    let tooltipTimeout;

    // Check scroll position and update visibility
    useEffect(() => {
        const checkScrollPosition = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 200); // Show button after 200px scroll
        };

        // Add scroll event listener
        window.addEventListener('scroll', checkScrollPosition);

        // Initial check
        checkScrollPosition();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        setIsClicked(true);
        // Reset hover state
        setIsHovered(false);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Reset clicked state after animation
        setTimeout(() => {
            setIsClicked(false);
        }, 300); // Match this with your transition duration
    };

    // Handle mouse enter (show tooltip)
    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsTooltipVisible(true);

        // Set timeout to hide tooltip after 3 seconds
        tooltipTimeout = setTimeout(() => {
            setIsTooltipVisible(false);
        }, 3000);
    };

    // Handle mouse leave (clear timeout and hide tooltip)
    const handleMouseLeave = () => {
        setIsHovered(false);

        // Clear the timeout to prevent premature hiding
        if (tooltipTimeout) {
            clearTimeout(tooltipTimeout);
        }
        setIsTooltipVisible(false);
    };

    // Don't render if not visible
    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`fixed bottom-6 right-7 z-50
                p-3 rounded-full 
                bg-primary hover:bg-primary/90 text-white
                transform transition-all duration-300 ease-in-out
                ${isHovered ? 'scale-110 shadow-lg' : 'scale-100 shadow-md'}
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                flex items-center justify-center
                group`}
            aria-label="Scroll to top"
        >
            <ArrowUp
                size={24}
                className={`transform transition-transform duration-300
        ${isHovered && !isClicked ? '-translate-y-1' : 'translate-y-0'}
        group-hover:animate-pulse`}
            />

            {/* Tooltip */}
            <span className={`absolute bottom-full mb-2 
                px-2 py-1 text-sm font-medium text-white bg-gray-900 rounded-md
                transition-opacity duration-300
                ${isTooltipVisible ? 'opacity-100' : 'opacity-0'}
                whitespace-nowrap`}
            >
                Back to top
            </span>
        </button>
    );
};

export default ScrollToTop;
