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
              // ignoring the logo on the left.
              ? "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" 
              
              // STATE 2: HERO (Right Side / Natural Flex)
              // We keep the 'Pill' design here
              : "bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-8 py-2"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-1",
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                {/* Animated Underline */}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button (Right side) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors z-20"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="bg-zinc-950/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  location.pathname === link.path
                    ? "bg-primary/20 text-primary"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
