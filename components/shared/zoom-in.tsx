"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ZoomInProps = {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
};

export default function ZoomIn({
  children,
  className = "",
  scale = 0.8,
  duration = 1.5,
}: ZoomInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animation = gsap.fromTo(
      ref.current,
      {
        scale,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [scale, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}