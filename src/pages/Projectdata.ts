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
import office2 from "@/assets/project-3.jpg";
import office1 from "@/assets/project-1.jpg";

export const projects = [
  // LIVING ROOMS
  {
    id: "living-1",
    category: "living-room",
    title: "Modern Minimalist Living",
    description: "Contemporary living space with clean lines and neutral tones.",
    image: livingRoom1,
    client: "The Adebayo Family",
    location: "Victoria Island, Lagos",
    year: "2024",
    challenge: "The client wanted a space that felt open and airy despite the limited square footage. They needed a place to relax that felt decluttered from the busy Lagos life.",
    solution: "We utilized a monochromatic palette with varying textures to create depth without visual noise. Low-profile furniture and strategic lighting emphasized the ceiling height, creating a sense of expansive luxury."
  },
  {
    id: "living-2",
    category: "living-room",
    title: "Cozy Family Lounge",
    description: "Warm and inviting space perfect for family gatherings.",
    image: livingRoom2,
    client: "Private Residence",
    location: "Ikoyi, Lagos",
    year: "2023",
    challenge: "Creating a warm, intimate atmosphere in a large, open-plan hall.",
    solution: "We used rich earth tones and custom sectional seating to define the lounge area. Warm wood paneling and soft, layered textiles brought a sense of coziness and intimacy."
  },
  {
    id: "living-3",
    category: "living-room",
    title: "Open Concept Living",
    description: "Integrated living and dining area with modern kitchen.",
    image: livingRoom3,
    client: "Mr. & Mrs. Okon",
    location: "Abuja, FCT",
    year: "2024",
    challenge: "Seamlessly blending three distinct functional areas (kitchen, dining, living) into one cohesive visual story.",
    solution: "We used consistent flooring materials to unite the spaces, while using lighting fixtures and ceiling treatments to subtly zone each area without physical barriers."
  },

  // BEDROOMS
  {
    id: "bed-1",
    category: "bedroom",
    title: "Serene Master Bedroom",
    description: "Luxurious bedroom design with custom furniture and ambient lighting.",
    image: bedroom1,
    client: "The Johnsons",
    location: "Banana Island",
    year: "2023",
    challenge: "The client requested a 'hotel-like' experience that promoted deep sleep and relaxation.",
    solution: "We soundproofed the walls and used blackout velvet curtains. The color palette is restricted to soothing greys and blues, with a custom upholstered headboard acting as the room's centerpiece."
  },
  {
    id: "bed-2",
    category: "bedroom",
    title: "Contemporary Guest Suite",
    description: "Elegant guest bedroom with modern amenities.",
    image: bedroom2,
    client: "Private Client",
    location: "Lekki Phase 1",
    year: "2024",
    challenge: "Designing a guest room that felt luxurious yet neutral enough to welcome any visitor.",
    solution: "We focused on high-quality linens and a statement lighting fixture. The design is minimal but punctuated with Nigerian art pieces to give it local character."
  },
  {
    id: "bed-3",
    category: "bedroom",
    title: "Modern Luxury Suite",
    description: "Sophisticated bedroom with premium finishes and lighting.",
    image: bedroom3,
    client: "Confidential",
    location: "Maitama, Abuja",
    year: "2023",
    challenge: "Integrating a workspace into the bedroom without disrupting the restful ambiance.",
    solution: "We designed a bespoke desk unit that folds away when not in use, maintaining the room's serenity while offering full functionality."
  },

  // BATHROOMS
  {
    id: "bath-1",
    category: "bathroom",
    title: "Spa-Inspired Bathroom",
    description: "Tranquil bathroom featuring marble and premium fixtures.",
    image: bathroom1,
    client: "Mrs. Alakija",
    location: "Ikoyi",
    year: "2024",
    challenge: "Transforming a dated, cramped bathroom into a personal spa retreat.",
    solution: "We replaced the bathtub with a large, glass-enclosed rain shower and used continuous marble cladding on walls and floors to visually expand the space."
  },
  {
    id: "bath-2",
    category: "bathroom",
    title: "Modern Powder Room",
    description: "Sophisticated powder room with artistic elements.",
    image: bathroom2,
    client: "Commercial Client",
    location: "VI",
    year: "2023",
    challenge: "Making a small, windowless room feel dramatic and impressive.",
    solution: "We used dark, moody wallpapers and dramatic vanity lighting to create a 'jewel box' effect that surprises and delights guests."
  },
  {
    id: "bath-3",
    category: "bathroom",
    title: "Minimalist Wet Room",
    description: "A sleek, modern wet room design.",
    image: bathroom3,
    client: "Private Residence",
    location: "Lekki",
    year: "2024",
    challenge: "Ensuring waterproofing and drainage in an open-plan wet room concept.",
    solution: "We engineered a subtle floor gradient for perfect drainage and used large-format porcelain tiles to minimize grout lines for a seamless look."
  },

  // KITCHEN
  {
    id: "kitchen-1",
    category: "kitchen",
    title: "Gourmet Chef's Kitchen",
    description: "Functional and beautiful kitchen with custom cabinetry.",
    image: kitchen1,
    client: "Chef Tolu",
    location: "Ikeja GRA",
    year: "2023",
    challenge: "A professional chef needed a kitchen that could handle heavy cooking but look elegant enough for hosting.",
    solution: "We installed industrial-grade appliances hidden behind custom millwork. The island features a durable quartz countertop that mimics marble but resists staining."
  },
  {
    id: "kitchen-2",
    category: "kitchen",
    title: "Open Concept Kitchen",
    description: "Modern kitchen seamlessly integrated with dining area.",
    image: kitchen2,
    client: "The Davids",
    location: "Ajah",
    year: "2024",
    challenge: "Connecting the kitchen to the living space without cooking smells permeating the house.",
    solution: "We installed a high-velocity, silent extraction system and used glass sliding partitions that can close off the kitchen during heavy cooking."
  },
  {
    id: "kitchen-3",
    category: "kitchen",
    title: "Rustic Farmhouse Kitchen",
    description: "A warm, inviting kitchen with natural wood and stone.",
    image: kitchen3,
    client: "Private Estate",
    location: "Epe",
    year: "2023",
    challenge: "Bringing a rustic, country feel to a modern new-build structure.",
    solution: "We used reclaimed wood for the open shelving and hand-made clay tiles for the backsplash to introduce texture and history."
  },

  // OFFICE
  {
    id: "office-1",
    category: "office",
    title: "Executive Home Office",
    description: "Professional workspace with bespoke wooden furniture.",
    image: project3,
    client: "CEO, Tech Firm",
    location: "Ikoyi",
    year: "2024",
    challenge: "Creating a space that commands respect for video conferences but feels comfortable for long work hours.",
    solution: "We designed a custom library wall as a backdrop and used ergonomic furniture upholstered in premium leather."
  },
  {
    id: "office-2",
    category: "office",
    title: "Creative Studio Space",
    description: "Inspiring office design for creative professionals.",
    image: project1,
    client: "Fashion Designer",
    location: "Yaba",
    year: "2023",
    challenge: "Maximizing natural light and storage for fabrics and samples.",
    solution: "We positioned the worktables to face the north windows for consistent light and built floor-to-ceiling white storage units to keep the space clutter-free."
  }
];
