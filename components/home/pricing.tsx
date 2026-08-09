import CharacterReveal from "../shared/character-reveal";
import AnimatedPreviewButton from "../shared/preview-button/animated-preview-button/animated-preview-button";
import TextReveal from "../shared/text-reveal";

const pricingPlans = [
    {
        name: "Starter",
        price: "$29",
        description:
            "Best option for personal use & for your next project.",
        features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 1 developer",
            "Premium support: 6 months",
            "Free updates: 6 months",
        ],
    },
    {
        name: "Company",
        price: "$99",
        description:
            "Relevant for multiple users, extended & premium support.",
        features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 10 developers",
            "Premium support: 24 months",
            "Free updates: 24 months",
        ],
        featured: true,
    },
    {
        name: "Enterprise",
        price: "$499",
        description:
            "Best for large scale uses and extended redistribution rights.",
        features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 100+ developers",
            "Premium support: 36 months",
            "Free updates: 36 months",
        ],
    },
];

export default function PricingSection() {
    return (
        <section className="bg-[#f5f5f0]">
            <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6">
                <div className="mx-auto mb-12 max-w-[1000px] text-center">
                    <div className="mb-4">
                        <CharacterReveal
                            className="
                                                feature-display
                                                font-light
                                                leading-[1.2]
                                                tracking-[-0.04em]
                                                text-zinc-900
                                                    lg:text-[65px]
                                                    text-5xl
                                                    my-6
                                                "
                            data={<>
                                Designed for business {" "}
                                <span className="italic font-light text-zinc-500">
                                    like yours
                                </span>
                            </>}
                        >
                        </CharacterReveal>

                        <TextReveal
                            className="text-base leading-relaxed text-zinc-600 md:text-lg lg:text-[1.3rem] lg:leading-[1.35] reveal-text">
                            Biznenest Unlimited empowers entrepreneurs, business owners, and leaders at every stage of their journey. Whether you’re building your first company, running a growing business, or leading at the highest level, your drive deserves to be rewarded.
                        </TextReveal>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`mx-auto flex w-full max-w-lg flex-col rounded-xl border bg-white p-8 text-center shadow-sm transition-all duration-300  hover:shadow-xl border-gray-200`}
                        >
                            <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                                {plan.name}
                            </h3>

                            <p className="text-gray-500">
                                {plan.description}
                            </p>

                            <div className="my-8 flex items-baseline justify-center">
                                <span className="mr-2 text-5xl font-extrabold text-gray-900">
                                    {plan.price}
                                </span>

                                <span className="text-gray-500">
                                    /month
                                </span>
                            </div>

                            <ul className="mb-8 space-y-4 text-left">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 text-green-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            />
                                        </svg>

                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* <button className="mt-auto rounded-lg bg-primary-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-200">
                                Get Started
                            </button> */}
                            <AnimatedPreviewButton
                                text={`Choose ${plan.name}`}
                                bgColor="#28282B"
                                hoverBgColor="#53575C"
                                textColor="#ffffff"
                                className="mt-3! w-full"
                                arrowBgColor="#ffffff"
                                arrowColor="black"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}