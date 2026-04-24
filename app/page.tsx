import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StoryIntro from "@/components/StoryIntro";
import ProcessSection from "@/components/ProcessSection";
import CellarSection from "@/components/CellarSection";
import VideoSection from "@/components/VideoSection";
import HeritageSection from "@/components/HeritageSection";
import CommunitySection from "@/components/CommunitySection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import MobileSite from "@/components/mobile/MobileSite";
import CursorEffects from "@/components/CursorEffects";

export default function Home() {
  return (
    <>
      {/* Mobile layout — replaces the desktop tree on screens < md */}
      <MobileSite />

      {/* Desktop layout — hidden on mobile */}
      <CursorEffects />
      <div id="desktop-site" className="hidden md:block">
        <Navbar />
        <main>
          <HeroSection />
          <StoryIntro />
          <ProcessSection />
          <CellarSection />
          <VideoSection />
          <HeritageSection />
          <CommunitySection />
          <MapSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
