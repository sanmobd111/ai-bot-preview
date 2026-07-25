import AnimatedPreviewButton from '@/components/shared/preview-button/animated-preview-button/animated-preview-button';
import StaggerReveal from '@/components/shared/stagger-reveal';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function FaqContents({ parentContainerRef, activeTab, current }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="flex items-center p-4 md:p-6 lg:p-10">
            <StaggerReveal
                parentContainerRef={parentContainerRef}
                animationKey={activeTab}
                delay={1}
            >
                <h3 className="reveal-item text-white text-[45px] leading-[1]">
                    {current.title}
                </h3>

                <p className="reveal-item my-8 text-white text-lg">
                    {current.description}
                </p>
                {current?.features.map((item, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl bg-white p-5 transition-all duration-300 reveal-item my-4"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex w-full cursor-pointer items-center justify-between text-left gap-4"
                        >
                            <h3 className="text-lg md:text-xl font-normal feature-display">{item.question}</h3>

                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shrink-0">
                                <Plus
                                    size={18}
                                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-45" : "rotate-0"
                                        }`}
                                />
                            </span>
                        </button>

                        <div
                            className={`grid transition-all duration-500 ease-in-out ${openIndex === index
                                ? "grid-rows-[1fr] opacity-100 mt-4"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <p className="text-zinc-600 leading-7">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="reveal-item">
                    <AnimatedPreviewButton className="mt-6! lg:mt-8!" text={current.btnText} />
                </div>
            </StaggerReveal>
        </div>
    )
}