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
      <div className="xl:w-[90%] px-5 lg:px-4 py-12 mx-auto">
        {/* Header Section */}
        {/* <p className="mb-8 text-sm uppercase tracking-wide text-center">
          FAQS
        </p> */}
        <div className="">
          <div className="space-y-8 w-full mb-10 max-w-2xl mx-auto">
            <h2 className="text-5xl font-light leading-[1.15] md:text-6xl feature-display text-center">
              Have Questions?
            </h2>
            <p className="text-base font-medium text-zinc-600 text-center">
              Founded in 2009 to empower entrepreneurs with the exceptional
              benefits and access they deserve, FoundersCard has grown into a
              global community of over 300,000 members.
            </p>
          </div>

          {/*  faqs */}
          <div className="grid w-full grid-cols-1 gap-4 max-w-5xl mx-auto mb-10">
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
          {/* Button */}
          <div className="flex justify-center">
            <button className="cursor-pointer inline-flex items-center gap-3 rounded-xl bg-black px-4 py-3 text-white font-medium shadow-md">
              {data?.btnText}
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
