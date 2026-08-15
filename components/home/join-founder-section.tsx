"use client";

import AnimatedPreviewButton from "../shared/preview-button/animated-preview-button/animated-preview-button";

export default function JoinFounderSection({ ref, data }: { ref: React.RefObject<HTMLElement | null> }) {
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
        <source src="/iStock-2190794499.mov" />
      </video>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full  max-w-8xl items-center xl:justify-end px-5 md:px-6 -translate-y-5">
        <div className="w-full xl:w-1/2  text-white">
          {/* Small Heading */}
          <p className="mb-9 text-sm uppercase tracking-wide">
            {data?.smallTitle}
          </p>

          {/* Main Title */}
          <h2 className="leading-[1.15] tracking-tight text-[46px] md:text-5xl lg:text-[55px] xl:text-6xl">
            {data?.heading}
          </h2>
          <p className="mt-3 text-gray-300">{data?.subtitle}</p>
          <AnimatedPreviewButton className="lg:mt-9!" text={data?.btnText} />
        </div>
      </div>
    </section>
  );
}