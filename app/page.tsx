import BenefitsSection from "@/components/home/benefit-section/benefits-section";
import FaqSection from "@/components/home/faq-section";
import FooterReveal from "@/components/home/footer-reveal";
import HeroSection from "@/components/home/hero-section";
import JoinFounderSection from "@/components/home/join-founder-section";
import MembershipAudienceSection from "@/components/home/membership-audience-section/membership-audience-section";
import MembershipSection from "@/components/home/membership-section";
import NetworkStatsSection from "@/components/home/network-stats-section";
import PartnersSection from "@/components/home/partner-section";
import TestimonialSection from "@/components/home/testimonials-section/testimonials-section";
import Container from "@/components/shared/container";


export default function Home() {
  return (

    <>
      <HeroSection />
      <Container>
        <MembershipSection />
        <NetworkStatsSection />
      </Container>
      <BenefitsSection />
      <PartnersSection />
      <TestimonialSection />
      <MembershipAudienceSection />
      <FaqSection />
      <FooterReveal />
    </>
  );
}



