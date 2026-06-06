"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const testimonials = [
  {
    id: 1,
    title: "Worth every penny",
    text: "Awesome organization with lots of good perks. I love that they're constantly updating with more benefits.",
    name: "PAUL S",
    role: "OWNER/CEO",
    company: "SEA ENTERPRISE",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    title: "The best!",
    text: "Just want say thank you so much for curating such incredible experiences. I am part of so many different groups like this and you guys level up every time.",
    name: "KATHRYN F",
    role: "FOUNDER/CEO",
    company: "THE C GROUP STUDIO LLC",
    image: "https://i.pravatar.cc/100?img=20",
  },
  {
    id: 3,
    title: "FoundersCard is an absolute no-brainer.",
    text: "If you travel often or run a company, the member savings and upgrades add up fast.",
    name: "BRIAN J",
    role: "CEO/FOUNDER",
    company: "WEDGE GAME",
    image: "https://i.pravatar.cc/100?img=51",
  },
  {
    id: 4,
    title: "I LOVE FoundersCard",
    text: "I've saved hundreds of dollars at select hotels and especially enjoy the elevated rewards status.",
    name: "CHAD MULLIGAN",
    role: "CEO",
    company: "RED BEAR NEGOTIATION",
    image: "https://i.pravatar.cc/100?img=33",
  },
  {
    id: 5,
    title: "Awesome Preferred Partners",
    text: "One of the best preferred partner networks out there.",
    name: "LISA",
    role: "FOUNDER",
    company: "COMPANY",
    image: "https://i.pravatar.cc/100?img=48",
  },
];

export default function TestimonialSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Trustpilot */}
        <div className="mb-4 flex justify-center gap-2 text-sm">
          <span className="text-emerald-400">★ Trustpilot</span>
          <span>★★★★★</span>
          <span>4.6/5</span>
        </div>

        {/* Heading */}
        <h2 className="mb-20 text-center text-6xl font-light">
          Empowering{" "}
          <span className="font-serif italic">
            Our Members
          </span>
        </h2>

        {/* LEFT OFFSET CONTAINER */}
        <div className="overflow-visible">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex)
            }
            slidesPerView="auto"
            spaceBetween={32}
            speed={700}
            className="founders-swiper"
          >
            <SwiperSlide
              className="!w-[200px]"
            >
              <div />
            </SwiperSlide>
            {testimonials.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!w-[480px]"
              >
                <div
                  className="
                    h-[420px]
                    rounded-[32px]
                    border border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-10
                  "
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="mb-12 text-center tracking-[5px]">
                        ★★★★★
                      </div>

                      <h3 className="mb-6 text-center font-serif text-3xl">
                        {item.title}
                      </h3>

                      <p className="text-center text-lg text-white/80">
                        "{item.text}"
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={item.image}
                        alt=""
                        className="h-14 w-14 rounded-xl object-cover"
                      />

                      <div>
                        <h4 className="font-semibold uppercase">
                          {item.name}, {item.role}
                        </h4>

                        <p className="text-sm text-white/50 uppercase">
                          {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide
              className="!w-[200px]"
            >
              <div />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              transition
              hover:bg-white/[0.1]
            "
          >
            <ChevronLeft size={16} />
          </button>

          {/* Pagination Pill */}
          <div
            className="
              flex h-12 items-center
              rounded-full
              border border-white/10
              bg-white/[0.05]
              px-5
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`transition-all duration-300 ${activeIndex === index
                    ? "h-2.5 w-8 rounded-full bg-white"
                    : "h-2.5 w-2.5 rounded-full bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full
              border border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              transition
              hover:bg-white/[0.1]
            "
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}