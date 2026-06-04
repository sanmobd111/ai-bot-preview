import {
    Plane,
    Users,
    Smartphone,
    Briefcase,
} from "lucide-react";

const cards = [
    {
        title: "Upgrade your upgrades",
        description:
            "Preferred rates, upgrades, and elite status across air, hotel, and car.",
        image:
            "https://images.unsplash.com/photo-1540339832862-474599807836?q=80&w=1200",
    },
    {
        title: "Expand your network",
        description:
            "A powerful network of founders, operators, and leaders who open doors.",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200",
    },
    {
        title: "Your Founders Advisor",
        description:
            "Explore and instantly redeem valuable member benefits in seconds.",
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
    },
    {
        title: "Run your business smarter",
        description:
            "Preferred access to tools, services and savings that unlock growth.",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    },
];

export default function MembershipSection() {
    return (
        <section className="py-12 md:py-16 lg:py-24">
            <div className="mx-auto max-w-400">

                {/* Header */}
                <div className="mb-10 md:mb-14 lg:mb-20">
                    <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">
                        Membership, Reimagined
                    </p>

                    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
                        <h1
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
                        </h1>

                        <div className="flex items-end">
                            <p className="max-w-md text-base leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35]">
                                A network that rewards your ambition — created by
                                those who know the journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <div
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}