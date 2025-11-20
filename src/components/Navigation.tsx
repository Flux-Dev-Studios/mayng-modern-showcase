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
      // Changed to 50px to give the hero a bit more space before the nav changes
      setIsScrolled(window.scrollY > 50);
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
        // SCROLL LOGIC:
        // If scrolled: Add background blur, semi-transparent background, and a subtle shadow.
        // This 'bg-background/80' will use your global page color but make it see-through.
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm py-2 border-border/10" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={logoImage} 
              alt="Design by Mays Logo" 
              // Slightly adjust logo size on scroll for a tighter feel
              className={cn(
                "transition-all duration-500 w-auto",
                isScrolled ? "h-12" : "h-16"
              )} 
            />
          </Link>

          {/* Desktop Navigation */}
          {/* DESIGN CHANGE: 
             When at the top (!isScrolled), we keep the "pill" background (white/5) for readability over hero images.
             When scrolled (isScrolled), we remove the pill background because the whole nav bar is now the background.
          */}
          <div className={cn(
            "hidden md:flex items-center gap-8 rounded-2xl px-6 py-2 transition-all duration-500",
            !isScrolled ? "bg-white/5 backdrop-blur-sm border border-white/10" : "bg-transparent"
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-1 hover:opacity-70",
                  // TEXT COLOR LOGIC:
                  // If active link: Primary Color
                  // If not active: 
                  //    - On Hero (!isScrolled): White text (to pop against hero images)
                  //    - On Scroll (isScrolled): Foreground text (black/dark) to read against the page
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {link.name}
                {/* animated underline for active state */}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              // Change hamburger icon color based on scroll state
              isScrolled ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {/* Added overflow-hidden and max-h transition for smoother open/close */}
        <div className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="bg-background/95 backdrop-blur-xl rounded-2xl border border-border/10 p-4 shadow-xl flex flex-col gap-2">
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
