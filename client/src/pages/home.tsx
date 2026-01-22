import BackgroundCarousel from "@/components/background-carousel";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import HowWeWork from "@/components/how-we-work";
import WhoWeWorkWith from "@/components/who-we-work-with";
import OurBrands from "@/components/our-brands";
import OurPOV from "@/components/our-pov";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative">
      <BackgroundCarousel />
      <Navigation />
      <HeroSection />
      <HowWeWork />
      <WhoWeWorkWith />
      <OurBrands />
      <OurPOV />
      <FAQSection />
      <ContactSection />
      <BackToTop />

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-white font-neon">© CartaRep® | 2026 Bespoke made simple.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
