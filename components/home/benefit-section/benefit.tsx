import AnimatedPreviewButton from "@/components/shared/preview-button/animated-preview-button/animated-preview-button";
import { Check, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BenefitCard from "./benefit-card";

type BenefitProps = {
    index: number;
    benefits: {
        title: string;
        text: string;
    }[];
    benefitCards: {
        title: string;
        image: string;
        icon: React.ReactNode;
    }[];
    title1: string;
    title2: string;
    subTitle: string;
};

export default function Benefit({ benefits, benefitCards, title1, title2, subTitle, index }: BenefitProps) {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    return (
        <div className="flex flex-col w-full">
            {/* Heading */}
            <div className="mb-6 px-10">
                <h2 className="text-[clamp(3rem,3.5vw,5.5rem)] leading-[0.95] tracking-[-0.05em] text-zinc-900">
                    {title1}{" "}
                    <span className="italic font-light text-zinc-500 feature-display">
                        {title2}
                    </span>
                </h2>

                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-600">
                    {subTitle}
                </p>
            </div>

            {/* Benefits */}
            <div className="mb-8 space-y-0.5 px-10">
                {benefits.map((item) => (
                    <div
                        key={item.title}
                        className="flex items-start gap-4"
                    >
                        <Check
                            size={18}
                            className="mt-1 shrink-0 text-zinc-900"
                        />

                        <p className=" leading-relaxed text-zinc-700">
                            <span className="font-semibold text-zinc-900">
                                {item.title}:
                            </span>{" "}
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Slider Header */}
            <div className="mb-4 flex items-center justify-between px-10">
                <h3 className="text-4xl lg:text-[28px] text-zinc-900 feature-display">
                    Discover Benefits
                </h3>

                <div className="flex gap-3">
                    <button
                        className={`travel-prev-${index} flex h-10 w-10 items-center justify-center rounded-full ${isBeginning ? "bg-zinc-200" : "bg-white"}`}
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        className={`travel-next-${index} flex h-10 w-10 items-center justify-center rounded-full ${isEnd ? "bg-zinc-200" : "bg-white"}`}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: `.travel-prev-${index}`,

                    nextEl: `.travel-next-${index}`,
                }}

                slidesOffsetAfter={40}
                slidesOffsetBefore={40}

                spaceBetween={6}
                breakpoints={{
                    320: {
                        slidesPerView: 1.15,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1280: {
                        slidesPerView: 2.00001,
                    },
                    1440: {
                        slidesPerView: 3.6,
                    },
                }}
                className="w-full"
                onSwiper={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}

                onReachBeginning={() => {
                    setIsBeginning(true);
                }}

                onReachEnd={() => {
                    setIsEnd(true);
                }}

                onFromEdge={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
            >
                {benefitCards.map((card) => (
                    <SwiperSlide key={card.title}>
                        {/* <div className="group relative overflow-hidden rounded-xl aspect-[7/9]">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <button className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md">
                                <Plus size={20} />
                            </button>

                            <div className="absolute bottom-5 left-3 flex items-center gap-2 justify-center  backdrop-blur-md  bg-white/15 text-white py-1.5 px-3 rounded-full">
                                {card.icon}
                                <span className="rounded-full text-xs ">
                                    {card.title}
                                </span>
                            </div>
                        </div> */}
                        <BenefitCard card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <span className="px-10 my-6">Some benefits require an upgraded membership plan.</span>
            <AnimatedPreviewButton
                bgColor="#155dfc"
                hoverBgColor="#51a2ff"
                textColor="#ffffff"
                className="mx-10 md:mt-0! xl:mt-0!"
                arrowBgColor="#ffffff"
                arrowColor="#155dfc"

            />
        </div>
    )
}
