import FeatureSections from "@/components/FeatureSections";
import HeroSection from "@/components/HeroSection";
import LampEffect from "@/components/LampEffect";
import StickyScroll from "@/components/StickyScroll";
import TestomonialCard from "@/components/TestomonialCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeatureSections />
      <StickyScroll />
      <LampEffect />
      <TestomonialCard />
    </main>
  );
}
