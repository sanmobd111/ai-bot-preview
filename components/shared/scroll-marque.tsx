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

        let xPercent =
            direction === "left" ? 0 : -50;

        const BASE_SPEED = 0.05;

        let currentDirection =
            direction === "left" ? -1 : 1;

        let velocity =
            currentDirection * BASE_SPEED;

        let targetVelocity = velocity;

        let lastScrollY = window.scrollY;

        let scrollTimeout: ReturnType<
            typeof setTimeout
        >;

        const tick = () => {
            velocity +=
                (targetVelocity - velocity) * 0.08;

            xPercent += velocity;

            // Infinite seamless loop
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

            // Scroll down => left
            // Scroll up => right
            currentDirection =
                delta > 0 ? -1 : 1;

            const speed = Math.min(
                2,
                Math.max(
                    BASE_SPEED,
                    Math.abs(delta) / 100
                )
            );

            targetVelocity =
                currentDirection * speed;

            clearTimeout(scrollTimeout);

            // Return to normal speed
            // but KEEP last direction
            scrollTimeout = setTimeout(() => {
                targetVelocity =
                    currentDirection *
                    BASE_SPEED;
            }, 120);
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

            clearTimeout(scrollTimeout);
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