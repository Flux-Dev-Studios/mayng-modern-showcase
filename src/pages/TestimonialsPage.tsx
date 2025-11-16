import { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Uncomment this in your real app

// --- Testimonial Data ---
const testimonials = [
  {
    id: 1,
    name: "Tunde & Aisha Bello",
    title: "Private Residence, Ikoyi",
    quote: "Working with Designs by May was a dream. They saw our vision and elevated it beyond our wildest expectations. Our home is now our sanctuary.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of Tunde Bello"
  },
  {
    id: 2,
    name: "Femi Adebayo",
    title: "Corporate Office, Victoria Island",
    quote: "The professionalism was outstanding. They handled our entire office redesign on time and on budget. The new space has transformed our company culture.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of Femi Adebayo"
  },
  {
    id: 3,
    name: "Sarah Egbuna",
    title: "Private Residence, Lekki",
    quote: "Every detail was perfect. From the custom furniture to the color palette, it just feels... right. I cannot recommend them highly enough.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of Sarah Egbuna"
  },
  {
    id: 4,
    name: "Chioma Okonkwo",
    title: "Boutique Hotel, VI",
    quote: "Their design for our lounge area is constantly complimented by our guests. Elegant, modern, and uniquely Nigerian. A true partner.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
    imageAlt: "Portrait of Chioma Okonkwo"
  },
  {
    id: 5,
    name: "Emeka Obi",
    title: "Restaurant Design, VI",
    quote: "From concept to completion, Mayng exceeded our expectations. The design process was collaborative, and the final outcome is breathtaking.",
    avatar: "https://images.unsplash.com/photo-1540569014015-fa786d35d259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80",
    imageAlt: "Portrait of Emeka Obi",
  },
];

// --- CSS Animations ---
const styles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite ease-in-out;
  }

  @keyframes cardEntry {
    from { opacity: 0; transform: translateY(30px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  .animate-card-entry {
    animation: cardEntry 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
  }
`;

// --- Single Testimonial Card Component ---
const TestimonialCard = ({ testimonial, isVisible }: { testimonial: typeof testimonials[0], isVisible: boolean }) => (
  <div 
    className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${isVisible ? 'animate-card-entry' : 'opacity-0'}`}
    style={{ 
      animationDelay: `${(testimonial.id % 5) * 100}ms`,
      willChange: 'opacity, transform'
    }}
  >
    <div className="flex items-center mb-6">
      <img
        src={testimonial.avatar}
        alt={testimonial.imageAlt}
        // Custom Orange Border
        className="w-16 h-16 rounded-full object-cover border-4 border-[#E0683D] mr-5"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/333/FFF?text=Client';
        }}
      />
      <div>
        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
        {/* Custom Orange Text */}
        <p className="text-sm text-[#E0683D] font-medium">{testimonial.title}</p>
      </div>
    </div>
    <div className="relative">
      <svg
        className="absolute -top-4 -left-4 w-10 h-10 text-gray-100 opacity-90"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
      </svg>
      <p className="text-lg italic text-gray-700 relative z-10">
        "{testimonial.quote}"
      </p>
    </div>
  </div>
);

// --- Main Testimonials Page Component ---
const TestimonialsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    // Changed background to bg-white as requested
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden py-24 sm:py-32">
      {/* Animated background shapes (Adjusted to match white theme + orange accents) */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#E0683D]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        style={{ animationDelay: '4s' }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* --- LEFT "STICKY" COLUMN --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
            <div 
              className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              {/* Custom Orange Text */}
              <p className="text-lg font-semibold leading-7 text-[#E0683D]">Our Clients</p>
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hear From Those Who Trust Us
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Our commitment to exceptional design and client satisfaction is reflected in every project.
              </p>
            </div>
            
            {/* CTA */}
            <div 
              className={`mt-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                <span className="block">Ready to transform your space?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-700">
                Let's collaborate to create a design that's uniquely you.
              </p>
              
              {/* BUTTON COLOR UPDATED HERE to #E0683D with White Text */}
              <a
                href="/contact"
                onClick={(e) => e.preventDefault()} 
                className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#E0683D] shadow-sm hover:bg-[#c25730] transition-colors duration-300"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>

          {/* --- RIGHT "SCROLLING" COLUMN --- */}
          <div className="lg:col-span-7 mt-16 lg:mt-0">
            <div className="flex flex-col gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* Inject Styles */}
      <style>{styles}</style>
    </div>
  );
};

export default TestimonialsPage;
