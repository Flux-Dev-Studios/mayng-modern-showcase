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
      const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800;
      // Trigger slightly before the hero ends for a seamless feel
      setIsScrolled(window.scrollY > windowHeight - 150);
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

  // Helper component to avoid duplicating code
  // We render this twice: once for the "Hero" spot (Right) and once for "Scrolled" (Center)
  const NavLinksGroup = ({ isScrolledMode }: { isScrolledMode: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            "text-sm font-medium transition-all duration-300 relative py-1",
            location.pathname === link.path
              ? "text-primary font-semibold"
              : "text-white/90 hover:text-white",
              
            // Minor tweak: Make text slightly larger when centered for impact
            isScrolledMode ? "text-base" : "text-sm"
          )}
        >
          {link.name}
          {location.pathname === link.path && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
          )}
        </Link>
      ))}
    </>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)",
        isScrolled 
          ? "bg-black/90 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 relative h-full">
        <div className="flex items-center justify-between h-full relative">
          
          {/* --- LOGO --- */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity z-20">
            <img 
              src={logoImage} 
              alt="Design by Mays Logo" 
              className={cn(
                "transition-all duration-700 ease-in-out w-auto",
                isScrolled ? "h-10" : "h-16"
              )} 
            />
          </Link>

          {/* --- TRANSITION CONTAINER --- */}
          {/* We keep both sets of links in the DOM but fade between them using Opacity & Scale.
              This prevents the "Jump" effect of changing position:absolute. */}

          {/* 1. HERO STATE LINKS (Right Aligned Pill) */}
          <div className={cn(
            "hidden md:flex items-center gap-8 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-8 py-2 absolute right-0 transition-all duration-700 ease-in-out origin-right",
            // If scrolled: Fade out, Scale down, move slightly right
            isScrolled 
              ? "opacity-0 scale-90 translate-x-10 pointer-events-none" 
              : "opacity-100 scale-100 translate-x-0"
          )}>
            <NavLinksGroup isScrolledMode={false} />
          </div>

          {/* 2. SCROLLED STATE LINKS (Center Aligned Clean) */}
          <div className={cn(
            "hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out",
            // If scrolled: Fade in, Scale up from bottom
            isScrolled 
              ? "opacity-100 scale-100 translate-y-0 delay-100" // Added delay for smoother sequence
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          )}>
             <NavLinksGroup isScrolledMode={true} />
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-primary transition-colors z-20"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN --- */}
        <div className={cn(
            "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
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
