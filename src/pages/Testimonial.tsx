import React, { useEffect, useState } from 'react';

// --- Testimonial Data ---
const testimonials = [
  {
    id: 1,
    quote: "Working with Designs By May was an absolute dream. They transformed our cramped apartment into a spacious, elegant home that perfectly reflects our style. Every detail was meticulously planned and executed.",
    name: "Tunde & Aisha Bello",
    project: "Private Residence, Ikoyi",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80",
    imageAlt: "Tunde and Aisha Bello",
  },
  {
    id: 2,
    quote: "The team's professionalism and eye for design are unmatched. They listened to our vision for our new office space and delivered a functional, modern, and inspiring environment for our team. Highly recommended!",
    name: "Femi Adebayo",
    project: "Corporate Office, Victoria Island",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80",
    imageAlt: "Femi Adebayo",
  },
  {
    id: 3,
    quote: "I was nervous about such a large renovation, but Mayng made the entire process seamless. Their modern aesthetic is exactly what I was looking for. I couldn't be happier with the result.",
    name: "Chioma Okonkwo",
    project: "Lekki Penthouse",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80",
    imageAlt: "Chioma Okonkwo",
  },
  {
    id: 4,
    quote: "The attention to detail and creative solutions provided by Mayng transformed our restaurant into a truly unique and inviting space. Our customers love the new ambiance!",
    name: "Emeka Obi",
    project: "Restaurant Design, Victoria Island",
    avatar: "https://images.unsplash.com/photo-1540569014015-fa786d35d259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80",
    imageAlt: "Emeka Obi",
  },
  {
    id: 5,
    quote: "From concept to completion, Mayng exceeded our expectations. The design process was collaborative, and the final outcome for our retail store is breathtaking and functional.",
    name: "Sarah Egbuna",
    project: "Retail Store Revamp, Ikoyi",
    avatar: "https://images.unsplash.com/photo-1521295121783-8a321d55593c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&h=144&q=80",
    imageAlt: "Sarah Egbuna",
  },
];

// --- Individual Testimonial Card Component ---
interface TestimonialCardProps {
  quote: string;
  name: string;
  project: string;
  avatar: string;
  imageAlt: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, project, avatar, imageAlt, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`
        bg-gray-800 shadow-lg rounded-lg p-8 transform 
        transition-all duration-700 ease-out 
        hover:bg-gray-700 hover:-translate-y-1 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="flex items-center mb-6">
        <img
          className="h-16 w-16 rounded-full object-cover border-2 border-amber-500"
          src={avatar}
          alt={imageAlt}
        />
        <div className="ml-4">
          <p className="text-lg font-semibold text-white">{name}</p>
          <p className="text-sm text-amber-400">{project}</p>
        </div>
      </div>
      <blockquote className="text-gray-300 text-lg md:text-xl font-light italic leading-relaxed mb-6 relative">
        <svg
          className="absolute top-0 left-0 -ml-4 -mt-4 w-10 h-10 text-gray-700 opacity-75"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.333 22.667C6.8 22.667 4.667 20.533 4.667 18C4.667 15.467 6.8 13.333 9.333 13.333C10.667 13.333 11.867 13.867 12.8 14.733L15.267 12.267C13.6 10.6 11.533 9.667 9.333 9.667C4.133 9.667 0 13.8 0 19C0 24.2 4.133 28.333 9.333 28.333C14.533 28.333 18.667 24.2 18.667 19C18.667 17.867 18.467 16.8 18.133 15.8L12.933 18.2C13.2 19.667 12.8 21.267 11.733 22.333C11.133 22.6 10.533 22.667 9.333 22.667ZM22.667 22.667C20.133 22.667 18 20.533 18 18C18 15.467 20.133 13.333 22.667 13.333C24 13.333 25.2 13.867 26.133 14.733L28.6 12.267C26.933 10.6 24.867 9.667 22.667 9.667C17.467 9.667 13.333 13.8 13.333 19C13.333 24.2 17.467 28.333 22.667 28.333C27.867 28.333 32 24.2 32 19C32 17.867 31.8 16.8 31.467 15.8L26.267 18.2C26.533 19.667 26.133 21.267 25.067 22.333C24.467 22.6 23.867 22.667 22.667 22.667Z" />
        </svg>
        <span className="relative z-10">{quote}</span>
      </blockquote>
    </div>
  );
};

// --- Main Testimonials Page Component ---
const TestimonialsPage: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen font-inter antialiased relative overflow-hidden">
      {/* Background shapes for visual interest - updated colors */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-amber-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>


      {/* This <style> block injects the keyframes for the animations. */}
      <style>
        {`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slideInUp {
            animation: slideInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }

          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }

          .animate-blob {
            animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.3, 1);
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Page Header - updated colors */}
        <div className="text-center">
          <h2 className="text-base font-semibold text-amber-500 tracking-wide uppercase">
            Client Stories
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight">
            Hear From Our Valued Clients
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            Our commitment to exceptional design and client satisfaction is reflected in every project. Read what our clients have to say about their experience with Designs By May.
          </p>
        </div>

        {/* Testimonials Grid - no structural changes */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              project={testimonial.project}
              avatar={testimonial.avatar}
              imageAlt={testimonial.imageAlt}
              index={index}
            />
          ))}
        </div>

        {/* --- MODIFIED CALL TO ACTION SECTION --- */}
        <div className="mt-24">
          <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-0">
            {/* Left Column: Text & Button */}
            <div className="pt-12 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 flex flex-col justify-center">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to transform your space?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-300">
                  Let's discuss your vision. Contact us today for a free consultation and see how we can bring your dream interior to life.
                </p>
                <button className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-sm text-black bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 focus:ring-offset-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                  Get a Free Consultation
                </button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative w-full h-64 lg:h-auto">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="Modern and luxurious living room interior"
              />
              {/* Overlay for a subtle blend */}
              <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
            </div>
          </div>
        </div>
        {/* --- END OF MODIFIED SECTION --- */}

      </div>
    </div>
  );
};

export default TestimonialsPage;
