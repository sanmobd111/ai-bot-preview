// "use client";



// import "swiper/css";
// import "swiper/css/navigation";
// import Benefit from "./benefit";

// // const benefitCards = [
// //     {
// //         title: "Global Airline Collection",
// //         image:
// //             "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200",
// //     },
// //     {
// //         title: "Car Rental & Ground Transport",
// //         image:
// //             "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
// //     },
// //     {
// //         title: "Founders Hotel Collection",
// //         image:
// //             "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
// //     },
// //     {
// //         title: "Luxury Lounge Access",
// //         image:
// //             "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
// //     },
// // ];

// // const benefits = [
// //     {
// //         title: "Loyalty Status",
// //         text: "Complimentary Platinum, Gold, and Silver status with leading airline, hotel, and car rental brands.",
// //     },
// //     {
// //         title: "Preferred Air & Car Savings",
// //         text: "VIP pricing with 15+ global airlines, rental brands and transportation partners.",
// //     },
// //     {
// //         title: "Hotel Rates & Privileges",
// //         text: "Deep savings at luxury hotels worldwide plus preferred member pricing.",
// //     },
// //     {
// //         title: "Premium Travel & Lounge",
// //         text: "Preferred rates on airport lounges, villas, resorts and travel experiences.",
// //     },
// // ];
// const benefits = [
//     {
//         title1: "Travel better,",
//         title2: "anywhere.",
//         benefits: [
//             {
//                 title: "Loyalty Status",
//                 text: "Complimentary Platinum, Gold, and Silver status with leading airline, hotel, and car rental brands.",
//             },
//             {
//                 title: "Preferred Air & Car Savings",
//                 text: "VIP pricing with 15+ global airlines, rental brands and transportation partners.",
//             },
//             {
//                 title: "Hotel Rates & Privileges",
//                 text: "Deep savings at luxury hotels worldwide plus preferred member pricing.",
//             },
//             {
//                 title: "Premium Travel & Lounge",
//                 text: "Preferred rates on airport lounges, villas, resorts and travel experiences.",
//             },
//         ],
//         benefitCards: [
//             {
//                 title: "Global Airline Collection",
//                 image:
//                     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200",
//             },
//             {
//                 title: "Car Rental & Ground Transport",
//                 image:
//                     "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
//             },
//             {
//                 title: "Founders Hotel Collection",
//                 image:
//                     "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
//             },
//             {
//                 title: "Luxury Lounge Access",
//                 image:
//                     "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
//             },
//         ],
//     }
// ]
// export default function TravelBenefitsSection() {
//     return (
//         <section className="bg-[#f4f4f2] py-6 lg:py-10 px-4 lg:px-0">
//             <div className="mx-auto max-w-[1600px]">
//                 <div className=" grid grid-cols-1 gap-8 lg:gap-0 lg:justify-between lg:grid-cols-[48%_48%]">

//                     {/* LEFT SIDE */}
// <div className="relative overflow-hidden rounded-[22px] w-full">
//     <img
//         src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000"
//         alt=""
//         className="w-full object-cover h-[500px] lg:h-full"
//     />

//     <div className="absolute inset-0 bg-black/35" />

//     {/* Categories */}
//     <div className="absolute left-6 top-6 lg:left-8 lg:top-8">
//         <ul className="font-serif leading-[0.88] text-white">
//             <li className="italic text-5xl lg:text-[88px]">Travel</li>
//             <li className="text-5xl lg:text-[88px] opacity-90">Hotels</li>
//             <li className="text-5xl lg:text-[88px] opacity-80">
//                 Lifestyle
//             </li>
//             <li className="text-5xl lg:text-[88px] opacity-75">
//                 Business
//             </li>
//             <li className="text-5xl lg:text-[88px]">
//                 Community
//             </li>
//         </ul>
//     </div>

//     {/* Brands */}
//     <div className="absolute bottom-6 left-0 w-full px-6 lg:px-12 text-white">
//         <p className="mb-6 text-center text-xs uppercase tracking-[0.2em]">
//             Featured Travel Brands
//         </p>

//         <div className="flex flex-wrap items-center justify-center gap-6 text-xl font-medium">
//             <span>Singapore</span>
//             <span>Virgin Atlantic</span>
//             <span>United</span>
//             <span>AVIS</span>
//             <span>SIXT</span>
//             <span>Hertz</span>
//         </div>
//     </div>
// </div>

//                     {/* RIGHT SIDE */}
// {
//     benefits.map((item) => (
//         <Benefit
//             key={item.title1}
//             benefits={item.benefits}
//             benefitCards={item.benefitCards}
//             title1={item.title1}
//             title2={item.title2}
//         />
//     ))
// }

//                 </div>
//             </div>
//         </section>
//     );
// }


"use client";

import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Benefit from "./benefit";
import ScrollMarquee from "@/components/shared/scroll-marque";
import { LiaPlaneSolid } from "react-icons/lia";

gsap.registerPlugin(ScrollTrigger);

export default function TravelBenefit() {
    const sectionRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const benefitRefs = useRef([]);

    benefitRefs.current = [];

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
                    title: "Airline",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/1-airlines-49654483f229f92a4dae2cd72d7f09cdcd709615e3d559eb5d3806b597e88ebe.jpg",
                    icon: <LiaPlaneSolid />
                },
                {
                    title: "Airline",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/1-airlines-49654483f229f92a4dae2cd72d7f09cdcd709615e3d559eb5d3806b597e88ebe.jpg",
                    icon: <LiaPlaneSolid />
                },
                {
                    title: "Airline",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/1-airlines-49654483f229f92a4dae2cd72d7f09cdcd709615e3d559eb5d3806b597e88ebe.jpg",
                    icon: <LiaPlaneSolid />
                },
                // {
                //     title: "Airline",

                //     image:
                //         "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/1-airlines-49654483f229f92a4dae2cd72d7f09cdcd709615e3d559eb5d3806b597e88ebe.jpg",
                //     icon: <LiaPlaneSolid />
                // },
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
                    title: "Airline",

                    image:
                        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200",
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
                    title: "Airline",

                    image:
                        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200",
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
        console.log(benefitRefs.current)
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
                    markers: true,
                });
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);


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
        lg:grid-cols-[50%_48%]
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
                                className={`top-1/2 -translate-y-1/2 left-1/2 duration-300 -translate-x-1/2 h-full w-full object-cover transition-all duration-700 z-[5] absolute ${activeIndex === index ? "w-full h-full" : " delay-500 w-0! h-0!"}`}
                            />
                        ))
                    }

                    <div className="absolute inset-0 bg-black/35" />

                    {/* Categories */}
                    <div className="absolute left-6 top-6 lg:left-8 lg:top-8 z-10 flex flex-col text-[75px] space-y-4">
                        {
                            categories.map((item, index) => (
                                <span
                                    key={index}
                                    className={`feature-display leading-[0.88] text-white ${activeIndex === index ? "opacity-100 italic" : "opacity-50"}`}
                                >
                                    {item}
                                </span>
                            ))
                        }
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
                            <div
                                key={index}
                                ref={(el) =>
                                (benefitRefs.current[index] =
                                    el)
                                }
                                className="
                min-h-screen
                border-b last:border-b-0
                border-[#2d2d2d1a]
                flex
                items-center
                py-16
              "
                            >
                                <Benefit
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
                        )
                    )}
                </div>
            </div>
        </section>
    );
}