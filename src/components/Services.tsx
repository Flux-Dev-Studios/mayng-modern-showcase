import { Home, Armchair, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Home,
    title: "Interior Design",
    description: "Complete space transformation with attention to every detail, creating harmonious environments.",
  },
  {
    icon: Armchair,
    title: "Custom Furniture",
    description: "Bespoke furniture pieces crafted to perfectly fit your space and express your style.",
  },
  {
    icon: Palette,
    title: "Art Curation",
    description: "Carefully selected artworks that complement your design and tell your unique story.",
  },
];

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to completion, we bring your vision to life
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-card p-8 lg:p-10 rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-700 hover:-translate-y-2 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: gridVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all text-sm"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
