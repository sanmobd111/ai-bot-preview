import FooterReveal from "@/components/home/footer-reveal";
import MembershipSection from "@/components/home/membership-section";
import NetworkStatsSection from "@/components/home/network-stats-section";
import PartnersSection from "@/components/home/partner-section";
import TestimonialSection from "@/components/home/testimonials-section/testimonials-section";
import Container from "@/components/shared/container";
import TravelBenefit from "@/components/home/benefit-section/benefits-section";
import HeroSection from "@/components/site-2/hero-section";
import MembershipAudienceSection from "@/components/site-2/membership-audience-section/membership-audience-section";
import { banner, benefits, footerReveal, membership, membershipAudience, network, partners, testimonials } from "@/data/site2";
import AnimatedPreviewButton from "@/components/shared/preview-button/animated-preview-button/animated-preview-button";
import { ArrowRight } from "lucide-react";


export default function Home() {
  return (

    <>
      <HeroSection data={banner} />
      <Container>
        <MembershipSection data={membership} />
        <NetworkStatsSection data={network} />
      </Container>
      <TravelBenefit data={benefits} />
      <PartnersSection data={partners} />
      <TestimonialSection data={testimonials} />
      <MembershipAudienceSection data={membershipAudience} />
      {/* <FaqSection data={faq} /> */}
      <div className="bg-[#f4f3f1] py-24">
        <div className="w-full xl:w-1/3  text-black mx-auto flex flex-col items-center">
          {/* Small Heading */}
          <p className="mb-4 text-sm uppercase tracking-wide">
            THE BIZNEST DIFFERENCE
          </p>

          {/* Main Title */}
          <h2 className="leading-[1.15] tracking-tight text-[46px] md:text-5xl lg:text-[55px] xl:text-6xl text-center">
            Technology That Works. {" "}
            <br />
            <span className="italic font-light text-zinc-500 feature-display">
              People Who Care.
            </span>
          </h2>
          <p className=" text-center mt-4 mb-10">Choosing an AI Receptionist is more than selecting software. It's choosing a partner committed to helping your business communicate better, serve customers more effectively, and grow with confidence.</p>
          <button className="cursor-pointer inline-flex items-center gap-3 rounded-xl bg-black px-4 py-3 text-white font-medium shadow-md">
            Book A Live Demo
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
      <FooterReveal data={footerReveal} />
    </>
  );
}



