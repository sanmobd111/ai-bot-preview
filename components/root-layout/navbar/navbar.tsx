"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, UserCircle2 } from "lucide-react";
import MobileMenu from "./mobile-menu";

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
            <nav className={`z-30 fixed top-4 lg:top-6 max-w-[1460] w-full left-1/2 -translate-x-1/2 text-white px-4 lg:px-6.5 ${scrollDirection === "down" ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"} transition-transform duration-300 ease-in-out`}>
                <div className={`rounded-xl backdrop-blur-md ${!isTop ? "bg-[#0000001a]" : "bg-[#191919cc]"} transition-all duration-300 ease-in-out`}>
                    <div className="flex items-center justify-between px-4 py-2 md:px-4 xl:px-8 relative">
                        {/* Desktop Links */}
                        <div className="hidden items-center lg:gap-4 text-sm font-medium lg:flex">
                            {links.map((link) => (
                                <a
                                    href="#"
                                    className="group relative inline-block"
                                    key={link}
                                >
                                    {link}

                                    <span
                                        className="
      absolute left-0 -bottom-1 h-[1px] w-full bg-white
      origin-right scale-x-0
      transition-transform duration-300
      group-hover:origin-left
      group-hover:scale-x-100
    "
                                    />
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
                        <img
                            src={"https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/fc-logo-navbar-2026-8b305b7c8d9108552e22b11eb0ba0c20ee37107cf1ffcfe0ba3d62054c0dc379.svg"}
                            className="w-[12%] min-w-[160px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                        />

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
                </div>
            </nav>
            <MobileMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    );
}