import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// --- Testimonial Data ---
const testimonials = [
  {
    id: 1,
    category: "Living Room",
    name: "Tunde & Aisha Bello",
    title: "Private Residence, Ikoyi",
    quote: "Working with Designs by May was a dream. They saw our vision and elevated it beyond our wildest expectations. Our home is now our sanctuary.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    category: "Living Room",
    name: "Sarah Egbuna",
    title: "Private Residence, Lekki",
    quote: "Every detail was perfect. From the custom furniture to the color palette, it just feels... right. I cannot recommend them highly enough.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 4,
    category: "Hotel/Hospitality",
    name: "Chioma Okonkwo",
    title: "Boutique Hotel, VI",
    quote: "Their design for our lounge area is constantly complimented by our guests. Elegant, modern, and uniquely Nigerian. A true partner.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 6,
    category: "Kitchen & Dining",
    name: "Zainab & Ahmed Musa",
    title: "Modern Duplex, Abuja",
    quote: "The kitchen renovation is simply spectacular. It's become the heart of our home where we love to entertain. Functional, stylish, and built to last.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 7,
    category: "Commercial Office",
    name: "David Okafor",
    title: "Tech Hub, Yaba",
    quote: "We needed a space that fostered creativity and collaboration. Designs by May delivered a workspace that has boosted our team's morale and productivity.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
];

// --- Testimonial Card Component ---
const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <div 
      className="group relative bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 right-8">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
          <Quote className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>

      {/* Category Badge */}
      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
        {testimonial.category}
      </span>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg text-foreground leading-relaxed mb-8 font-medium">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-border/50">
        <div className="relative">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/333/FFF?text=Client';
            }}
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

// --- Main Testimonials Page Component ---
const TestimonialsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <p className={`text-primary font-bold tracking-wider uppercase mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Client Stories
          </p>
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transforming Spaces, <br/> Exceeding Expectations
          </h1>
        </div>
      </div>

      {/* --- STATS BAR --- */}
      <div className="bg-secondary py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Happy Clients" },
              { number: "200+", label: "Projects Completed" },
              { number: "12+", label: "Years Experience" },
              { number: "5.0", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-sm text-secondary-foreground/70 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TESTIMONIALS GRID --- */}
      <div className="container mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-heading">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real clients who trusted us to transform their spaces into something extraordinary.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="bg-secondary/5 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <div className="grid md:grid-cols-2 items-stretch">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
                  alt="Luxury Interior" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
              </div>
              
              {/* Text Side */}
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
                  Start Your Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether it's a single room or a complete renovation, we're ready to bring your vision to life. Join our growing family of satisfied clients.
                </p>
                <div>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Get a Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;