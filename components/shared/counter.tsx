"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CounterProps = {
    value: number;
    suffix?: string;
    className?: string;
};

export default function Counter({
    value,
    suffix = "",
    className = "",
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const obj = { value: 0 };

        const tween = gsap.to(obj, {
            value,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                once: true,
            },
            onUpdate: () => {
                if (!ref.current) return;

                ref.current.textContent =
                    Math.floor(obj.value).toLocaleString() +
                    suffix;
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, [value, suffix]);

    return (
        <span ref={ref} className={className}>
            0{suffix}
        </span>
    );
}