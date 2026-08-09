"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Check,
    Handshake,
    Headphones,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import AnimatedPreviewButton from "../shared/preview-button/animated-preview-button/animated-preview-button";

export default function BizNestDifference() {
    return (
        <section className="relative overflow-hidden bg-white py-28 text-black sm:py-36 lg:py-44">
            {/* ================================================================ */}
            {/* Background */}
            {/* ================================================================ */}

            <div className="pointer-events-none absolute inset-0">
                {/* Soft white atmosphere */}
                <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/80 blur-[140px]" />

                <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-white/60 blur-[160px]" />

                <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-white/50 blur-[150px]" />

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.5) 1px, transparent 1px)",
                        backgroundSize: "70px 70px",
                    }}
                />

                {/* Soft vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#f4f3f1_88%)]" />
            </div>

            {/* ================================================================ */}
            {/* Main Container */}
            {/* ================================================================ */}

            <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
                <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">

                    {/* ======================================================== */}
                    {/* Left Content */}
                    {/* ======================================================== */}

                    <div className="max-w-[760px]">
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6 }}
                            className="mb-7 flex items-center gap-3"
                        >
                            <span className="h-px w-8 bg-black" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.42em] text-zinc-600 sm:text-xs">
                                THE BIZNEST DIFFERENCE
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.75,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-[clamp(3.25rem,7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.055em]"
                        >
                            Technology
                            <span className="block text-zinc-500">
                                That Works.
                            </span>

                            <span className="mt-2 block">
                                People Who
                            </span>

                            <span className="block text-zinc-500">
                                Care.
                            </span>
                        </motion.h2>

                        {/* Supporting Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.65,
                                delay: 0.25,
                            }}
                            className="mt-9 max-w-[650px] text-base leading-8 text-zinc-600 sm:text-lg sm:leading-8"
                        >
                            Choosing an{" "}
                            <strong className="font-semibold text-black">
                                AI Receptionist
                            </strong>{" "}
                            is more than selecting software. It&apos;s choosing
                            a partner committed to helping your business
                            communicate better, serve customers more
                            effectively, and grow with confidence.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                duration: 0.65,
                                delay: 0.35,
                            }}
                            className="mt-10"
                        >
                            {/* <button
                                type="button"
                                className="group inline-flex items-center gap-4 rounded-xl bg-black px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_16px_40px_rgba(0,0,0,0.16)] sm:px-8 sm:py-4"
                            >
                                Book A Live Demo

                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowUpRight className="h-4 w-4" />
                                </span>
                            </button> */}
                            <AnimatedPreviewButton
                                text="Book A Live Demo"
                                className="mt-10"
                            />
                        </motion.div>
                    </div>

                    {/* ======================================================== */}
                    {/* Right Visual */}
                    {/* ======================================================== */}

                    <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
                        <TechnologyVisual />
                    </div>
                </div>

                {/* ============================================================ */}
                {/* Bottom Trust Strip */}
                {/* ============================================================ */}

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                        duration: 0.7,
                        delay: 0.25,
                    }}
                    className="mt-20 border-t border-zinc-200 pt-8 sm:mt-24"
                >
                    <div className="grid gap-8 sm:grid-cols-3 sm:gap-0">
                        <TrustPoint
                            icon={<ShieldCheck />}
                            title="Built For Business"
                            description="Enterprise-grade technology designed around real business needs."
                        />

                        <TrustPoint
                            icon={<Headphones />}
                            title="Human Support"
                            description="Real guidance and support beyond the technology itself."
                        />

                        <TrustPoint
                            icon={<Handshake />}
                            title="Long-Term Partnership"
                            description="A platform and partner built to grow alongside your business."
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ========================================================================= */
/* Technology Visual                                                          */
/* ========================================================================= */

function TechnologyVisual() {
    return (
        <div className="relative">
            {/* Soft Glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-[100px]" />

            {/* Outer Ring */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-300/70"
            />

            {/* Inner Ring */}
            <motion.div
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-zinc-300"
            />

            {/* Main Panel */}
            <div className="relative mx-auto aspect-square max-w-[500px]">

                {/* Center */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.85,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-1/2 top-1/2 z-20 flex h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-zinc-300 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:h-[165px] sm:w-[165px]"
                >
                    <Sparkles className="mb-3 h-6 w-6 text-black" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
                        BizNest
                    </span>

                    <span className="mt-1 text-sm font-semibold text-black">
                        Unlimited
                    </span>
                </motion.div>

                {/* Horizontal Connection */}
                <div className="absolute left-1/2 top-1/2 z-0 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

                {/* Vertical Connection */}
                <div className="absolute left-1/2 top-1/2 z-0 h-[72%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-zinc-300 to-transparent" />

                {/* Top Node */}
                <Node
                    className="left-1/2 top-[3%] -translate-x-1/2"
                    icon={<Sparkles />}
                    label="AI Platform"
                    delay={0}
                />

                {/* Right Node */}
                <Node
                    className="right-[2%] top-1/2 -translate-y-1/2"
                    icon={<Headphones />}
                    label="Human Support"
                    delay={0.1}
                />

                {/* Bottom Node */}
                <Node
                    className="bottom-[3%] left-1/2 -translate-x-1/2"
                    icon={<TrendingIcon />}
                    label="Business Growth"
                    delay={0.2}
                />

                {/* Left Node */}
                <Node
                    className="left-[2%] top-1/2 -translate-y-1/2"
                    icon={<Handshake />}
                    label="Partnership"
                    delay={0.3}
                />

                {/* Platform Online */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.6,
                    }}
                    className="absolute right-[7%] top-[15%] z-30 hidden rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:block"
                >
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-black" />

                        <span className="text-[10px] font-medium text-zinc-600">
                            Platform Online
                        </span>
                    </div>
                </motion.div>

                {/* Human Backed */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.7,
                    }}
                    className="absolute bottom-[15%] left-[7%] z-30 hidden rounded-xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:block"
                >
                    <div className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-black" />

                        <span className="text-[10px] font-medium text-zinc-600">
                            Human Backed
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

/* ========================================================================= */
/* Node                                                                        */
/* ========================================================================= */

function Node({
    className,
    icon,
    label,
    delay,
}: {
    className: string;
    icon: React.ReactNode;
    label: string;
    delay: number;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.8,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay,
            }}
            className={`absolute z-20 ${className}`}
        >
            <div className="flex min-w-[110px] flex-col items-center gap-2 rounded-2xl border border-zinc-200 bg-white/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:min-w-[125px]">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4f3f1]">
                    <div className="h-4 w-4 text-black">
                        {icon}
                    </div>
                </div>

                <span className="whitespace-nowrap text-[9px] font-medium text-zinc-600 sm:text-[10px]">
                    {label}
                </span>
            </div>
        </motion.div>
    );
}

/* ========================================================================= */
/* Trust Point                                                                 */
/* ========================================================================= */

function TrustPoint({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex gap-4 px-0 sm:px-7 lg:px-10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white">
                <div className="h-5 w-5 text-black">
                    {icon}
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-black">
                    {title}
                </h3>

                <p className="mt-1.5 max-w-[280px] text-xs leading-5 text-zinc-600">
                    {description}
                </p>
            </div>
        </div>
    );
}

/* ========================================================================= */
/* Small Growth Icon                                                          */
/* ========================================================================= */

function TrendingIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-full w-full"
        >
            <path d="M3 17l6-6 4 4 8-8" />
            <path d="M15 7h6v6" />
        </svg>
    );
}