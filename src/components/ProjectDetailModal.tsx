import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Lightbulb, Sofa, Ruler, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Highlight {
  icon: string;
  text: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  highlights?: Highlight[];
}

interface ProjectDetailModalProps {
  project: Project | null;
  category: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, category, isOpen, onClose }: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <Button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-full w-10 h-10 p-0 bg-background/80 backdrop-blur-sm hover:bg-background"
          variant="ghost"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Project Image */}
        <div className="w-full aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
              {category}
            </span>
          </div>

          <DialogHeader>
            <DialogTitle className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Key Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border"
                  >
                    {highlight.icon === "Lightbulb" && (
                      <Lightbulb size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                    )}
                    {highlight.icon === "Sofa" && (
                      <Sofa size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                    )}
                    {highlight.icon === "Ruler" && (
                      <Ruler size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                    )}
                    <span className="text-sm text-foreground">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
