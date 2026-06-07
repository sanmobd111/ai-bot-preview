"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function JoinFounderSection() {
  return (
    <section
      className="relative h-[600px] w-full overflow-hidden bg-cover bg-center"
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=2070&auto=format&fit=crop')",
      // }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
      >
        <source src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/raining-cards-e35ae06dd5e29ab7f33269c9ed89d1d6c9bcb60eea83d1695eaaa32b275cd2bf.mp4" type="video/mp4" data-src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/raining-cards-e35ae06dd5e29ab7f33269c9ed89d1d6c9bcb60eea83d1695eaaa32b275cd2bf.mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full  max-w-7xl items-center justify-end px-6">
        <div className="w-full md:w-1/2  text-white">
          {/* Small Heading */}
          <p className="mb-8 text-sm font-semibold uppercase tracking-wide">
            JOIN FOUNDERSCARD
          </p>

          {/* Main Title */}
          <h2 className="text-4xl font-light leading-[1.15] md:text-6xl">
            For the driven, the daring, <span className=" italic  font-serif">
              the doers.
            </span>

          </h2>

          {/* Button */}
          <button className="mt-10 cursor-pointer inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-black font-medium shadow-md">
            Preview Membership
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2b2b2b] text-white">
              <ArrowRight size={18} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}