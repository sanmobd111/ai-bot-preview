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

        const BASE_SPEED = 0.02;

        const baseDirection =
            direction === "left" ? -1 : 1;

        let xPercent =
            direction === "left" ? 0 : -50;

        let velocity =
            baseDirection * BASE_SPEED;

        let targetVelocity = velocity;

        let lastScrollY = window.scrollY;

        const tick = () => {
            velocity +=
                (targetVelocity - velocity) * 0.1;

            xPercent += velocity;

            // Infinite loop
            if (xPercent <= -50) {
                xPercent += 50;
            }

            if (xPercent >= 0) {
                xPercent -= 50;
            }

            gsap.set(track, {
                xPercent,
            });
        };

        gsap.ticker.add(tick);

        const handleScroll = () => {
            const currentScrollY =
                window.scrollY;

            const delta =
                currentScrollY - lastScrollY;

            lastScrollY = currentScrollY;

            if (delta === 0) return;

            const speed = Math.min(
                2,
                Math.max(
                    BASE_SPEED,
                    Math.abs(delta) / 100
                )
            );

            // Scroll up => inverse direction
            // Scroll down => normal direction
            const currentDirection =
                delta < 0
                    ? -baseDirection
                    : baseDirection;

            targetVelocity =
                currentDirection * speed;
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            gsap.ticker.remove(tick);
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
                className="flex w-max whitespace-nowrap"
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