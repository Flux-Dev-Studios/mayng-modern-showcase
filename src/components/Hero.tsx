import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// IMPORTING ONE IMAGE FROM EACH CATEGORY
import livingRoom1 from "@/assets/living-room-1.jpg";
import bedroom1 from "@/assets/bedroom-1.jpg";
import bathroom1 from "@/assets/bathroom1.jpg";
import kitchen1 from "@/assets/kitchen1.jpg";

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(600); 
  
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  // UPDATED IMAGES ARRAY: 4 Distinct Room Types
  const images = [livingRoom1, bedroom1, bathroom1, kitchen1];
  
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      
      // GAP REMOVAL LOGIC:
      // Mobile: 180px radius (Tight circle for narrow screens)
      // Desktop: 600px radius (Wider circle for wide screens)
      setRadius(isMobileView ? 180 : 600);
    };

    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      setRotation(prev => {
        // SPEED LOGIC:
        // Unified speed for BOTH Mobile and Desktop (0.15)
        return prev + 0.15; 
      });
    }, 16); // ~60fps
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Rotating Carousel Background */}
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {images.map((img, index) => {
            const angle = (360 / images.length) * index;
            return (
              <div
                key={index}
                className="absolute inset-0 w-full h-full"
                style={{
                  // The radius state ensures edges touch on all screen sizes
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={img}
                  alt={`Interior design showcase ${index + 1}`}
                  className="w-full h-full object-cover brightness-[0.65]" 
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Minimal Fade Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div 
        ref={ref}
        className={`relative z-10 container mx-auto px-6 lg:px-12 pt-32 pb-20 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-white drop-shadow-lg">
          Transforming Spaces
          <br />
          <span className="text-primary">in Nigeria</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Premium interior design, bespoke furniture, and curated art that reflect your unique vision and elevate your living experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" asChild className="shadow-xl">
            <Link to="/portfolio">View Our Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="shadow-xl bg-black/20 border-white/40 hover:bg-white hover:text-black text-white backdrop-blur-sm">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
