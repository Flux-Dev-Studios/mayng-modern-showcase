import { useState } from "react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import heroPortfolio from "@/assets/hero-portfolio.jpg";
import livingRoom1 from "@/assets/living-room-1.jpg";
import livingRoom2 from "@/assets/living-room-2.jpg";
import livingRoom3 from "@/assets/living-room-3.jpg";
import bedroom1 from "@/assets/bedroom-1.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";
import bedroom3 from "@/assets/bedroom-3.jpg";
import bathroom1 from "@/assets/bathroom1.jpg";
import bathroom2 from "@/assets/bathroom2.jpg";
import bathroom3 from "@/assets/bathroom3.jpg";
import kitchen1 from "@/assets/kitchen1.jpg";
import kitchen2 from "@/assets/kitchen2.jpg";
import kitchen3 from "@/assets/kitchen3.jpg";
const projectsByCategory = {
  "living-room": [
    {
      id: 1,
      title: "Modern Minimalist Living",
      description: "Contemporary living space with clean lines and neutral tones.",
      image: livingRoom1,
    },
    {
      id: 2,
      title: "Cozy Family Lounge",
      description: "Warm and inviting space perfect for family gatherings.",
      image: livingRoom2,
    },
    {
      id: 3,
      title: "Open Concept Living",
      description: "Integrated living and dining area with modern kitchen.",
      image: livingRoom3,
    },
  ],
  bedroom: [
    {
      id: 4,
      title: "Serene Master Bedroom",
      description: "Luxurious bedroom design with custom furniture and ambient lighting.",
      image: bedroom1,
    },
    {
      id: 5,
      title: "Contemporary Guest Suite",
      description: "Elegant guest bedroom with modern amenities.",
      image: bedroom2,
    },
    {
      id: 6,
      title: "Modern Luxury Suite",
      description: "Sophisticated bedroom with premium finishes and lighting.",
      image: bedroom3,
    },
  ],
  bathroom: [
    {
      id: 7,
      title: "Spa-Inspired Bathroom",
      description: "Tranquil bathroom featuring marble and premium fixtures.",
      image: bathroom1,
    },
    {
      id: 8,
      title: "Modern Powder Room",
      description: "Sophisticated powder room with artistic elements.",
      image: bathroom2,
    },
    {
      id: 13, // Make sure this ID is unique
      title: "Minimalist Wet Room",
      description: "A sleek, modern wet room design.",
      image: bathroom3,
    },
  ],
  kitchen: [
    {
      id: 9,
      title: "Gourmet Chef's Kitchen",
      description: "Functional and beautiful kitchen with custom cabinetry.",
      image: kitchen1,
    },
    {
      id: 10,
      title: "Open Concept Kitchen",
      description: "Modern kitchen seamlessly integrated with dining area.",
      image: kitchen2,
    },
   {
      id: 16,
      title: "Rustic Farmhouse Kitchen",
      description: "A warm, inviting kitchen with natural wood and stone.",
      image: kitchen3, 
    }
  ],
  office: [
    {
      id: 11,
      title: "Executive Home Office",
      description: "Professional workspace with bespoke wooden furniture.",
      image: project3,
    },
    {
      id: 12,
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHero 
        title="Our Projects" 
        subtitle="Explore our transformative designs organized by room type"
        backgroundImage={heroPortfolio}
      />
      
      <main className="py-24">
        <div className="container mx-auto px-6 lg:px-12 justify-center">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                          {category.label}
                        </span>
                        <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.description}
                        </p>
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
