import React from "react";

export const metadata = {
    title: "About Us - Our Brand Story | Cerelia"
}

export default function About() {
    return (
        <div className="bg-white py-8 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-left bg-[#F1E7D4] p-3 w-2/4 rounded-t-2xl shadow-md px-16 py-12">
                    <h1 className="text-4xl md:text-5xl font-thin text-gray-900">
                        OUR BRAND STORY
                    </h1>
                </div>

                {/* Story Visual - Using the responsive image */}
                <div className="w-full">
                    <img
                        src="/images/about-content.png"
                        alt="Our Brand Story - Journey from farm to family"
                        className="w-full h-auto "
                        loading="eager"
                    />
                </div>

                {/* Story Content Sections */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Our Journey How We Started */}
                    <div className="text-center">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: 'cursive'}}>
                                Our Journey<br />How We Started
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Our journey began with a simple purpose – to create snacks that are natural, tasty, and trustworthy. We wanted to move away from overly processed foods and bring back snacks made with honest ingredients and real flavors.
                        </p>
                    </div>

                    {/* How We Make Our Organic Snacks */}
                    <div className="text-center">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{color: '#8B4513'}}>
                                How We Make Our<br />Organic Snacks
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            We carefully select natural grains and organic ingredients, following clean and mindful processes. No artificial colors, no harmful preservatives – just wholesome ingredients crafted into delicious snacks you can enjoy every day.
                        </p>
                    </div>

                    {/* Packed & Delivered Safely */}
                    <div className="text-center">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{color: '#D2691E'}}>
                                Packed &<br />Delivered Safely
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Every snack is prepared, packed, and sealed to maintain freshness, hygiene, and quality. From our kitchen to your doorstep, we make sure your snacks reach you safe, fresh, and full of flavor.
                        </p>
                    </div>

                    {/* And the Journey Continues With You */}
                    <div className="text-center">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2" style={{color: '#556B2F'}}>
                                And the Journey<br />Continues With You
                            </h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Your trust inspires us to keep improving and innovating. With every order, you become part of our journey toward better, healthier snacking – today and always.
                        </p>
                    </div>
                </div>

                {/* Additional Content Section */}
                <div className="mt-24 bg-gradient-to-r from-[#F5EFE6] to-[#FFF8E7] rounded-2xl p-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{fontFamily: 'cursive'}}>
                            Why Choose Cerelia?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#E3A041] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Whole Ingredients</h3>
                                <p className="text-gray-600 text-sm">Natural, whole foods in every recipe with nutrient-dense ingredients.</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#98C952] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean & Transparent</h3>
                                <p className="text-gray-600 text-sm">No artificial flavors, fillers, or preservatives. Just honest, real food.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#52A5C9] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deliciously Balanced</h3>
                                <p className="text-gray-600 text-sm">Snacks that are not only nourishing but also deliciously satisfying.</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-[#C97652] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Convenient & Ready</h3>
                                <p className="text-gray-600 text-sm">Perfectly portioned and ready to go for your busy, active lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}