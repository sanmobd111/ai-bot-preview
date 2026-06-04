"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, UserCircle2 } from "lucide-react";

export default function Navbar() {
    const [isTop, setIsTop] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
    // const [previousScrollY, setPreviousScrollY] = useState(0);
    const previousScrollRef = useRef(0);

    const links = [
        "About Us",
        "Benefits",
        "Community",
        "Partnerships",
    ];

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > (window.innerHeight - 98)) {
                setIsTop(true);
            } else {
                setIsTop(false);
            }
            setScrollDirection(window.scrollY > previousScrollRef.current ? "down" : "up");
            previousScrollRef.current = window.scrollY;
        });
    }, []);


    return (
        <>
            <nav className={`z-30 fixed top-4 lg:top-8 max-w-400 w-full left-1/2 -translate-x-1/2 text-white px-4 lg:px-0 ${scrollDirection === "down" ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"} transition-transform duration-300 ease-in-out`}>
                <div className={`rounded-xl backdrop-blur-md ${!isTop ? "bg-[#0000001a]" : "bg-[#191919cc]"} transition-all duration-300 ease-in-out`}>
                    <div className="flex items-center justify-between px-4 py-2 md:px-8 md:py-3">
                        {/* Desktop Links */}
                        <div className="hidden items-center gap-8 text-sm font-medium lg:flex">
                            {links.map((link) => (
                                <a key={link} href="#">
                                    {link}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Logo */}
                        <h2 className="text-xl font-light tracking-wider sm:text-2xl md:text-3xl">
                            FOUNDERS<span className="font-normal">CARD</span>
                        </h2>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            <button className="hidden items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-4 py-2 text-sm sm:flex cursor-pointer">
                                <UserCircle2 size={18} />
                                Login
                            </button>

                            <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black md:px-6 md:py-2 cursor-pointer">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen
                            ? "max-h-96 border-t border-white/10"
                            : "max-h-0"
                            }`}
                    >
                        <div className="flex flex-col px-4 py-4">
                            {links.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="py-3 text-sm"
                                >
                                    {link}
                                </a>
                            ))}

                            <button className="mt-3 flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm sm:hidden">
                                <UserCircle2 size={18} />
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}