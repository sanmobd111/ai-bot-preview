import AnimatedPreviewButton from '@/components/shared/preview-button/animated-preview-button/animated-preview-button'
import StaggerReveal from '@/components/shared/stagger-reveal'
import React from 'react'

export default function DefaultContents({ parentContainerRef, activeTab, current }) {
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

                <p className="reveal-item mt-8 text-white text-lg">
                    {current.description}
                </p>

                <div className="mt-6">
                    {current.features.map((item, index) => (
                        <div
                            key={index}
                            className="reveal-item border-t border-white/20 py-5"
                        >
                            {/* <h4 className="font-semibold text-white">
                                            {item.title}
                                        </h4> */}

                            <p className="mt-1 text-white/80">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="reveal-item">
                    <AnimatedPreviewButton className="mt-6! lg:mt-8!" />
                </div>
            </StaggerReveal>
        </div>
    )
}
