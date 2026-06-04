import { Check, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type BenefitProps = {
    benefits: {
        title: string;
        text: string;
    }[];
    benefitCards: {
        title: string;
        image: string;
    }[];
    title1: string;
    title2: string;
};

export default function Benefit({ benefits, benefitCards, title1, title2 }: BenefitProps) {
    return (
        <div className="flex flex-col">
            {/* Heading */}
            <div className="mb-10">
                <h2 className="font-serif text-[clamp(3rem,4vw,5.5rem)] leading-[0.95] tracking-[-0.05em] text-zinc-900">
                    {title1}{" "}
                    <span className="italic font-light text-zinc-500">
                        {title2}
                    </span>
                </h2>

                <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-600">
                    Unlock insider rates, instant recognition, and elevated
                    experiences across airlines, hotels, car rentals, lounges,
                    and essential travel services.
                </p>
            </div>

            {/* Benefits */}
            <div className="mb-14 space-y-4">
                {benefits.map((item) => (
                    <div
                        key={item.title}
                        className="flex items-start gap-4"
                    >
                        <Check
                            size={18}
                            className="mt-1 shrink-0 text-zinc-900"
                        />

                        <p className="text-lg leading-relaxed text-zinc-700">
                            <span className="font-semibold text-zinc-900">
                                {item.title}:
                            </span>{" "}
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Slider Header */}
            <div className="mb-6 flex items-center justify-between">
                <h3 className="font-serif text-4xl lg:text-5xl text-zinc-900">
                    Discover Benefits
                </h3>

                <div className="flex gap-3">
                    <button className="travel-prev flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 transition hover:bg-zinc-300">
                        <ChevronLeft size={18} />
                    </button>

                    <button className="travel-next flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 transition hover:bg-zinc-300">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: ".travel-prev",
                    nextEl: ".travel-next",
                }}
                spaceBetween={16}
                breakpoints={{
                    320: {
                        slidesPerView: 1.15,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1280: {
                        slidesPerView: 2.6,
                    },
                }}
                className="w-full"
            >
                {benefitCards.map((card) => (
                    <SwiperSlide key={card.title}>
                        <div className="group relative overflow-hidden rounded-[24px]">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
                                <Plus size={20} />
                            </button>

                            <div className="absolute bottom-5 left-5">
                                <span className="rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
                                    {card.title}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className="relative bg-blue-400 cursor-pointer flex justify-center py-2 rounded-xl text-white mt-6">
                <span className="font-semibold text-lg">Preview Membership</span>
                <span className="flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white text-black w-6 h-6 ">
                    <ChevronRight size={16} />
                </span>
            </button>
        </div>
    )
}
