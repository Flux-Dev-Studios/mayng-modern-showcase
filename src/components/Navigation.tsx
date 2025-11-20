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
      // Trigger the switch when passing the hero threshold
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

  // Helper for the links. 
  // We pass 'isDarkText' to switch colors based on the container they are in.
  const NavLinksList = ({ isDarkText }: { isDarkText: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            "text-sm font-medium transition-all duration-300 relative py-1 hover:opacity-70",
            isDarkText ? "text-foreground" : "text-white", 
            location.pathname === link.path && (isDarkText ? "font-bold" : "font-semibold")
          )}
        >
          {link.name}
          {location.pathname === link.path && (
            <span className={cn(
              "absolute -bottom-1 left-0 w-full h-0.5 rounded-full animate-fade-in",
              isDarkText ? "bg-foreground" : "bg-white"
            )} />
          )}
        </Link>
      ))}
    </>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)",
        // BACKGROUND SWITCH:
        // Hero: Transparent
        // Scrolled: White/Light Background (creates the contrast switch)
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4 border-b border-border/10" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 relative h-full">
        <div className="flex items-center justify-between h-full relative">
          
          {/* --- LOGO --- */}
          {/* Note: If your logo is white text, you might need a CSS filter to turn it black on scroll */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity z-20">
            <img 
              src={logoImage} 
              alt="Design by Mays Logo" 
              className={cn(
                "transition-all duration-700 w-auto",
                isScrolled ? "h-10 invert" : "h-16" // Added 'invert' class if you need to swap logo color
              )} 
            />
          </Link>

          {/* --- GROUP 1: HERO LINKS (Right Side, White Text) --- */}
          <div className={cn(
            "hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-2 absolute right-0 transition-all duration-700 ease-in-out origin-right",
            // Logic: When scrolled, this group fades OUT and scales DOWN
            isScrolled 
              ? "opacity-0 scale-90 translate-x-10 pointer-events-none" 
              : "opacity-100 scale-100 translate-x-0"
          )}>
            <NavLinksList isDarkText={false} />
          </div>

          {/* --- GROUP 2: SCROLLED LINKS (Center, Dark Text) --- */}
          <div className={cn(
            "hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out origin-bottom",
            // Logic: When scrolled, this group fades IN and floats UP
            isScrolled 
              ? "opacity-100 scale-100 translate-y-0 delay-100" 
              : "opacity-0 scale-95 translate-y-8 pointer-events-none"
          )}>
             <NavLinksList isDarkText={true} />
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors z-20",
              isScrolled ? "text-foreground" : "text-white hover:text-primary"
            )}
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
