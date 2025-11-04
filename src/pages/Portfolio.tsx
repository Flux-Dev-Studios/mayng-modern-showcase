import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    id: 1,
    title: "Serene Bedroom Retreat",
    category: "Residential",
    description: "A luxurious bedroom design featuring custom furniture and warm lighting.",
    image: project1,
  },
  {
    id: 2,
    title: "Contemporary Dining Space",
    category: "Residential",
    description: "Modern dining room with artistic elements and natural materials.",
    image: project2,
  },
  {
    id: 3,
    title: "Executive Home Office",
    category: "Commercial",
    description: "Sophisticated workspace with bespoke wooden furniture and premium finishes.",
    image: project3,
  },
  {
    id: 4,
    title: "Modern Living Room",
    category: "Residential",
    description: "Open-concept living space with contemporary African design elements.",
    image: project1,
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    category: "Residential",
    description: "High-end penthouse interior with custom furniture and art curation.",
    image: project2,
  },
  {
    id: 6,
    title: "Corporate Lobby",
    category: "Commercial",
    description: "Impressive entrance space that reflects brand identity and professionalism.",
    image: project3,
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="Our Portfolio" 
        subtitle="Explore our collection of transformative design projects across Nigeria"
      />
      
      <main className="py-24">
        <div className="container mx-auto px-6 lg:px-12">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <p className="text-sm font-medium text-primary-foreground mb-2">{project.category}</p>
                  <h3 className="font-heading font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
