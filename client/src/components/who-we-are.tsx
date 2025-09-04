import { useEffect, useRef, useState } from "react";

export default function WhoWeAre() {
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
    <section id="about" className="py-32 relative z-10" ref={sectionRef} data-testid="who-we-are-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <h2 className="neon-text text-4xl md:text-5xl font-neon font-bold mb-8" data-testid="text-about-title">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description-1">
              As specialists in bespoke project specifications, we provide guidance and tailored solutions to specifiers, contractors and businesses in the design industry.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-about-description-2">
              Our expertise spans architectural lighting, interior design consultancy, and project management, delivering exceptional results for both residential and commercial spaces.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center" data-testid="stat-projects">
                <div className="neon-text text-3xl font-bold" data-testid="text-stat-projects-number">50+</div>
                <div className="text-sm text-muted-foreground" data-testid="text-stat-projects-label">Projects Completed</div>
              </div>
              <div className="text-center" data-testid="stat-experience">
                <div className="neon-text text-3xl font-bold" data-testid="text-stat-experience-number">10+</div>
                <div className="text-sm text-muted-foreground" data-testid="text-stat-experience-label">Years Experience</div>
              </div>
              <div className="text-center" data-testid="stat-partners">
                <div className="neon-text text-3xl font-bold" data-testid="text-stat-partners-number">25+</div>
                <div className="text-sm text-muted-foreground" data-testid="text-stat-partners-label">Brand Partners</div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=800" 
              alt="Modern design consultancy workspace" 
              className="glass-card rounded-2xl shadow-2xl w-full h-auto" 
              data-testid="img-about-workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
