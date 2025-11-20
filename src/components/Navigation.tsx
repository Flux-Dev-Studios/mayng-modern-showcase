import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-dm-transparent.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // LOGIC CHANGE: Trigger only after scrolling past the Hero section (viewport height)
      // We subtract 100px so the transition starts just slightly before the hero ends
      const heroHeight = window.innerHeight - 100;
      setIsScrolled(window.scrollY > heroHeight);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b border-transparent",
        // NAV BACKGROUND LOGIC:
        isScrolled 
          ? "bg-black/90 backdrop-blur-lg py-4 shadow-xl border-white/5" // Dark, sleek, centered state
          : "bg-transparent py-6" // Transparent Hero state
      )}
    >
      {/* Container needs 'relative' so the absolute positioning of centered links works */}
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="flex items-center justify-between">
          
          {/* Logo: Stays on the left always */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity z-20">
            <img 
              src={logoImage} 
              alt="Design by Mays Logo" 
              className={cn(
                "transition-all duration-500 w-auto",
                isScrolled ? "h-10" : "h-16"
              )} 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className={cn(
            "hidden md:flex items-center gap-8 transition-all duration-700 ease-in-out z-10",
            
            // ALIGNMENT LOGIC:
            isScrolled 
              // STATE 1: SCROLLED (Center of Screen)
              // We use absolute positioning to force it to the exact center, 
              //
