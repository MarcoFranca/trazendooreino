import { SacredBackground } from "@/components/sacred-background";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { MethodSection } from "@/components/method-section";
import { CurrentSeasonSection } from "@/components/current-season-section";
import { JourneyMapSection } from "@/components/journey-map-section";
import { DiscernmentSection } from "@/components/discernment-section";
import { FinalCtaSection } from "@/components/final-cta-section";

export default function HomePage() {
  return (
      <>
        <SacredBackground />
        <SiteHeader />
        <main>
          <HeroSection />
          <ManifestoSection />
          <MethodSection />
          <CurrentSeasonSection />
          <JourneyMapSection />
          <DiscernmentSection />
          <FinalCtaSection />
        </main>
      </>
  );
}