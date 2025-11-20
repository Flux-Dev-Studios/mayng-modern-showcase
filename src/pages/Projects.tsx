import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowLeft, MapPin, Calendar, User, ArrowRight } from "lucide-react"; 
import heroPortfolio from "@/assets/hero-portfolio.jpg";

// Import Data from the local file
import { projects } from "./projectdata";

const categories = [
  { id: "living-room", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "bathroom", label: "Bathroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "office", label: "Office" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("living-room");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProjectId]);

  // --- VIEW 1: PROJECT DETAIL (Case Study) ---
  if (selectedProjectId) {
    const project = projects.find((p) => p.id === selectedProjectId);
    
    // Safety check
    if (!project) {
        setSelectedProjectId(null); 
        return null; 
    }

    const currentIndex = projects.findIndex(p => p.id === selectedProjectId);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
      <div className="min-h-screen bg-background animate-in fade-in duration-500">
        {/* Force Navbar to solid state for readability */}
        <Navigation forceScrolled={true} />
        
        <main className="pt-20">
          {/* HERO IMAGE */}
          <div className="container mx-auto px-6 lg:px-12 mb-12">
            <div className="mb-8">
              <button 
                onClick={() => setSelectedProjectId(null)}
                className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors text-sm uppercase tracking-widest font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
              </button>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl border border-border/50">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto max-h-[80vh] object-cover"
              />
            </div>
          </div>

          {/* SPECS GRID */}
          <div className="border-y border-border/40 bg-secondary/5">
            <div className="container mx-auto px-6 lg:px-12 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center text-primary mb-1"><User className="w-4 h-4 mr-2" /><span className="text-xs uppercase font-bold">Client</span></div>
                  <p className="text-foreground font-medium">{project.client}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-primary mb-1"><MapPin className="w-4 h-4 mr-2" /><span className="text-xs uppercase font-bold">Location</span></div>
                  <p className="text-foreground font-medium">{project.location}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-primary mb-1"><Calendar className="w-4 h-4 mr-2" /><span className="text-xs uppercase font-bold">Year</span></div>
                  <p className="text-foreground font-medium">{project.year}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-primary mb-1"><span className="text-xs uppercase font-bold">Category</span></div>
                  <p className="text-foreground font-medium capitalize">{project.category.replace('-', ' ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* WRITE UP */}
          <div className="container mx-auto px-6 lg:px-12 py-20 md:py-32">
            <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
              <div className="md:col-span-4 lg:col-span-3">
                <div className="sticky top-32">
                  <h3 className="font-heading text-2xl font-bold mb-6 text-primary">The Design Story</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">Every space tells a story. Here is how we brought this vision to life.</p>
                  <div className="h-1 w-16 bg-primary rounded-full" />
                </div>
              </div>
              <div className="md:col-span-8 lg:col-span-8 space-y-16">
                <div className="animate-fade-in-up">
                  <h4 className="text-xl font-bold mb-4 text-foreground">The Challenge</h4>
                  <p className="text-lg text-muted-foreground leading-loose">{project.challenge}</p>
                </div>
                <div className="animate-fade-in-up delay-100">
                  <h4 className="text-xl font-bold mb-4 text-foreground">The Solution</h4>
                  <p className="text-lg text-muted-foreground leading-loose">{project.solution}</p>
                </div>
                <blockquote className="border-l-4 border-primary pl-8 py-2 my-12 italic text-xl md:text-2xl text-foreground/80 font-heading">
                  "We believe that luxury lies in the details. In this project, the interplay of light and texture was paramount."
                </blockquote>
              </div>
            </div>
          </div>

          {/* NEXT PROJECT CTA */}
          <div className="bg-secondary/10 py-20 border-t border-border/50">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <p className="text-muted-foreground mb-4 uppercase tracking-widest text-sm">Next Project</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground">{nextProject.title}</h2>
              <Button variant="hero" size="lg" onClick={() => setSelectedProjectId(nextProject.id)}>
                View Case Study <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // --- VIEW 2: PROJECTS LIST ---
  const filteredProjects = projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="Our Portfolio" 
        subtitle="Curated spaces designed for modern living"
        backgroundImage={heroPortfolio}
      />
      
      <main className="py-20 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          <Tabs defaultValue="living-room" className="w-full flex flex-col items-center" onValueChange={setActiveCategory}>
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-16 h-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-6 py-2.5 rounded-full text-sm font-medium border border-border/50 bg-background/50 backdrop-blur-sm text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mx-auto max-w-7xl">
                  {filteredProjects.map((project, index) => (
                    <div 
                      key={project.id} 
                      onClick={() => setSelectedProjectId(project.id)}
                      className="group flex flex-col gap-4 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-muted">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 right-4 bg-primary p-2.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg shadow-black/20">
                           <ArrowUpRight className="w-5 h-5 text-primary-foreground" /> 
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                        <div className="mt-2">
                          <span className="text-xs font-medium text-primary tracking-wider uppercase border-b border-primary/20 pb-0.5 group-hover:border-primary transition-all">View Case Study</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Projects;


  
