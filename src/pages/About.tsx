import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroAbout from "@/assets/hero-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="About" 
        subtitle="Transforming spaces into stunning reflections of our clients' vision"
        backgroundImage={heroAbout}
      />
      
      <main className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="animate-fade-in-up">
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-xl text-foreground font-medium">
                We are a premium interior design studio based in Nigeria, dedicated to transforming spaces into stunning reflections of our clients' vision.
              </p>
              
              <p>
                At Designs By May, we believe that great design goes beyond aesthetics. It's about creating environments that inspire, comfort, and empower. Our approach combines contemporary design principles with authentic Nigerian elements, resulting in spaces that are both globally sophisticated and locally rooted.
              </p>
              
              <p>
                With years of experience in residential and commercial projects, our team brings together creative vision, technical expertise, and meticulous attention to detail. From concept development to final installation, we guide our clients through every step of the design journey.
              </p>

              <h2 className="font-heading font-bold text-3xl text-foreground mt-12 mb-6">Our Approach</h2>
              
              <p>
                We start by listening. Understanding your lifestyle, preferences, and aspirations is essential to creating spaces that truly serve you. Our design process is collaborative, transparent, and tailored to your unique needs.
              </p>
              
              <p>
                Whether it's a complete home renovation, a single room transformation, or a commercial space design, we approach each project with the same dedication to excellence and innovation.
              </p>

              <h2 className="font-heading font-bold text-3xl text-foreground mt-12 mb-6">Why Choose Us</h2>
              
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Personalized Service:</strong> Every project receives our full attention and creativity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Quality Craftsmanship:</strong> We work with the finest materials and skilled artisans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Timeless Design:</strong> Creating spaces that remain beautiful for years to come</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Local Expertise:</strong> Deep understanding of Nigerian aesthetics and requirements</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
