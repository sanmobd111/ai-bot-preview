"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import "./membership-audience-section.css";
import TextReveal from "@/components/shared/text-reveal";
import CharacterReveal from "@/components/shared/character-reveal";
import StaggerReveal from "@/components/shared/stagger-reveal";

export default function MembershipAudienceSection() {
    const [activeTab, setActiveTab] = useState(0);
    const parentContainerRef = useRef<HTMLDivElement>(null);

    const audiences = [
        {
            id: 1,
            tab: "Leaders & Executives",
            image:
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/members-leaders-a3c6646619763dc4fecde22d8b76826e9517608bb092b59ffe4608044cbfe1f0.jpg",

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
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/members-entrepreneurs-3e4f19ae20054f93ba5fb6547f21c64c01ef12fd452fd4b0f9bd9300b3b22c44.jpg",

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
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/members-professionals-900229f36358a5a61451dba3902d569cc80ede236cf686bec0303977e275a724.jpg",

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
            <div className="mb-10 md:mb-14 lg:mb-20">
                <TextReveal
                    className="mb-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs reveal-text"
                >
                    OUR MEMBERS
                </TextReveal>

                <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
                    <CharacterReveal
                        className="
                            font-serif
                            leading-[1.2]
                            tracking-[-0.04em]
                            text-zinc-900
                            text-[clamp(2.75rem,4vw,6rem)]
                          "
                    >
                        Designed for every
                        <br />
                        stage{" "}
                        <span className="italic font-light text-zinc-500">
                            of ambition.
                        </span>
                    </CharacterReveal>

                    <div className="flex items-end">
                        <TextReveal
                            className="max-w-md text-base leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text">
                            FoundersCard empowers entrepreneurs, business owners, and leaders at every stage of their journey. Whether you’re building your first company, running a growing business, or leading at the highest level, your drive deserves to be rewarded.
                        </TextReveal>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-[32px] min-h-[850px]"
                ref={parentContainerRef}
            >
                {
                    audiences.map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt=""
                            className={`top-1/2 -translate-y-1/2 left-1/2 duration-300 -translate-x-1/2 h-full w-full object-cover transition-all duration-700 z-[5] absolute ${activeTab === index ? "w-full h-full" : " delay-500 w-0! h-0!"}`}
                        />
                    ))
                }

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45 z-[6] " />

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
                <div className="relative z-[15] grid min-h-[850px] lg:grid-cols-2 pt-20">
                    {/* Left Side */}
                    <div className="flex items-end p-4 md:p-6 lg:p-10">
                        <div>
                            <StaggerReveal className="text-white leading-none" animationKey={activeTab} parentContainerRef={parentContainerRef} delay={1}>
                                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light reveal-item">
                                    {current.heroTitle}
                                </span>

                                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic font-light reveal-item">
                                    {current.heroItalic}
                                </span>
                            </StaggerReveal>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center p-4 md:p-6 lg:p-10">
                        {/* <div className="max-w-[620px]">
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
                        </div> */}
                        <StaggerReveal
                            parentContainerRef={parentContainerRef}
                            animationKey={activeTab}
                            delay={1}
                        >
                            <h3 className="reveal-item text-white text-4xl">
                                {current.title}
                            </h3>

                            <p className="reveal-item mt-8 text-white/90">
                                {current.description}
                            </p>

                            <div className="mt-10">
                                {current.features.map((item, index) => (
                                    <div
                                        key={index}
                                        className="reveal-item border-t border-white/20 py-5"
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
      reveal-item
      mt-8
      inline-flex
      items-center
      gap-3
      rounded-full
      bg-white
      px-6
      py-4
      text-black
    "
                            >
                                Preview Membership
                            </button>
                        </StaggerReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}