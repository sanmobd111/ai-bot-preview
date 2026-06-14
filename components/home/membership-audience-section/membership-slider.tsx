"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import ZoomIn from "@/components/shared/zoom-in";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const cards = [
    {
        title: "Upgrade your upgrades",
        description:
            "Preferred rates, upgrades, and elite status across air, hotel, and car.",
        image:
            "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-travel-b2ad9d86d872895799a9ae654f43b07857774e0cbfe8548cf424095546ff068f.jpg",
    },
    {
        title: "Expand your network",
        description:
            "A powerful network of founders, operators, and leaders who open doors.",
        image:
            "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-connect-e80f688b9ae68390b8f4f0ece251678ddaacf1f9cb807bddbde8c7a02ab6558e.jpg",
    },
    {
        title: "Your Founders Advisor",
        description:
            "Explore and instantly redeem valuable member benefits in seconds.",
        image:
            "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-benefits-00267a432b889babc23bad083be97a708800e592f55ae2e0a916d9680b9811c1.jpg",
    },
    {
        title: "Run your business smarter",
        description:
            "Preferred access to tools, services and savings that unlock growth.",
        image:
            "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-business-06c64a737a85944dc7759e471ae570bb27bb13faa0ae3d71bcbf40fc7b57e7cf.jpg",
    },
];

function useViewport() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const update = () => setWidth(window.innerWidth);

        update();
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);

    return width;
}

export default function MembershipSlider() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const width = useViewport();

    return (
        <section className="overflow-hidden relative">
            <div>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.realIndex)
                    }
                    speed={800}
                    spaceBetween={24}
                    slidesPerView={
                        width >= 1280
                            ? 4
                            : width >= 768
                                ? 2.5
                                : 1.15
                    }
                    className="founders-swiper"
                >
                    {cards.map((card) => (
                        <SwiperSlide
                            key={card.title}
                        >
                            <ZoomIn
                                key={card.title}
                                className="
                                   group
                                   relative
                                   overflow-hidden
                                   rounded-2xl
                                   aspect-[5/6]
                                 "
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="
                                     absolute inset-0
                                     h-full w-full
                                     object-cover
                                     transition-transform
                                     duration-700
                                     group-hover:scale-105
                                   "
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                                <div className="absolute bottom-0 p-5 md:p-6 text-white">
                                    <h3
                                        className="
                                       mb-3
                                       feature-display
                                       font-light
                                       text-[27px]
                                       leading-tight
                                     "
                                    >
                                        {card.title}
                                    </h3>

                                    <p
                                        className="
                                       max-w-xs
                                       text-sm
                                       md:text-base
                                       leading-snug
                                       text-white/90
                                       line-clamp-2
                                       font-normal
                                     "
                                    >
                                        {card.description}
                                    </p>
                                </div>
                            </ZoomIn>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation */}
                <div className="mt-8 md:mt-12 flex items-center justify-center gap-3 md:gap-4 xl:hidden">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="
            w-10 h-10
            md:w-12 md:h-12
            rounded-full
            bg-gray-900/5
            text-black
            flex items-center justify-center
            transition
            hover:bg-gray-900/10
          "
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <div
                        className="
            h-10 md:h-12
            px-4 md:px-6
            rounded-full
            bg-gray-900/5
            flex items-center gap-2
          "
                    >
                        {cards.map((_, index) => (
                            <span
                                key={index}
                                className={`transition-all duration-300 ${activeIndex === index
                                    ? "w-8 h-2 bg-gray-900/30 rounded-full"
                                    : "w-2 h-2 bg-gray-900/30 rounded-full"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="
            w-10 h-10
            md:w-12 md:h-12
            rounded-full
            bg-gray-900/5
            border border-gray-900/10
            text-black
            flex items-center justify-center
            transition
            hover:bg-gray-900/10
          "
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}