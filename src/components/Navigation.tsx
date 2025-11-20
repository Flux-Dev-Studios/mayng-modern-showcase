import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-dm-transparent.png";

// Define props interface
interface NavigationProps {
  forceScrolled?: boolean;
}

const Navigation = ({ forceScrolled = false }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollState, setScrollState] = useState(false);
  const location = useLocation();

  // Determine effective state: 
  // If forceScrolled is passed (e.g. Case Study page), use it. Otherwise use scroll listener.
  const isScrolled = forceScrolled || scrollState;

  // --- SCROLL DETECTION ---
  useEffect(() => {
    const handleScroll = () => {
      const isHomePage = location.pathname === "/";
      const heroHeight = isHomePage ? window.innerHeight : 300;
      const buffer = 100;
      const threshold = Math.max(50, heroHeight - buffer);

      setScrollState(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // --- ROUTE CHANGE HANDLING ---
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
            // Desktop Text Colors
            isDark ? "text-foreground" : "text-white",
            "hover:text-primary",
            location.pathname === link.path && "font-semibold"
          )}
        >
          {link.name}
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
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4 border-border/10" // Scrolled: Glassy White/Dark
          : "bg-transparent py-6 border-transparent" // Hero: Transparent
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 relative h-full">
        <div className="flex items-center justify-between h-full relative">
          
          {/* --- 1. LOGO --- */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity z-20">
            <img 
              src={logoImage} 
              alt="Logo" 
              className={cn(
                "transition-all duration-500 w-auto",
                isScrolled ? "h-10 invert" : "h-16" 
              )} 
            />
          </Link>

          {/* --- 2. CENTER LINKS (Scrolled) --- */}
          <div className={cn(
            "hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-100 ease-out",
            isScrolled 
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none translate-y-4"
          )}>
            <NavLinksList isDark={true} spacingClass="gap-12" />
          </div>

          {/* --- 3. RIGHT LINKS (Hero) --- */}
          <div className={cn(
            "hidden md:flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-2 transition-all duration-500 ease-in-out origin-right",
            isScrolled 
              ? "opacity-0 scale-90 translate-x-8 pointer-events-none"
              : "opacity-100 scale-100 translate-x-0 pointer-events-auto"
          )}>
            <NavLinksList isDark={false} spacingClass="gap-8" />
          </div>

          {/* --- MOBILE MENU TOGGLE --- */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 transition-colors z-50 relative flex items-center justify-center",
              // Color Logic
              isScrolled ? "text-foreground" : "text-primary"
            )}
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Menu 
                size={28} 
                className={cn(
                  "absolute transition-all duration-300 ease-in-out transform",
                  isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                )}
              />
              <X 
                size={28} 
                className={cn(
                  "absolute transition-all duration-300 ease-in-out transform",
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                )}
              />
            </div>
          </button>
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
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
                    : "text-foreground hover:text-primary hover:bg-muted"
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
