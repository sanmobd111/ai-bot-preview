const stats = [
    {
        value: "300,000+",
        label: "Active members",
    },
    {
        value: "130+",
        label: "Member countries",
    },
    {
        value: "80%",
        label: "Founder, Entrepreneur, Owner, C-level title",
    },
    {
        value: "$5,000",
        label: "Estimated annual member savings",
    },
];

export default function NetworkStatsSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-400">

                {/* Heading */}
                <div className="mb-12 text-center md:mb-16">
                    <h2
                        className="
              font-serif
              text-[clamp(2.5rem,3.5vw,5rem)]
              leading-none
              tracking-[-0.04em]
              text-[#2e2e2e]
            "
                    >
                        A network like{" "}
                        <span className="italic font-light text-zinc-500">
                            no other.
                        </span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.label}
                            className="
                rounded-3xl
                bg-[#e6e5e1]
                p-6
                md:p-7
                lg:p-8
                min-h-[170px]
                flex
                flex-col
                justify-between
              "
                        >
                            <h3
                                className="
                  font-serif
                  text-[clamp(3rem,3vw,4.5rem)]
                  leading-none
                  tracking-[-0.05em]
                  text-[#2e2e2e]
                "
                            >
                                {item.value}
                            </h3>

                            <p
                                className="
                  mt-6
                  text-sm
                  md:text-base
                  leading-relaxed
                  text-[#2e2e2e]
                "
                            >
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}