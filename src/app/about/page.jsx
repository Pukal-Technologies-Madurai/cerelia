import React from "react";

export const metadata = {
    title: "About Us - Our Brand Story | Cerelia",
    description:
        "Learn how Cerelia started and our mission to bring wholesome, natural snacks to every home.",
};

const whyItems = [
    {
        bg: "bg-[#E3A041]",
        icon: (
            <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
            />
        ),
        title: "Whole Ingredients",
        body: "Natural, whole foods in every recipe with nutrient-dense ingredients.",
    },
    {
        bg: "bg-[#98C952]",
        icon: (
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        ),
        title: "Clean & Transparent",
        body: "No artificial flavors, fillers, or preservatives. Just honest, real food.",
    },
    {
        bg: "bg-[#52A5C9]",
        icon: (
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        ),
        title: "Deliciously Balanced",
        body: "Snacks that are not only nourishing but also deliciously satisfying.",
    },
    {
        bg: "bg-[#C97652]",
        icon: (
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        ),
        title: "Convenient & Ready",
        body: "Perfectly portioned and ready to go for your busy, active lifestyle.",
    },
];

export default function About() {
    return (
        <div className="bg-white py-8 sm:py-14">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Brand Story Card — folder-tab layout ── */}
                <div className="relative mt-10">

                    {/* Folder Tab — sits above the card top-left like a manila folder */}
                    <div className="absolute -top-10 left-0 bg-[#EDE0CC] text-gray-800 text-[11px] sm:text-sm font-semibold tracking-widest uppercase px-6 sm:px-8 py-2.5 sm:py-3 rounded-t-xl shadow-sm" style={{ borderBottom: 'none' }}>
                        Our Brand Story
                    </div>

                    <div className="rounded-2xl rounded-tl-none overflow-hidden shadow-md bg-[#F5EFE6]">

                        {/* ────────────────────────────────────────────
                        IMAGE ROW with winding path connecting them
                        ──────────────────────────────────────────── */}
                        <div className="relative">

                            {/* 4 images side by side */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                                {/* Image 1 */}
                                <div className="overflow-hidden border-r border-[#DDD0BB]">
                                    <img
                                        src="/images/Our story 1.png"
                                        alt="Our journey — A beautiful farm landscape at sunrise"
                                        className="w-full h-52 sm:h-60 lg:h-64 object-cover"
                                        loading="eager"
                                    />
                                </div>
                                {/* Image 2 */}
                                <div className="overflow-hidden border-r border-[#DDD0BB]">
                                    <img
                                        src="/images/Our story 2.png"
                                        alt="How we make our organic snacks — chefs in the kitchen"
                                        className="w-full h-52 sm:h-60 lg:h-64 object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Image 3 */}
                                <div className="overflow-hidden border-r border-[#DDD0BB]">
                                    <img
                                        src="/images/Our story 3.png"
                                        alt="Packed safely — warehouse packing with care"
                                        className="w-full h-52 sm:h-60 lg:h-64 object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Image 4 */}
                                <div className="overflow-hidden">
                                    <img
                                        src="/images/Our story 4.png"
                                        alt="The journey continues with you — happy family delivery"
                                        className="w-full h-52 sm:h-60 lg:h-64 object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Winding path SVG — spans full width across the bottom of the image row */}
                            <div className="hidden lg:block absolute bottom-0 left-0 w-full pointer-events-none" aria-hidden>
                                <svg
                                    viewBox="0 0 1200 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full"
                                    preserveAspectRatio="none"
                                >
                                    {/* Sandy road fill */}
                                    <path
                                        d="M0 45 C80 20, 160 55, 300 35 C420 18, 500 50, 600 30 C700 12, 800 48, 950 28 C1060 14, 1140 46, 1200 30 L1200 60 L0 60 Z"
                                        fill="#D4B896"
                                        opacity="0.45"
                                    />
                                    {/* Road center line */}
                                    <path
                                        d="M0 45 C80 20, 160 55, 300 35 C420 18, 500 50, 600 30 C700 12, 800 48, 950 28 C1060 14, 1140 46, 1200 30"
                                        stroke="#B8935A"
                                        strokeWidth="2.5"
                                        strokeDasharray="10 6"
                                        opacity="0.6"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* ────────────────────────────────────────────
                        TEXT ROW — 4 columns matching images above
                        ──────────────────────────────────────────── */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#DDD0BB]">

                            {/* Column 1 — special italic treatment */}
                            <div className="px-6 py-7 sm:px-7 sm:py-8 flex flex-col gap-3">
                                {/* Leaf icon + title */}
                                <div className="flex items-start gap-2">
                                    {/* Leaf SVG */}
                                    <svg
                                        className="w-6 h-6 flex-shrink-0 mt-0.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-13 6 0 0 0-5 9-9-4.5 1-8 4.5-9 9z"
                                            fill="#4A7C3F"
                                        />
                                    </svg>
                                    <h3
                                        className="text-lg sm:text-xl font-bold leading-snug"
                                        style={{ color: "#3B3A2E", fontStyle: "italic", fontFamily: "Georgia, serif" }}
                                    >
                                        Our Journey<br />How We Started
                                    </h3>
                                </div>
                                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed uppercase tracking-wide">
                                    Our journey began with a simple purpose — to create snacks that are natural, tasty, and trustworthy. We wanted to move away from overly processed foods and bring back snacks made with honest ingredients and real flavors.
                                </p>
                            </div>

                            {/* Column 2 */}
                            <div className="px-6 py-7 sm:px-7 sm:py-8 flex flex-col gap-3">
                                <h3
                                    className="text-lg sm:text-xl font-bold leading-snug"
                                    style={{ color: "#8B4513", fontFamily: "Georgia, serif" }}
                                >
                                    How We Make Our<br />Organic Snacks
                                </h3>
                                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed uppercase tracking-wide">
                                    We carefully select natural grains and organic ingredients, following clean and mindful processes. No artificial colors, no harmful preservatives — just wholesome ingredients crafted into delicious snacks you can enjoy every day.
                                </p>
                            </div>

                            {/* Column 3 */}
                            <div className="px-6 py-7 sm:px-7 sm:py-8 flex flex-col gap-3">
                                <h3
                                    className="text-lg sm:text-xl font-bold leading-snug"
                                    style={{ color: "#C85A2A", fontFamily: "Georgia, serif" }}
                                >
                                    Packed &amp;<br />Delivered Safely
                                </h3>
                                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed uppercase tracking-wide">
                                    Every snack is prepared, packed, and sealed with care to maintain freshness, hygiene, and quality. From our kitchen to your doorstep, we make sure your snacks reach you safe, fresh, and full of flavor.
                                </p>
                            </div>

                            {/* Column 4 */}
                            <div className="px-6 py-7 sm:px-7 sm:py-8 flex flex-col gap-3">
                                <h3
                                    className="text-lg sm:text-xl font-bold leading-snug"
                                    style={{ color: "#4A7C3F", fontFamily: "Georgia, serif" }}
                                >
                                    And the Journey<br />Continues With You
                                </h3>
                                <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed uppercase tracking-wide">
                                    Your trust inspires us to keep improving and innovating. With every order, you become part of our journey toward better, healthier snacking — today and always.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>{/* end folder-tab wrapper */}

                {/* ── Why Choose Cerelia ── */}
                <div className="mt-12 sm:mt-16 bg-gradient-to-br from-[#F5EFE6] to-[#FFF8E7] rounded-2xl p-8 sm:p-12 shadow-sm">
                    <h2
                        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10"
                        style={{ fontFamily: "Georgia, serif" }}
                    >
                        Why Choose Cerelia?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyItems.map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div
                                    className={`w-14 h-14 sm:w-16 sm:h-16 ${item.bg} rounded-full flex items-center justify-center mb-4 shadow-md`}
                                >
                                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        {item.icon}
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}