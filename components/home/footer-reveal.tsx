"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Footer from "../root-layout/footer";
import JoinFounderSection from "./join-founder-section";

gsap.registerPlugin(ScrollTrigger);

export default function FooterRevealPage({data}) {
    const footerRef = useRef<HTMLElement>(null);
    const footerContentRef = useRef<HTMLDivElement>(null);
    const topSectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const footer = footerRef.current;
        const footerContent =
            footerContentRef.current;
        const topSection =
            topSectionRef.current;

        if (
            !footer ||
            !footerContent ||
            !topSection
        ) {
            return;
        }

        const ctx = gsap.context(() => {
            const updateAnimation = () => {
                const contentHeight =
                    footerContent.offsetHeight;

                // Kill previous trigger
                ScrollTrigger.getAll().forEach(
                    (st) => {
                        if (
                            st.vars.trigger ===
                            topSection
                        ) {
                            st.kill();
                        }
                    }
                );

                // Set initial position before paint
                gsap.set(footerContent, {
                    y: -contentHeight,
                    force3D: true,
                });

                gsap.to(footerContent, {
                    y: 0,

                    ease: "none",

                    force3D: true,

                    scrollTrigger: {
                        trigger: topSection,

                        start:
                            "bottom bottom",

                        end: `+=${contentHeight - 40
                            }`,

                        scrub: true,

                        invalidateOnRefresh:
                            true,

                        // markers: true,
                    },
                });
            };

            updateAnimation();

            const onLoad = () => {
                updateAnimation();

                ScrollTrigger.refresh();
            };

            window.addEventListener(
                "load",
                onLoad
            );

            return () => {
                window.removeEventListener(
                    "load",
                    onLoad
                );
            };
        }, footer);

        return () => ctx.revert();
    }, []);

    return (
        <main className="relative bg-[#f5f5f0]  pb-4 md:pb-8">
            <JoinFounderSection ref={topSectionRef} data={data?.joinFounder} />
            <Footer ref={footerRef} contentRef={footerContentRef} />
        </main>
    );
}