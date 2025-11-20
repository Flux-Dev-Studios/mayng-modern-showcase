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
      const threshold = window.innerHeight - 150;
      setIsScrolled(window.scrollY > threshold);
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

  // Reusable Link Component
  const NavLinks = ({ isDark }: { isDark: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            "text-sm font-medium transition-colors duration-300 relative py-1 hover:opacity-70",
            isDark ? "text-foreground" : "text-white",
            location.pathname === link.path && "font-bold"
          )}
        >
          {link.name}
          {location.pathname === link.path && (
            <span 
              className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 rounded-full animate-fade-in",
                isDark ? "bg-foreground" : "bg-white"
              )} 
            />
          )}
        </Link>
      ))}
    </>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b",
        // BACKGROUND TRANSITION
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4 border-border/10" 
          : "bg-transparent py-6 border-transparent"
      )}
    >
      {/* GRID LAYOUT: [Logo] [Center-Links] [Right-Links/Menu] */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-[auto_1fr_auto] items-center h-10">
        
        {/* 1. LEFT: LOGO (Always stays in the first column) */}
        <div className="flex items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={logoImage} 
              alt="Logo" 
              className={cn(
                "transition-all duration-500 w-auto",
                isScrolled ? "h-10 invert" : "h-16" 
              )} 
            />
          </Link>
        </div>

        {/* 2. CENTER: SCROLLED LINKS (Fades In) */}
        {/* This div occupies the middle column. Flex centers the content inside it. */}
        <div className={cn(
          "hidden md:flex justify-center items-center transition-all duration-500 ease-in-out",
          isScrolled 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-2"
        )}>
          <div className="flex gap-8">
            <NavLinks isDark={true} />
          </div>
        </div>

        {/* 3. RIGHT: HERO LINKS (Fades Out) */}
        {/* This occupies the last column. */}
        <div className="flex justify-end items-center">
          
          {/* Desktop Hero Pill */}
          <div className={cn(
            "hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-2 transition-all duration-500 ease-in-out",
            isScrolled 
              ? "opacity-0 pointer-events-none translate-x-4" // Fades out to the right
              : "opacity-100 pointer-events-auto translate-x-0"
          )}>
            <NavLinks isDark={false} />
          </div>

          {/* Mobile Menu Toggle (Visible on small screens) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-white hover:text-primary"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
      )}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-background/95 backdrop-blur-xl rounded-2xl border border-border/10 p-4 shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium py-3 px-4 rounded-lg transition-all duration-300",
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
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
