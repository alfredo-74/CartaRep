import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Clock, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-32 relative z-10" ref={sectionRef} data-testid="contact-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold mb-8 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className={`text-xl text-muted-foreground mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-contact-subtitle">
            Ready to illuminate your space? Let's discuss your next lighting project.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className={`glass-card p-6 rounded-xl transition-all duration-1000 delay-100 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="card-contact-email">
              <Mail className="text-3xl text-primary mb-4 mx-auto" data-testid="icon-contact-email" />
              <h3 className="font-semibold mb-2" data-testid="text-contact-email-title">Email Us</h3>
              <a 
                href="mailto:ask@cartarep.com" 
                className="text-primary hover:underline" 
                data-testid="link-contact-email"
              >
                ask@cartarep.com
              </a>
            </div>

            <div className={`glass-card p-6 rounded-xl transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="card-contact-location">
              <MapPin className="text-3xl text-secondary mb-4 mx-auto" data-testid="icon-contact-location" />
              <h3 className="font-semibold mb-2" data-testid="text-contact-location-title">Location</h3>
              <p className="text-muted-foreground" data-testid="text-contact-location-address">London, United Kingdom</p>
            </div>

            <div className={`glass-card p-6 rounded-xl transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="card-contact-consultation">
              <Clock className="text-3xl text-accent mb-4 mx-auto" data-testid="icon-contact-consultation" />
              <h3 className="font-semibold mb-2" data-testid="text-contact-consultation-title">Consultation</h3>
              <p className="text-muted-foreground" data-testid="text-contact-consultation-description">Free initial consultation</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="https://www.instagram.com/cartarep/?igsh=dDgzOHY3MHJrcm9z" 
              className="glass-card p-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
              data-testid="link-social-instagram"
            >
              <Instagram className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/company/cartarep/?viewAsMember=true" 
              className="glass-card p-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
              data-testid="link-social-linkedin"
            >
              <Linkedin className="text-2xl" />
            </a>
          </div>

          {/* CartaRep Logo */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <img 
              src="/attached_assets/esignature_1757011490490.png" 
              alt="CartaRep Logo with Pendant Light" 
              className="mx-auto h-24 w-auto opacity-80 hover:opacity-100 transition-opacity" 
              data-testid="img-contact-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
