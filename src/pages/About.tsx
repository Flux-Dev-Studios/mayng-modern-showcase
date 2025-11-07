import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Users, Lightbulb, TrendingUp, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroAbout from "@/assets/hero-about.jpg";

const About = () => {
  const stats = useScrollAnimation({ threshold: 0.2 });
  const mission = useScrollAnimation({ threshold: 0.2 });
  const values = useScrollAnimation({ threshold: 0.2 });
  const process = useScrollAnimation({ threshold: 0.2 });

  const statsData = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "100%", label: "Client Satisfaction", icon: Users },
    { number: "5+", label: "Years Experience", icon: TrendingUp },
    { number: "15+", label: "Design Awards", icon: Lightbulb },
  ];

  const valuesData = [
    {
      title: "Personalized Service",
      description: "Every project receives our full attention and creativity, tailored to your unique vision.",
    },
    {
      title: "Quality Craftsmanship",
      description: "We work with the finest materials and skilled artisans to bring exceptional results.",
    },
    {
      title: "Timeless Design",
      description: "Creating spaces that remain beautiful and functional for years to come.",
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of Nigerian aesthetics, culture, and design requirements.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We listen to your vision, understand your lifestyle, and explore your aspirations.",
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Creating innovative design concepts that blend aesthetics with functionality.",
    },
    {
      step: "03",
      title: "Design & Planning",
      description: "Detailed planning with 3D visualizations, material selection, and technical drawings.",
    },
    {
      step: "04",
      title: "Execution & Installation",
      description: "Meticulous implementation with quality control at every stage of the project.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="About" 
        subtitle="Transforming spaces into stunning reflections of our clients' vision"
        backgroundImage={heroAbout}
      />
      
      <main className="animated-bg">
        {/* Stats Section */}
        <section className="py-20">
          <div 
            ref={stats.ref}
            className={`container mx-auto px-6 lg:px-12 transition-all duration-1000 ${
              stats.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index} 
                    className="text-center border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="pt-8 pb-6">
                      <Icon className="w-10 h-10 mx-auto mb-4 text-primary" />
                      <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div 
            ref={mission.ref}
            className={`container mx-auto px-6 lg:px-12 max-w-6xl transition-all duration-1000 ${
              mission.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We are a premium interior design studio based in Nigeria, dedicated to transforming spaces into stunning reflections of our clients' vision.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Designs By May, we believe that great design goes beyond aesthetics. It's about creating environments that inspire, comfort, and empower. Our approach combines contemporary design principles with authentic Nigerian elements, resulting in spaces that are both globally sophisticated and locally rooted.
                </p>
              </div>
              <Card className="border-primary/20 bg-primary/5 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Approach</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We start by listening. Understanding your lifestyle, preferences, and aspirations is essential to creating spaces that truly serve you.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our design process is collaborative, transparent, and tailored to your unique needs. Whether it's a complete home renovation or a commercial space design, we approach each project with dedication to excellence and innovation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div 
            ref={values.ref}
            className={`container mx-auto px-6 lg:px-12 transition-all duration-1000 ${
              values.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-12 text-center text-foreground">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {valuesData.map((value, index) => (
                <Card 
                  key={index}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:border-primary/40"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 pb-32">
          <div 
            ref={process.ref}
            className={`container mx-auto px-6 lg:px-12 max-w-5xl transition-all duration-1000 ${
              process.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-4 text-center text-foreground">
              Our Process
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              From concept to completion, we guide you through every step with expertise and care
            </p>
            
            <div className="space-y-8">
              {processSteps.map((item, index) => (
                <Card 
                  key={index}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-5xl font-bold text-primary/30 font-heading">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
