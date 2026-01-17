import { useState } from "react";
import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, ExternalLink, Play, Github, X, Image, FileText } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import googlePlayBadge from "@/assets/badges/google-play-badge.svg";
import appStoreBadge from "@/assets/badges/app-store-badge.svg";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Image Carousel Component
 * Displays project images with navigation and thumbnails
 */
function ImageCarousel({ 
  project, 
  currentImageIndex, 
  setCurrentImageIndex 
}: { 
  project: Project; 
  currentImageIndex: number; 
  setCurrentImageIndex: (index: number) => void;
}) {
  const handlePrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const currentImage = project.images[currentImageIndex];

  return (
    <div className="flex flex-col h-full p-2">
      {/* Image container with arrows inside */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center bg-muted rounded-lg overflow-hidden">
        {/* Left arrow */}
        {project.images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full w-8 h-8"
            onClick={handlePrevImage}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        )}

        {/* Image - constrained to leave room for arrows */}
        <img
          src={currentImage.src}
          alt={currentImage.caption}
          className="max-w-[calc(100%-5rem)] max-h-full object-contain"
        />

        {/* Right arrow */}
        {project.images.length > 1 && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background rounded-full w-8 h-8"
            onClick={handleNextImage}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Caption */}
      <div className="px-2 py-1.5 text-center flex-shrink-0">
        <p className="text-xs text-muted-foreground">{currentImage.caption}</p>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-1.5 p-2 overflow-x-auto bg-muted/50 rounded-lg flex-shrink-0">
        {project.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`flex-shrink-0 w-10 h-10 rounded-md overflow-hidden border-2 transition-all ${
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
  );
}

/**
 * Project Content Component
 * Displays full project details including description, tools, and links
 */
function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      {/* Project Title */}
      <h2 className="text-2xl font-bold">{project.title}</h2>

      {/* Full description */}
      <div className="space-y-4">
        {project.fullDescription.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tools */}
      <div>
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
      <div>
        <h4 className="font-semibold mb-3">Links</h4>
        <div className="space-y-3">
          {/* Store links row */}
          {(project.links.playStore || project.links.appStore) && (
            <div className="flex flex-wrap items-center gap-3">
              {project.links.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <img src={googlePlayBadge} alt="Get it on Google Play" className="h-10" />
                </a>
              )}
              {project.links.appStore && (
                <a
                  href={project.links.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <img src={appStoreBadge} alt="Download on the App Store" className="h-10" />
                </a>
              )}
            </div>
          )}
          {/* Other links row */}
          <div className="flex flex-wrap items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-link hover:text-link-hover transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
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
  );
}

/**
 * Mobile Tab View Component
 * Full-screen modal with tabs for Screenshots and Description
 */
function MobileProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[calc(100vw-2rem)] h-[calc(100dvh-2rem)] max-h-[calc(100dvh-2rem)] overflow-hidden p-0 rounded-xl border border-border [&>[data-dialog-close]]:hidden">
        <Tabs defaultValue="screenshots" className="flex flex-col h-full">
          <TabsList className="w-full rounded-none border-b bg-background flex-shrink-0 h-12">
            <TabsTrigger value="screenshots" className="flex-1 gap-2">
              <Image className="w-4 h-4" />
              Screenshots
            </TabsTrigger>
            <TabsTrigger value="description" className="flex-1 gap-2">
              <FileText className="w-4 h-4" />
              Description
            </TabsTrigger>
          </TabsList>

          {/* Close button - positioned below tab bar */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-14 right-2 z-50 w-9 h-9 rounded-full bg-background/80 hover:bg-background shadow-md"
            onClick={onClose}
          >
            <X className="w-4 h-4" />
          </Button>

          <TabsContent value="screenshots" className="flex-1 min-h-0 m-0 data-[state=inactive]:hidden">
            <ImageCarousel 
              project={project} 
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
            />
          </TabsContent>

          <TabsContent value="description" className="flex-1 min-h-0 m-0 overflow-y-auto p-4 data-[state=inactive]:hidden">
            <ProjectContent project={project} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Desktop Project Modal Component
 * Side-by-side layout with image carousel and content
 */
function DesktopProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
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
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden p-0 w-[calc(100vw-2rem)] sm:w-full rounded-xl">
        <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-hidden">
          {/* Image Carousel */}
          <div className="lg:w-1/2 bg-muted flex-shrink-0 flex flex-col">
            {/* Image container */}
            <div className="relative h-64 lg:h-auto lg:flex-1 min-h-0">
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
            </div>

            {/* Caption */}
            <div className="px-4 py-3 bg-background/50">
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
          <div className="lg:w-1/2 overflow-y-auto p-6 scrollbar-dark">
            <h2 className="text-2xl font-bold pr-8">{project.title}</h2>

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
              <div className="space-y-3">
                {/* Store links row */}
                {(project.links.playStore || project.links.appStore) && (
                  <div className="flex flex-wrap items-center gap-3">
                    {project.links.playStore && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-80"
                      >
                        <img src={googlePlayBadge} alt="Get it on Google Play" className="h-10" />
                      </a>
                    )}
                    {project.links.appStore && (
                      <a
                        href={project.links.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-80"
                      >
                        <img src={appStoreBadge} alt="Download on the App Store" className="h-10" />
                      </a>
                    )}
                  </div>
                )}
                {/* Other links row */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-link hover:text-link-hover transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
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
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Project Modal Component
 * Renders mobile or desktop version based on screen size
 */
export function ProjectModal(props: ProjectModalProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileProjectModal {...props} />;
  }

  return <DesktopProjectModal {...props} />;
}