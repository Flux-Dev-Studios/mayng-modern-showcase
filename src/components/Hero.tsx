import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern Nigerian interior design showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-20 text-center animate-fade-in-up">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-foreground">
          Transforming Spaces
          <br />
          <span className="text-primary">in Nigeria</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium interior design, bespoke furniture, and curated art that reflect your unique vision and elevate your living experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/portfolio">View Our Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
