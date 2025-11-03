import Navigation from "@/components/Navigation";
import { Home, Armchair, Palette, Lightbulb, Layout, PackageCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Interior Design",
    description: "Complete space transformation with attention to every detail. We create harmonious environments that blend functionality with aesthetic beauty, tailored to your lifestyle and preferences.",
    features: ["Space Planning", "Color Consultation", "Material Selection", "Lighting Design"],
  },
  {
    icon: Armchair,
    title: "Custom Furniture",
    description: "Bespoke furniture pieces crafted to perfectly fit your space and express your unique style. Each piece is designed and built by skilled artisans using premium materials.",
    features: ["Unique Designs", "Quality Materials", "Expert Craftsmanship", "Perfect Fit"],
  },
  {
    icon: Palette,
    title: "Art Curation",
    description: "Carefully selected artworks that complement your design and tell your unique story. We source from talented local and international artists to enhance your space.",
    features: ["Art Selection", "Installation", "Gallery Walls", "Custom Framing"],
  },
  {
    icon: Layout,
    title: "Space Planning",
    description: "Optimize your space for maximum functionality and flow. We create layouts that make the most of every square foot while maintaining aesthetic appeal.",
    features: ["Floor Plans", "Traffic Flow", "Furniture Layout", "Storage Solutions"],
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Strategic lighting solutions that enhance ambiance and functionality. From natural light optimization to fixture selection and smart lighting systems.",
    features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Controls"],
  },
  {
    icon: PackageCheck,
    title: "Project Management",
    description: "Seamless execution from concept to completion. We coordinate all aspects of your project, ensuring quality, timeliness, and budget adherence.",
    features: ["Timeline Management", "Vendor Coordination", "Quality Control", "Budget Oversight"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive design solutions tailored to transform your space from concept to completion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-card p-8 lg:p-10 rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="bg-secondary/30 rounded-3xl p-10 lg:p-16 text-center animate-fade-in">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
