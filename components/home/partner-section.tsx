"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollMarquee from "../shared/scroll-marque";
import AnimatedPreviewButton from "../shared/preview-button/animated-preview-button/animated-preview-button";

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

export default function PartnersSection({ data }) {
  return (
    <section className="overflow-hidden bg-[#ebebe6] py-0 lg:py-24">
      {/* Background Marquees */}
      <div className="hidden lg:block relative">
        <div className="">
          {[...Array(4)].map((_, row) => (
            <ScrollMarquee
              key={row}
              direction={row % 2 === 0 ? "right" : "left"}
              containerClasseName="py-3"
            >
              {partners.map((logo, index) => (
                <div
                  key={index}
                  className="mx-4 flex h-[120px] w-[190px] items-center justify-center rounded-xl bg-[#f5f5f0]"
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
            </ScrollMarquee>
          ))}
        </div>
        {/* Content */}
        <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center

    before:content-['']
    before:absolute
    before:inset-0
    before:m-auto

    before:w-full
    before:max-w-[900px]
    before:aspect-[900/620]

    before:rounded-[1000px]
    before:bg-[#f5f5f0]
    before:blur-[50px]

    before:z-[1]
        ">
          <div
            className="mx-auto max-w-2xl max-h-2xl p-12  text-center rounded-full relative z-10 "
          >
            <p className="mb-4 lg:mb-10 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
              {data?.title}
            </p>

            <h2
              className="
                text-[clamp(2.2rem,6vw,4rem)]
                leading-[1]
                tracking-[-0.04em]
                text-[#2e2e2e]
              "
            >
              {data?.heading}
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
              {data?.subtitle}
            </p>
            <div className="flex justify-center">
              <AnimatedPreviewButton />
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden pb-8 md:pb-16">
        <div className="mx-auto max-w-2xl max-h-2xl p-6  text-center mb-8">
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Our Partners
          </p>

          <h2
            className="
                text-[clamp(2.2rem,13vw,10rem)]
                md:text-[clamp(2.2rem,7vw,10rem)]
                leading-none
                tracking-[-0.04em]
                text-[#2e2e2e]
              "
          >
            Exceptional {" "}
            <br className="block md:hidden" />
            benefits  from the <br className="block md:hidden" /> world&apos;s {" "}
            <span className="italic font-light text-zinc-500 feature-display">
              leading brands.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-gray-600 md:text-xl">
            Unlock negotiated pricing, priority treatment, and the experiences
            our members can&apos;t access anywhere else.This isn’t a list of
            discounts — it&apos;s fast-track access to what you deserve.
          </p>

          <button className="mt-10 lg:mt-16 flex items-center gap-3 rounded-xl bg-white px-6 py-2.5 2xl:py-3 text-black transition cursor-pointer text-sm cta-button relative overflow-hidden group/cta-button mx-auto">
            <div className="overflow-hidden">
              <div className="original-text duration-300">Preview Membership</div>
            </div>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-white opacity-0">
              <ArrowRight size={16} />
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800 text-white absolute top-1/2 -translate-y-1/2 right-6 overflow-hidden z-10">
              <div className="flex items-center gap-4 transition-transform duration-300 group-hover/cta-button:translate-x-4 -translate-x-4">
                <ArrowRight size={16} className="w-4 shrink-0" />
                <ArrowRight size={16} className="w-4 shrink-0" />
              </div>
            </span>
          </button>
        </div>
        <div className="space-y-3">
          {[...Array(2)].map((_, row) => (
            <ScrollMarquee
              key={row}
              direction={row % 2 === 0 ? "right" : "left"}
            >
              {partners.map((logo, index) => (
                <div
                  key={index}
                  className="mx-2 flex h-[90px] w-[150px] items-center justify-center rounded-xl bg-[#f5f5f0]"
                >
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    width={140}
                    height={60}
                    className="w-[70px]"
                  />
                </div>
              ))}
            </ScrollMarquee>

          ))}
        </div>
      </div>
    </section>
  );
}
