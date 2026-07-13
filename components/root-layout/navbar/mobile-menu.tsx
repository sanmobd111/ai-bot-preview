"use client";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


export default function MobileMenu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const menuItems = [
        {
            name: "Site 2",
            link: "/site-2",
        }
    ];

    const footerLinks = [
        "About Us",
        "Benefits",
        "Community",
        "Partnerships",
        "Press",
        "Contact",
    ];

    return (
        <div className={`min-h-screen bg-[#f3f3f3] px-5 py-4 relative z-[500] ${isOpen ? "" : "hidden"}`}>
            {/* Close Button */}
            <button className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#2f2f2f] text-white"
                onClick={() => setIsOpen(false)}
            >
                <IoMdClose size={22} strokeWidth={1.5} />
            </button>

            {/* Main Navigation */}
            <nav className="mt-14">
                <ul className="space-y-1">
                    {menuItems.map((item, index) => (
                        <li key={item?.name}>
                            <a
                                href={item?.link}
                                className={`
                  block font-serif text-[64px] leading-none tracking-tight
                  transition-opacity duration-300 hover:opacity-70
                  ${index === 0 ? "italic text-gray-500" : "text-[#232323]"}
                `}
                            >
                                {item?.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Divider */}
            <div className="mt-12 border-t border-gray-300" />

            {/* Footer */}
            <div className="mt-6 grid grid-cols-2 gap-10">
                {/* Navigation */}
                <div>
                    <h3 className="mb-5 text-sm font-medium uppercase tracking-wide text-gray-500">
                        Navigation
                    </h3>

                    <ul className="space-y-2">
                        {footerLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="text-[18px] text-[#2d2d2d] transition-opacity hover:opacity-70"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="mb-5 text-sm font-medium uppercase tracking-wide text-gray-500">
                        Socials
                    </h3>

                    <div className="flex gap-2">
                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e7e4de]"
                        >
                            <FaInstagram size={20} />
                        </a>

                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e7e4de]"
                        >
                            <FaLinkedin size={20} />
                        </a>

                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e7e4de]"
                        >
                            <FaFacebook size={20} />
                        </a>

                        <a
                            href="#"
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e7e4de] text-xl"
                        >
                            𝕏
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}