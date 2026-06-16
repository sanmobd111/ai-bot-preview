"use client";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { Ref } from "react";


export default function Footer({ ref, contentRef }: { ref: React.RefObject<HTMLElement | null>, contentRef?: React.RefObject<HTMLDivElement | null> }) {
  const navigationLinks = [
    {
      name: "Become a Member",
      href: "#",
    },
    {
      name: "About Us",
      href: "#",
    },
    {
      name: "Community",
      href: "#",
    },
    {
      name: "Partnerships",
      href: "#",
    },
    {
      name: "Reviews",
      href: "#",
    },
    {
      name: "Press",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
    {
      name: "Careers",
      href: "#",
    },
  ];
  return (
    <footer className="bg-[#f4f3f1]  relative overflow-y-hidden rounded-t-2xl z-10" ref={ref}>
      <div
        className="px-4 md:px-8 lg:px-24 py-12 md:py-16 md:pt-20 mx-auto"
        ref={contentRef}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 ">
            <h2 className="max-w-3xl text-3xl font-normal leading-tight text-[#2d2d2d]">
              Stay updated on the latest from FoundersCard
            </h2>

            {/* Newsletter */}
            <form className="mt-8 flex w-full max-w-3xl overflow-hidden rounded-lg bg-[#eceae7] p-2">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 bg-transparent px-2 py-2 text-gray-700 outline-none placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="rounded-lg bg-[#2d2d2d] px-3 py-2 font-medium text-white transition hover:bg-black"
              >
                Subscribe
              </button>
            </form>

            {/* Store Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl bg-[#2d2d2d] px-6 py-3 text-white transition hover:bg-black"
              >
                {/* <Apple size={22} /> */}
                <Image
                  src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/app-store-logo-4694bda7b7a7268e94186c362565cf85f56e15a4845cfc835f57571e6f718449.svg"
                  width={16}
                  height={16}
                  alt="Apple Logo"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl bg-[#2d2d2d] px-6 py-3 text-white transition hover:bg-black"
              >
                {/* <Apple size={22} /> */}
                <Image
                  src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/app-store-logo-4694bda7b7a7268e94186c362565cf85f56e15a4845cfc835f57571e6f718449.svg"
                  width={16}
                  height={16}
                  alt="Google play"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/2  grid grid-cols-2 lg:grid-cols-3 gap-8 md:grid">
            {/* Navigation */}
            <div>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Navigation
              </h3>

              <ul className="space-y-1 text-[16px] font-medium text-[#333]">
                {navigationLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="relative inline-block after:absolute after:left-0 after:-bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-8 lg:flex-row ">
              {/* Contact */}
              <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Contact
                </h3>

                <div className="space-y-3 text-[16px] font-medium text-[#333]">
                  <p>
                    590 Madison Ave, New York,
                    <br />
                    NY 10022
                  </p>

                  <div>
                    <Link
                      href="#"
                      className="relative inline-block after:absolute after:left-0 after:-bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
                    >
                      800.963.1988
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="relative inline-block after:absolute after:left-0 after:-bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
                    >
                      Email Us
                    </Link>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-gray-500">
                  Socials
                </h3>

                <div className="flex gap-1 md:gap-3">
                  {[
                    { icon: FaInstagram },
                    { icon: FaLinkedin },
                    { icon: FaFacebook },
                    { icon: FaXTwitter },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={index}
                        href="#"
                        className="flex md:h-11 md:w-11 w-8 h-8  items-center justify-center rounded-lg bg-[#e8e5e1] transition hover:text-white hover:bg-black"
                      >
                        <Icon size={20} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>


          </div>
        </div>
        <Image
          src="https://d2q86wmri3hsp2.cloudfront.net/assets/redesign_2025/fc-logo-footer-2026-7e5c2efdeb2b81e77b4766539aa4bd69f27f068d1e7814e544d2c30bdf0db099.svg"
          alt="FoundersCard Logo"
          width={2000}
          height={40}
          className="mx-auto mt-12 lg:mt-16 aspect-10/1"
        />
        <div className="flex mt-8 justify-between items-center gap-12 lg:gap-24">
          <p className="text-[11px] md:w-1/2 font-semibold uppercase tracking-widest text-gray-500">
            © 2026 FOUNDERSCARD
          </p>
          <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
            <div>
              <Link
                href="#"
                className="relative text-[11px] font-semibold tracking-widest text-gray-500 uppercase inline-block after:absolute after:left-0 after:-bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
              >
                TERMS
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="relative text-[11px] font-semibold tracking-widest text-gray-500 uppercase inline-block after:absolute after:left-0 after:-bottom-0 after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
              >
                PRIVACY
              </Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
