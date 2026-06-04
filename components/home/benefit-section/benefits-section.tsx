"use client";



import "swiper/css";
import "swiper/css/navigation";
import Benefit from "./benefit";

// const benefitCards = [
//     {
//         title: "Global Airline Collection",
//         image:
//             "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200",
//     },
//     {
//         title: "Car Rental & Ground Transport",
//         image:
//             "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
//     },
//     {
//         title: "Founders Hotel Collection",
//         image:
//             "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
//     },
//     {
//         title: "Luxury Lounge Access",
//         image:
//             "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
//     },
// ];

// const benefits = [
//     {
//         title: "Loyalty Status",
//         text: "Complimentary Platinum, Gold, and Silver status with leading airline, hotel, and car rental brands.",
//     },
//     {
//         title: "Preferred Air & Car Savings",
//         text: "VIP pricing with 15+ global airlines, rental brands and transportation partners.",
//     },
//     {
//         title: "Hotel Rates & Privileges",
//         text: "Deep savings at luxury hotels worldwide plus preferred member pricing.",
//     },
//     {
//         title: "Premium Travel & Lounge",
//         text: "Preferred rates on airport lounges, villas, resorts and travel experiences.",
//     },
// ];
const benefits = [
    {
        title1: "Travel better,",
        title2: "anywhere.",
        benefits: [
            {
                title: "Loyalty Status",
                text: "Complimentary Platinum, Gold, and Silver status with leading airline, hotel, and car rental brands.",
            },
            {
                title: "Preferred Air & Car Savings",
                text: "VIP pricing with 15+ global airlines, rental brands and transportation partners.",
            },
            {
                title: "Hotel Rates & Privileges",
                text: "Deep savings at luxury hotels worldwide plus preferred member pricing.",
            },
            {
                title: "Premium Travel & Lounge",
                text: "Preferred rates on airport lounges, villas, resorts and travel experiences.",
            },
        ],
        benefitCards: [
            {
                title: "Global Airline Collection",
                image:
                    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200",
            },
            {
                title: "Car Rental & Ground Transport",
                image:
                    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200",
            },
            {
                title: "Founders Hotel Collection",
                image:
                    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
            },
            {
                title: "Luxury Lounge Access",
                image:
                    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200",
            },
        ],
    }
]
export default function TravelBenefitsSection() {
    return (
        <section className="bg-[#f4f4f2] py-6 lg:py-10 px-4 lg:px-0">
            <div className="mx-auto max-w-[1600px]">
                <div className=" grid grid-cols-1 gap-8 lg:gap-0 lg:justify-between lg:grid-cols-[48%_48%]">

                    {/* LEFT SIDE */}
                    <div className="relative overflow-hidden rounded-[22px] w-full">
                        <img
                            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=2000"
                            alt=""
                            className="w-full object-cover h-[500px] lg:h-full"
                        />

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

                    {/* RIGHT SIDE */}
                    {
                        benefits.map((item) => (
                            <Benefit
                                key={item.title1}
                                benefits={item.benefits}
                                benefitCards={item.benefitCards}
                                title1={item.title1}
                                title2={item.title2}
                            />
                        ))
                    }

                </div>
            </div>
        </section>
    );
}