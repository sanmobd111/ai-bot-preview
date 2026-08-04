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
            The Next Business Revolution{" "}
            <br className="hidden 2xl:block" />
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
            label: "Growing Market Investment",
        },
        {
            value: 90,
            suffix: "%+",
            label: "Growing Business Adoption",
        },
        {
            value: "Trillions",
            suffix: "",
            label: "Global Revenue Opportunity",
        },
        {
            value: "24/7",
            suffix: "",
            label: "Continuous Customer Demand",
        },
    ]
}

export const benefits = {
    categories: ["Opportunity", "Brand", "Clients", "Systems", "Growth", "BizNest", "Getting Started"],
    benefits: [
        {
            title1: "The Opportunity Is ",

            title2: "Already Here.",

            subTitle: "Artificial intelligence is creating one of the largest <b>wealth-building opportunities</b> of our generation. BizNest Unlimited empowers entrepreneurs to launch their own <b>white-label AI business</b>, build <b>recurring revenue</b>, and establish a position in a rapidly expanding market while leveraging <b>infrastructure</b>, systems, and <b>technology</b> already built for <b>scale</b>.",

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
                    subtitle: "Build a comprehensive business you fully control and operate entirely under <b>your own brand</b> identity, unique vision, and long-term strategic direction without corporate interference.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/1-airlines-49654483f229f92a4dae2cd72d7f09cdcd709615e3d559eb5d3806b597e88ebe.jpg",
                    icon: <LiaPlaneSolid />
                },
                {
                    title: "Recurring Revenue",
                    subtitle: "Create a predictable, highly resilient stream of ongoing monthly income through <b>recurring revenue</b> models and deeply integrated, long-term client relationships.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/2-car-rentals-c0bd9cd1a8b421600b6a1688624662198b0618c0d1fb215c006e7dcf54abcb89.jpg",
                    icon: <IoCarOutline />
                },
                {
                    title: "White Label Platform",
                    subtitle: "Launch instantly with enterprise-grade <b>infrastructure</b>, robust operational systems, and cutting-edge <b>technology</b> already built, tested, and positioned for immediate deployment.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/3-hotels-9bbb20ee66645d09f8d71ed780449df0a56d4ffbdd87be3719db045f28a42675.jpg",
                    icon: <LiaConciergeBellSolid />
                },
                {
                    title: "Market Position",
                    subtitle: "Establish yourself as a trusted authority within one of the fastest-growing and most lucrative <b>AI business</b> sectors currently transforming the modern commercial landscape.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/3-travel-lounge-6c5673d93e123d8b0b570e52474831e0d772f78a0768402b00e0c0b6369b5c74.jpg",
                    icon: <PiArmchairLight />
                },
                {
                    title: "Long-Term Opportunity",
                    subtitle: "Build a future-proof business model specifically positioned for rapid <b>scale</b> as enterprise and consumer AI adoption continues its massive global expansion.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/1-travel/4-curated-travel-1b33bc02f56b5a5511f7536b1f5d44a6391c194bf14336b012752a58a3a7b9d9.jpg",
                    icon: <MdOutlineLuggage />
                },
            ],
        },
        {
            title1: "Build A Brand.",

            title2: "Own Your Future.",
            subTitle: "Most business opportunities ask you to promote someone else's company, products, and identity. BizNest Unlimited takes a different approach. You build under <b>your own brand</b>, your own name, and your own vision. Your clients know your company. Your reputation drives the relationship. Your brand becomes the asset. Instead of spending years building equity for someone else, you're creating market presence, customer loyalty, and <b>business ownership</b> value that belongs to you.",

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
                    subtitle: "Operate entirely under <b>your own brand</b>, distinct corporate identity, custom styling, and powerful market presence that resonates with your target audience.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/1-founders-hotels-08544a0d55902071c30fa0ddec931434b0a79d4c763c16d1287dcb9b9e633673.jpg",
                    icon: <LuSofa />
                },
                {
                    title: "Your Reputation",
                    subtitle: "Build profound customer trust, industry recognition, and long-lasting commercial credibility centered around true <b>business ownership</b> that you direct and manage.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/2-brand-partners-cd3b490e515303f45595bf46b6ca5aa0ad20e596c48ec17b2f8e64ac5267689a.jpg",
                    icon: <AiOutlineGlobal />
                },
                {
                    title: "Your Clients",
                    subtitle: "Develop direct, unmediated relationships with your customers that compound in value and significantly strengthen your independent <b>AI business</b> over time.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/3-loyalty-status-3f803a03b1302cb55fba3170d3564c15a3c53fd52a13af2ae94ab6b7de683236.jpg",
                    icon: <CiStar />
                },
                {
                    title: "Your Equity",
                    subtitle: "Create substantial corporate value and financial equity that remains permanently attached to your unique <b>white-label</b> company rather than inflating a third party's enterprise.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/4-curated-travel-d957eba2906386dac0a9e7181d20688829e029a106774cc510fdb106cbdd1ca7.jpg",
                    icon: <PiGlobeHemisphereEast />
                },
                {
                    title: "Your Legacy",
                    subtitle: "Construct a valuable, self-sustaining corporate asset designed to effectively <b>scale</b>, generate generational wealth, and expand far beyond individual transactions.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/4-curated-travel-d957eba2906386dac0a9e7181d20688829e029a106774cc510fdb106cbdd1ca7.jpg",
                    icon: <PiGlobeHemisphereEast />
                },
            ],
        },
        {
            title1: "Turn Demand",

            title2: "Into Clientele.",

            subTitle: "Every business needs customers. The most successful businesses build systems for attracting, serving, and retaining them. BizNest Unlimited gives entrepreneurs the opportunity to serve businesses actively seeking <b>AI business</b> solutions while building a growing client base, <b>recurring revenue</b>, and long-term value. Every new client becomes more than a transaction—it becomes an asset backed by solid <b>infrastructure</b> that contributes to your company's <b>scale</b>.",

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
                    subtitle: "Seamlessly convert rising market demand into tangible, high-value <b>AI business</b> opportunities and lasting commercial client relationships that drive profitability.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/1-live-events-646e9fb8f2dd36b6ecba0f9722af66705178e0ee13f8957c2adfc8bb81df432d.jpg",
                    icon: <PiTicketLight />
                },
                {
                    title: "Client Portfolio",
                    subtitle: "Establish and expand a diversified base of commercial clients actively utilizing advanced <b>technology</b> solutions to directly fuel your long-term organizational growth.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/2-hotels/2-brand-partners-cd3b490e515303f45595bf46b6ca5aa0ad20e596c48ec17b2f8e64ac5267689a.jpg",
                    icon: <PiFlowerLotus />
                },
                {
                    title: "Recurring Revenue",
                    subtitle: "Generate consistent, reliable cash flow through ongoing <b>recurring revenue</b> models and exceptionally high client retention and satisfaction rates.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/4-luxury-vehicles-c6d75e2b5c15e579d33c92e781f6a5ce1dfd1e5e5dd4d9e1eb709443a4bb2f53.jpg",
                    icon: <IoCarSportOutline />
                },
                {
                    title: "Referral Expansion",
                    subtitle: "Leverage highly satisfied customers operating under <b>your own brand</b> to create an organic, self-sustaining engine of powerful word-of-mouth growth.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/3-retail-gifting-b077787a3da041254f26595cb1410d97a42049cfc8bffddee05b4c7a2c18ad67.jpg",
                    icon: <IoBagOutline />
                },
                {
                    title: "Business Value",
                    subtitle: "Secure genuine corporate stability and complete <b>business ownership</b> as your expanding portfolio of retained clients transforms into a highly lucrative enterprise asset.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/3-lifestyle/3-retail-gifting-b077787a3da041254f26595cb1410d97a42049cfc8bffddee05b4c7a2c18ad67.jpg",
                    icon: <IoBagOutline />
                },
            ],
        },
        {
            title1: "Built For Scale.",

            title2: "Designed For Leverage.",

            subTitle: "Most entrepreneurs spend years building <b>infrastructure</b>, assembling tools, managing <b>technology</b>, and solving operational challenges before they ever gain traction. BizNest Unlimited changes that equation. Instead of building the systems, you leverage them. Instead of developing the <b>white-label</b> platform, you deploy it. Instead of managing complexity, you focus on clients and <b>scale</b> while utilizing robust <b>infrastructure</b> already designed to support growth.",

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
                    subtitle: "Instantly leverage enterprise-grade technical <b>infrastructure</b>, secure cloud frameworks, and operational systems that are fully engineered and ready for immediate business use.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/1-software-growth-1f10043d5eb7cdfd2f5d90c2dce5eab96bf5b257c49f8bbdd0a9ca45f3f10327.jpg",
                    icon: <PiLaptop />
                },
                {
                    title: "Automation",
                    subtitle: "Utilize state-of-the-art artificial intelligence <b>technology</b> and intelligent workflow automations meticulously designed to maximize operational efficiency and effortless <b>scale</b>.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/5-devices-equipment-f30a4e82ad03a762155af6a17f791077c8eaad71fbbb296ef6a7e1af3968ff9f.jpg",
                    icon: <PiDevices />
                },
                {
                    title: "Operational Support",
                    subtitle: "Access robust, ready-to-deploy <b>white-label</b> tools and comprehensive resource suites that completely streamline daily administrative tasks for your growing <b>AI business</b>.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/3-co-working-1d1a548897e60ab876375d1222b8bbc74f0432c062ced5663d4950ecbed6e7e8.jpg",
                    icon: <RiGroupLine />
                },
                {
                    title: "Speed To Market",
                    subtitle: "Bypass years of costly software engineering delays by immediately deploying proven <b>technology</b> and pre-built <b>infrastructure</b> tailored for commercial success.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/4-startup-stack-701f6cf48a9e3019bbed7254b83766d567a8419ce399ce541b78acd13e63fcbf.jpg",
                    icon: <BiBarChartSquare />
                },
                {
                    title: "Scalable Foundation",
                    subtitle: "Secure genuine, independent <b>business ownership</b> anchored upon a rock-solid, enterprise-level <b>infrastructure</b> explicitly optimized for long-term corporate expansion.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/4-business/4-startup-stack-701f6cf48a9e3019bbed7254b83766d567a8419ce399ce541b78acd13e63fcbf.jpg",
                    icon: <FiBox />
                },
            ],
        },
        {
            title1: "Turn Effort",

            title2: "Into Expansion.",

            subTitle: "The most valuable businesses aren't built through single transactions. They're built through momentum, <b>recurring revenue</b>, client retention, and consistent expansion over time. BizNest Unlimited provides entrepreneurs with the opportunity to build an <b>AI business</b> designed for growth, where every client relationship and <b>white-label</b> solution contributes to larger <b>recurring revenue</b> streams and long-term <b>scale</b>.",

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
                    subtitle: "Establish secure, highly predictable financial income through systematic ongoing <b>recurring revenue</b> models and continuous digital service delivery.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/1-founders-table-dinners-7c4ee7d3602e8af4a43d5bc30840fad1e9b56fd44d3340211bd24d7c7e86f543.jpg",
                    icon: <IoRestaurantOutline />
                },
                {
                    title: "Business Momentum",
                    subtitle: "Systematically transform every single new client acquisition into an unshakeable cornerstone of absolute <b>business ownership</b> and compounded future growth.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Client Retention",
                    subtitle: "Cultivate high-value, long-term business partnerships utilizing advanced artificial intelligence <b>technology</b> that continuously delivers exceptional utility and compounding value.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
                {
                    title: "Expansion Potential",
                    subtitle: "Unlock brand-new strategic pathways for rapid corporate <b>scale</b> as your specialized <b>AI business</b> footprint, market authority, and reputation expand globally.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Long-Term Wealth",
                    subtitle: "Architect a fully customized <b>white-label</b> corporate entity specifically engineered to consistently generate long-term asset value, high cash flow, and robust <b>recurring revenue</b>.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
            ],
        },
        {
            title1: "Built To Help",

            title2: "Entrepreneurs Win.",

            subTitle: "BizNest Unlimited was created around a simple belief: entrepreneurs should have access to the opportunities being created by artificial intelligence without needing to become software developers. By combining proven systems, scalable <b>infrastructure</b>, operational support, and a <b>white-label</b> business model into a single ecosystem, we help you focus on <b>business ownership</b>, serving clients, and generating <b>recurring revenue</b>.",

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
                    subtitle: "Engineered specifically for ambitious independent operators, dedicated business consultants, and growth-minded entrepreneurs seeking genuine <b>business ownership</b>.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/1-founders-table-dinners-7c4ee7d3602e8af4a43d5bc30840fad1e9b56fd44d3340211bd24d7c7e86f543.jpg",
                    icon: <IoRestaurantOutline />
                },
                {
                    title: "Proven Foundation",
                    subtitle: "Leverage battle-tested operational systems, robust corporate <b>infrastructure</b>, and advanced <b>technology</b> already fully configured and ready for seamless market deployment.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Business Support",
                    subtitle: "Gain unrestricted access to premium <b>white-label</b> tools, expert mentorship, and guided frameworks that dramatically simplify your path to sustainable <b>recurring revenue</b>.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
                {
                    title: "Shared Success",
                    subtitle: "Our institutional commitment to supplying world-class <b>infrastructure</b> is fundamentally intertwined with the measurable commercial success of our independent partners.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Long-Term Vision",
                    subtitle: "Strategically positioned to capitalize on enduring market opportunities as the global <b>AI business</b> economy continues to evolve for long-term corporate <b>scale</b>.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
            ],
        },
        {
            title1: "From Opportunity",

            title2: "To Action.",

            subTitle: "Every successful business starts with a decision to move forward. BizNest Unlimited provides a clear pathway for entrepreneurs looking to establish their own <b>AI business</b> in the modern economy. Instead of spending months researching <b>technology</b>, building systems, and trying to figure everything out alone, partners gain access to a <b>white-label</b> framework designed to help them launch <b>recurring revenue</b> streams and <b>scale</b> with confidence.",

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
                    subtitle: "Become an integral part of an elite, fast-growing entrepreneurial ecosystem built from the ground up around true <b>business ownership</b> and massive digital <b>scale</b>.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/1-founders-table-dinners-7c4ee7d3602e8af4a43d5bc30840fad1e9b56fd44d3340211bd24d7c7e86f543.jpg",
                    icon: <IoRestaurantOutline />
                },
                {
                    title: "Launch Your Brand",
                    subtitle: "Quickly establish <b>your own brand</b> identity, deploy your proprietary client portal, and aggressively build your unique market presence within the booming <b>AI business</b> sector.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Position Your Business",
                    subtitle: "Effectively leverage elite available <b>infrastructure</b> and comprehensive <b>white-label</b> digital resources to seamlessly pinpoint lucrative niches and attract high-value clients.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
                {
                    title: "Serve & Grow",
                    subtitle: "Forge deep client relationships, deliver sophisticated enterprise-grade <b>technology</b> solutions, and generate powerful, compounding <b>recurring revenue</b> momentum.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/2-member-events-1cbd8a9f9d37a4587358eb0c41f21c5c97e5c0b3c867746d42cbea7dffd1471b.jpg",
                    icon: <PiCalendarDotsLight />
                },
                {
                    title: "Scale Your Opportunity",
                    subtitle: "Expand your operational reach globally and continuously build valuable corporate <b>business ownership</b> equity designed for long-term, high-yield commercial <b>scale</b>.",

                    image:
                        "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/benefit-slide-bgs/5-community/3-member-created-benefits-7a2d0bc8eebfee443891c234b008406d7629168ae940d7d04b29be018390adcd.jpg",
                    icon: <IoRefreshSharp />
                },
            ],
        },
    ]
};

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
