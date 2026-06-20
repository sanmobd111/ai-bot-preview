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

                    text: "Complimentary Platinum, Gold, and Silver status.",
                },

                {
                    title: "Preferred Air Savings",

                    text: "VIP pricing with global airlines.",
                },

                {
                    title: "Hotel Rates",

                    text: "Deep savings worldwide.",
                },

                {
                    title: "Premium Lounge",

                    text: "Preferred rates everywhere.",
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
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
    ];


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


    console.log(activeIndex, "active index")

    return (
        <section
            ref={sectionRef}
            className="
      mx-auto
      max-w-[1600px]
    "
        >
            <div
                className="
        grid
        lg:grid-cols-[48%_48%]
        lg:justify-between
      "
            >
                {/* LEFT */}

                <div className="overflow-hidden rounded-[22px] w-full h-screen sticky top-0">
                    {
                        images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt=""
                                className={`
                                    
        absolute
        inset-0
        h-full
        w-full
        object-cover
        duration-500
      ${activeIndex === index ? "opacity-100" : "opacity-0"}
                                    `}
                            />
                        ))
                    }

                    <div className="absolute inset-0 bg-black/35" />

                    {/* Categories */}
                    <div className="absolute left-6 top-6 lg:left-8 lg:top-8">
                        <ul className="font-serif leading-[0.88] text-white">
                            <li className="italic text-5xl lg:text-[88px]">Travel</li>
                            <li className="text-5xl lg:text-[88px] opacity-90">Hotels</li>
                            <li className="text-5xl lg:text-[88px] opacity-80">
                                Lifestyle
                            </li>
                            <li className="text-5xl lg:text-[88px] opacity-75">
                                Business
                            </li>
                            <li className="text-5xl lg:text-[88px]">
                                Community
                            </li>
                        </ul>
                    </div>

                    {/* Brands */}
                    <div className="absolute bottom-6 left-0 w-full px-6 lg:px-12 text-white">
                        <p className="mb-6 text-center text-xs uppercase tracking-[0.2em]">
                            Featured Travel Brands
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-xl font-medium">
                            <span>Singapore</span>
                            <span>Virgin Atlantic</span>
                            <span>United</span>
                            <span>AVIS</span>
                            <span>SIXT</span>
                            <span>Hertz</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}

                <div>
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

                flex

                items-center
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