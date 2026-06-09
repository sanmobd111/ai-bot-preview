
import CharacterReveal from "../shared/character-reveal";
import TextReveal from "../shared/text-reveal";
import ZoomIn from "../shared/zoom-in";

const cards = [
    {
        title: "Upgrade your upgrades",
        description:
            "Preferred rates, upgrades, and elite status across air, hotel, and car.",
        image:
            "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-travel-b2ad9d86d872895799a9ae654f43b07857774e0cbfe8548cf424095546ff068f.jpg",
    },
    {
        title: "Expand your network",
        description:
            "A powerful network of founders, operators, and leaders who open doors.",
        image:
            "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-connect-e80f688b9ae68390b8f4f0ece251678ddaacf1f9cb807bddbde8c7a02ab6558e.jpg",
    },
    {
        title: "Your Founders Advisor",
        description:
            "Explore and instantly redeem valuable member benefits in seconds.",
        image:
            "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-benefits-00267a432b889babc23bad083be97a708800e592f55ae2e0a916d9680b9811c1.jpg",
    },
    {
        title: "Run your business smarter",
        description:
            "Preferred access to tools, services and savings that unlock growth.",
        image:
            "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/value-bg-business-06c64a737a85944dc7759e471ae570bb27bb13faa0ae3d71bcbf40fc7b57e7cf.jpg",
    },
];

export default function MembershipSection() {

    return (
        <section className="py-12 md:py-16 lg:py-24">
            <div className="mx-auto max-w-400">

                {/* Header */}
                <div className="mb-10 md:mb-14 lg:mb-20">
                    <TextReveal
                        className="mb-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs reveal-text"
                    >
                        Membership, Reimagined
                    </TextReveal>

                    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
                        <CharacterReveal
                            className="
                font-serif
                leading-[1.2]
                tracking-[-0.04em]
                text-zinc-900
                text-[clamp(2.75rem,4vw,6rem)]
              "
                        >
                            Membership for the driven,
                            <br />
                            the daring,{" "}
                            <span className="italic font-light text-zinc-500">
                                the doers.
                            </span>
                        </CharacterReveal>

                        <div className="flex items-end">
                            <TextReveal
                                className="max-w-md text-base leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text">
                                A network that rewards your ambition — created by
                                those who know the journey.
                            </TextReveal>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <ZoomIn
                            key={card.title}
                            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                h-[380px]
                sm:h-[420px]
                lg:h-[500px]
              "
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                            <div className="absolute bottom-0 p-5 md:p-6 text-white">
                                <h3
                                    className="
                    mb-3
                    font-serif
                    text-2xl
                    md:text-3xl
                    leading-tight
                  "
                                >
                                    {card.title}
                                </h3>

                                <p
                                    className="
                    max-w-xs
                    text-sm
                    md:text-lg
                    leading-snug
                    text-white/90
                    line-clamp-2
                  "
                                >
                                    {card.description}
                                </p>
                            </div>
                        </ZoomIn>
                    ))}
                </div>
            </div>
        </section>
    );
}