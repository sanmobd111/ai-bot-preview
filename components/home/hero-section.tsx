import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (

        <section className="px-4 pt-4 lg:pt-2 lg:p-2 h-screen box-border">
            <div className="relative bg-black text-white  rounded-2xl overflow-hidden h-full">
                <video
                    className="absolute inset-0 bg-cover bg-center"
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    style={{ background: "url('https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-poster-5bbf21bb0f378d85a80a81986db33dfb9ffc65b0de237d9abd7c209e6a30377a.jpg') center/cover no-repeat" }}>
                    <source src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/hero-d33fb2346e42dea7711a39bae4a32125e0ee938ac242198ac298ae578d9d2ded.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
                    <h1
                        className="max-w-5xl text-4xl font-light leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                        style={{ fontFamily: "Georgia, serif" }}
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

                {/* logos */}

                {/* <div className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-20 opacity-50 md:flex">
                    <span className="text-xl font-semibold">UNITED</span>
                    <span className="text-4xl">AUDI</span>
                    <span className="text-3xl">Virgin Atlantic</span>
                    <span className="text-4xl">B&O</span>
                    <span className="text-xl">SINGAPORE AIRLINES</span>
                </div>

                <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
                    <ChevronDown
                        size={40}
                        className="animate-bounce text-white/80"
                    />
                </div> */}
            </div>
        </section >
    );
}