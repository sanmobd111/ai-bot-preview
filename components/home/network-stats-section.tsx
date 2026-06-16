import CharacterReveal from "../shared/character-reveal";
import Counter from "../shared/counter";
import ZoomIn from "../shared/zoom-in";

const stats = [
    {
        value: 300000,
        suffix: "+",
        label: "Active members",
    },
    {
        value: 130,
        suffix: "+",
        label: "Member countries",
    },
    {
        value: 80,
        suffix: "%",
        label: "Founder, Entrepreneur, Owner, C-level title",
    },
    {
        value: 5000,
        suffix: "$",
        label: "Estimated annual member savings",
    },
];

export default function NetworkStatsSection() {
    return (
        <section className="py-10 xl:py-16 2xl:py-24 mt-6 lg:mt-0">
            <div className="mx-auto max-w-400">

                {/* Heading */}
                <div className="mb-12 text-center md:mb-14">
                    <CharacterReveal
                        className="
            text-[45px]
            md:text-[55px]
            xl:text-[60px]
              leading-none
              tracking-[-0.04em]
              text-[#2e2e2e]
            "
                    >
                        A network like{" "}
                        <div className="italic inline-block font-light text-zinc-500 feature-display">
                            no 
                        </div>
                        {" "}
                        <div className="italic inline-block font-light text-zinc-500 feature-display">
                            other. 
                        </div>
                    </CharacterReveal>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => (
                        <ZoomIn
                            key={item.label}
                            className="
                rounded-3xl
                bg-[#e6e5e1]
                p-6
                md:p-7
                lg:p-8
                flex
                flex-col
                justify-between
              "
                        >
                            <h3
                                className="
                text-[46px]
                md:text-[52px]
                font-light
                feature-display
                  leading-none
                  tracking-[0.02em]
                  text-[#2e2e2e]
                "
                            >
                                {/* {item.value} */}
                                <Counter
                                    value={item.value}
                                    suffix={item.suffix}
                                />
                            </h3>

                            <p
                                className="
                                mt-2
                  text-sm
                  md:text-base
                  leading-relaxed
                  text-[#2e2e2e]
                "
                            >
                                {item.label}
                            </p>
                        </ZoomIn>
                    ))}
                </div>
            </div>
        </section>
    );
}