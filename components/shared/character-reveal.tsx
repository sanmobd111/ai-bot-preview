"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function CharacterReveal({ children, className }: { children: React.ReactNode, className?: string }) {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const split = new SplitType(textRef.current, {
            types: "words",
        });

        gsap.from(split.chars, {
            yPercent: 200,
            opacity: 0,
            stagger: 0.03,
            duration: 1,
            ease: "power4.out",
            display: "inline-block",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
                once: true,
            },
        });

        return () => {
            split.revert();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="overflow-hidden">
            <h1
                ref={textRef}
                className={className}
            >
                {children}
            </h1>
        </div>
    );
}