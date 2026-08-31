import React from "react";

const BannerSection = () => {
  return (
    <div>
      <div className="md:space-y-8 space-y-4 text-center w-full ">
        <p className="mb-8 text-sm font-semibold uppercase tracking-wide">
          About FoundersCard
        </p>
        <h2 className="lg:text-7xl md:text-5xl text-5xl  font-medium leading-[1.15] ">
          We are <span className="font-light text-zinc-500">You</span>
        </h2>
        <p className="max-w-lg text-base font-medium mx-auto text-zinc-600 ">
          Created by people who build, lead, and decide — for people who live that reality every day.
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
