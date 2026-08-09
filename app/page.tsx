import BenefitsSection from "@/components/home/benefit-section/benefits-section";
import FaqSection from "@/components/home/faq-section";
import FooterReveal from "@/components/home/footer-reveal";
import HeroSection from "@/components/home/hero-section";
import MembershipAudienceSection from "@/components/home/membership-audience-section/membership-audience-section";
import MembershipSection from "@/components/home/membership-section";
import NetworkStatsSection from "@/components/home/network-stats-section";
import PartnersSection from "@/components/home/partner-section";
import PricingSection from "@/components/home/pricing";
import TestimonialSection from "@/components/home/testimonials-section/testimonials-section";
import Container from "@/components/shared/container";
import { banner, benefits, faq, footerReveal, membership, membershipAudience, network, partners, testimonials } from "@/data/site1";


export default function Home() {
  return (

    <>
      <HeroSection data={banner} />
      <Container>
        <MembershipSection data={membership} />
        <NetworkStatsSection data={network} />
      </Container>
      <BenefitsSection data={benefits} />
      <PricingSection />
      <PartnersSection data={partners} />
      <TestimonialSection data={testimonials} />
      <MembershipAudienceSection data={membershipAudience} />
      <FaqSection data={faq} />
      <FooterReveal data={footerReveal} />
    </>
  );
}



