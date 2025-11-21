import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white pt-12 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* 1. Get In Touch */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-base mb-4 text-white">Get In Touch</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We’d love to work with you to create beautiful furniture and art pieces, and to transform your space into something you’d be glad to be in and flaunt!
            </p>
          </div>

          {/* 2. Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-white">Contact Details</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="font-semibold text-white">Designs By May</li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+2348037260838" className="hover:text-white transition-colors">
                  +234 803 726 0838
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:hello@designsbymayng.com" className="hover:text-white transition-colors">
                  hello@designsbymayng.com
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Location */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-white">Our Location</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  No 78 Woji road GRA Phase 3,<br />
                  Port-Harcourt, Nigeria
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Follow Us */}
          <div>
            <h4 className="font-heading font-bold text-base mb-4 text-white">Follow Us</h4>
            <div className="flex items-center gap-4">
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Linkedin size={18} />} href="#" />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs">© {currentYear} Designs By May. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-white transition-all duration-300 border border-white/10 hover:border-primary"
  >
    {icon}
  </a>
);

export default Footer;
