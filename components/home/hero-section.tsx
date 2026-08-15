import { ChevronDown } from "lucide-react";
import AnimatedPreviewButton from "../shared/preview-button/animated-preview-button/animated-preview-button";
import ScrollMarquee from "../shared/scroll-marque";
const logos = [
    "/Advisors.png",
    "/Agencies.png",
    "/Builders.png",
    "/Coaches.png",
    "/Consultants.png",
    "/Entrepreneurs.png",
    "/Founders.png",
    "/Innovators.png",
    "/Leaders.png",
    "/Operators.png"
]

export default function HeroSection({ data }) {
    return (

        <section className="p-2 h-screen lg:h-[120vh] xl:h-screen box-border">
            <div className="relative bg-black text-white  rounded-2xl overflow-hidden h-full">
                <video
                    className="absolute inset-0 bg-cover bg-center w-full h-full object-cover object-center "
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    style={{ background: "url('https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-poster-5bbf21bb0f378d85a80a81986db33dfb9ffc65b0de237d9abd7c209e6a30377a.jpg') center/cover no-repeat" }}>
                    <source src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-d33fb2346e42dea7711a39bae4a32125e0ee938ac242198ac298ae578d9d2ded.mp4" type="video/mp4" />
                </video>

                <div
                    className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.7)_40%,rgba(0,0,0,0.9)_70%,black_85%,black_100%)]"
                />

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center -translate-y-[4%]">
                    <h1
                        className="max-w-5xl text-[45px] feature-display font-normal leading-[1]  md:text-7xl xl:text-8xl 2xl:text-[120px]"
                        dangerouslySetInnerHTML={{ __html: data?.title }}
                    />

                    <p className="mt-6 lg:mt-8 2xl:mt-10 max-w-2xl xl:max-w-3xl 2xl:max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl lg:text-2xl 2xl:text-[28px]">
                        {data?.subtitle}
                    </p>
                    <AnimatedPreviewButton text={data?.btnText} className="lg:mt-8!" />
                </div>

                <div className="absolute lg:bottom-2  z-10 w-[90%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-between gap-4 lg:gap-4">
                    <ScrollMarquee
                        containerClasseName="py-6 2xl:max-w-6xl"
                        gradientColor="black"
                    >
                        <img src={logos?.[1]} alt="logo" className="mx-10 flex w-28 items-center justify-center opacity-70" />

                        <img src={logos?.[2]} alt="logo" className="mx-10 flex items-center justify-center opacity-70 w-28" />

                        <img src={logos?.[3]} alt="logo" className="mx-10 flex items-center justify-center opacity-70 w-28" />

                        <img src={logos?.[4]} alt="logo" className="mx-10 flex items-center justify-center opacity-70 w-28" />

                        <img src={logos?.[0]} alt="logo" className="mx-10 flex items-center justify-center opacity-70 w-28" />

                        <img src={logos?.[5]} alt="logo" className="mx-10 flex items-center justify-center opacity-70 w-28" />

                        <img src={logos?.[6]} alt="logo" className="mx-10 flex items-center justify-center opacity-70 w-28" />

                        <img src={logos?.[7]} alt="logo" className="mx-10 flex items-center justify-center opacity-70 w-28" />

                        <img src={logos?.[8]} alt="logo" className="mx-12 flex items-center justify-center opacity-70 w-28" />

                        <img src={logos?.[9]} alt="logo" className="mx-16 flex items-center justify-center opacity-70 w-28" />
                    </ScrollMarquee>
                    <div className="">
                        <ChevronDown
                            size={40}
                            className="animate-bounce text-white/80"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}