import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroAbout from "@/assets/hero-about.jpg";
import { CheckCircle2, Palette, Gem, MapPin } from "lucide-react"; 

const About = () => {
  // Data for the "Why Choose Us" grid
  const features = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Personalized Service",
      description: "Every project receives our full attention, tailored specifically to your unique lifestyle and taste."
    },
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Quality Craftsmanship",
      description: "We partner with Nigeria's finest artisans and source premium materials for lasting elegance."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Timeless Design",
      description: "Creating sophisticated spaces that remain beautiful and functional for years to come."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local Expertise",
      description: "Deep understanding of Nigerian aesthetics, climate requirements, and architectural styles."
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <PageHero 
        title="About Our Studio" 
        subtitle="Designing spaces that inspire, comfort, and empower."
        backgroundImage={heroAbout}
      />
      
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* --- SECTION 1: THE STUDIO STORY --- */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 animate-fade-in-up">
            {/* Left: Typography & Headline */}
            <div>
              <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-2 block">Who We Are</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                We are a premium interior design studio based in <span className="text-primary">Nigeria.</span>
              </h2>
              <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
            </div>

            {/* Right: Descriptive Text */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At <span className="text-foreground font-medium">Designs By May</span>, we believe that great design goes beyond aesthetics. It's about creating environments that resonate with your soul. Our approach combines contemporary design principles with authentic Nigerian elements, resulting in spaces that are globally sophisticated yet locally rooted.
              </p>
              <p>
                With years of experience in residential and commercial projects, our team brings together creative vision, technical expertise, and meticulous attention to detail. From concept development to final installation, we guide our clients through every step of the design journey.
              </p>
            </div>
          </div>

          {/* --- SECTION 2: OUR APPROACH (Full Width Box) --- */}
          <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 mb-24 text-center animate-fade-in-up delay-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Approach</h3>
              <p className="text-lg text-muted-foreground mb-8">
                We start by listening. Understanding your lifestyle, preferences, and aspirations is essential to creating spaces that truly serve you. Whether it's a complete home renovation or a single room transformation, we approach each project with the same dedication to excellence.
              </p>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>

          {/* --- SECTION 3: WHY CHOOSE US (Grid Cards) --- */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why Choose Us</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We don't just design rooms; we curate experiences. Here is what sets our studio apart.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-200">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-start"
                >
                  <div className="p-3 bg-primary/10 rounded-full text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* --- CTA SECTION --- */}
          <div className="text-center border-t border-border pt-16">
            <h2 className="font-heading text-3xl font-bold mb-6">Ready to transform your space?</h2>
            <Button variant="hero" size="lg" className="px-8 py-6 text-lg shadow-xl shadow-primary/20" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default About;
