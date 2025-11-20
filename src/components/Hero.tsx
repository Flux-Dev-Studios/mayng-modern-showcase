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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const images = [heroImage, project1, project2, project3];
  
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // SETTINGS: Adjust these to tweak the feel
    // "Dwell" Speed: How fast it moves when showing an image (Very slow)
    const slowSpeed = isMobile ? 0.1 : 0.05; 
    // "Swap" Speed: How fast it moves between images (Fast)
    const fastSpeed = isMobile ? 1.2 : 0.8;
    // "Zone": How many degrees around the center counts as "showing the image"
    // 90 degrees total per side. 20 degrees means +/- 10 degrees from center.
    const viewZone = 30; 

    const interval = setInterval(() => {
      setRotation(prev => {
        // 1. Calculate where we are in the 90-degree sector
        // The images are at 0, 90, 180, 270.
        const normalizedAngle = Math.abs(prev % 90);

        // 2. Calculate distance to the nearest "Center" (0 or 90)
        // If angle is 10, distance is 10. If angle is 80, distance is 10 (from 90).
        const distanceToCenter = Math.min(normalizedAngle, 90 - normalizedAngle);

        // 3. Determine Speed
        // If we are close to the center (within viewZone/2), go SLOW.
        // Otherwise (we are transitioning), go FAST.
        const currentSpeed = distanceToCenter < (viewZone / 2) ? slowSpeed : fastSpeed;

        return prev + currentSpeed;
      });
    }, 16); // ~60fps
    
    return () => clearInterval(interval);
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
                  transform: `rotateY(${angle}deg) translateZ(600px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={img}
                  alt={`Interior design showcase ${index + 1}`}
                  className="w-full h-full object-cover"
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
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-white">
          Transforming Spaces
          <br />
          <span className="text-primary">in Nigeria</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium interior design, bespoke furniture, and curated art that reflect your unique vision and elevate your living experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" asChild className="shadow-none">
            <Link to="/portfolio">View Our Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="shadow-none">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
