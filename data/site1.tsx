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

export const banner = {
    title: ` Own Your Lane
                        <br />
                        <span className="italic">In The AI Economy.</span>`,
    subtitle: "Launch your own branded AI business, build recurring revenue, and establish your position in one of the fastest-growing sectors of the modern economy.",
    btnText: "Become a White Label Partner"
}

export const membership = {
    smallTitle: "BIZNEST UNLIMITED",
    title: (
        <>
            The Next
            <br className="hidden xl:block 2xl:hidden" />
            Business
            <br className="hidden 2xl:block" />
            Revolution{" "}
            <span className="italic font-light text-zinc-500 inline-block">
                Is Already.
            </span>{" "}
            <span className="italic font-light text-zinc-500 inline-block">
                Underway.
            </span>
        </>
    ),
    subtitle: "AI is changing how businesses operate, communicate, market, sell, and serve customers. Companies are actively searching for solutions, creating new opportunities for entrepreneurs and business builders.",
    cards: [
        {
            title: "Own The Brand",
            description:
                "Build under your own company name while maintaining control of your market presence and customer relationships.",
            image:
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-travel-b2ad9d86d872895799a9ae654f43b07857774e0cbfe8548cf424095546ff068f.jpg",
        },
        {
            title: "Serve Your Clients",
            description:
                "Deliver AI-powered solutions businesses already need without developing the technology yourself.",
            image:
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-connect-e80f688b9ae68390b8f4f0ece251678ddaacf1f9cb807bddbde8c7a02ab6558e.jpg",
        },
        {
            title: "Enterprise AI Infrastructure",
            description:
                "Access powerful AI systems, automation tools, and operational support designed for growth.",
            image:
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-benefits-00267a432b889babc23bad083be97a708800e592f55ae2e0a916d9680b9811c1.jpg",
        },
        {
            title: "Scale With Confidence",
            description:
                "Focus on acquiring clients and growing revenue while the technology foundation is already in place.",
            image:
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-business-06c64a737a85944dc7759e471ae570bb27bb13faa0ae3d71bcbf40fc7b57e7cf.jpg",
        },
    ]
}

export const network = {
    title: (<>
        A Market with {" "}
        <div className="italic inline-block font-light text-zinc-500 feature-display">
            Massive
        </div>
        {" "}
        <div className="italic inline-block font-light text-zinc-500 feature-display">
            Potential.
        </div>
    </>),
    stats: [
        {
            value: 80,
            suffix: "%",
            label: "Growing Investment",
        },
        {
            value: 90,
            suffix: "%+",
            label: "Growing Adoption",
        },
        {
            value: "Trillions",
            suffix: "",
            label: "Growing Opportunity",
        },
        {
            value: "24/7",
            suffix: "",
            label: "Growing Demand",
        },
    ]
}

export const benefits = {
    categories: ["Opportunity", "Brand", "Clients", "Systems", "Growth", "BizNest", "Getting Started"],
    benefits: [
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
    ]
}

export const partners = {
    title: "Our Partners",
    heading: (
        <>
            Your AI Business.
            Backed By
            <br />
            {/* from the world&apos;s
              <br /> */}
            <span className="italic text-zinc-500 feature-display">
                BizNest Unlimited
            </span>
        </>
    ),
    subtitle: <>
        Unlock negotiated pricing, priority treatment, and the experiences
        our members can&apos;t access anywhere else.This isn’t a list of
        discounts — it&apos;s fast-track access to what you deserve.
    </>,
}

export const testimonials = {
    testimonials: [
        {
            id: 1,
            designation: "Entrepreneur",
            title: "BizNest Unlimited",
            text: "I knew AI was creating opportunities, but I wasn't sure where I fit. BizNest Unlimited gave me a practical way to build something of my own without becoming a technology expert.",
        },
        {
            id: 2,
            designation: "Business Owner",
            title: "BizNest Unlimited",
            text: "What attracted me most was the ability to build under my own brand. I wanted to create a business I could grow, scale, and truly call my own.",
        },
        {
            id: 3,
            title: "BizNest Unlimited",
            designation: "Growth Consultant.",
            text: "I saw where the market was heading and wanted a way to participate. BizNest Unlimited provided a clear path to enter the AI space with confidence.",
        },
        {
            id: 4,
            title: "BizNest Unlimited",
            designation: "Sales Professional",
            text: "Most opportunities require learning an entirely new skill set. BizNest Unlimited allowed me to focus on business development, client acquisition, and creating momentum.",
        },
        {
            id: 5,
            title: "BizNest Unlimited",
            designation: "Business Builder",
            text: "The opportunity isn't just about AI. It's about ownership, building a brand, serving clients, and creating long-term business value.",
        },
    ]
}

export const membershipAudience = {
    audiences: [
        {
            id: 1,
            tab: "The BizNest Advantage",
            image:
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/members-leaders-a3c6646619763dc4fecde22d8b76826e9517608bb092b59ffe4608044cbfe1f0.jpg",

            heroTitle: "THE BIZNEST ",
            heroItalic: "ADVANTAGE",

            title:
                "You Focus On Building. We Handle The Technology.",

            description:
                "Building a technology company from scratch can require years of development, infrastructure, support systems, and operational complexity. BizNest Unlimited removes those barriers by providing the technology, systems, automation, and infrastructure that power service delivery behind the scenes. Instead of managing software development, entrepreneurs can focus on building their brand, serving clients, generating revenue, and growing their business.",

            features: [
                {
                    title: "Exceptional travel",
                    text: "✓ No Coding Required",
                },
                {
                    title: "Lifestyle advantages",
                    text: "✓ No Software Development",
                },
                {
                    title: "Trusted circle",
                    text: "✓ No Infrastructure Management",
                },
                {
                    title: "Always-on support",
                    text: "✓ No Technical Complexity",
                },
                {
                    title: "Always-on support",
                    text: "✓ Focus On Clients & Revenue",
                },
                {
                    title: "Always-on support",
                    text: "✓ Built For Entrepreneurs",
                },
            ],
        },
        {
            id: 2,
            tab: "Recurring Revenue Potential",
            image:
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/members-entrepreneurs-3e4f19ae20054f93ba5fb6547f21c64c01ef12fd452fd4b0f9bd9300b3b22c44.jpg",

            heroTitle: "RECURRING ",
            heroItalic: "REVENUE POTENTIAL",

            title:
                "Build Once. Grow Month After Month.",

            description:
                "Many traditional businesses start each month at zero. Every sale must be replaced, every customer must be reacquired, and growth often depends on constant effort. BizNest Unlimited is designed around building long-term client relationships and recurring service opportunities that can continue generating value over time. As your client base grows, so does the potential for predictable revenue, retention, referrals, and sustainable business growth.",

            features: [
                {
                    title: "Better travel",
                    text: "✓ Monthly Recurring Revenue Potential",
                },
                {
                    title: "Smarter spend",
                    text: "✓ Long-Term Client Relationships",
                },
                {
                    title: "Real network",
                    text: "✓ Repeatable Business Model",
                },
                {
                    title: "Always-on support",
                    text: "✓ Scalable Growth Opportunities",
                },
                {
                    title: "Always-on support",
                    text: "✓ Client Retention Focus",
                },
                {
                    title: "Always-on support",
                    text: "✓ Sustainable Revenue Development",
                },
            ],
        },
        {
            id: 3,
            tab: "Entrepreneurial Professionals",
            image:
                "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/members-professionals-900229f36358a5a61451dba3902d569cc80ede236cf686bec0303977e275a724.jpg",

            heroTitle: "FAST ",
            heroItalic: "LAUNCH PATH",

            title:
                "A Clear Path From Idea To Opportunity.",

            description:
                "BizNest Unlimited provides a structured pathway designed to help entrepreneurs move from interest to execution without unnecessary complexity. Rather than spending months planning software, hiring developers, or building infrastructure, partners can focus on launching their brand, positioning their business, attracting clients, and creating momentum within their market. Process",

            features: [
                {
                    title: "Loyalty status unlocked",
                    text: "01. Join BizNest Unlimited ",
                },
                {
                    title: "Preferred travel",
                    text: "02. Launch Under Your Brand",
                },
                {
                    title: "Trusted circle",
                    text: "03. Position Your Business",
                },
                {
                    title: "Always-on support",
                    text: "04. Serve Clients",
                },
                {
                    title: "Always-on support",
                    text: "05. Grow & Expand",
                },
            ],
        },
    ]
}

export const faq = {
    faqs: [
        {
            question: "Do I need AI or technical experience?",
            answer:
                "No. BizNest Unlimited  is designed for entrepreneurs, consultants, agency owners, coaches, advisors, and business builders. The focus is on building relationships, serving clients, and growing your business rather than developing technology.",
        },
        {
            question: "Can I operate under my own brand?",
            answer:
                "Yes. The White Label Partnership is designed to allow you to build and grow under your own business identity while maintaining ownership of your brand and client relationships.",
        },
        {
            question: "Do I need an existing business to join?",
            answer:
                "No. Some partners use BizNest Unlimited to expand an existing business, while others use it as the foundation for a completely new venture.",
        },
        {
            question: "What types of businesses can benefit from AI solutions?",
            answer:
                "AI solutions are being adopted across nearly every industry, including professional services, real estate, healthcare, home services, consulting, coaching, retail, and many others.",
        },
        {
            question: "How does BizNest Unlimited support its partners?",
            answer:
                "Partners receive access to infrastructure, systems, resources, and business development support designed to help them launch, serve clients, and grow with confidence.",
        },
        {
            question: "How quickly can I get started?",
            answer:
                "Once onboarded, partners can begin exploring the platform, learning the opportunity, and positioning their business immediately.",
        },
        {
            question: "Is this a franchise?",
            answer:
                "No. BizNest Unlimited is a White Label Partnership that allows entrepreneurs to build under their own brand while leveraging shared infrastructure, systems, and resources.",
        },
        {
            question: "Who is this opportunity best suited for?",
            answer:
                "Entrepreneurs, consultants, agency owners, coaches, advisors, operators, sales professionals, and growth-minded individuals seeking to build within the rapidly expanding AI economy.",
        },
        {
            question: "Do I need to create the technology myself?",
            answer:
                "No. BizNest Unlimited  provides the infrastructure, systems, automation, and support that power service delivery behind the scenes, allowing partners to focus on clients, growth, and business development.",
        },
        {
            question: "Can this be operated alongside my existing business?",
            answer:
                "Yes. Many partners integrate BizNest Unlimited  into an existing business, while others choose to build a dedicated AI-focused brand from the ground up.",
        },
    ],
    btnText: "Become A White Label Partner"
}

export const footerReveal = {
    joinFounder: {
        smallTitle: "BIZNEST UNLIMITED",
        heading: (
            <>
            THE OPPORTUNITY {" "}
            <span className=" italic  feature-display">
              AHEAD
            </span>
            </>
        )
    }
}
