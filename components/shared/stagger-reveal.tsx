"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
  className?: string;
  animationKey?: number | string;
  parentContainerRef: React.RefObject<HTMLDivElement | null>;
  delay?: number;
};

export default function StaggerReveal({
  children,
  className = "",
  animationKey,
  parentContainerRef,
  delay = 0,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items =
      containerRef.current.querySelectorAll(
        ".reveal-item"
      );

    gsap.set(items, {
      y: 60,
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(items, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.12,
      delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: parentContainerRef.current,
        start: "top 50%",
        once: true,
        markers: true,
      },
    });

    return () => {
      tl.kill();
    };
  }, [animationKey]);

  return (
    <div
      ref={containerRef}
      className={className}
    >
      {children}
    </div>
  );
}