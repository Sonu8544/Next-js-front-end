import FeatureSections from "@/components/FeatureSections";
import HeroSection from "@/components/HeroSection";
import StickyScroll from "@/components/StickyScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeatureSections />
      <StickyScroll />
    </main>
  );
}
