"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./membership-audience-section.css";

export default function MembershipAudienceSection() {
    const [activeTab, setActiveTab] = useState(0);

    const audiences = [
        {
            id: 1,
            tab: "Leaders & Executives",
            image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000",

            heroTitle: "Leaders &",
            heroItalic: "executives",

            title:
                "Move through the world with priority, comfort.",

            description:
                "For senior leaders and executives, FoundersCard delivers elevated travel, seamless access, and the kind of recognition that makes everything feel easier.",

            features: [
                {
                    title: "Exceptional travel",
                    text: "Loyalty status across airlines and hotels, luxury hotel preferred rates, elite upgrades, airport concierge.",
                },
                {
                    title: "Lifestyle advantages",
                    text: "VIP access to global events, wellness benefits, dining perks and experiences.",
                },
                {
                    title: "Trusted circle",
                    text: "A curated network of experienced leaders and decision-makers.",
                },
                {
                    title: "Always-on support",
                    text: "AI and human concierge support.",
                },
            ],
        },

        {
            id: 2,
            tab: "Entrepreneurs & Business Owners",
            image:
                "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2000",

            heroTitle: "Entrepreneurs",
            heroItalic: "& business owners",

            title:
                "Get the tools, savings, and network that help turn ideas into traction.",

            description:
                "From discounted software and shipping to travel perks that stretch your runway, FoundersCard helps founders and entrepreneurs operate like seasoned pros.",

            features: [
                {
                    title: "Better travel",
                    text: "Preferred airfare and hotel rates, upgrades, and elite status.",
                },
                {
                    title: "Smarter spend",
                    text: "Access to hundreds of software, services, and business essentials.",
                },
                {
                    title: "Real network",
                    text: "A global community of founders and operators.",
                },
                {
                    title: "Always-on support",
                    text: "AI and human concierge helping you get more done.",
                },
            ],
        },

        {
            id: 3,
            tab: "Entrepreneurial Professionals",
            image:
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000",

            heroTitle: "Entrepreneurial",
            heroItalic: "professionals",

            title:
                "Unlock status, access and flexibility without friction.",

            description:
                "For consultants, investors, creators and independent professionals, FoundersCard delivers elite access and advantages that keep you moving effortlessly.",

            features: [
                {
                    title: "Loyalty status unlocked",
                    text: "Airline, hotel and rental car status that upgrades how you move.",
                },
                {
                    title: "Preferred travel",
                    text: "Private hotel and airfare rates designed for constant mobility.",
                },
                {
                    title: "Trusted circle",
                    text: "Global network of founders, operators and decision-makers.",
                },
                {
                    title: "Always-on support",
                    text: "AI and human concierge handling planning and logistics.",
                },
            ],
        },
    ];

    const current = audiences[activeTab];

    return (
        <section className="px-4 py-10 lg:px-6">
            <div className="relative overflow-hidden rounded-[32px] min-h-[850px]">
                {/* Background */}
                <img
                    src={current.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Tabs */}
                <div className="absolute top-4 left-4 right-4 z-20">
                    <div className="flex rounded-2xl bg-white/10 backdrop-blur-xl p-2">
                        {audiences.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(index)}
                                className={`
                  flex-1
                  rounded-xl
                  py-3
                  px-4
                  text-xs
                  md:text-sm
                  lg:text-base
                  transition-all
                  duration-300

                  ${activeTab === index
                                        ? "bg-white text-black"
                                        : "text-white"
                                    }
                `}
                            >
                                <span className="font-semibold mr-2">
                                    0{index + 1}.
                                </span>

                                <span className="hidden md:inline">
                                    {item.tab}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 grid min-h-[850px] lg:grid-cols-2 pt-20">
                    {/* Left Side */}
                    <div className="flex items-end p-4 md:p-6 lg:p-10">
                        <div>
                            <h2 className="text-white leading-none">
                                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
                                    {current.heroTitle}
                                </span>

                                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic font-light">
                                    {current.heroItalic}
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center p-4 md:p-6 lg:p-10">
                        <div className="max-w-[620px]">
                            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-light leading-tight">
                                {current.title}
                            </h3>

                            <p className="mt-8 text-white/90 text-base md:text-lg leading-relaxed">
                                {current.description}
                            </p>

                            <div className="mt-10">
                                {current.features.map((item, index) => (
                                    <div
                                        key={index}
                                        className="border-t border-white/20 py-5"
                                    >
                                        <h4 className="font-semibold text-white">
                                            {item.title}
                                        </h4>

                                        <p className="mt-1 text-white/80">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-4
                  text-black
                  transition
                  hover:scale-105
                "
                            >
                                Preview Membership

                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                                    <ArrowRight size={16} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}