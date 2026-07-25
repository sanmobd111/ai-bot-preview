import AnimatedPreviewButton from '@/components/shared/preview-button/animated-preview-button/animated-preview-button'
import StaggerReveal from '@/components/shared/stagger-reveal'
import React, { useState } from 'react'

export default function TabContents({ parentContainerRef, activeTab, current: currentFromParent }) {
    const [currentTab, setCurrentTab] = useState(0)
    const current = currentFromParent?.tabs[currentTab]
    console.log(current)
    return (
        <div className="flex items-center p-4 md:p-6 lg:p-10">
            <div className="absolute top-4 left-10 right-10 z-20 bg-white/10 backdrop-blur-xl rounded-xl">
                <div className={`absolute bg-white w-1/3 h-[80%] z-[21] rounded-lg  duration-300 top-1/2 -translate-y-1/2 ${activeTab === 0 ? "left-1" : activeTab === 2 ? "right-1" : "left-1/2 -translate-x-1/2"}`} />
                <div className="flex py-2 p-1 xl:p-2 relative z-[22]">
                    {currentFromParent?.tabs.map((item, index) => (
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
                  ${activeTab === index
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
                    <AnimatedPreviewButton className="mt-6! lg:mt-8!" text={current.btnText} />
                </div>
            </StaggerReveal>
        </div>
    )
}

