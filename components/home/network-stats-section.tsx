import CharacterReveal from "../shared/character-reveal";
import Counter from "../shared/counter";
import TextReveal from "../shared/text-reveal";
import ZoomIn from "../shared/zoom-in";

export default function NetworkStatsSection({ data }) {
    return (
        <section className="py-10 xl:py-16 2xl:py-24 mt-6 lg:mt-0">
            <div className="mx-auto max-w-400">

                <div className="mb-6 lg:mb-10 xl:mb-12">
                    {/* Heading */}
                    <div className="text-center">
                        <CharacterReveal
                            className="
            text-[45px]
            md:text-[55px]
            xl:text-[60px]
              leading-none
              tracking-[-0.04em]
              text-[#2e2e2e]
            "
                            data={data?.title}
                        />
                    </div>
                    {
                        data?.subtitle && (
                            <div className="flex justify-center mt-6">
                                <TextReveal
                                    className="text-base text-center leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text">
                                    {data?.subtitle}
                                </TextReveal>
                            </div>
                        )
                    }
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {data?.stats?.map((item) => (
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
                  text-center
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
                  text-center
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