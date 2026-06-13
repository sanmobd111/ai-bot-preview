
import CharacterReveal from "../shared/character-reveal";
import TextReveal from "../shared/text-reveal";
import MembershipSlider from "./membership-audience-section/membership-slider";

export default function MembershipSection() {

    return (
        <section className="mt-8 md:mt-10">
            <div className="">

                {/* Header */}
                <div className="mb-10 md:mb-14 xl:mb-20">
                    <TextReveal
                        className="mb-4 2xl:mb-14 text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs reveal-text"
                    >
                        Membership, Reimagined
                    </TextReveal>

                    <div className="grid xl:grid-cols-[65%_30%] justify-between gap-6 xl:gap-16">
                        <CharacterReveal
                            className="
                            feature-display
                            font-light
                font-serif
                leading-[1.2]
                tracking-[-0.04em]
                text-zinc-900
                xl:text-[80px]
md:text-6xl
text-5xl
wrap-break-word   
              "
                        >
                            Membership for the {" "}
                            <br className="hidden xl:block 2xl:hidden" />
                            driven, {" "}
                            <br className="hidden 2xl:block" />
                            the daring,{" "}
                            <span className="italic font-light text-zinc-500 inline-block">
                                the
                            </span>
                            <span className="italic font-light text-zinc-500 inline-block">
                                doers.
                            </span>
                        </CharacterReveal>

                        <div className="flex items-end">
                            <TextReveal
                                className="xl:max-w-md text-base leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text">
                                A network that rewards your ambition — created by
                                those who know the journey.
                            </TextReveal>
                        </div>
                    </div>
                </div>

                {/* Cards */}
                {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {cards.map((card) => (
                        <ZoomIn
                            key={card.title}
                            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                aspect-[5/6]
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
                    feature-display
                    font-light
                    text-[27px]
                    leading-tight
                  "
                                >
                                    {card.title}
                                </h3>

                                <p
                                    className="
                    max-w-xs
                    text-sm
                    md:text-base
                    leading-snug
                    text-white/90
                    line-clamp-2
                    font-normal
                  "
                                >
                                    {card.description}
                                </p>
                            </div>
                        </ZoomIn>
                    ))}
                </div> */}
                <MembershipSlider />
            </div>
        </section>
    );
}