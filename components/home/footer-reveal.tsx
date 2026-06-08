"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../root-layout/footer";
import JoinFounderSection from "./join-founder-section";

gsap.registerPlugin(ScrollTrigger);

export default function FooterRevealPage() {
    const footerRef = useRef<HTMLElement>(null);
    const footerContentRef = useRef<HTMLElement>(null);
    const topSectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const footer = footerRef.current;

        if (!footer) return;

        const contentHeight =
            footerContentRef.current?.offsetHeight ?? 0;

        gsap.fromTo(
            footerContentRef.current,
            {
                y: -contentHeight,
            },
            {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: topSectionRef.current,
                    start: "bottom bottom",
                    end: `+=${contentHeight - 100}`,
                    scrub: true,
                },
            }
        );

        // return () => ctx.revert();
    }, []);

    return (
        <main className="relative">

            {/* Top Section */}
            {/* <section
                ref={topSectionRef}
                className="
          relative
          z-10
          min-h-screen
          bg-white
          flex
          items-center
          justify-center
          text-6xl
        "
            >
                Top Section
            </section> */}

            <JoinFounderSection ref={topSectionRef} />

            {/* Footer */}
            {/* <footer
                ref={footerRef}
                className="
          sticky
          bottom-0
          bg-black
          text-white
          flex
          items-center
          justify-center
          text-7xl
        "
            >
                Footer
            </footer> */}
            <Footer ref={footerRef} contentRef={footerContentRef} />
        </main>
    );
}