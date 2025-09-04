import { useEffect, useRef, useState } from "react";

export default function OurProjects() {
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

  const projects = [
    {
      name: "Mayfair Residence",
      description: "Bespoke lighting design for luxury residential property",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      categoryColor: "primary"
    },
    {
      name: "Canary Wharf Office",
      description: "Contemporary workspace lighting with smart controls",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      categoryColor: "secondary"
    },
    {
      name: "Covent Garden Restaurant",
      description: "Atmospheric lighting design for fine dining experience",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      categoryColor: "accent"
    },
    {
      name: "Bond Street Boutique",
      description: "Sophisticated retail lighting enhancing product displays",
      category: "Retail",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      categoryColor: "primary"
    },
    {
      name: "Tate Modern Gallery",
      description: "Museum-grade lighting for art preservation and display",
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      categoryColor: "secondary"
    },
    {
      name: "The Shard Hotel",
      description: "Grand entrance lighting creating memorable first impressions",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      categoryColor: "accent"
    }
  ];

  const getCategoryColorClass = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-primary/20 text-primary';
      case 'secondary': return 'bg-secondary/20 text-secondary';
      case 'accent': return 'bg-accent/20 text-accent';
      default: return 'bg-primary/20 text-primary';
    }
  };

  return (
    <section id="projects" className="py-32 relative z-10" ref={sectionRef} data-testid="projects-section">
      <div className="container mx-auto px-6">
        <h2 className={`neon-text text-4xl md:text-5xl font-neon font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`} data-testid="text-projects-title">
          Our Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className={`glass-card rounded-2xl overflow-hidden group transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <img 
                src={project.image} 
                alt={`${project.name} lighting project`}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110" 
                data-testid={`img-project-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" data-testid={`text-project-name-${index}`}>
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                <span 
                  className={`inline-block px-3 py-1 rounded-full text-sm ${getCategoryColorClass(project.categoryColor)}`}
                  data-testid={`text-project-category-${index}`}
                >
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            className="glass-card px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all" 
            data-testid="button-view-all-projects"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
