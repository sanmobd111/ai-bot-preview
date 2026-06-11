"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type ScrollMarqueeProps = {
    children: React.ReactNode;
    direction?: "left" | "right";
    containerClasseName?: string;
    gradientColor?: string;
};

export default function ScrollMarquee({
    children,
    direction = "left",
    containerClasseName = "",
    gradientColor = "white",
}: ScrollMarqueeProps) {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        // Initial direction
        const tween = gsap.to(track, {
            xPercent: direction === "left" ? -50 : 0,
            duration: 100,
            ease: "none",
            repeat: -1,
        });

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            const scrollingDown =
                currentScrollY > lastScrollY;

            gsap.to(tween, {
                timeScale: scrollingDown ? 1 : -1,
                duration: 0.3,
                overwrite: true,
            });

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
            tween.kill();
        };
    }, [direction]);

    return (
        <div
            className={`relative w-full overflow-hidden border-x border-black ${containerClasseName}`}
        >
            {/* Left Fade */}
            <div
                className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32"
                style={{
                    background: `linear-gradient(to right, ${gradientColor}, transparent)`,
                }}
            />

            {/* Marquee Track */}
            <div
                ref={trackRef}
                className={`flex w-max whitespace-nowrap ${direction === "left" ? "translate-x-0" : "-translate-x-1/2"}`}
            >
                <div className="flex shrink-0">
                    {children}
                </div>

                <div className="flex shrink-0">
                    {children}
                </div>
            </div>

            {/* Right Fade */}
            <div
                className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32"
                style={{
                    background: `linear-gradient(to left, ${gradientColor}, transparent)`,
                }}
            />
        </div>
    );
}