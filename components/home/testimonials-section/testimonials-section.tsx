"use client";

// import { useRef, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";

// const testimonials = [
//   {
//     id: 1,
//     title: "Worth every penny",
//     text: "Awesome organization with lots of good perks. I love that they're constantly updating with more benefits.",
//     name: "PAUL S",
//     role: "OWNER/CEO",
//     company: "SEA ENTERPRISE",
//     image: "https://i.pravatar.cc/100?img=12",
//   },
//   {
//     id: 2,
//     title: "The best!",
//     text: "Just want say thank you so much for curating such incredible experiences. I am part of so many different groups like this and you guys level up every time.",
//     name: "KATHRYN F",
//     role: "FOUNDER/CEO",
//     company: "THE C GROUP STUDIO LLC",
//     image: "https://i.pravatar.cc/100?img=20",
//   },
//   {
//     id: 3,
//     title: "FoundersCard is an absolute no-brainer.",
//     text: "If you travel often or run a company, the member savings and upgrades add up fast.",
//     name: "BRIAN J",
//     role: "CEO/FOUNDER",
//     company: "WEDGE GAME",
//     image: "https://i.pravatar.cc/100?img=51",
//   },
//   {
//     id: 4,
//     title: "I LOVE FoundersCard",
//     text: "I've saved hundreds of dollars at select hotels and especially enjoy the elevated rewards status.",
//     name: "CHAD MULLIGAN",
//     role: "CEO",
//     company: "RED BEAR NEGOTIATION",
//     image: "https://i.pravatar.cc/100?img=33",
//   },
//   {
//     id: 5,
//     title: "Awesome Preferred Partners",
//     text: "One of the best preferred partner networks out there.",
//     name: "LISA",
//     role: "FOUNDER",
//     company: "COMPANY",
//     image: "https://i.pravatar.cc/100?img=48",
//   },
// ];

// export default function TestimonialSlider() {
//   const swiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="relative overflow-hidden bg-black py-28 text-white">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
//           alt=""
//           className="h-full w-full object-cover opacity-20"
//         />

//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       <div className="relative z-10">
//         {/* Trustpilot */}
//         <div className="mb-4 flex justify-center gap-2 text-sm">
//           <span className="text-emerald-400">★ Trustpilot</span>
//           <span>★★★★★</span>
//           <span>4.6/5</span>
//         </div>

//         {/* Heading */}
//         <h2 className="mb-20 text-center text-6xl font-light">
//           Empowering{" "}
//           <span className="font-serif italic">
//             Our Members
//           </span>
//         </h2>

//         {/* LEFT OFFSET CONTAINER */}
//         <div className="overflow-visible">
//           <Swiper
//             onSwiper={(swiper) => (swiperRef.current = swiper)}
//             onSlideChange={(swiper) =>
//               setActiveIndex(swiper.realIndex)
//             }
//             slidesPerView="auto"
//             spaceBetween={32}
//             speed={700}
//             className="founders-swiper"
//           >
//             <SwiperSlide
//               className="lg:!w-[200px] !hidden lg:!block"
//             >
//               <div />
//             </SwiperSlide>
//             {testimonials.map((item) => (
//               <SwiperSlide
//                 key={item.id}
//                 className="!w-[480px]"
//               >
//                 <div
//                   className="
//                     h-[420px]
//                     rounded-[32px]
//                     border border-white/10
//                     bg-white/[0.03]
//                     backdrop-blur-xl
//                     p-10
//                   "
//                 >
//                   <div className="flex h-full flex-col justify-between">
//                     <div>
//                       <div className="mb-12 text-center tracking-[5px]">
//                         ★★★★★
//                       </div>

//                       <h3 className="mb-6 text-center font-serif text-3xl">
//                         {item.title}
//                       </h3>

//                       <p className="text-center text-lg text-white/80">
//                         "{item.text}"
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-center gap-4">
//                       <img
//                         src={item.image}
//                         alt=""
//                         className="h-14 w-14 rounded-xl object-cover"
//                       />

//                       <div>
//                         <h4 className="font-semibold uppercase">
//                           {item.name}, {item.role}
//                         </h4>

//                         <p className="text-sm text-white/50 uppercase">
//                           {item.company}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//             <SwiperSlide
//               className="lg:!w-[200px] !hidden lg:!block"
//             >
//               <div />
//             </SwiperSlide>
//           </Swiper>
//         </div>

//         {/* Navigation */}
//         <div className="mt-12 flex items-center justify-center gap-4">
//           <button
//             onClick={() => swiperRef.current?.slidePrev()}
//             className="
//               flex h-12 w-12 items-center justify-center
//               rounded-full
//               border border-white/10
//               bg-white/[0.05]
//               backdrop-blur-xl
//               transition
//               hover:bg-white/[0.1]
//             "
//           >
//             <ChevronLeft size={16} />
//           </button>

//           {/* Pagination Pill */}
//           <div
//             className="
//               flex h-12 items-center
//               rounded-full
//               border border-white/10
//               bg-white/[0.05]
//               px-5
//               backdrop-blur-xl
//             "
//           >
//             <div className="flex items-center gap-2">
//               {testimonials.map((_, index) => (
//                 <span
//                   key={index}
//                   className={`transition-all duration-300 ${activeIndex === index
//                     ? "h-2.5 w-8 rounded-full bg-white"
//                     : "h-2.5 w-2.5 rounded-full bg-white/30"
//                     }`}
//                 />
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={() => swiperRef.current?.slideNext()}
//             className="
//               flex h-12 w-12 items-center justify-center
//               rounded-full
//               border border-white/10
//               bg-white/[0.05]
//               backdrop-blur-xl
//               transition
//               hover:bg-white/[0.1]
//             "
//           >
//             <ChevronRight size={16} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const width = useViewport();

  const offset =
    width >= 1536
      ? 220
      : width >= 1280
        ? 160
        : width >= 1024
          ? 120
          : width >= 768
            ? 80
            : 20;

  const slideWidth =
    width >= 1536
      ? 470
      : width >= 1280
        ? 440
        : width >= 1024
          ? 400
          : width >= 768
            ? 340
            : width - 40;

  return (
    <section className="overflow-hidden bg-black py-16 md:py-24">
      {/* Heading */}
      <div className="mb-12 md:mb-20 text-center px-4">
        <h2
          className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            font-light
            text-white
            leading-none
          "
        >
          Empowering{" "}
          <span className="italic font-serif">
            Our Members
          </span>
        </h2>
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex)
        }
        speed={800}
        spaceBetween={24}
        slidesOffsetBefore={width >= 1024 ? offset : 16}
        slidesOffsetAfter={width >= 1024 ? offset : 16}
        slidesPerView={
          width >= 1024
            ? 3
            : width >= 768
              ? 2
              : 1
        }
        className="founders-swiper"
      >
        {testimonials.map((item) => (
          <SwiperSlide
            key={item.id}
            // style={{
            //   width: `${slideWidth}px`,
            // }}
          >
            <div
              className="
                min-h-[320px]
                md:min-h-[360px]
                xl:min-h-[400px]
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
                <div>
                  <div className="mb-8 md:mb-10 text-center">
                    ★★★★★
                  </div>

                  <h3
                    className="
                      mb-4 md:mb-6
                      text-center
                      text-xl
                      md:text-2xl
                      xl:text-3xl
                      font-serif
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-center
                      text-sm
                      md:text-base
                      xl:text-lg
                      text-white/70
                    "
                  >
                    {item.text}
                  </p>
                </div>

                <div className="text-center mt-8">
                  <div className="font-semibold">
                    JOHN DOE
                  </div>

                  <div className="text-sm text-white/40">
                    CEO / FOUNDER
                  </div>
                </div>
              </div>
            </div>
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
    </section>
  );
}