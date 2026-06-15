"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import ZoomIn from "@/components/shared/zoom-in";
import CharacterReveal from "@/components/shared/character-reveal";
import TextReveal from "@/components/shared/text-reveal";
import { GrStar } from "react-icons/gr";

const testimonials = [
  {
    id: 1,
    title: "Worth every penny",
    text: "Awesome organization with lots of good perks. I love that they're constantly updating with more benefits.",
  },
  {
    id: 2,
    title: "The best!",
    text: "Just want say thank you so much for curating such incredible experiences.",
  },
  {
    id: 3,
    title: "FoundersCard is an absolute no-brainer.",
    text: "If you travel often or run a company, the member savings add up fast.",
  },
  {
    id: 4,
    title: "I LOVE FoundersCard",
    text: "I've saved hundreds of dollars at select hotels.",
  },
  {
    id: 5,
    title: "Awesome Preferred Partners",
    text: "One of the best preferred partner networks available.",
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

export default function TestimonialSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const width = useViewport();

  const offset =
    width >= 1536
      ? 130
      : width >= 1280
        ? 70
        : width >= 1024
          ? 20
          : width >= 768
            ? 50
            : 30;

  return (
    <section className="overflow-hidden py-16 md:py-24 relative">
      <TextReveal
        className="mb-4 text-center md:mb-7 2xl:mb-8 tracking-[0.2em] text-white text-xs reveal-text flex justify-center items-center gap-1"
      >
        <GrStar className="text-green-400 text-lg -mt-1" />
        Trustpilot
        <GrStar className="text-sm -mt-1" />
        <GrStar className="text-sm -mt-1" />
        <GrStar className="text-sm -mt-1" />
        <GrStar className="text-sm -mt-1" />
        <GrStar className="text-sm -mt-1" />
        4.6/5
      </TextReveal>
      <div className="mb-12 xl:mb-16 2xl;:mb-20 text-center px-4">
        <CharacterReveal
          className="
            text-5xl
            xl:text-[55px]
            2xl:text-7xl
            font-light
            text-white
            leading-none
            pb-1
          "
        >
          <span className="font-normal">Empowering</span> {" "}
          <span className="italic feature-display">
            Our Members
          </span>
        </CharacterReveal>
      </div>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
      >
        <source src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/raining-cards-e35ae06dd5e29ab7f33269c9ed89d1d6c9bcb60eea83d1695eaaa32b275cd2bf.mp4" type="video/mp4" data-src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/raining-cards-e35ae06dd5e29ab7f33269c9ed89d1d6c9bcb60eea83d1695eaaa32b275cd2bf.mp4" />
      </video>

      <div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex)
          }
          speed={800}
          spaceBetween={24}
          slidesOffsetBefore={offset}
          slidesOffsetAfter={offset}
          slidesPerView={
            width > 1024
              ? 3
              : width > 768
                ? 2.5
                : 1.1
          }
          className="founders-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide
              key={item.id}
            >
              <ZoomIn
                className="
                h-[400px]
                md:h-[420px]
                rounded-[24px]
                md:rounded-[32px]
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6 md:p-8 xl:p-10
                text-white
              "
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="text-center">
                    ★★★★★
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center">
                    <h3
                      className="
                      mb-4 md:mb-6
                      text-center
                      text-2xl
                      feature-display
                    "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      text-center
                      text-base
                      text-white
                    "
                    >
                      {item.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <img
                    src={"https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/bio-brian-j-63282fd8235b598acd4e9e0bda8a78142f76784088f75a83f63c78dda864dfd4.png"}
                    className="w-12 h-12 rounded-sm"
                      />
                    <div className="text-center">
                      <div className="font-semibold">
                        JOHN DOE
                      </div>

                      <div className="text-sm text-white/40">
                        CEO
                      </div>
                    </div>
                  </div>
                </div>
              </ZoomIn>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-3 md:gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="
            w-10 h-10
            md:w-12 md:h-12
            rounded-full
            bg-white/5
            border border-white/10
            text-white
            flex items-center justify-center
            transition
            hover:bg-white/10
          "
          >
            <ChevronLeft size={16} />
          </button>

          <div
            className="
            h-10 md:h-12
            px-4 md:px-6
            rounded-full
            bg-white/5
            border border-white/10
            flex items-center gap-2
          "
          >
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`transition-all duration-300 ${activeIndex === index
                  ? "w-8 h-2 bg-white rounded-full"
                  : "w-2 h-2 bg-white/30 rounded-full"
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
            bg-white/5
            border border-white/10
            text-white
            flex items-center justify-center
            transition
            hover:bg-white/10
          "
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}