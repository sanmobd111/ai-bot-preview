import AnimatedPreviewButton from '@/components/shared/preview-button/animated-preview-button/animated-preview-button'
import StaggerReveal from '@/components/shared/stagger-reveal'
import React, { useState } from 'react'

export default function TabContents({ parentContainerRef, activeTab, current: currentFromParent }) {
    const [currentTab, setCurrentTab] = useState(0)
    const current = currentFromParent?.tabs[currentTab]
    return (
        <div className="flex items-center p-4 md:p-6 lg:p-10">
            <StaggerReveal
                parentContainerRef={parentContainerRef}
                animationKey={activeTab}
                delay={1}
            >
                <div className="bg-white/10 backdrop-blur-xl rounded-xl  mb-8">
                    <div className={`absolute bg-white w-1/2 h-[80%] z-[21] rounded-lg  duration-300 top-1/2 -translate-y-1/2 ${currentTab === 0 ? "left-1" : "right-1"}`} />
                    {console.log(currentTab, "currentTab")}
                    <div className="flex py-2 p-1 xl:p-2 z-[22] relative">
                        {currentFromParent?.tabs?.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentTab(index)}
                                className={`
                  flex-1
                  rounded-xl
                  py-1
                  px-4
                  text-xs
                  md:text-sm
                  lg:text-base
                  transition-all
                  duration-300
                  ${currentTab === index
                                        ? "text-black"
                                        : "text-white"
                                    }
                `}
                            >
                                <span className="mr-2">
                                    0{index + 1}.
                                </span>

                                <span className="hidden md:inline">
                                    {item.tab}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
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
                    <AnimatedPreviewButton className="mt-6! lg:mt-8!" text={current.btnText} />
                </div>
            </StaggerReveal>
        </div>
    )
}

