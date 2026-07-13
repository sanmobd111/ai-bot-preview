// app/components/FAQ.tsx
"use client";

import { ArrowRight, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = ({ data }) => {
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
              {data?.btnText}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

          {/*  faqs */}
          <div className="grid w-full grid-cols-1 gap-4">
            {data?.faqs.map((item, index) => (
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
