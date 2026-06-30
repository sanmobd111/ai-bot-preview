"use client";

import CharacterReveal from "@/components/shared/character-reveal";
import AnimatedPreviewButton from "@/components/shared/preview-button/animated-preview-button/animated-preview-button";
import StaggerReveal from "@/components/shared/stagger-reveal";
import TextReveal from "@/components/shared/text-reveal";
import { Plus, X } from "lucide-react";
import { useRef, useState } from "react";
import "./membership-audience-section.css";
import SecondaryPreviewButton from "@/components/shared/preview-button/secondary-preview-button";

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
        <section className="px-4 py-6 md:py-8 lg:py-10 bg-[#f5f5f0]">
            <div className="mb-10 md:mb-14 lg:mb-20 mt-12 lg:w-[90%] mx-auto">
                <TextReveal
                    className="mb-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs reveal-text"
                >
                    OUR MEMBERS
                </TextReveal>

                <div className="max-w-2xl mb-4">
                    <CharacterReveal
                        className="
                            feature-display
                            font-light
                            leading-[1.2]
                            tracking-[-0.04em]
                            text-zinc-900
                                lg:text-[88px]
                                text-5xl
                                my-6
                                lg:my-0
                            "
                    >
                        Designed for every
                        <br />
                        stage{" "}
                        <span className="italic font-light text-zinc-500">
                            of ambition.
                        </span>
                    </CharacterReveal>

                </div>
                <div className="flex justify-end">
                    <TextReveal
                        className="lg:max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text">
                        FoundersCard empowers entrepreneurs, business owners, and leaders at every stage of their journey. Whether you’re building your first company, running a growing business, or leading at the highest level, your drive deserves to be rewarded.
                    </TextReveal>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-4xl xl:h-[130vh] 2xl:h-[90vh] hidden lg:block"
                ref={parentContainerRef}
            >
                {
                    audiences.map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt=""
                            className={`top-1/2 -translate-y-1/2 left-1/2 rounded-4xl duration-300 -translate-x-1/2 h-full w-full object-cover transition-all duration-700 z-[5] absolute ${activeTab === index ? "w-full h-full" : " delay-700 w-0! h-0!"}`}
                        />
                    ))
                }

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45 z-[6] " />

                {/* Tabs */}
                <div className="absolute top-4 left-10 right-10 z-20 bg-white/10 backdrop-blur-xl rounded-xl">
                    <div className={`absolute bg-white w-1/3 h-[80%] z-[21] rounded-lg  duration-300 top-1/2 -translate-y-1/2 ${activeTab === 0 ? "left-1" : activeTab === 2 ? "right-1" : "left-1/2 -translate-x-1/2"}`} />
                    <div className="flex py-2 p-1 xl:p-2 relative z-[22]">
                        {audiences.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(index)}
                                className={`
                  flex-1
                  rounded-xl
                  py-1
                  px-4
                  text-xs
                  md:text-sm
                  lg:text-base
                  transition-all
                  duration-300

                  ${activeTab === index
                                        ? "text-black"
                                        : "text-white"
                                    }
                `}
                            >
                                <span className="mr-2">
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
                <div className="relative z-[15] grid min-h-[850px] lg:grid-cols-[50%_40%] xl:grid-cols-[50%_32%] 2xl:grid-cols-[50%_35%] justify-between pt-20">
                    {/* Left Side */}
                    <div className="flex items-end p-4 md:p-6 lg:p-10">
                        <div>
                            <StaggerReveal className="text-white leading-none" animationKey={activeTab} parentContainerRef={parentContainerRef} delay={1}>
                                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light reveal-item">
                                    {current.heroTitle}
                                </span>

                                <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl  italic font-light reveal-item feature-display">
                                    {current.heroItalic}
                                </span>
                            </StaggerReveal>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center p-4 md:p-6 lg:p-10">
                        <StaggerReveal
                            parentContainerRef={parentContainerRef}
                            animationKey={activeTab}
                            delay={1}
                        >
                            <h3 className="reveal-item text-white text-[45px] leading-[1]">
                                {current.title}
                            </h3>

                            <p className="reveal-item mt-8 text-white text-lg">
                                {current.description}
                            </p>

                            <div className="mt-6">
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

                            <div className="reveal-item">
                                <AnimatedPreviewButton className="mt-6! lg:mt-8!" />
                            </div>
                        </StaggerReveal>
                    </div>
                </div>
            </div>
            <div className="lg:hidden">
                {
                    audiences.map((item, index) => (
                        <MembershipCard
                            key={index}
                            current={item}
                            index={index}
                            label={item.tab}
                        />
                    ))
                }
            </div>
        </section>
    );
}

function MembershipCard({ current, index, label }: { current: any, index: number, label: string }) {
    const [open, setOpen] =
        useState(false);
    const parentContainerRef = useRef<HTMLDivElement>(null);
    return (
        <div
            className="
      w-full
      border-y
      border-[#ebebe6]
      py-4
      "
        >
            {/* Header */}

            <div className="flex items-center justify-between gap-4 md:gap-0">

                <div className="flex gap-8">

                    <span
                        className="
            md:text-lg
            text-base
            text-zinc-700 flex items-center gap-4
            "
                    >
                        <span className="text-[#696969]">0{index + 1}. </span><span className="font-medium">{label}</span>
                    </span>

                </div>

                <button
                    onClick={() =>
                        setOpen(!open)
                    }
                    className="
          flex
          h-8
          md:h-12
          w-8
          md:w-12
          items-center
          justify-center
          rounded-full
          bg-zinc-800
          text-white
          transition-all
          duration-300
          hover:scale-105
          "
                >
                    {open ? (
                        <X size={18} />
                    ) : (
                        <Plus size={18} />
                    )}
                </button>

            </div>

            {/* Collapse Area */}

            <div
                className={`
        overflow-hidden
        transition-all
        duration-700

        ${open
                        ? "max-h-[1400px] opacity-100 mt-8"
                        : "max-h-0 opacity-0"
                    }
        `}
                ref={parentContainerRef}
            >
                {/* Image */}

                <div
                    className="
          overflow-hidden
          rounded-xl
          "
                >
                    <img
                        src={current.image}
                        alt=""
                        className="
            aspect-[7/5]
            w-full
            object-cover
            "
                    />
                </div>

                {/* Content */}

                <div className="mt-8">
                    <div className="flex items-center px-2">
                        <StaggerReveal
                            trigger="active"
                            active={open}
                            animationKey={`${index}-${open}`}
                            delay={0.7}
                        >
                            <h3 className="reveal-item text-black text-[30px] leading-[1]">
                                {current.title}
                            </h3>

                            <p className="reveal-item mt-6 md:mt-8 text-[#696969] text-lg">
                                {current.description}
                            </p>

                            <div className="mt-6 md:mt-10 ">
                                {current.features.map((item: any, index: number) => (
                                    <div
                                        key={index}
                                        className="reveal-item border-y border-[#ebebe6] py-5 last:border-b-0"
                                    >
                                        <h4 className="font-medium text-black">
                                            {item.title}
                                        </h4>

                                        <p className="mt-1 text-[#696969]">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <SecondaryPreviewButton className="mt-8!" />
                        </StaggerReveal>
                    </div>

                </div>

            </div>

        </div>
    );
}