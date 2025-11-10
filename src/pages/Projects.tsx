import { useState } from "react";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Lightbulb, Sofa, Ruler } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import livingRoom1 from "@/assets/living-room-1.jpg";
import livingRoom2 from "@/assets/living-room-2.jpg";
import livingRoom3 from "@/assets/living-room-3.jpg";
import heroPortfolio from "@/assets/hero-portfolio.jpg";

const projectsByCategory = {
  "living-room": [
    {
      id: 1,
      title: "Sophisticated Urban Sanctuary",
      description: "A masterfully designed living room featuring geometric black pendant lights that create dramatic focal points. Custom-built shelving with integrated LED strip lighting provides both functionality and ambiance. The neutral color palette of warm beiges and greys creates a serene atmosphere, while the luxurious brown leather sofa and marble coffee table add touches of elegance.",
      image: livingRoom1,
      highlights: [
        { icon: "Lightbulb", text: "Custom LED lighting design with smart controls" },
        { icon: "Sofa", text: "Premium Italian leather furnishings" },
        { icon: "Ruler", text: "Bespoke built-in storage solutions" }
      ]
    },
    {
      id: 2,
      title: "Contemporary Coastal Living",
      description: "This open-concept living space beautifully combines kitchen and lounge areas with a sophisticated teal accent wall that anchors the design. Bubble pendant lights add playful elegance, while the grey sectional sofa with coral and patterned pillows brings warmth. Floor-to-ceiling windows with geometric patterned curtains maximize natural light and create a connection with the outdoors.",
      image: livingRoom2,
      highlights: [
        { icon: "Lightbulb", text: "Statement bubble chandelier lighting" },
        { icon: "Sofa", text: "Custom upholstered sectional with designer fabrics" },
        { icon: "Ruler", text: "Open-plan layout maximizing space flow" }
      ]
    },
    {
      id: 3,
      title: "Modern European Elegance",
      description: "An airy, light-filled living and dining area showcasing seamless integration of spaces. The sleek white galley kitchen with under-cabinet lighting complements the contemporary dining set featuring bold houndstooth pattern chairs. Golden curtains frame expansive windows, while black geometric pendant lights add architectural interest. The neutral grey sofa and glass coffee table maintain the sophisticated, minimalist aesthetic.",
      image: livingRoom3,
      highlights: [
        { icon: "Lightbulb", text: "Layered lighting with pendant and recessed fixtures" },
        { icon: "Sofa", text: "Designer furniture with statement patterns" },
        { icon: "Ruler", text: "Seamless kitchen-living integration" }
      ]
    },
  ],
  bedroom: [
    {
      id: 3,
      title: "Serene Master Bedroom",
      description: "Luxurious bedroom design with custom furniture and ambient lighting.",
      image: project3,
    },
    {
      id: 4,
      title: "Contemporary Guest Suite",
      description: "Elegant guest bedroom with modern amenities.",
      image: project1,
    },
  ],
  bathroom: [
    {
      id: 5,
      title: "Spa-Inspired Bathroom",
      description: "Tranquil bathroom featuring marble and premium fixtures.",
      image: project2,
    },
    {
      id: 6,
      title: "Modern Powder Room",
      description: "Sophisticated powder room with artistic elements.",
      image: project3,
    },
  ],
  kitchen: [
    {
      id: 7,
      title: "Gourmet Chef's Kitchen",
      description: "Functional and beautiful kitchen with custom cabinetry.",
      image: project1,
    },
    {
      id: 8,
      title: "Open Concept Kitchen",
      description: "Modern kitchen seamlessly integrated with dining area.",
      image: project2,
    },
  ],
  office: [
    {
      id: 9,
      title: "Executive Home Office",
      description: "Professional workspace with bespoke wooden furniture.",
      image: project3,
    },
    {
      id: 10,
      title: "Creative Studio Space",
      description: "Inspiring office design for creative professionals.",
      image: project1,
    },
  ],
};

const categories = [
  { id: "living-room", label: "Living Room" },
  { id: "bedroom", label: "Bedroom" },
  { id: "bathroom", label: "Bathroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "office", label: "Office" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("living-room");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="Our Projects" 
        subtitle="Explore our transformative designs organized by room type"
        backgroundImage={heroPortfolio}
      />
      
      <main className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <Tabs defaultValue="living-room" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="w-full max-w-4xl mx-auto mb-16 h-auto flex-wrap gap-2 bg-muted/50 p-2 justify-center">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-6 py-3 text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent 
                key={category.id} 
                value={category.id}
                className="animate-fade-in"
              >
                <div className="mb-8 text-center">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-foreground">
                    {category.label} Projects
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover our expertly crafted {category.label.toLowerCase()} designs
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsByCategory[category.id as keyof typeof projectsByCategory].map((project, index) => (
                    <div
                      key={project.id}
                      onClick={() => handleProjectClick(project)}
                      className="group relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-hover)] transition-all duration-500 animate-scale-in cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      
                      {/* Minimal hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Simple title on hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-heading font-bold text-xl">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <ProjectDetailModal
        project={selectedProject}
        category={categories.find(cat => cat.id === activeCategory)?.label || ""}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Projects;
