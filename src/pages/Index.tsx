import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProjectShowcase />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Index;
