import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  // State to track the radius (translateZ) based on screen width
  const [radius, setRadius] = useState(600); 
  
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const images = [heroImage, project1, project2, project3];
  
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      // CLOSING THE GAPS:
      // Mobile radius needs to be much smaller (~180px) to make images touch.
      // Desktop radius stays larger (600px).
      setRadius(isMobile ? 180 : 600);
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);
    
    // ANIMATION LOOP
    const interval = setInterval(() => {
      setRotation(prev => {
        // CONSTANT SLOW SPEED:
        // We removed the "Fast Swap" logic. 
        // Now it just adds 0.1 degree every frame for a smooth, slow cinematic pan.
        return prev + 0.1; 
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
                  // Use the dynamic 'radius' state here
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={img}
                  alt={`Interior design showcase ${index + 1}`}
                  className="w-full h-full object-cover brightness-[0.6]" // Added slight darkening for text readability
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
