"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/root-layout/navbar/navbar/navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  if (pathname === "/site-3") {
    return null;
  }

  return <Navbar />;
}