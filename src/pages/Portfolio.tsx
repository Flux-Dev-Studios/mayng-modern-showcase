import { useState } from "react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Portfolio3DScene } from "@/components/Portfolio3DScene";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import heroPortfolio from "@/assets/hero-portfolio.jpg";

const projects = [
  {
    id: 1,
    title: "Serene Bedroom",
    category: "Residential",
    description: "A luxurious bedroom design featuring custom furniture and warm lighting.",
    details: "This project transformed a simple bedroom into a serene retreat with bespoke furniture, ambient lighting, and premium textiles.",
    image: project1,
  },
  {
    id: 2,
    title: "Dining Space",
    category: "Residential",
    description: "Modern dining room with artistic elements and natural materials.",
    details: "Contemporary dining area featuring handcrafted wooden furniture, statement lighting, and curated art pieces.",
    image: project2,
  },
  {
    id: 3,
    title: "Home Office",
    category: "Commercial",
    description: "Sophisticated workspace with bespoke wooden furniture and premium finishes.",
    details: "Executive office design combining functionality with luxury through custom millwork and ergonomic design.",
    image: project3,
  },
  {
    id: 4,
    title: "Modern Living",
    category: "Residential",
    description: "Open-concept living space with contemporary African design elements.",
    details: "Spacious living room blending modern aesthetics with traditional Nigerian design motifs and local craftsmanship.",
    image: project1,
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    category: "Residential",
    description: "High-end penthouse interior with custom furniture and art curation.",
    details: "Penthouse transformation featuring floor-to-ceiling windows, bespoke furniture, and curated contemporary art collection.",
    image: project2,
  },
  {
    id: 6,
    title: "Corporate Lobby",
    category: "Commercial",
    description: "Impressive entrance space that reflects brand identity and professionalism.",
    details: "Grand corporate entrance designed to impress, featuring marble finishes, dramatic lighting, and modern seating areas.",
    image: project3,
  },
];

const Portfolio = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const intro = useScrollAnimation({ threshold: 0.2 });
  const gallery = useScrollAnimation({ threshold: 0.1 });

  const categories = ["All", "Residential", "Commercial"];
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const hoveredProject = projects.find(p => p.id === hoveredProjectId);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="Our Portfolio" 
        subtitle="Explore our collection of transformative design projects across Nigeria"
        backgroundImage={heroPortfolio}
      />
      
      <main className="animated-bg">
        {/* Introduction */}
        <section className="py-20">
          <div 
            ref={intro.ref}
            className={`container mx-auto px-6 lg:px-12 max-w-4xl text-center transition-all duration-1000 ${
              intro.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-foreground">
              Where Vision Meets Reality
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each project tells a unique story of transformation. Explore our work through an interactive 3D experience—hover, rotate, and discover the spaces we've brought to life.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex justify-center gap-3 flex-wrap">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer px-6 py-2 text-sm transition-all hover:scale-105"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* 3D Interactive Gallery */}
        <section className="pb-12">
          <div 
            ref={gallery.ref}
            className={`container mx-auto px-6 lg:px-12 transition-all duration-1000 ${
              gallery.isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Card className="border-primary/20 bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Portfolio3DScene 
                    projects={filteredProjects} 
                    onProjectHover={setHoveredProjectId}
                  />
                  
                  {/* Hover Info Overlay */}
                  {hoveredProject && (
                    <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md rounded-xl p-6 border border-primary/20 animate-fade-in">
                      <div className="flex items-start gap-4">
                        <img 
                          src={hoveredProject.image} 
                          alt={hoveredProject.title}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">
                            {hoveredProject.category}
                          </Badge>
                          <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                            {hoveredProject.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {hoveredProject.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6 text-center text-sm text-muted-foreground bg-secondary/30">
                  <p>💡 Drag to rotate • Scroll to zoom • Hover over cards for details</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Project Grid Details */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <h3 className="font-heading font-bold text-3xl mb-12 text-center text-foreground">
              Project Details
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 animate-scale-in overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {project.category}
                    </Badge>
                    <h4 className="font-heading font-bold text-xl mb-3 text-foreground">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
