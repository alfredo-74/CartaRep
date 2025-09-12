import BackgroundCarousel from "@/components/background-carousel";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OurBrands from "@/components/our-brands";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative">
      <BackgroundCarousel />
      <Navigation />
      <HeroSection />
      <OurBrands />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-xl font-bold" data-testid="text-footer-brand">CartaRep<sup className="text-xs">®</sup></span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-2" data-testid="text-copyright">© CartaRep® | 2025</p>
              <p className="text-sm text-muted-foreground" data-testid="text-tagline">Design consultancy agency in London</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
