import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Serene Bedroom Retreat",
    category: "Residential",
    image: project1,
  },
  {
    id: 2,
    title: "Contemporary Dining Space",
    category: "Residential",
    image: project2,
  },
  {
    id: 3,
    title: "Executive Home Office",
    category: "Commercial",
    image: project3,
  },
];

const ProjectShowcase = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how we transform ordinary spaces into extraordinary experiences
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12"
        >
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to="/portfolio"
              className={`group relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-700 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <p className="text-sm font-medium text-primary-foreground mb-2">{project.category}</p>
                <h3 className="font-heading font-bold text-2xl mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Project</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
          >
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
