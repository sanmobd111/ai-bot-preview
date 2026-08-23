import Navbar from "@/components/root-layout/navbar/navbar/navbar";
import type { Metadata } from "next";
import "./globals.css";
import { featureDisplay, neueMontreal } from "@/assets/fonts";
import ConditionalNavbar from "@/components/root-layout/navbar/conditional-navbar.tsx/ConditionalNavbar";

export const metadata: Metadata = {
  title: "AI BOT",
  description: "AI BOT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${neueMontreal.variable} ${featureDisplay.variable}`}
    >
      <body className="">
        <ConditionalNavbar />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
