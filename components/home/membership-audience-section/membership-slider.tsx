"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import ZoomIn from "@/components/shared/zoom-in";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

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

export default function MembershipSlider({data}) {
    const cards = data;
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
                                   aspect-[9/11]
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

                                <div className="absolute inset-0 bg-black/30" />

                                <div className="absolute bottom-0 p-5 md:p-6 text-white">
                                    <h3
                                        className="
                                       mb-3
                                       feature-display
                                       font-light
                                       text-[20px]
                                       leading-tight
                                       text-center
                                     "
                                    >
                                        {card.title}
                                    </h3>

                                    <p
                                        className="
                                       max-w-xs
                                       text-xs
                                       md:text-base
                                       leading-snug
                                       text-white/90
                                       line-clamp-2
                                       font-normal
                                       text-center
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