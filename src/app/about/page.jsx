import React from "react";

export const metadata = {
    title: "About Us - Our Brand Story | Cerelia",
    description: "Learn how Cerelia started and our mission to bring wholesome, natural snacks to every home.",
};

const storySteps = [
    {
        title: "Our Journey\nHow We Started",
        titleColor: "text-gray-800",
        titleStyle: "italic",
        body: "Our journey began with a simple purpose — to create snacks that are natural, tasty, and trustworthy. We wanted to move away from overly processed foods and bring back snacks made with honest ingredients and real flavors.",
    },
    {
        title: "How We Make Our\nOrganic Snacks",
        titleColor: "text-[#8B4513]",
        titleStyle: "normal",
        body: "We carefully select natural grains and organic ingredients, following clean and mindful processes. No artificial colors, no harmful preservatives — just wholesome ingredients crafted into delicious snacks you can enjoy every day.",
    },
    {
        title: "Packed &\nDelivered Safely",
        titleColor: "text-[#C85A2A]",
        titleStyle: "normal",
        body: "Every snack is prepared, packed, and sealed with care to maintain freshness, hygiene, and quality. From our kitchen to your doorstep, we make sure your snacks reach you safe, fresh, and full of flavor.",
    },
    {
        title: "And the Journey\nContinues With You",
        titleColor: "text-[#4A7C3F]",
        titleStyle: "normal",
        body: "Your trust inspires us to keep improving and innovating. With every order, you become part of our journey toward better, healthier snacking — today and always.",
    },
];

const whyItems = [
    {
        bg: "bg-[#E3A041]",
        icon: (
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Brand Story Card ── */}
                <div className="rounded-2xl overflow-hidden shadow-md bg-[#F5EFE6]">

                    {/* Tab header — pill that sits flush top-left */}
                    <div className="px-6 pt-5 pb-4 sm:px-10 sm:pt-7">
                        <span className="inline-block bg-[#EDE0CC] text-gray-700 text-xs sm:text-sm font-semibold tracking-widest uppercase px-5 py-2 rounded-full border border-[#D9C9AF]">
                            Our Brand Story
                        </span>
                    </div>

                    {/* Full-width story illustration */}
                    <div className="w-full">
                        <img
                            src="/images/about-content.png"
                            alt="Our Brand Story — Journey from farm to family"
                            className="w-full h-auto object-cover"
                            loading="eager"
                        />
                    </div>

                    {/* 4-column story text — inside the card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#DDD0BB]">
                        {storySteps.map((step, i) => (
                            <div key={i} className="px-6 py-8 sm:px-8 sm:py-10">
                                <h3
                                    className={`text-base sm:text-lg font-bold leading-snug mb-3 whitespace-pre-line ${step.titleColor} ${step.titleStyle === "italic" ? "italic" : ""}`}
                                >
                                    {step.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    {step.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Why Choose Cerelia ── */}
                <div className="mt-12 sm:mt-16 bg-gradient-to-br from-[#F5EFE6] to-[#FFF8E7] rounded-2xl p-8 sm:p-12 shadow-sm">
                    <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10" style={{ fontFamily: "Georgia, serif" }}>
                        Why Choose Cerelia?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyItems.map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${item.bg} rounded-full flex items-center justify-center mb-4 shadow-md`}>
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