import { useState, useEffect } from "react";
// Import Link from react-router-dom in your actual project
// import { Link } from "react-router-dom";

// --- Testimonial Data (Unchanged) ---
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

// --- Single Testimonial Card Component (Light Theme) ---
const TestimonialCard = ({ testimonial, isVisible }: { testimonial: typeof testimonials[0], isVisible: boolean }) => (
  <div 
    // Changed bg-gray-800 to bg-white and added border
    className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 ${isVisible ? 'animate-card-entry' : 'opacity-0'}`}
    style={{ 
      animationDelay: `${(testimonial.id % 5) * 100}ms`, // Staggered delay
      willChange: 'opacity, transform'
    }}
  >
    <div className="flex items-center mb-6">
      <img
        src={testimonial.avatar}
        alt={testimonial.imageAlt}
        className="w-16 h-16 rounded-full object-cover border-4 border-amber-500 mr-5"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/333/FFF?text=Client';
        }}
      />
      <div>
        {/* Changed text-white to text-gray-900 */}
        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
        {/* Changed text-amber-400 to text-amber-600 for better contrast on light bg */}
        <p className="text-sm text-amber-600">{testimonial.title}</p>
      </div>
    </div>
    <div className="relative">
      <svg
        // Changed text-gray-700 to text-gray-100
        className="absolute -top-4 -left-4 w-10 h-10 text-gray-100 opacity-90"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" />
      </svg>
      {/* Changed text-gray-300 to text-gray-700 */}
      <p className="text-lg italic text-gray-700 relative z-10">
        "{testimonial.quote}"
      </p>
    </div>
  </div>
);

// --- Main Testimonials Page Component (Light Theme) ---
const TestimonialsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    // Changed bg-black to bg-gray-50 and text-white to text-gray-900
    <div className="relative min-h-screen bg-gray-50 text-gray-900 overflow-hidden py-24 sm:py-32">
      {/* Animated background shapes (Updated for light theme) */}
      <div
        // Changed colors, opacity, and mix-blend
        className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        // Changed colors, opacity, and mix-blend
        className="absolute top-0 right-1/4 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        // Changed colors, opacity, and mix-blend
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        style={{ animationDelay: '4s' }}
      ></div>

      {/* Main Content (NEW 2-COLUMN LAYOUT) */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* --- LEFT "STICKY" COLUMN (Header & CTA) --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit">
            <div 
              className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              {/* Changed text-amber-500 to text-amber-600 */}
              <p className="text-lg font-semibold leading-7 text-amber-600">Our Clients</p>
              {/* Changed text-white to text-gray-900 */}
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hear From Those Who Trust Us
              </h2>
              {/* Changed text-gray-300 to text-gray-700 */}
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Our commitment to exceptional design and client satisfaction is reflected in every project.
              </p>
            </div>
            
            {/* CTA moves here (Updated for light theme) */}
            <div 
              // Changed bg-gray-800 to bg-white
              className={`mt-12 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '300ms' }}
            >
              {/* Changed text-white to text-gray-900 */}
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                <span className="block">Ready to transform your space?</span>
              </h2>
              {/* Changed text-gray-300 to text-gray-700 */}
              <p className="mt-4 text-lg leading-6 text-gray-700">
                Let's collaborate to create a design that's uniquely you.
              </p>
              
              {/* This is an <a> tag to prevent router errors in the preview.
                In your project, change this back to:
                <Link to="/contact" className="...">
              */}
              <a
                href="/contact"
                onClick={(e) => e.preventDefault()} // Prevents link from working in preview
                // Button style (text-black bg-amber-500) works great on light bg
                className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-black bg-amber-500 shadow-sm hover:bg-amber-400 transition-colors duration-300"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>

          {/* --- RIGHT "SCROLLING" COLUMN (Testimonials) --- */}
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

      {/* --- STYLES & ANIMATIONS (Unchanged) --- */}
      <style>
        {`
          /* Background blob animation (Unchanged) */
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite ease-in-out;
          }

          /* Card entry animation (Unchanged) */
          @keyframes cardEntry {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-card-entry {
            animation: cardEntry 0.6s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards;
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialsPage;
