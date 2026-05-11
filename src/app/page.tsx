import { HeroSection } from "@/components/hero-section";
import { JourneyIntroSection } from "@/components/journey-intro-section";
import { ScriptureTimelineSection } from "@/components/scripture-timeline-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { DiscernmentSection } from "@/components/discernment-section";
import { CurrentSeasonSection } from "@/components/current-season-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import {SiteHeader} from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
    return (
        <>
            <SiteHeader />
        <main>
            <HeroSection />
            <JourneyIntroSection />
            <HowItWorksSection />
            <ScriptureTimelineSection />
            <DiscernmentSection />
            <CurrentSeasonSection />
            <FinalCtaSection />
            <SiteFooter/>
        </main>
        </>
    );
}