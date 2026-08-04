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

                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-600" dangerouslySetInnerHTML={{ __html: subTitle }}>

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
                            {/* <span className="font-semibold text-zinc-900">
                                {item.title}:
                            </span>{" "} */}
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Slider Header */}
            <div className="mb-4 flex items-center justify-between px-10">
                <h3 className="text-4xl lg:text-[28px] text-zinc-900 feature-display">
                    Enterprise Benefits
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
                        slidesPerView: 2.000000000001,
                    },
                    1440: {
                        slidesPerView: 3.05,
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
                        <BenefitCard card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <span className="px-10 my-6">Some benefits require an upgraded membership plan.</span>
            <AnimatedPreviewButton
                bgColor="#28282B"
                hoverBgColor="#53575C"
                textColor="#ffffff"
                className="mx-10 md:mt-0! xl:mt-0!"
                arrowBgColor="#ffffff"
                arrowColor="black"

            />
        </div>
    )
}
