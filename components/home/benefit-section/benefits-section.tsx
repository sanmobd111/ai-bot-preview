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
            title1: "The Opportunity Is ",

            title2: "Already Here.",

            subTitle: "Artificial intelligence is creating one of the largest wealth-building opportunities of our generation. BizNest Unlimited empowers entrepreneurs to launch their own white-label AI business, build recurring revenue, and establish a position in a rapidly expanding market while leveraging infrastructure, systems, and technology already built for scale.",

            benefits: [
                {
                    title: "Loyalty Status",

                    text: "Launch your own AI business",
                },

                {
                    title: "Preferred Air Savings",

                    text: "Build recurring revenue",
                },

                {
                    title: "Hotel Rates",

                    text: "Operate under your own brand",
                },

                {
                    title: "Premium Lounge",

                    text: "Leverage technology built for scale",
                },
            ],

            benefitCards: [
                {
                    title: "Business Ownership",
                    subtitle: "Build a business you control under your own brand and vision.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/1-airlines-49654483f229f92a4dae2cd72d7f09cdcd709615e3d559eb5d3806b597e88ebe.jpg",
                    icon: <LiaPlaneSolid />
                },
                {
                    title: "Recurring Revenue",
                    subtitle: "Create ongoing income through long-term client relationships.",
                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/2-car-rentals-c0bd9cd1a8b421600b6a1688624662198b0618c0d1fb215c006e7dcf54abcb89.jpg",
                    icon: <IoCarOutline />
                },
                {
                    title: "White Label Platform",
                    subtitle: "Launch with infrastructure, systems, and technology already in place.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/3-hotels-9bbb20ee66645d09f8d71ed780449df0a56d4ffbdd87be3719db045f28a42675.jpg",
                    icon: <LiaConciergeBellSolid />
                },
                {
                    title: "Market Position",
                    subtitle: "Establish yourself within one of the fastest-growing sectors of modern business.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/3-travel-lounge-6c5673d93e123d8b0b570e52474831e0d772f78a0768402b00e0c0b6369b5c74.jpg",
                    icon: <PiArmchairLight />
                },
                {
                    title: "Long-Term Opportunity",
                    subtitle: "Build a business positioned for growth as AI adoption continues to expand.",
                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/4-curated-travel-1b33bc02f56b5a5511f7536b1f5d44a6391c194bf14336b012752a58a3a7b9d9.jpg",
                    icon: <MdOutlineLuggage />
                },
            ],
        },
        {
            title1: "Build A Brand.",

            title2: "Own Your Future.",
            subTitle: "Most business opportunities ask you to promote someone else's company, products, and identity. BizNest Unlimited takes a different approach.You build under your own brand, your own name, and your own  vision. Your clients know your company. Your reputation drives the relationship. Your brand becomes the asset. Instead of spending years building equity for someone else, you're creating market presence, customer loyalty, and long-term business value that belongs to you.",

            benefits: [
                {
                    title: "Luxury Member Rates",

                    text: "Build under your own brand",
                },

                {
                    title: "Global Brand Partnerships",

                    text: "Own your client relationships",
                },

                {
                    title: "Complimentary loyalty status",

                    text: "Create long-term business equity",
                },

                {
                    title: "On-Property Privileges",

                    text: "Establish a recognizable market presence",
                },
            ],

            benefitCards: [
                {
                    title: "Your Brand",
                    subtitle: "Operate under your own company name, identity, and market presence.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/1-founders-hotels-08544a0d55902071c30fa0ddec931434b0a79d4c763c16d1287dcb9b9e633673.jpg",
                    icon: <LuSofa />
                },
                {
                    title: "Your Reputation",
                    subtitle: "Build trust, recognition, and credibility around a brand you control.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/2-brand-partners-cd3b490e515303f45595bf46b6ca5aa0ad20e596c48ec17b2f8e64ac5267689a.jpg",
                    icon: <AiOutlineGlobal />
                },
                {
                    title: "Your Clients",
                    subtitle: "Develop direct relationships that strengthen your business over time.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/3-loyalty-status-3f803a03b1302cb55fba3170d3564c15a3c53fd52a13af2ae94ab6b7de683236.jpg",
                    icon: <CiStar />
                },
                {
                    title: "Your Equity",
                    subtitle: "Create value that remains attached to your company, not someone else's.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/4-curated-travel-d957eba2906386dac0a9e7181d20688829e029a106774cc510fdb106cbdd1ca7.jpg",
                    icon: <PiGlobeHemisphereEast />
                },
                {
                    title: "Your Legacy",
                    subtitle: "Build an asset designed to grow beyond individual transactions and opportunities.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/4-curated-travel-d957eba2906386dac0a9e7181d20688829e029a106774cc510fdb106cbdd1ca7.jpg",
                    icon: <PiGlobeHemisphereEast />
                },
            ],
        },
        {
            title1: "Turn Demand",

            title2: "Into Clientele.",

            subTitle: "Every business needs customers. The most successful businesses build systems for attracting, serving, and retaining them. BizNest Unlimited gives entrepreneurs the opportunity to serve businesses actively seeking AI-powered solutions while building a growing client base, recurring revenue, and long-term business value. Every new client becomes more than a transaction—it becomes an asset that contributes to the growth of your company.",

            benefits: [
                {
                    title: "Look good, feel good",

                    text: "Build a growing client portfolio",
                },

                {
                    title: "Enhance your living and gifting",

                    text: "Create recurring revenue opportunities",
                },

                {
                    title: "Drive with distinction",

                    text: "Generate referrals through client success",
                },

                {
                    title: "Access the exceptional",

                    text: "Establish long-term business value",
                },
            ],

            benefitCards: [
                {
                    title: "Client Acquisition",
                    subtitle: "Turn growing demand into real business opportunities and new client relationships.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/1-live-events-646e9fb8f2dd36b6ecba0f9722af66705178e0ee13f8957c2adfc8bb81df432d.jpg",
                    icon: <PiTicketLight />
                },
                {
                    title: "Client Portfolio",
                    subtitle: "Build a base of businesses that contribute to your long-term growth.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/2-brand-partners-cd3b490e515303f45595bf46b6ca5aa0ad20e596c48ec17b2f8e64ac5267689a.jpg",
                    icon: <PiFlowerLotus />
                },
                {
                    title: "Recurring Revenue",
                    subtitle: "Create ongoing revenue through retained clients and continued service relationships.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/4-luxury-vehicles-c6d75e2b5c15e579d33c92e781f6a5ce1dfd1e5e5dd4d9e1eb709443a4bb2f53.jpg",
                    icon: <IoCarSportOutline />
                },
                {
                    title: "Referral Expansion",
                    subtitle: "Satisfied clients can become one of your strongest sources of future growth.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/3-retail-gifting-b077787a3da041254f26595cb1410d97a42049cfc8bffddee05b4c7a2c18ad67.jpg",
                    icon: <IoBagOutline />
                },
                {
                    title: "Business Value",
                    subtitle: "A growing client base becomes one of the most valuable assets your company owns.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/3-retail-gifting-b077787a3da041254f26595cb1410d97a42049cfc8bffddee05b4c7a2c18ad67.jpg",
                    icon: <IoBagOutline />
                },
            ],
        },
        {
            title1: "Built For Scale.",

            title2: "Designed For Leverage.",

            subTitle: "Most entrepreneurs spend years building infrastructure, assembling tools, managing technology, and solving operational challenges before they ever gain traction. BizNest Unlimited changes that equation. Instead of building the systems, you leverage them. Instead of developing the technology, you deploy it. Instead of managing complexity, you focus on clients, growth, and opportunity while utilizing infrastructure already designed to support scale.",

            benefits: [
                {
                    title: "Scale efficiently",

                    text: "Infrastructure already in place",
                },

                {
                    title: "Spend less on the essentials",

                    text: "Technology built for deployment",
                },

                {
                    title: "Work from anywhere",

                    text: "Reduced operational complexity",
                },

                {
                    title: "Accelerate growth",

                    text: "Focus on growth instead of development",
                },
            ],

            benefitCards: [
                {
                    title: "Infrastructure",
                    subtitle: "Leverage enterprise-grade systems already built and ready for use.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/1-software-growth-1f10043d5eb7cdfd2f5d90c2dce5eab96bf5b257c49f8bbdd0a9ca45f3f10327.jpg",
                    icon: <PiLaptop />
                },
                {
                    title: "Automation",
                    subtitle: "Utilize intelligent automation designed to improve efficiency and scalability.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/5-devices-equipment-f30a4e82ad03a762155af6a17f791077c8eaad71fbbb296ef6a7e1af3968ff9f.jpg",
                    icon: <PiDevices />
                },
                {
                    title: "Operational Support",
                    subtitle: "Access tools, resources, and systems that simplify business operations.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/3-co-working-1d1a548897e60ab876375d1222b8bbc74f0432c062ced5663d4950ecbed6e7e8.jpg",
                    icon: <RiGroupLine />
                },
                {
                    title: "Speed To Market",
                    subtitle: "Move faster by leveraging technology that would otherwise take years to build.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/4-startup-stack-701f6cf48a9e3019bbed7254b83766d567a8419ce399ce541b78acd13e63fcbf.jpg",
                    icon: <BiBarChartSquare />
                },
                {
                    title: "Scalable Foundation",
                    subtitle: "Build upon infrastructure designed to support long-term growth and expansion.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/4-startup-stack-701f6cf48a9e3019bbed7254b83766d567a8419ce399ce541b78acd13e63fcbf.jpg",
                    icon: <FiBox />
                },
            ],
        },
        {
            title1: "Turn Effort",

            title2: "Into Expansion.",

            subTitle: "The most valuable businesses aren't built through single transactions. They're built through momentum, recurring revenue, client retention, and consistent expansion over time. BizNest Unlimited provides entrepreneurs with the opportunity to build a business designed for growth, where every client relationship, every referral, and every success can contribute to larger opportunities in the future.",

            benefits: [
                {
                    title: "Move faster with the right connections",

                    text: "Build recurring revenue streams",
                },

                {
                    title: "Find your people, not just your peers",

                    text: "Create momentum through client growth",
                },

                {
                    title: "Turn shared experiences into meaningful outcomes",

                    text: "Expand through referrals and retention",
                },
                {
                    title: "Turn shared experiences into meaningful outcomes",

                    text: "Scale beyond individual transactions",
                },
            ],

            benefitCards: [
                {
                    title: "Recurring Revenue",
                    subtitle: "Create predictable income through ongoing client relationships and service delivery.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/1-founders-table-dinners-7c4ee7d3602e8af4a43d5bc30840fad1e9b56fd44d3340211bd24d7c7e86f543.jpg",
                    icon: <IoRestaurantOutline />
                },
                {
                    title: "Business Momentum",
                    subtitle: "Turn each new client, referral, and success into future growth opportunities.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Client Retention",
                    subtitle: "Build long-term relationships that continue creating value over time.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
                {
                    title: "Expansion Potential",
                    subtitle: "Open new pathways for growth as your business and reputation expand.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Long-Term Wealth",
                    subtitle: "Create a business designed to generate value, income, and opportunity for years to come",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
            ],
        },
        {
            title1: "Built To Help",

            title2: "Entrepreneurs Win.",

            subTitle: "BizNest Unlimited was created around a simple belief: entrepreneurs should have access to the opportunities being created by artificial intelligence without needing to become software developers, technology companies, or infrastructure providers. By combining proven systems, scalable infrastructure, operational support, and business opportunity into a single ecosystem, BizNest Unlimited helps entrepreneurs focus on what matters most—building relationships, serving clients, generating revenue, and creating long-term business value.",

            benefits: [
                {
                    title: "Move faster with the right connections",

                    text: "Entrepreneur-focused business model",
                },

                {
                    title: "Find your people, not just your peers",

                    text: "Infrastructure built for scale",
                },

                {
                    title: "Turn shared experiences into meaningful outcomes",

                    text: "Support designed for growth",
                },
                {
                    title: "Turn shared experiences into meaningful outcomes",

                    text: "Opportunity backed by proven systems",
                },
            ],

            benefitCards: [
                {
                    title: "Entrepreneur First",
                    subtitle: "Built for business builders, operators, consultants, and growth-minded entrepreneurs.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/1-founders-table-dinners-7c4ee7d3602e8af4a43d5bc30840fad1e9b56fd44d3340211bd24d7c7e86f543.jpg",
                    icon: <IoRestaurantOutline />
                },
                {
                    title: "Proven Foundation",
                    subtitle: "Leverage systems, infrastructure, and resources already designed for deployment.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Business Support",
                    subtitle: "Access tools, guidance, and resources that help simplify the path to growth.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
                {
                    title: "Shared Success",
                    subtitle: "Our success is directly connected to the success of the partners we support.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Long-Term Vision",
                    subtitle: "Built to create lasting opportunities as the AI economy continues to evolve.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
            ],
        },
        {
            title1: "From Opportunity",

            title2: "To Action.",

            subTitle: "Every successful business starts with a decision to move forward. BizNest Unlimited provides a clear pathway for entrepreneurs looking to establish their own position in the AI economy. Instead of spending months researching technology, building systems, and trying to figure everything out alone, partners gain access to a framework designed to help them launch, grow, and scale with greater confidence. The journey begins with a single step and evolves into building a business designed for long-term opportunity.",

            benefits: [
                {
                    title: "Move faster with the right connections",

                    text: "Simple onboarding process",
                },

                {
                    title: "Find your people, not just your peers",

                    text: "Launch under your own brand",
                },

                {
                    title: "Turn shared experiences into meaningful outcomes",

                    text: "Access systems and resources quickly",
                },
                {
                    title: "Turn shared experiences into meaningful outcomes",

                    text: "Focus on building your business",
                },
            ],

            benefitCards: [
                {
                    title: "Join The Partnership",
                    subtitle: "Become part of a growing ecosystem built around opportunity, ownership, and growth.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/1-founders-table-dinners-7c4ee7d3602e8af4a43d5bc30840fad1e9b56fd44d3340211bd24d7c7e86f543.jpg",
                    icon: <IoRestaurantOutline />
                },
                {
                    title: "Launch Your Brand",
                    subtitle: "Establish your business identity and begin building your market presence.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Position Your Business",
                    subtitle: "Leverage available resources to identify opportunities and attract clients.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
                {
                    title: "Serve & Grow",
                    subtitle: "Build relationships, deliver value, and create momentum through client success.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Scale Your Opportunity",
                    subtitle: "Expand your reach, increase your impact, and continue building long-term business value.",

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


    const categories = ["Opportunity", "Brand", "Clients", "Systems", "Growth", "BizNest", "Getting Started"];
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