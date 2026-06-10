import { ArrowRight, ChevronDown } from "lucide-react";
import ScrollMarquee from "../shared/scroll-marque";
const logos = [
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/stripe-b55043bb176ed277e6da0e540ea5b0763160550354d3d0b58dfb1fbefc9e19d3.svg",
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/ihg-d02ef1ed385f722af5296be29ce349efe814e99a6915610f7d1f5f3e6508b586.svg",
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/aa-86811decf5bdf23f1ba3d84c5ca41a105aeac1be07241ab172c35314d944ddb8.svg",
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/dell-2d6f46f38b339818aafaf2bed3b6cc1e930fafadd7928c7630cea216a8004db2.svg",
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/adidas-de397a2348927fd8a1469db727cb9ae3467c4590861f4f21df940e40beb86785.svg",
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/singapore-airlines-9531a70596f70100711ec8054a2eeb2dfb5281ac075e40463d0ea7ffd2c7c952.svg",
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/bang-olufsen-8b921ad8b7579be23f785db374142a761fb8be4db56324ebe1d637b15ce4d3d5.svg",
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/virgin-atlantic-1446556c96be249050810258da0f6c68a0e21347602971961b38e7fb031fd5af.svg",
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/audi-e727df1dfd6730a85217b74d785b80ee122c4e9ed8f90b7450808fd15aa1b1a0.svg",
    "https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-marquee/united-e9f3084a208f24775c2cf990337699872983d7bc690d3424bc6052ab0cc0580b.svg"
]

export default function HeroSection() {
    return (

        <section className="px-4 pt-4 lg:pt-2 lg:p-2 lg:px-2 h-screen box-border">
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

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center -translate-y-[10%]">
                    <h1
                        className="max-w-5xl text-4xl feature-display font-light leading-[0.7] sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
                    >
                        Where ambition
                        <br />
                        <span className="italic">meets access</span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
                        Empowering entrepreneurs and leaders with premium benefits,
                        insider experiences, and connections that open doors.
                    </p>

                    <button className="mt-8 flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-black shadow-xl transition hover:scale-105 cursor-pointer">
                        Preview Membership
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
                            <ArrowRight size={16} />
                        </span>
                    </button>
                </div>

                <div className="absolute bottom-8 z-10 w-[80%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-between gap-6">
                    <ScrollMarquee
                        containerClasseName="py-6"
                        gradientColor="black"
                    >
                        <img src={logos?.[1]} alt="logo" className="mx-8 flex w-32 items-center justify-center opacity-70" />
                        <img src={logos?.[2]} alt="logo" className="mx-8 flex w-44 items-center justify-center opacity-70" />
                        <img src={logos?.[3]} alt="logo" className="mx-4 flex w-16 items-center justify-center opacity-70" />
                        <img src={logos?.[4]} alt="logo" className="mx-8 flex w-20 items-center justify-center opacity-70" />
                        <img src={logos?.[0]} alt="logo" className="mx-8 flex w-24 items-center justify-center opacity-70" />
                        <img src={logos?.[5]} alt="logo" className="mx-8 flex w-32 items-center justify-center opacity-70" />
                        <img src={logos?.[6]} alt="logo" className="mx-6 flex w-12 items-center justify-center opacity-70" />
                        <img src={logos?.[7]} alt="logo" className="mx-6 flex w-44 items-center justify-center opacity-70" />
                        <img src={logos?.[8]} alt="logo" className="mx-6 flex w-32 items-center justify-center opacity-70" />
                        <img src={logos?.[9]} alt="logo" className="mx-6 flex w-36 items-center justify-center opacity-70" />
                        <img src={logos?.[0]} alt="logo" className="mx-8 flex w-24 items-center justify-center opacity-70" />

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