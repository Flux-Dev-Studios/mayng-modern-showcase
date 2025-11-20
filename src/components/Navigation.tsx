import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-dm-transparent.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      // Transition triggers after passing the hero section (Viewport Height - 150px buffer)
      const threshold = window.innerHeight - 150;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
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

  // --- HELPER COMPONENT FOR LINKS ---
  const NavLinksList = ({ isDark, spacingClass }: { isDark: boolean, spacingClass: string }) => (
    <div className={cn("flex items-center", spacingClass)}>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            "text-sm font-medium transition-colors duration-300 relative py-1",
            
            // --- COLOR LOGIC ---
            // Hero State (isDark=false): Solid White
            // Scrolled State (isDark=true): Theme Foreground (Black/Dark)
            isDark ? "text-foreground" : "text-white",
            
            // --- HOVER LOGIC ---
            // Always turns to your Primary Brand Color
            "hover:text-primary",

            // --- ACTIVE STATE LOGIC ---
            location.pathname === link.path && "font-semibold"
          )}
        >
          {link.name}
          
          {/* UNDERLINE ANIMATION (Always Primary Color) */}
          {location.pathname === link.path && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full animate-fade-in bg-primary" />
          )}
        </Link>
      ))}
    </div>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] border-b",
        // NAVBAR BACKGROUND TRANSITION
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4 border-border/10" 
          : "bg-transparent py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 relative h-full">
        <div className="flex items-center justify-between h-full relative">
          
          {/* --- 1. LOGO (Always Left) --- */}
