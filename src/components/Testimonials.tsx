import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chioma Adebayo",
    role: "Homeowner, Lagos",
    quote: "They transformed our home into a sanctuary. The attention to detail and understanding of our needs was exceptional.",
  },
  {
    name: "Emeka Okafor",
    role: "Business Owner, Abuja",
    quote: "Our office space now reflects our brand perfectly. The team's creativity and professionalism exceeded our expectations.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">
            Client Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 lg:p-10 rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-lg text-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-heading font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
