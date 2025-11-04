import heroImage from "@/assets/hero-interior.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage = heroImage }: PageHeroProps) => {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Minimal Fade Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center animate-fade-in-up">
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-4 text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
