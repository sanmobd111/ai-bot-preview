
import CharacterReveal from "../shared/character-reveal";
import TextReveal from "../shared/text-reveal";
import MembershipSlider from "./membership-audience-section/membership-slider";

export default function MembershipSection({ data }) {
    console.log(data?.title)
    return (
        <section className="mt-8 md:mt-10 xl:mt-14">
            <div className="">

                {/* Header */}
                <div className="mb-10 md:mb-14 xl:mb-20">
                    <TextReveal
                        className="mb-4 2xl:mb-8 text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs reveal-text"
                    >
                        {data?.smallTitle}
                    </TextReveal>

                    <div className="justify-between gap-6 xl:gap-16">
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
                            data={data?.title}
                        />

                    </div>
                    <div className="flex items-end mt-6">
                        <TextReveal
                            className="text-base leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text">
                            {data?.subtitle}
                        </TextReveal>
                    </div>
                </div>
                <MembershipSlider data={data?.cards} />
            </div>
        </section>
    );
}