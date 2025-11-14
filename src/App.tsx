import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import About from "./pages/About";
import TestimonialsPage from './pages/TestimonialsPage';
import ServicesPage from "./pages/ServicesPage"; // Corrected path
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// Added the missing import for your Navigation component
// Adjust this path if it's different (e.g., "@/components/Navigation")
import Navigation from "./components/Navigation"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
         {/* This component now has its import */}
         <Navigation /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* This is the line I fixed. It was missing "/>" at the end. */}
          <Route path="/testimonials" element={<TestimonialsPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
