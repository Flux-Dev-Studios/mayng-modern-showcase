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
      // Trigger transition after hero section
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

  // Helper Component for Links
  const NavLinksList = ({ isDark, spacingClass }: { isDark: boolean, spacingClass: string }) => (
    <div className={cn("flex items-center", spacingClass)}>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            "text-sm font-medium transition-all duration-300 relative py-1 hover:opacity-60",
            isDark ? "text-foreground" : "text-white",
            location.pathname === link.path && "font-semibold"
          )}
        >
          {link.name}
          {location.pathname === link.path && (
            <span className={cn(
              "absolute -bottom-1 left-0 w-full h-0.5 rounded-full animate-fade-in",
              isDark ? "bg-foreground" : "bg-white"
            )} />
          )}
        </Link>
      ))}
    </div>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] border-b",
        // Background Transition
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4 border-border/10" 
          : "bg-transparent py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 relative h-full">
        <div className="flex items-center justify-between h-full relative">
          
          {/* --- 1. LOGO (Always Left) --- */}
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

          {/* --- 2. CENTER LINKS (Scrolled State) --- */}
          {/* We use 'absolute left-1/2' to ensure TRUE center relative to viewport */}
          <div className={cn(
            "hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-100 ease-out",
            isScrolled 
              ? "opacity-100 scale-100 pointer-events-auto" // Visible when scrolled
              : "opacity-0 scale-95 pointer-events-none translate-y-4" // Hidden on Hero
          )}>
            {/* Increased spacing to gap-12 for the 'spaced' look */}
            <NavLinksList isDark={true} spacingClass="gap-12" />
          </div>

          {/* --- 3. RIGHT LINKS (Hero State) --- */}
          {/* We keep this relative (flex) so it pushes nicely against the right edge */}
          <div className={cn(
            "hidden md:flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-2 transition-all duration-500 ease-in-out origin-right",
            isScrolled 
              ? "opacity-0 scale-90 translate-x-8 pointer-events-none" // Fades out when scrolled
              : "opacity-100 scale-100 translate-x-0 pointer-events-auto" // Visible on Hero
          )}>
            <NavLinksList isDark={false} spacingClass="gap-8" />
          </div>

          {/* --- MOBILE TOGGLE --- */}
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
