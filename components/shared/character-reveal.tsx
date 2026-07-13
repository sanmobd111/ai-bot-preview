"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function CharacterReveal({
    data,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const split = new SplitType(textRef.current, {
            types: "words",
        });

        gsap.set(split.words, {
            display: "inline-block",
        });

        const animation = gsap.from(split.words, {
            yPercent: 120,
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                once: true,
            },
        });

        return () => {
            animation.scrollTrigger?.kill();
            split.revert();
        };
    }, []);

    return (
        <div className="overflow-hidden">
            <h1 ref={textRef} className={className}
            >
                {data}
            </h1>
        </div>
    );
}