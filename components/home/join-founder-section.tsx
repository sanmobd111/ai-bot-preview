"use client";

import AnimatedPreviewButton from "../shared/preview-button/animated-preview-button/animated-preview-button";

export default function JoinFounderSection({ ref }: { ref: React.RefObject<HTMLElement | null> }) {
  return (
    <section
      className="relative h-[540px] lg:h-[640px] z-[9] w-full overflow-hidden bg-cover bg-center translate-y-10"
      ref={ref}
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
      <div className="relative z-10 mx-auto flex h-full  max-w-6xl items-center xl:justify-end px-5 md:px-6 -translate-y-5">
        <div className="w-full xl:w-1/2  text-white">
          {/* Small Heading */}
          <p className="mb-9 text-sm uppercase tracking-wide">
            JOIN FOUNDERSCARD
          </p>

          {/* Main Title */}
          <h2 className="leading-[1.15] tracking-tight text-[46px] md:text-5xl lg:text-[55px] xl:text-6xl">
            For the driven, the daring, <span className=" italic  feature-display">
              the doers.
            </span>

          </h2>
          <AnimatedPreviewButton className="lg:mt-9!" />
        </div>
      </div>
    </section>
  );
}