import BenefitsSection from "@/components/home/benefit-section/benefits-section";
import HeroSection from "@/components/home/hero-section";
import MembershipSection from "@/components/home/membership-section";
import NetworkStatsSection from "@/components/home/network-stats-section";


export default function Home() {
  return (

    <>
      <HeroSection />
      <MembershipSection />
      <NetworkStatsSection />
      <BenefitsSection />
    </>
  );
}