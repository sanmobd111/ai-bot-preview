import React from "react";

const OurStory = () => {
  return (
    <div className="max-w-400 px-4 w-full mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 ">
        <div className="md:space-y-8 space-y-4 w-full lg:w-1/2 ">
          <p className="mb-8 text-sm font-semibold uppercase tracking-wide">
            Our Story
          </p>
          <h2 className="lg:text-7xl text-5xl  font-medium leading-[1.15] ">
            FoundersCard{" "}
            <span className="font-light text-zinc-500">story.</span>
          </h2>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            <p className=" text-lg md:text-xl font-bold mx-auto text-zinc-600 ">
              FoundersCard was born out of a problem too big to ignore: the
              people taking the biggest risks to build the future were getting
              the least support.
            </p>
            <p className=" text-base font-medium mx-auto text-zinc-600 ">
              Our founder, Eric Kuhn, learned this firsthand as an early
              internet entrepreneur. While large company executives moved with
              effortless access, priority, and perks, founders were expected to
              earn every advantage the hard way.
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            <p className=" text-base font-medium mx-auto text-zinc-600 ">
              So Eric built what entrepreneurs deserved all along: a community
              that delivers the advantages big companies take for granted—and
              then some.
            </p>
            <p className=" text-base font-medium mx-auto text-zinc-600">
              That mission became FoundersCard: a global community of
              entrepreneurs and leaders with elite benefits, standout
              experiences, and a powerful network—so you can travel better,
              access more, and make the connections that open doors.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-between items-start mt-16">
        <div className="lg:max-w-[350px] w-full ">
            <img src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/eric-speaking-sm-b24fe5d4a1e8e3f7023e742e25e0f153a75cc80d66a9ed83b4abc316650ba775.png" alt="founders card" className="object-cover rounded-xl w-full h-full"/>
            <h4 className="md:text-2xl text-xl font-medium mt-4 text-zinc-600">
                "I wanted to create something that finally puts entrepreneurs first."
            </h4>
            <p  className=" text-base mt-4 font-medium mx-auto text-zinc-600 ">— Eric Kuhn, <span className="font-light text-zinc-500">Founder</span></p>
        </div>
        <div className="hidden lg:w-1/2 lg:flex  w-full">
          <img
            alt="founders card"
            src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/eric-speaking-lg-2737312d58ad73484a8e88ed2e4467920181f7f6c38a046f115e80832f99d529.jpg"
            className="object-cover rounded-xl w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
