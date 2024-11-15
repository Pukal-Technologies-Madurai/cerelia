"use client";
import Image from "next/image";
import React from "react";

export const BannerSlide = ({ images }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isSwiping, setIsSwiping] = React.useState(false);
    const [startPosition, setStartPosition] = React.useState(0);
    const [currentTranslate, setCurrentTranslate] = React.useState(0);
    const sliderRef = React.useRef(null);

    React.useEffect(() => {
        const slider = sliderRef.current;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, [currentIndex]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleTouchStart = (e) => {
        setIsSwiping(true);
        setStartPosition(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isSwiping) return;
        const currentPosition = e.touches[0].clientX;
        setCurrentTranslate(currentPosition - startPosition);
    };

    const handleTouchEnd = () => {
        setIsSwiping(false);
        if (currentTranslate < -50) {
            nextSlide();
        } else if (currentTranslate > 50) {
            prevSlide();
        }
        setCurrentTranslate(0);
    };

    return (
        <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: isSwiping ? 'none' : 'transform 0.5s ease-in-out' }}
            >
                {images.map((image, index) => (
                    <div key={index} className="min-w-full box-border h-full">
                        <Image
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-auto"
                        />
                    </div>
                ))}
            </div>

            <a
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl font-bold px-2 py-6 cursor-pointer z-10"
                onClick={prevSlide}
            >
                &#10094;
            </a>
            <a
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl font-bold px-2 py-6 cursor-pointer z-10"
                onClick={nextSlide}
            >
                &#10095;
            </a>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`cursor-pointer w-3 h-3 bg-cyan-600 rounded-full ${index === currentIndex ? 'bg-cyan-200' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}