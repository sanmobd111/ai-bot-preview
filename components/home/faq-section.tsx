// app/components/FAQ.tsx
"use client";

import { ArrowRight, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need AI or technical experience?",
    answer:
      "No. BizNest Unlimited  is designed for entrepreneurs, consultants, agency owners, coaches, advisors, and business builders. The focus is on building relationships, serving clients, and growing your business rather than developing technology.",
  },
  {
    question: "Can I operate under my own brand?",
    answer:
      "Yes. The White Label Partnership is designed to allow you to build and grow under your own business identity while maintaining ownership of your brand and client relationships.",
  },
  {
    question: "Do I need an existing business to join?",
    answer:
      "No. Some partners use BizNest Unlimited to expand an existing business, while others use it as the foundation for a completely new venture.",
  },
  {
    question: "What types of businesses can benefit from AI solutions?",
    answer:
      "AI solutions are being adopted across nearly every industry, including professional services, real estate, healthcare, home services, consulting, coaching, retail, and many others.",
  },
  {
    question: "How does BizNest Unlimited support its partners?",
    answer:
      "Partners receive access to infrastructure, systems, resources, and business development support designed to help them launch, serve clients, and grow with confidence.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Once onboarded, partners can begin exploring the platform, learning the opportunity, and positioning their business immediately.",
  },
  {
    question: "Is this a franchise?",
    answer:
      "No. BizNest Unlimited is a White Label Partnership that allows entrepreneurs to build under their own brand while leveraging shared infrastructure, systems, and resources.",
  },
  {
    question: "Who is this opportunity best suited for?",
    answer:
      "Entrepreneurs, consultants, agency owners, coaches, advisors, operators, sales professionals, and growth-minded individuals seeking to build within the rapidly expanding AI economy.",
  },
  {
    question: "Do I need to create the technology myself?",
    answer:
      "No. BizNest Unlimited  provides the infrastructure, systems, automation, and support that power service delivery behind the scenes, allowing partners to focus on clients, growth, and business development.",
  },
  {
    question: "Can this be operated alongside my existing business?",
    answer:
      "Yes. Many partners integrate BizNest Unlimited  into an existing business, while others choose to build a dedicated AI-focused brand from the ground up.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f4f3f1]">
      <div className="xl:w-[90%] mx-auto px-5 lg:px-4 py-12 ">
        {/* Header Section */}
        <p className="mb-8 text-sm uppercase tracking-wide">
          FAQS
        </p>
        <div className="grid lg:grid-cols-[46%_45%] xl:grid-cols-[40%_50%] justify-between md:items-start gap-12 md:gap-8 lg:gap-0">
          <div className="space-y-8 w-full">
            <h2 className="text-5xl font-light leading-[1.15] md:text-6xl feature-display">
              Have Questions?
            </h2>
            <p className="max-w-lg text-base font-medium text-zinc-600 ">
              Founded in 2009 to empower entrepreneurs with the exceptional
              benefits and access they deserve, FoundersCard has grown into a
              global community of over 300,000 members.
            </p>
            {/* Button */}
            <button className="cursor-pointer inline-flex items-center gap-3 rounded-xl bg-black px-4 py-3 text-white font-medium shadow-md">
              Become A White Label Partner
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

          {/*  faqs */}
          <div className="grid w-full grid-cols-1 gap-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white p-5 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full cursor-pointer items-center justify-between text-left gap-4"
                >
                  <h3 className="text-lg md:text-xl font-normal feature-display">{item.question}</h3>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shrink-0">
                    <Plus
                      size={18}
                      className={`transition-transform duration-300 ${openIndex === index ? "rotate-45" : "rotate-0"
                        }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${openIndex === index
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-zinc-600 leading-7">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
