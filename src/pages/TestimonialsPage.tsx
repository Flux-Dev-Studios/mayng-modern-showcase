import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// --- Testimonial Data ---
const testimonials = [
  {
    id: 1,
    category: "Living Room",
    name: "Tunde & Aisha Bello",
    title: "Private Residence, Ikoyi",
    quote: "Working with Designs by May was a dream. They saw our vision and elevated it beyond our wildest expectations. Our home is now our sanctuary.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of Tunde Bello"
  },
  {
    id: 3,
    category: "Living Room",
    name: "Sarah Egbuna",
    title: "Private Residence, Lekki",
    quote: "Every detail was perfect. From the custom furniture to the color palette, it just feels... right. I cannot recommend them highly enough.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of Sarah Egbuna"
  },
  {
    id: 4,
    category: "Hotel/Hospitality",
    name: "Chioma Okonkwo",
    title: "Boutique Hotel, VI",
    quote: "Their design for our lounge area is constantly complimented by our guests. Elegant, modern, and uniquely Nigerian. A true partner.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of Chioma Okonkwo"
  },
  {
    id: 5,
    category: "Restaurant",
    name: "Emeka Obi",
    title: "Restaurant Design, VI",
    quote: "From concept to completion, Mayng exceeded our expectations. The design process was collaborative, and the final outcome is breathtaking.",
    // --- FIX: Updated Emeka's avatar URL to a working image ---
    avatar: "https://images.unsplash.com/photo-1564564321837-a921d65d2928?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of Emeka Obi",
  },
  {
    id: 6,
    category: "Kitchen & Dining",
    name: "Zainab & Ahmed Musa",
    title: "Modern Duplex, Abuja",
    quote: "The kitchen renovation is simply spectacular. It's become the heart of our home where we love to entertain. Functional, stylish, and built to last.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of Zainab Musa"
  },
  {
    id: 7,
    category: "Commercial Office",
    name: "David Okafor",
    title: "Tech Hub, Yaba",
    quote: "We needed a space that fostered creativity and collaboration. Designs by May delivered a workspace that has boosted our team's morale and productivity.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of David Okafor"
  },
];

// --- TestimonialCard component is removed, as we're building the layout directly ---

// --- Main Testimonials Page Component ---
const TestimonialsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    const timer = setTimeout(() => setIsVisible(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* --- HERO SECTION (Unchanged) --- */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] ease-linear hover:scale-110"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop")' }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <p className={`text-[#E0683D] font-bold tracking-wider uppercase mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Client Stories
          </p>
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transforming Spaces, <br/> Exceeding Expectations
          </h1>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA (New Alternating Layout) --- */}
      <div className="container mx-auto px-4 py-24 lg:px-8">
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-20">
          What Our Clients Say
        </h2>

        {/* --- TESTIMONIALS LIST --- */}
        <div className="space-y-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-16 animate-fade-in ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Side */}
              <div 
                className={`lg:col-span-5 rounded-xl overflow-hidden shadow-2xl ${
                  index % 2 === 0 ? 'lg:order-1' : 'lg:order-2' // Alternates order
                }`}
              >
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.imageAlt} 
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    // Fallback in case image fails, though the URL is now fixed
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x800/333/FFF?text=Client';
                  }}
                />
              </div>

              {/* Text Side */}
              <div 
                className={`lg:col-span-7 relative ${
                  index % 2 === 0 ? 'lg:order-2' : 'lg:order-1' // Alternates order
                }`}
              >
                <svg
                  className="absolute -top-12 -left-8 w-24 h-24 text-gray-100 -z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
                </svg>
                <blockquote className="text-2xl xl:text-3xl font-light text-gray-700 leading-snug relative z-10">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-lg text-[#E0683D] font-medium">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* --- CTA SECTION (Unchanged) --- */}
        <div className="mt-32">
          <div className="bg-stone-50 rounded-3xl overflow-hidden shadow-xl border border-stone-100">
            <div className="flex flex-col md:flex-row items-center">
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-96 relative">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
                  alt="Luxury Interior" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              {/* Text Side */}
              <div className="w-full md:w-1/2 p-10 md:p-16 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to start your journey?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether it's a single room or a complete renovation, we are ready to bring your vision to life.
                </p>
                <a
                  href="/contact"
                  onClick={(e) => e.preventDefault()}
                  className="inline-block px-8 py-4 bg-[#E0683D] text-white font-bold rounded-lg shadow-lg hover:bg-[#c25730] transition-colors transform hover:-translate-y-1"
                >
                  Get a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- STYLES --- */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialsPage;
