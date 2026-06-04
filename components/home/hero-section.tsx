import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
    return (

        <section className="p-2 h-screen box-border">
            <div className="relative bg-black text-white  rounded-2xl overflow-hidden h-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />

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
        </section>
    );
}