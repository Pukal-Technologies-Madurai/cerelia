import React from "react";

export const metadata = {
    title: "About Us"
}

export default function About() {

    return (
        <div className="bg-white py-16 sm:py-24">

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col justify-center items-center gap-12 px-8 sm:px-12 lg:px-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>
                    <p className="text-center text-lg text-gray-600 leading-relaxed flex-1">
                        Welcome to Cerelia, where healthy snacking meets delicious Flavour! We believe that choosing
                        nourishing foods should be easy, enjoyable, and accessible for everyone. That's why we've
                        crafted a range of wholesome, convenient snacks designed to fuel your day, support your
                        well-being, and satisfy your cravings—all without compromise.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6 order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            We're on a mission to change the way people snack by making nutritious, clean, and tasty
                            options available for everyone. We believe in transparency, which is why we make every
                            ingredient count, so you know exactly what you're putting into your body. From sourcing
                            sustainably to supporting local communities, our commitment to quality and integrity guides
                            every step of our journey.
                        </p>
                    </div>

                    <div className="relative group order-1 lg:order-2">
                        <div className="relative aspect-square overflow-hidden rounded-2xl p-12">
                            <img src="/images/Popped CHips - Jowar.png"
                                alt="Our Mission"
                                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">

                    <div className="space-y-6 lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Cerelia?</h2>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 h-6 w-6 text-cyan-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg text-gray-600">
                                    <span className="font-semibold">Whole Ingredients</span> – We prioritize natural, whole
                                    foods in every recipe, including nutrient-dense nuts, seeds, fruits, and vegetables.
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 h-6 w-6 text-cyan-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg text-gray-600">
                                    <span className="font-semibold">Clean & Transparent</span> – No artificial flavors,
                                    fillers, or preservatives. Just honest, real food that you can trust.
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 h-6 w-6 text-cyan-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg text-gray-600">
                                    <span className="font-semibold">Deliciously Balanced</span> – We create snacks that are
                                    not only nourishing but also deliciously satisfying.
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 h-6 w-6 text-cyan-600">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-lg text-gray-600">
                                    <span className="font-semibold">Convenient & Ready</span> – Perfectly portioned and ready
                                    to go, our snacks are designed to keep up with your busy, active lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6 order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">The Birth of Cerelia</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            Our story unfolds in the cradle of civilization, where the first chapters of agriculture
                            were written. It was here, amidst the lush valleys and fertile plains, that humanity took
                            its first steps towards farming, with grains being the pioneers of this epochal journey.
                            The land where grains come alive! Our name, Cerelia, symbolizes the global festival of
                            grains, celebrating their diversity, culture, and nutritional wealth.
                        </p>
                    </div>

                    <div className="relative group order-1 lg:order-2">
                        <div className="relative aspect-square overflow-hidden rounded-2xl">
                            <img
                                src="/images/crops.png"
                                alt="Birth of Cerelia"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
                    <div className="relative group">
                        <div className="relative aspect-square overflow-hidden rounded-2xl">
                            <img
                                src="/images/festival_of_grains.jpg"
                                alt="Festival of Grains"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Festival of Grains</h2>
                        <p className="text-lg text-gray-600 leading-relaxed text-justify">
                            At our core, we believe that snacking should be both delicious and healthy. That's why we
                            create snacks that are good for you and the planet. Our customers are at the heart of
                            everything we do. We listen to their feedback and create snacks that they love.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed italic text-justify">
                            Thank you for letting us be a part of your wellness journey. We're excited to keep
                            innovating and bringing you snacks that make every bite a little healthier and happier.
                            Join us in redefining what it means to snack well-naturally!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}