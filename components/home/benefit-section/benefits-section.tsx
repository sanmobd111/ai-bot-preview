"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import Benefit from "./benefit";
import ScrollMarquee from "@/components/shared/scroll-marque";
import { LiaConciergeBellSolid, LiaPlaneSolid } from "react-icons/lia";
import { IoBagOutline, IoCarOutline, IoCarSportOutline, IoRefreshSharp, IoRestaurantOutline } from "react-icons/io5";
import { PiArmchairLight, PiCalendarDotsLight, PiDevices, PiFlowerLotus, PiGlobeHemisphereEast, PiLaptop, PiTicketLight } from "react-icons/pi";
import { MdOutlineLuggage } from "react-icons/md";
import { LuSofa } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { BiBarChartSquare } from "react-icons/bi";
import { FiBox } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function TravelBenefit() {
    const sectionRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const benefitRefs = useRef<(HTMLDivElement | null)[]>([]);

    const benefits = [
        {
            title1: "Travel better,",

            title2: "anywhere.",

            subTitle: "Unlock insider rates, instant recognition, and elevated experiences across airlines, hotels, car rentals, lounges, and essential travel services - value you feel on every trip",

            benefits: [
                {
                    title: "Loyalty Status",

                    text: "Steep savings and privileges at 500+ luxury hotels worldwide, in many cases 30–50% below published prices.",
                },

                {
                    title: "Preferred Air Savings",

                    text: " Preferred pricing and privileges with leading hotel groups across thousands of properties, giving you flexibility almost anywhere.",
                },

                {
                    title: "Hotel Rates",

                    text: "Loyalty status upgrades with top brands like Hilton, IHG, Sonesta, and Wynn - unlocking upgrades, bonus earnings, and premium check-in perks.",
                },

                {
                    title: "Premium Lounge",

                    text: "Upgrades, late checkout, welcome amenities, and other VIP touches at many collection hotels, where available.",
                },
            ],

            benefitCards: [
                {
                    title: "Global Airline Collection",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/1-airlines-49654483f229f92a4dae2cd72d7f09cdcd709615e3d559eb5d3806b597e88ebe.jpg",
                    icon: <LiaPlaneSolid />
                },
                {
                    title: "Car Rental & Ground Transport",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/2-car-rentals-c0bd9cd1a8b421600b6a1688624662198b0618c0d1fb215c006e7dcf54abcb89.jpg",
                    icon: <IoCarOutline />
                },
                {
                    title: "Founders Hotel Collection",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/3-hotels-9bbb20ee66645d09f8d71ed780449df0a56d4ffbdd87be3719db045f28a42675.jpg",
                    icon: <LiaConciergeBellSolid />
                },
                {
                    title: "Premium Travel & Lounge",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/3-travel-lounge-6c5673d93e123d8b0b570e52474831e0d772f78a0768402b00e0c0b6369b5c74.jpg",
                    icon: <PiArmchairLight />
                },
                {
                    title: "Curated Travel Experiences",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/4-curated-travel-1b33bc02f56b5a5511f7536b1f5d44a6391c194bf14336b012752a58a3a7b9d9.jpg",
                    icon: <MdOutlineLuggage />
                },
            ],
        },
        {
            title1: "Elevate,",

            title2: "Elevate,",
            subTitle: "Unlock member-only rates and perks at 500+ luxury hotels through the Founders Hotel Collection, plus preferred pricing at thousands more through our global partners",

            benefits: [
                {
                    title: "Luxury Member Rates",

                    text: "Steep savings and privileges at 500+ luxury hotels worldwide, in many cases 30–50% below published prices.",
                },

                {
                    title: "Global Brand Partnerships",

                    text: "Preferred pricing and privileges with leading hotel groups across thousands of properties, giving you flexibility almost anywhere.",
                },

                {
                    title: "Complimentary loyalty status",

                    text: "Loyalty status upgrades with top brands like Hilton, IHG, Sonesta, and Wynn - unlocking upgrades, bonus earnings, and premium check-in perks.",
                },

                {
                    title: "On-Property Privileges",

                    text: "Upgrades, late checkout, welcome amenities, and other VIP touches at many collection hotels, where available.",
                },
            ],

            benefitCards: [
                {
                    title: "Founders Hotel Collection",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/1-founders-hotels-08544a0d55902071c30fa0ddec931434b0a79d4c763c16d1287dcb9b9e633673.jpg",
                    icon: <LuSofa />
                },
                {
                    title: "Global Hotel Brand Partners",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/2-brand-partners-cd3b490e515303f45595bf46b6ca5aa0ad20e596c48ec17b2f8e64ac5267689a.jpg",
                    icon: <AiOutlineGlobal />
                },
                {
                    title: "Loyalty Status Upgrades",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/3-loyalty-status-3f803a03b1302cb55fba3170d3564c15a3c53fd52a13af2ae94ab6b7de683236.jpg",
                    icon: <CiStar />
                },
                {
                    title: "Curated Travel Experiences",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/4-curated-travel-d957eba2906386dac0a9e7181d20688829e029a106774cc510fdb106cbdd1ca7.jpg",
                    icon: <PiGlobeHemisphereEast />
                },
            ],
        },
        {
            title1: "Upgrade your",

            title2: "everyday.",

            subTitle: "Unlock member-only rates and perks at 500+ luxury hotels through the Founders Hotel Collection, plus preferred pricing at thousands more through our global partners",

            benefits: [
                {
                    title: "Look good, feel good",

                    text: "Member-only savings across premium fashion, wellness, skincare, and performance gear — refresh your wardrobe and elevate your routine.",
                },

                {
                    title: "Enhance your living and gifting",

                    text: "Preferential pricing on design, audio, work-from-home setups, and lifestyle brands for inspired spaces and smoother days.",
                },

                {
                    title: "Drive with distinction",

                    text: "Preferred pricing to elevated ownership perks on luxury autos - helping you move through life with more comfort, confidence, and convenience.",
                },

                {
                    title: "Access the exceptional",

                    text: "Curated access to VIP events, global live experiences (like F1, Olympics), concerts, sporting events and attractions (like Disney).",
                },
            ],

            benefitCards: [
                {
                    title: "Live Events & VIP Experiences",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/1-live-events-646e9fb8f2dd36b6ecba0f9722af66705178e0ee13f8957c2adfc8bb81df432d.jpg",
                    icon: <PiTicketLight />
                },
                {
                    title: "Health & Wellness",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/2-brand-partners-cd3b490e515303f45595bf46b6ca5aa0ad20e596c48ec17b2f8e64ac5267689a.jpg",
                    icon: <PiFlowerLotus />
                },
                {
                    title: "Luxury Vehicles",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/4-luxury-vehicles-c6d75e2b5c15e579d33c92e781f6a5ce1dfd1e5e5dd4d9e1eb709443a4bb2f53.jpg",
                    icon: <IoCarSportOutline />
                },
                {
                    title: "Premium Retail & Gifting",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/3-retail-gifting-b077787a3da041254f26595cb1410d97a42049cfc8bffddee05b4c7a2c18ad67.jpg",
                    icon: <IoBagOutline />
                },
            ],
        },
        {
            title1: "Work smarter,",

            title2: "grow faster.",

            subTitle: "Reduce operating costs, streamline your workflows and scale with savings on essential software, growth tools, devices, shipping, workspace, and professional services.",

            benefits: [
                {
                    title: "Scale efficiently",

                    text: " Exclusive pricing and credits on core business software — HR, finance, marketing, productivity, CRM, design, analytics",
                },

                {
                    title: "Spend less on the essentials",

                    text: "Negotiated rates (up to 60% off) on laptops, devices, office furniture, shipping, supplies, and more.",
                },

                {
                    title: "Work from anywhere",

                    text: "Preferred access to premium co-working spaces (incl free passes), conferencing tools, and remote-work essentials.",
                },

                {
                    title: "Accelerate growth",

                    text: "Members-only offers on marketing platforms, e-commerce tools, website builders, recruiting, and customer support solutions.",
                },
            ],

            benefitCards: [
                {
                    title: "Software & Growth Tools",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/1-software-growth-1f10043d5eb7cdfd2f5d90c2dce5eab96bf5b257c49f8bbdd0a9ca45f3f10327.jpg",
                    icon: <PiLaptop />
                },
                {
                    title: "Devices & Equipment",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/5-devices-equipment-f30a4e82ad03a762155af6a17f791077c8eaad71fbbb296ef6a7e1af3968ff9f.jpg",
                    icon: <PiDevices />
                },
                {
                    title: "Co-Working",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/3-co-working-1d1a548897e60ab876375d1222b8bbc74f0432c062ced5663d4950ecbed6e7e8.jpg",
                    icon: <RiGroupLine />
                },
                {
                    title: "Startup Stack",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/4-startup-stack-701f6cf48a9e3019bbed7254b83766d567a8419ce399ce541b78acd13e63fcbf.jpg",
                    icon: <BiBarChartSquare />
                },
                {
                    title: "Business Essentials",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/4-startup-stack-701f6cf48a9e3019bbed7254b83766d567a8419ce399ce541b78acd13e63fcbf.jpg",
                    icon: <FiBox />
                },
            ],
        },
        {
            title1: "Connect with",

            title2: "ambition.",

            subTitle: "Tap into a curated network of founders, leaders, and creators. Build relationships that sharpen your thinking and open new doors.",

            benefits: [
                {
                    title: "Move faster with the right connections",

                    text: "Meet founders, operators, investors, and creators who open doors and add insight you can't Google.",
                },

                {
                    title: "Find your people, not just your peers",

                    text: "Join ambitious builders, experienced leaders, and global explorers who understand your journey — and elevate it.",
                },

                {
                    title: "Turn shared experiences into meaningful outcomes",

                    text: " Every dinner, event, and introduction is designed to create momentum — for your business, your travel, and your personal growth.",
                },
            ],

            benefitCards: [
                {
                    title: "Founders Table Dinners",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/1-founders-table-dinners-7c4ee7d3602e8af4a43d5bc30840fad1e9b56fd44d3340211bd24d7c7e86f543.jpg",
                    icon: <IoRestaurantOutline />
                },
                {
                    title: "Signature Member Events",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Member-Created Insider Benefits",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
            ],
        },
    ];

    const images = [
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-bg-travel-edbf353d1a867718be0f537d771502131460c6c51b1bcb831bc807dbb0f3ffe9.jpg",
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-bg-hotels-9d9f2d9a5422d8f494f555132f902f7d18308ebe94a1d319232ceac25bd14858.jpg",
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-bg-lifestyle-a3ca1ded5c8ac10bb45c8f5fddf4d75752534848c7be59af76b06528907831db.jpg",
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-bg-business-d9e4df62efb2c5966a559a970c8b4e40d3867e1ef097918ec1d45ac18b871d8c.jpg",
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-bg-community-2e93334772c6b3017a2c208b36c0baa8b2a3ecda57e0bed91f6964c7dd8dccd0.jpg"
    ];

    const logos = [
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-marquee/2-hotels/rosewood-352900933e86425d19fabe30397929fade74db6ee0960d97e645267e0dca6ba2.svg",
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-marquee/2-hotels/peninsula-60e5580735574547253b3fb8abd8c49e00353ef0adb8703e66141fc787df3c5d.svg",
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-marquee/2-hotels/hilton-8d93e64ace94e0a2121347588257877d7bc673f9751d991baadae98f2e415cf1.svg",
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-marquee/2-hotels/raffles-db154f1f0d8758a897553a5082cad669855cd76bebfc0c3a35bf7452ab40e8de.svg",
        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefits-marquee/2-hotels/w-hotels-13d689e6f41d08000141b80560357da9e39ae5446adc278a7151e4e03855bf5f.svg"
    ]


    useEffect(() => {
        const ctx = gsap.context(() => {
            benefitRefs.current.forEach((item, index) => {
                ScrollTrigger.create({
                    trigger: item,

                    start: "top top",

                    end: "bottom top",

                    onEnter: () => {
                        setActiveIndex(index);
                    },

                    onEnterBack: () => {
                        setActiveIndex(index);
                    },
                });
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCategoryClick = (index: number) => {
        const element = benefitRefs.current[index];
        if (!element) return;

        setActiveIndex(index);

        const y =
            element.getBoundingClientRect().top +
            window.pageYOffset +
            10;

        gsap.to(window, {
            duration: 0.8, // increase for slower scroll
            scrollTo: y,
            ease: "power2.inOut",
        });
    };


    const categories = ["Travel", "Hotels", "Lifestyle", "Business", "Community"];
    return (
        <section
            ref={sectionRef}
            className="
      bg-[#ebebe6]
    "
        >
            <div
                className="
        grid
        lg:grid-cols-[50%_50%]
        lg:justify-between
        py-4
      "
            >
                {/* LEFT */}

                <div className="overflow-hidden rounded-[22px] w-[calc(100%-16px)] h-[calc(100vh-16px)] p-4 overflow-hidden sticky top-2 left-2">
                    {
                        images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt=""
                                className={`top-1/2 -translate-y-1/2 left-1/2 duration-300 -translate-x-1/2 h-full w-full object-cover transition-all duration-700 z-[5] absolute ${activeIndex >= index ? "w-full h-full" : "w-0! h-0!"}`}
                            />
                        ))
                    }

                    <div className="absolute inset-0 bg-black/35" />

                    {/* Categories */}
                    <div className="absolute left-6 top-6 lg:left-8 lg:top-8 z-10 flex flex-col text-[75px] space-y-4">
                        {categories.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleCategoryClick(index)}
                                className={`
        feature-display
        leading-[0.88]
        text-white
        text-left
        cursor-pointer
        duration-300

        ${activeIndex === index
                                        ? "opacity-100 italic"
                                        : "opacity-50 hover:opacity-80"
                                    }
      `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Brands */}
                    <ScrollMarquee
                        containerClasseName="py-6 2xl:max-w-6xl absolute! left-1/2 -translate-x-1/2 bottom-0 z-10"
                        gradientColor="transparent"
                    >
                        <img src={logos?.[0]} alt="logo-0" className="mx-10 w-24 flex items-center justify-center opacity-70 w-20" />

                        <img src={logos?.[1]} alt="logo-1" className="mx-10 flex w-32 items-center justify-center opacity-70" />

                        <img src={logos?.[2]} alt="logo-2" className="mx-10 w-28 flex items-center justify-center opacity-70 " />

                        <img src={logos?.[3]} alt="logo-3" className="mx-10 flex items-center justify-center opacity-70 w-24" />

                        <img src={logos?.[4]} alt="logo-4" className="mx-10 flex items-center justify-center opacity-70 w-32" />

                    </ScrollMarquee>
                </div>

                {/* RIGHT */}

                <div className="min-w-0">
                    {benefits.map(
                        (item, index) => (
                            <div key={index}>
                                <div
                                    ref={(el) =>
                                    (benefitRefs.current[index] =
                                        el)
                                    }
                                    className="
                min-h-screen
                border-[#2d2d2d1a]
                flex
                items-center
                xl:py-16
                lg:py-12
                w-full
                overflow-hidden
              "
                                >
                                    <Benefit
                                        index={index}
                                        title1={
                                            item.title1
                                        }

                                        title2={
                                            item.title2
                                        }

                                        subTitle={
                                            item.subTitle
                                        }

                                        benefits={
                                            item.benefits
                                        }

                                        benefitCards={
                                            item.benefitCards
                                        }
                                    />
                                </div>
                                {
                                    index !== benefits.length - 1 && <div className="px-10">
                                        <div className="border-b border-[#2d2d2d1a] w-full"></div>
                                    </div>
                                }
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}