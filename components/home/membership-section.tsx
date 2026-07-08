
import CharacterReveal from "../shared/character-reveal";
import TextReveal from "../shared/text-reveal";
import MembershipSlider from "./membership-audience-section/membership-slider";

export default function MembershipSection() {

    return (
        <section className="mt-8 md:mt-10 xl:mt-14">
            <div className="">

                {/* Header */}
                <div className="mb-10 md:mb-14 xl:mb-20">
                    <TextReveal
                        className="mb-4 2xl:mb-8 text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs reveal-text"
                    >
                        BIZNEST UNLIMITED
                    </TextReveal>

                    <div className="grid xl:grid-cols-[65%_30%] justify-between gap-6 xl:gap-16">
                        <CharacterReveal
                            className="
                            feature-display
                            
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
                            The Next {" "}
                            <br className="hidden xl:block 2xl:hidden" />
                            Business {" "}
                            <br className="hidden 2xl:block" />
                            Revolution{" "}
                            <span className="italic font-light text-zinc-500 inline-block">
                                Is Already.
                            </span>
                            <span className="italic font-light text-zinc-500 inline-block">
                                Underway.
                            </span>
                        </CharacterReveal>

                        <div className="flex items-end">
                            <TextReveal
                                className="xl:max-w-md text-base leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text">
                                AI is changing how businesses operate, communicate, market, sell, and serve customers. Companies are actively searching for solutions, creating new opportunities for entrepreneurs and business builders.
                            </TextReveal>
                        </div>
                    </div>
                </div>
                <MembershipSlider />
            </div>
        </section>
    );
}