"use client";
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
        }, 3000);

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
            className="relative overflow-hidden w-full"
            style={{ maxHeight: "720px" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* 16:9 aspect-ratio spacer — 720/1280 = 56.25% */}
            <div style={{ paddingBottom: "56.25%" }} />

            {/* Slider track — positioned absolutely to fill the 16:9 box */}
            <div
                ref={sliderRef}
                className="absolute inset-0 flex"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isSwiping ? "none" : "transform 0.5s ease-in-out",
                }}
            >
                {images.map((image, index) => (
                    <div key={index} className="min-w-full h-full flex-shrink-0">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Prev arrow */}
            <a
                className="absolute top-1/2 left-2 sm:left-3 transform -translate-y-1/2 text-white text-2xl sm:text-4xl font-bold px-2 py-4 sm:py-6 cursor-pointer z-10 select-none"
                onClick={prevSlide}
            >
                &#10094;
            </a>

            {/* Next arrow */}
            <a
                className="absolute top-1/2 right-2 sm:right-3 transform -translate-y-1/2 text-white text-2xl sm:text-4xl font-bold px-2 py-4 sm:py-6 cursor-pointer z-10 select-none"
                onClick={nextSlide}
            >
                &#10095;
            </a>

            {/* Dots */}
            <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`cursor-pointer rounded-full transition-all duration-300 ${index === currentIndex
                                ? "w-4 h-3 sm:w-5 sm:h-3 bg-white"
                                : "w-2 h-2 sm:w-3 sm:h-3 bg-white/50"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}