import { useState } from "react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react"; 

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
import project3 from "@/assets/project-3.jpg";
import project1 from "@/assets/project-1.jpg";
import heroPortfolio from "@/assets/hero-portfolio.jpg";

const projectsByCategory = {
  "living-room": [
    { id: 1, title: "Modern Minimalist Living", description: "Contemporary living space with clean lines.", image: livingRoom1 },
    { id: 2, title: "Cozy Family Lounge", description: "Warm and inviting space perfect for family gatherings.", image: livingRoom2 },
    { id: 3, title: "Open Concept Living", description: "Integrated living and dining area.", image: livingRoom3 },
  ],
  bedroom: [
    { id: 4, title: "Serene Master Bedroom", description: "Luxurious bedroom design.", image: bedroom1 },
    { id: 5, title: "Contemporary Guest Suite", description: "Elegant guest bedroom.", image: bedroom2 },
    { id: 6, title: "Modern Luxury Suite", description: "Sophisticated bedroom with premium finishes.", image: bedroom3 },
  ],
  bathroom: [
    { id: 7, title: "Spa-Inspired Bathroom", description: "Tranquil bathroom featuring marble.", image: bathroom1 },
    { id: 8, title: "Modern Powder Room", description: "Sophisticated powder room.", image: bathroom2 },
    { id: 13, title: "Minimalist Wet Room", description: "A sleek, modern wet room design.", image: bathroom3 },
  ],
  kitchen: [
    { id: 9, title: "Gourmet Chef's Kitchen", description: "Functional and beautiful kitchen.", image: kitchen1 },
    { id: 10, title: "Open Concept Kitchen", description: "Modern kitchen seamlessly integrated.", image: kitchen2 },
    { id: 16, title: "Rustic Farmhouse Kitchen", description: "A warm, inviting kitchen with natural wood.", image: kitchen3 },
  ],
  office: [
    { id: 11, title: "Executive Home Office", description: "Professional workspace.", image: project3 },
    { id: 12, title: "Creative Studio Space", description: "Inspiring office design.", image: project1 },
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
                  {projectsByCategory[category.id as keyof typeof projectsByCategory].map((project, index) => (
                    <div key={project.id} className="group flex flex-col gap-4 cursor-pointer" style={{ animationDelay: `${index * 100}ms` }}>
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
