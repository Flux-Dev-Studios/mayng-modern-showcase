import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoImage from "@/assets/logo-dm-transparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // UPDATED PADDING: pt-12 pb-8 (Reduced from pt-20 pb-10)
    <footer className="bg-zinc-950 text-white pt-12 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* TOP SECTION: Grid Layout - Reduced gap from 12 to 8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* 1. Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img 
                src={logoImage} 
                alt="Design by Mays" 
                className="h-10 w-auto invert opacity-90" // Reduced logo height slightly
              />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Award-winning interior design studio based in Nigeria. Creating bespoke living spaces.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon icon={<Instagram size={16} />} href="#" />
              <SocialIcon icon={<Facebook size={16} />} href="#" />
              <SocialIcon icon={<Linkedin size={16} />} href="#" />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-white">Explore</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/about">About Studio</FooterLink></li>
              <li><FooterLink to="/portfolio">Our Portfolio</FooterLink></li>
              <li><FooterLink to="/services">Services</FooterLink></li>
              <li><FooterLink to="/contact">Contact Us</FooterLink></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  123 Victoria Island,<br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+2348000000000" className="hover:text-white transition-colors">
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:hello@designbymays.com" className="hover:text-white transition-colors">
                  hello@designbymays.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-white">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-3">
              Subscribe for design inspiration.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="h-9 text-sm bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-primary"
              />
              <Button size="icon" className="h-9 w-9 bg-primary hover:bg-primary/90 text-white shrink-0">
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">
            © {currentYear} Designs By May. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Helper Components ---

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="hover:text-primary hover:pl-1 transition-all duration-300 inline-block"
  >
    {children}
  </Link>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-all duration-300 border border-white/10 hover:border-primary"
  >
    {icon}
  </a>
);

export default Footer;
