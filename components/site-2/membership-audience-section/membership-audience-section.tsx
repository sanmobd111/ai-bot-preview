"use client";

import CharacterReveal from "@/components/shared/character-reveal";
import SecondaryPreviewButton from "@/components/shared/preview-button/secondary-preview-button";
import StaggerReveal from "@/components/shared/stagger-reveal";
import TextReveal from "@/components/shared/text-reveal";
import { Plus, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DefaultContents from "./default-content";
import "./membership-audience-section.css";
import TabContents from "./tab-contents";
import FaqContents from "./faq-contents";

export default function MembershipAudienceSection({ data }) {
    const [activeTab, setActiveTab] = useState(0);
    const parentContainerRef = useRef<HTMLDivElement>(null);

    const current = data?.audiences[activeTab];


    useEffect(() => {
        const contentContainers = document.getElementsByClassName("content-container")
        console.log(contentContainers)
    }, []);

    return (
        <section className="px-4 pt-6 md:pt-8 lg:pt-10 bg-[#f5f5f0]">
            <div className=" mt-12 mb-10 md:mb-14 lg:mb-20 w-[95%] mx-auto">
                <TextReveal
                    className="mb-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs reveal-text"
                >
                    OUR MEMBERS
                </TextReveal>
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
                    data={<>
                        Designed for every
                        stage {" "}
                        <span className="italic font-light text-zinc-500">
                            of
                        </span>
                        {" "}
                        <span className="italic font-light text-zinc-500">
                            ambition.
                        </span>
                    </>}
                >

                </CharacterReveal>
                <TextReveal
                    className="text-base mt-6 leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text ">
                    FoundersCard empowers entrepreneurs, business owners, and leaders at every stage of their journey. Whether you’re building your first company, running a growing business, or leading at the highest level, your drive deserves to be rewarded.
                </TextReveal>
            </div>
            <div className="relative overflow-hidden rounded-4xl xl:h-[105vh] 2xl:h-[95vh] hidden lg:block"
                ref={parentContainerRef}
            >
                {
                    data?.audiences.map((item, index) => (
                        <img
                            key={index}
                            src={item.image}
                            alt=""
                            className={`top-1/2 -translate-y-1/2 left-1/2 rounded-4xl duration-300 -translate-x-1/2 h-full w-full object-cover transition-all duration-700 z-[5] absolute ${activeTab >= index ? "w-full h-full" : " w-0! h-0!"}`}
                        />
                    ))
                }

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45 z-[6] " />

                <div className="content-container">
                    {/* Tabs */}
                    {/* <div className="absolute top-4 left-10 right-10 z-20 rounded-xl">
                        <div className="relative z-[22] flex flex-wrap justify-center gap-4 p-1 py-2 xl:p-2">
                            {data?.audiences.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`
                rounded-xl
                py-2.5
                px-6
                text-xs
                md:text-sm
                lg:text-base
                transition-all
                duration-300
                whitespace-nowrap
                ${activeTab === index
                                            ? "bg-white text-black"
                                            : "bg-white/10 text-white backdrop-blur-xl"
                                        }
            `}
                                >
                                    <span className="mr-2">0{index + 1}.</span>

                                    <span className="hidden md:inline">
                                        {item.tab}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div> */}
                    <div className="absolute top-4 left-10 right-10 z-20 bg-white/10 backdrop-blur-xl rounded-xl">
                        <div className={`absolute bg-white w-1/3 h-[80%] z-[21] rounded-lg  duration-300 top-1/2 -translate-y-1/2 ${activeTab === 0 ? "left-1" : activeTab === 2 ? "right-1" : "left-1/2 -translate-x-1/2"}`} />
                        <div className="flex py-2 p-1 xl:p-2 relative z-[22]">
                            {data?.audiences.map((item, index) => (
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
                    <div className="relative z-[15] grid min-h-[450px] lg:grid-cols-[50%_40%] xl:grid-cols-[50%_50%] 2xl:grid-cols-[50%_35%] justify-between pt-28">
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
                        {
                            current.type === "tab"
                                ? <TabContents parentContainerRef={parentContainerRef} activeTab={activeTab} current={current} />
                                : current.type === "faq"
                                    ? <FaqContents parentContainerRef={parentContainerRef} activeTab={activeTab} current={current} /> : <DefaultContents parentContainerRef={parentContainerRef} activeTab={activeTab} current={current} />
                        }
                    </div>
                </div>
            </div>
            {/* <div className="lg:hidden">
                {
                    data?.audiences.map((item, index) => (
                        <MembershipCard
                            key={index}
                            current={item}
                            index={index}
                            label={item.tab}
                        />
                    ))
                }
            </div> */}
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