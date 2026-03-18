import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BentoSection } from "@/components/sections/BentoSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cosmic-black text-foreground selection:bg-cosmic-violet/30 selection:text-white pb-32">
      <Navbar />
      <Hero />
      <BentoSection />
      <FeatureSection />
      <ProofSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
}
