import BackgroundCarousel from "@/components/background-carousel";
import FloatingShapes from "@/components/floating-shapes";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WhoWeAre from "@/components/who-we-are";
import OurBrands from "@/components/our-brands";
import OurProjects from "@/components/our-projects";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundCarousel />
      <div className="fixed inset-0 gradient-overlay z-[-1]" />
      <FloatingShapes />
      <Navigation />
      <HeroSection />
      <WhoWeAre />
      <OurBrands />
      <OurProjects />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/attached_assets/esignature_1757011490490.png" 
                alt="CartaRep Logo" 
                className="h-8 w-auto" 
                data-testid="img-footer-logo"
              />
              <span className="text-xl font-bold" data-testid="text-footer-brand">CartaRep</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-2" data-testid="text-copyright">© CartaRep | 2025</p>
              <p className="text-sm text-muted-foreground" data-testid="text-tagline">Design consultancy agency in London</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
