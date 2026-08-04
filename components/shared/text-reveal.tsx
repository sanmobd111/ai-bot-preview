"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealTextProps = {
    children: React.ReactNode;
    className?: string;
};

export default function TextReveal({
    children,
    className = "",
}: RevealTextProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const animation = gsap.from(ref.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 50%",
                once: true,
                // markers: true,
            },
        });

        return () => {
            animation.scrollTrigger?.kill();
            animation.kill();
        };
    }, []);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}