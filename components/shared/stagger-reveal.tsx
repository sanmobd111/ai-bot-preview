"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  animationKey?: number | string;

  parentContainerRef?: React.RefObject<HTMLDivElement | null>;

  delay?: number;

  active?: boolean;

  trigger?: "scroll" | "active";
};

export default function StaggerReveal({
  children,
  className = "",
  animationKey,
  parentContainerRef,
  delay = 0,
  active = false,
  trigger = "scroll",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items =
      containerRef.current.querySelectorAll(
        ".reveal-item"
      );

    if (!items.length) return;

    gsap.killTweensOf(items);

    gsap.set(items, {
      y: 60,
      opacity: 0,
    });

    let tl = gsap.timeline({
      paused: trigger === "active",
    });

    tl.to(items, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.12,
      delay,
      ease: "power4.out",
    });

    // Scroll mode
    if (trigger === "scroll") {
      ScrollTrigger.create({
        trigger:
          parentContainerRef?.current,

        start: "top 50%",

        once: true,

        animation: tl,
      });
    }

    // Active mode
    if (
      trigger === "active" &&
      active
    ) {
      tl.restart();
    }

    return () => {
      tl.kill();
    };
  }, [
    animationKey,
    active,
    trigger,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
    >
      {children}
    </div>
  );
}