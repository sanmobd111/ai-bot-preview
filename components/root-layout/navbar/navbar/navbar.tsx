"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, UserCircle2 } from "lucide-react";
import MobileMenu from "../mobile-menu";
import Link from "next/link";
import "./navbar.css"
import { usePathname } from "next/navigation";
import AnimatedPreviewButton from "@/components/shared/preview-button/animated-preview-button/animated-preview-button";

export default function Navbar() {
    const [isTop, setIsTop] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
    // const [previousScrollY, setPreviousScrollY] = useState(0);
    const previousScrollRef = useRef(0);
    const pathname = usePathname();

    const links = [
        {
            name: "Site 2",
            link: "/site-2",
        },
        {
            name: "Become a representative",
            link: "/become-a-rep",
        },
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
            <nav className={`z-30 fixed top-6 max-w-[1460] w-full left-1/2 -translate-x-1/2 text-white px-6 2xl:px-0 ${scrollDirection === "down" ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100"} duration-500 ease-in-out`}>
                <div className={`rounded-xl backdrop-blur-md ${!isTop && pathname !== "/become-a-rep" ? "bg-[#0000001a]" : "bg-[#191919cc]"} transition-all duration-300 ease-in-out`}>
                    <div className="flex items-center justify-between px-4 py-2 md:px-4 lg:pl-8 relative">
                        {/* Desktop Links */}
                        <div className="hidden items-center lg:gap-4  lg:flex">
                            {links.map((item) => (
                                <a
                                    href={item?.link}
                                    className="group relative inline-block"
                                    key={item?.name}
                                >
                                    {item?.name}

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
                            {isOpen ? <X size={24} /> : <Menu size={36} />}
                        </button>
                        {/* <img
                            src={"https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/fc-logo-navbar-2026-8b305b7c8d9108552e22b11eb0ba0c20ee37107cf1ffcfe0ba3d62054c0dc379.svg"}
                            className="w-[12%] min-w-[160px] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                        /> */}
                        <h1 className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[1.1vw] 2xl:text-[1.2vw] text-gray-300/50 font-bold">
                            <Link href="/">
                                BIZNEST UNLIMITED
                            </Link>
                        </h1>

                        {/* Actions */}
                        <div className="items-center gap-2 hidden lg:flex">
                            <button className="hidden items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-5 py-3 sm:flex cursor-pointer login-button relative overflow-hidden">
                                <UserCircle2 size={18} className="absolute top-1/2 -translate-y-1/2" />
                                <UserCircle2 size={18} className="opacity-0" />
                                <div className="overflow-hidden">
                                    <div className="original-text duration-300">Partner Login</div>
                                </div>
                            </button>
                            <AnimatedPreviewButton
                                text="Apply Now"
                                className="mt-0!"
                            />
                        </div>
                        <Link href="#" className="lg:hidden">
                            <UserCircle2 size={30} />
                        </Link>
                    </div>
                </div>
            </nav >
            <MobileMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    );
}