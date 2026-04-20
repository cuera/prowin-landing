import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { TrustLogos } from "@/components/TrustLogos";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import AISection from "@/components/AISection";
import ImpactProof from "@/components/ImpactProof";
import Platform from "@/components/Platform";
import Applications from "@/components/Applications";
import DeploySection from "@/components/DeploySection";
import Services from "@/components/Services";
import StorySection from "@/components/StorySection";
import ClosedLoop from "@/components/ClosedLoop";
import Testimonial from "@/components/Testimonial";
import Results from "@/components/Results";
import Stats from "@/components/Stats";
import ResourcesSection from "@/components/ResourcesSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Hero />
      <TrustLogos />
      {/* <ImpactProof /> — enable once verified ProWin impact numbers replace the placeholders inside the component */}
      <Platform />
      {/* <AISection /> */}
      <Applications />
      <FeatureCarousel />
      {/* <Testimonial /> */}
      <DeploySection />
      {/* <Services /> */}
      <StorySection />
      <ClosedLoop />
      <ResourcesSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
