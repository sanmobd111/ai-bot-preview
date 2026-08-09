"use client";

import { useState } from "react";
import {
    ArrowRight,
    CalendarDays,
    Check,
    Headphones,
    Lock,
    Phone,
    Rocket,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    BarChart3,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TextReveal from "../shared/text-reveal";
import CharacterReveal from "../shared/character-reveal";
import AnimatedPreviewButton from "../shared/preview-button/animated-preview-button/animated-preview-button";

type PlanType = "full" | "monthly";

const features = [
    "Your Own White Label AI Business",
    "Business Launch & Onboarding",
    "AI Receptionist Platform",
    "CRM & Business Infrastructure",
    "Automation Systems",
    "Voice AI Technology",
    "Client Management Platform",
    "Sales & Marketing Resources",
    "Training & Support",
    "Future Platform Enhancements",
];

const plans = {
    full: {
        label: "FOUNDING PARTNER ACTIVATION",
        price: "$997",
        suffix: "ONE-TIME",
        description: "One payment. Lifetime access. Unlimited possibilities.",
        subDescription:
            "Pay once and unlock everything you need to launch, grow, and scale your own AI business under your own brand.",
        button: "Become a White Label Partner",
    },

    monthly: {
        label: "WHITE LABEL PARTNER ACTIVATION",
        price: "$297",
        suffix: "DOWN + $97/MONTH · 12 MONTHS",
        description:
            "Start your AI business without the larger upfront investment.",
        subDescription:
            "Get the complete White Label Partnership and spread your activation investment across a 12-month payment plan.",
        button: "Start With The Monthly Plan",
    },
};

export default function WhiteLabelPricing() {
    const [activePlan, setActivePlan] = useState<PlanType>("full");

    const plan = plans[activePlan];

    return (
        <section className="relative overflow-hidden bg-white py-24 text-black sm:py-32">
            {/* ================================================================ */}
            {/* Background */}
            {/* ================================================================ */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Soft neutral glow */}
                <div className="absolute left-1/2 top-[-260px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/70 blur-[140px]" />

                <div className="absolute left-[5%] top-[35%] h-[300px] w-[300px] rounded-full bg-white/50 blur-[120px]" />

                <div className="absolute right-[5%] top-[30%] h-[350px] w-[350px] rounded-full bg-white/50 blur-[130px]" />

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.6) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* ================================================================ */}
            {/* Main Container */}
            {/* ================================================================ */}

            <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
                {/* ============================================================ */}
                {/* Header */}
                {/* ============================================================ */}

                <div className="text-center">
                    <div className="mb-8 md:mb-10 mt-12 lg:w-[90%] mx-auto">
                        <TextReveal
                            className="mb-4 text-[11px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs reveal-text text-center"
                        >
                            The Investment
                        </TextReveal>

                        <div className="mb-4 mx-auto">
                            <CharacterReveal
                                className="
                                      feature-display
                                      font-light
                                      leading-[1.2]
                                      tracking-[-0.04em]
                                      text-zinc-900
                                          lg:text-[60px]
                                          text-5xl
                                          my-6
                                          lg:my-0
                                          text-center
                                      "
                                data={<>
                                    Activate Your Own
                                    <span className="italic font-light text-zinc-500">
                                        White Label AI Business
                                    </span>
                                </>}
                            >

                            </CharacterReveal>

                        </div>
                        <div className="flex justify-center">
                            <TextReveal
                                className="text-base leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text text-center">
                                Choose the payment option that works best for you.
                                Same partnership. Everything included. Your business, your brand.
                            </TextReveal>
                        </div>
                    </div>
                </div>

                {/* ============================================================ */}
                {/* Payment Tabs */}
                {/* ============================================================ */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mx-auto mt-10 flex w-full max-w-[560px] rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
                >
                    {/* Pay in Full */}
                    <button
                        type="button"
                        onClick={() => setActivePlan("full")}
                        className={`relative flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 sm:text-base ${activePlan === "full"
                            ? "text-white"
                            : "text-zinc-600 hover:text-black"
                            }`}
                    >
                        {activePlan === "full" && (
                            <motion.div
                                layoutId="pricingTab"
                                className="absolute inset-0 rounded-xl bg-black shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
                                transition={{
                                    type: "spring",
                                    stiffness: 350,
                                    damping: 30,
                                }}
                            />
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                            <span>$</span>
                            Pay in Full
                        </span>
                    </button>

                    {/* Monthly */}
                    <button
                        type="button"
                        onClick={() => setActivePlan("monthly")}
                        className={`relative flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 sm:text-base ${activePlan === "monthly"
                            ? "text-white"
                            : "text-zinc-600 hover:text-black"
                            }`}
                    >
                        {activePlan === "monthly" && (
                            <motion.div
                                layoutId="pricingTab"
                                className="absolute inset-0 rounded-xl bg-black shadow-[0_8px_25px_rgba(0,0,0,0.15)]"
                                transition={{
                                    type: "spring",
                                    stiffness: 350,
                                    damping: 30,
                                }}
                            />
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" />
                            Monthly Plan
                        </span>
                    </button>
                </motion.div>

                {/* ============================================================ */}
                {/* Main Pricing Area */}
                {/* ============================================================ */}

                <div className="relative mx-auto mt-12 max-w-[1100px]">
                    {/* ======================================================== */}
                    {/* AI Receptionist */}
                    {/* ======================================================== */}

                    <div className="absolute -left-[250px] top-[110px] hidden w-[330px] -rotate-[5deg] xl:block">
                        <AiReceptionistCard />
                    </div>

                    {/* ======================================================== */}
                    {/* Dashboard */}
                    {/* ======================================================== */}

                    <div className="absolute -right-[250px] top-[100px] hidden w-[350px] rotate-[5deg] xl:block">
                        <DashboardCard />
                    </div>

                    {/* ======================================================== */}
                    {/* Pricing Card */}
                    {/* ======================================================== */}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePlan}
                            initial={{
                                opacity: 0,
                                y: 18,
                                scale: 0.985,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -12,
                                scale: 0.985,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
                        >
                            {/* Top border */}
                            <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-black to-transparent" />

                            {/* Neutral glow */}
                            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-zinc-100 blur-[80px]" />

                            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                                {/* ================================================== */}
                                {/* Left Pricing */}
                                {/* ================================================== */}

                                <div className="relative border-b border-zinc-200 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                                    {/* Partner Badge */}
                                    <div className="mb-8 flex items-start gap-5">
                                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-[#f4f3f1]">
                                            <ShieldCheck className="h-8 w-8 text-black" />
                                        </div>

                                        <div>
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black">
                                                {plan.label}
                                            </p>

                                            <p className="mt-2 text-xs text-zinc-600">
                                                White Label Business Ownership
                                            </p>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div>
                                        <motion.div
                                            key={plan.price}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-6xl font-semibold tracking-[-0.05em] text-black sm:text-7xl"
                                        >
                                            {plan.price}
                                        </motion.div>

                                        <div className="mt-2 text-xs font-semibold tracking-[0.18em] text-zinc-600">
                                            {plan.suffix}
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="my-8 h-px bg-zinc-200" />

                                    {/* Description */}
                                    <h3 className="text-xl font-medium leading-snug text-black sm:text-2xl">
                                        {plan.description}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                                        {plan.subDescription}
                                    </p>

                                    {/* CTA */}
                                    {/* <button
                                        type="button"
                                        className="group mt-9 flex w-full items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] sm:text-base"
                                    >
                                        {plan.button}

                                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </button> */}
                                    <AnimatedPreviewButton
                                        text={plan.button}
                                        bgColor="black"
                                        hoverBgColor="gray"
                                        textColor="white"
                                        className="mt-9 w-full"
                                        arrowBgColor="white"
                                        arrowColor="black"
                                    />

                                    {/* Secure */}
                                    <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-zinc-600">
                                        <Lock className="h-3.5 w-3.5" />
                                        Secure activation
                                    </div>
                                </div>

                                {/* ================================================== */}
                                {/* Right Features */}
                                {/* ================================================== */}

                                <div className="p-7 sm:p-10 lg:p-12">
                                    <div className="mb-7 flex items-center gap-3">
                                        <Sparkles className="h-5 w-5 text-black" />

                                        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-black">
                                            Everything Included
                                        </h3>
                                    </div>

                                    <div className="space-y-0">
                                        {features.map((feature, index) => (
                                            <motion.div
                                                key={feature}
                                                initial={{
                                                    opacity: 0,
                                                    x: 8,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: index * 0.035,
                                                }}
                                                className="group flex items-center gap-4 border-b border-zinc-200 py-3.5"
                                            >
                                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black">
                                                    <Check className="h-3 w-3 text-white" />
                                                </span>

                                                <span className="text-sm text-zinc-600 transition-colors group-hover:text-black sm:text-[15px]">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ============================================================ */}
                {/* Benefits */}
                {/* ============================================================ */}

                <div className="mx-auto mt-7 max-w-[1100px] overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
                    <div className="grid divide-y divide-zinc-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                        <MiniBenefit
                            icon={<ShieldCheck />}
                            title="100% White Label"
                            description="Your brand. Your clients. Your business."
                        />

                        <MiniBenefit
                            icon={<Rocket />}
                            title="Launch Fast"
                            description="Get your business live in days, not months."
                        />

                        <MiniBenefit
                            icon={<TrendingUp />}
                            title="Scale Without Limits"
                            description="Unlimited clients. Unlimited potential."
                        />

                        <MiniBenefit
                            icon={<Headphones />}
                            title="We're With You"
                            description="Ongoing support, training, and updates."
                        />
                    </div>
                </div>

                {/* ============================================================ */}
                {/* Bottom Statement */}
                {/* ============================================================ */}

                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-14 text-center"
                >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-zinc-600 sm:text-xs">
                        This isn&apos;t a software subscription.
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-black sm:text-3xl">
                        It&apos;s your business.
                    </h3>
                </motion.div> */}
            </div>
        </section>
    );
}

/* ========================================================================= */
/* AI Receptionist Card                                                       */
/* ========================================================================= */

function AiReceptionistCard() {
    return (
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4f3f1]">
                        <Phone className="h-4 w-4 text-black" />
                    </div>

                    <div>
                        <p className="text-xs font-medium text-black">
                            AI Receptionist
                        </p>

                        <div className="mt-1 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-black" />

                            <span className="text-[9px] text-zinc-600">
                                Online
                            </span>
                        </div>
                    </div>
                </div>

                <span className="text-[9px] text-zinc-400">
                    00:24
                </span>
            </div>

            {/* Content */}
            <div className="space-y-5 p-5">
                {/* Incoming Call */}
                <div>
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400">
                        Incoming Call
                    </p>

                    <p className="mt-1 text-xs text-zinc-600">
                        +1 (555) 123-4567
                    </p>

                    {/* Waveform */}
                    <div className="mt-3 flex h-8 items-center gap-1">
                        {[10, 18, 12, 25, 15, 28, 17, 23, 12, 26, 16, 21, 13].map(
                            (height, index) => (
                                <span
                                    key={index}
                                    style={{ height }}
                                    className="w-[2px] rounded-full bg-black"
                                />
                            ),
                        )}
                    </div>
                </div>

                {/* Conversation */}
                <div className="rounded-xl border border-zinc-200 bg-[#f4f3f1] p-4">
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400">
                        AI Conversation
                    </p>

                    <p className="mt-3 text-[11px] leading-5 text-zinc-600">
                        “Hi! Thank you for calling. How can I help you today?”
                    </p>
                </div>

                {/* Statuses */}
                <div className="space-y-3">
                    <SmallStatus
                        text="Intent Identified"
                        value="Schedule Appointment"
                    />

                    <SmallStatus
                        text="Lead Captured"
                        value="John Smith"
                    />

                    <SmallStatus
                        text="Added to CRM"
                        value="New Lead Created"
                    />

                    <SmallStatus
                        text="Appointment Booked"
                        value="Tomorrow at 2:00 PM"
                    />
                </div>
            </div>
        </div>
    );
}

/* ========================================================================= */
/* Dashboard Card                                                             */
/* ========================================================================= */

function DashboardCard() {
    return (
        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            {/* Header */}
            <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-black">
                    Business Overview
                </p>

                <span className="rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 text-[9px] text-zinc-600">
                    This Month
                </span>
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 gap-2">
                <StatBox
                    title="Revenue"
                    value="$84K"
                />

                <StatBox
                    title="New Leads"
                    value="1,248"
                />

                <StatBox
                    title="Appointments"
                    value="382"
                />
            </div>

            {/* Conversion */}
            <div className="mt-3 rounded-2xl border border-zinc-200 bg-[#f4f3f1] p-4">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-[9px] text-zinc-400">
                            Conversion Rate
                        </p>

                        <p className="mt-1 text-xl font-semibold text-black">
                            31.4%
                        </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-black text-[9px] font-medium text-black">
                        31%
                    </div>
                </div>
            </div>

            {/* AI Interactions */}
            <div className="mt-3 rounded-2xl border border-zinc-200 bg-[#f4f3f1] p-4">
                <div className="flex items-center justify-between">
                    <p className="text-[9px] text-zinc-400">
                        AI Interactions
                    </p>

                    <BarChart3 className="h-4 w-4 text-black" />
                </div>

                <p className="mt-1 text-xl font-semibold text-black">
                    2,451
                </p>

                {/* Chart */}
                <div className="mt-4 flex h-12 items-end gap-1.5">
                    {[20, 30, 25, 42, 34, 48, 40, 55, 45, 60].map(
                        (height, index) => (
                            <span
                                key={index}
                                style={{ height: `${height}%` }}
                                className="flex-1 rounded-t-sm bg-black"
                            />
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}

/* ========================================================================= */
/* Small Status                                                               */
/* ========================================================================= */

function SmallStatus({
    text,
    value,
}: {
    text: string;
    value: string;
}) {
    return (
        <div className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-black">
                <Check className="h-2.5 w-2.5 text-white" />
            </span>

            <div>
                <p className="text-[9px] text-zinc-400">
                    {text}
                </p>

                <p className="text-[10px] text-zinc-600">
                    {value}
                </p>
            </div>
        </div>
    );
}

/* ========================================================================= */
/* Stat Box                                                                   */
/* ========================================================================= */

function StatBox({
    title,
    value,
}: {
    title: string;
    value: string;
}) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-[8px] text-zinc-400">
                {title}
            </p>

            <p className="mt-1 text-sm font-semibold text-black">
                {value}
            </p>
        </div>
    );
}

/* ========================================================================= */
/* Mini Benefit                                                               */
/* ========================================================================= */

function MiniBenefit({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex items-center gap-4 px-5 py-5 sm:px-6 lg:py-6">
            {/* Icon */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-[#f4f3f1]">
                <div className="h-5 w-5 text-black">
                    {icon}
                </div>
            </div>

            {/* Content */}
            <div>
                <p className="text-xs font-semibold text-black">
                    {title}
                </p>

                <p className="mt-1 text-[10px] leading-4 text-zinc-600">
                    {description}
                </p>
            </div>
        </div>
    );
}