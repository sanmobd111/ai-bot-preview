"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { ArrowBigDown, ArrowRight } from "lucide-react";

const partners = [
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/audi-row2-a03bed49f3bf722b2545d9e7ee725ea49e9dfc75d9d09e63ea7fbcf45bd8c3b0.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/stripe-new-9136676d534436b8387a094b364aafa4d2f6194c5bb9df56c792aa03124f06f8.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/bmw-21100aeaf20128c9f8c34bfd046880385d80b487b96ecf92c3243362ac2c42d5.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/aston-martin-765a3e19a830140ab4af97ac4a91b2a49b6ab4ba6cc55dfe1b1726e5319ed343.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/virgin-atlantic-new-2fa139994abc1385bc13f03310201d2aca57fe4dc8e814ea27505abcde334ab0.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/adidas-row2-4fd6f154191e4e4ff375fd70e57783961f8aa57714c4671fd0d40d495ebb8ba9.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/fedex-11fc01d224d616eeb493919ed71cab5ead04617bc28e7fd0ad566f7ab2e68a9b.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/porsche-01467ed42cc787a8210cf10bc73c0d6e5cf78e28bf1551e242fb6b51da4de8b0.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/united-airlines-2c35897bcdece190e6c377a79829851961f37e718132db3923aa291bfbc271a6.svg",
  "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/partners/avis-row2-121ea3e41ae2ee78c693dae6fad0ecc83257cae038bbdfbb714323fd3e00d04c.svg",
];

export default function PartnersSection() {
  return (
    <section className="overflow-hidden bg-[#f6f4f1] py-24">
      {/* Background Marquees */}
      <div className="relative">
        <div className="space-y-6">
          {[...Array(4)].map((_, row) => (
            <Marquee
              key={row}
              speed={35}
              direction={row % 2 === 0 ? "left" : "right"}
              autoFill
              gradient={true}
              gradientColor="#f6f4f1"
              gradientWidth={200}
            >
              {partners.map((logo, index) => (
                <div
                  key={index}
                  className="mx-4 flex h-[120px] w-[190px] items-center justify-center rounded-xl bg-gray-200"
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={140}
                    height={60}
                    className="w-[80px]"
                  />
                </div>
              ))}
            </Marquee>
          ))}
        </div>
        {/* Content */}
        <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center">
          <div 
            className="mx-auto max-w-2xl max-h-2xl p-12  text-center"
            style={{
              background: `radial-gradient(circle at center, white 0%, white 10%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.4) 70%, transparent 100%)`
            }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              Our Partners
            </p>

            <h2
              className="
                font-serif
                text-[clamp(2.2rem,6vw,4rem)]
                leading-none
                tracking-[-0.04em]
                text-[#2e2e2e]
              "
            >
              Exceptional benefits
              <br />
              from the world's
              <br />
              <span className="italic font-light text-zinc-500">
                leading brands.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
              Unlock negotiated pricing, priority treatment, and the experiences
              our members can't access anywhere else.This isn’t a list of discounts — it's fast-track access to what you deserve.
            </p>

            <button className="mt-10 cursor-pointer inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-medium shadow-md">
              Preview Membership
              <ArrowRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}