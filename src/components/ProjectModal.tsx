import { useState } from "react";
import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Play, Smartphone, X } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Project Modal Component
 * Full-screen modal with image carousel and complete project details
 */
export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const currentImage = project.images[currentImageIndex];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0">
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          {/* Image Carousel */}
          <div className="lg:w-1/2 bg-muted relative flex-shrink-0">
            <div className="relative h-80 lg:h-full">
              <img
                src={currentImage.src}
                alt={currentImage.caption}
                className="w-full h-full object-contain"
              />

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-12 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
              <p className="text-sm text-center">{currentImage.caption}</p>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 p-3 overflow-x-auto bg-background/50">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? "border-primary"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 overflow-y-auto p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold pr-8">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            {/* Full description */}
            <div className="mt-4 space-y-4">
              {project.fullDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="tool-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Links</h4>
              <div className="flex flex-wrap gap-3">
                {project.links.playStore && (
                  <a
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-link hover:text-link-hover transition-colors"
                  >
                    <Smartphone className="w-4 h-4" />
                    Play Store
                  </a>
                )}
                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-link hover:text-link-hover transition-colors"
                  >
                    <Smartphone className="w-4 h-4" />
                    App Store
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-link hover:text-link-hover transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    Demo Video
                  </a>
                )}
                {project.links.extra?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-link hover:text-link-hover transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
