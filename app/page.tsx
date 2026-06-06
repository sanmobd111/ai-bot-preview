import BenefitsSection from "@/components/home/benefit-section/benefits-section";
import HeroSection from "@/components/home/hero-section";
import JoinFounderSection from "@/components/home/join-founder-section";
import MembershipSection from "@/components/home/membership-section";
import NetworkStatsSection from "@/components/home/network-stats-section";
import PartnersSection from "@/components/home/partner-section";
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
      <JoinFounderSection />
    </>
  );
}