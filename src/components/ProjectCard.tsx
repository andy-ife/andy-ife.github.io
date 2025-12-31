import { Project } from "@/data/projects";
import { ExternalLink, Play, Github } from "lucide-react";
import googlePlayBadge from "@/assets/badges/google-play-badge.svg";
import appStoreBadge from "@/assets/badges/app-store-badge.svg";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

/**
 * Project Card Component
 * Displays a preview of a project with main image, title, description, tools, and links
 * Click to open the full project modal
 */
export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="bg-card rounded-xl card-shadow card-shadow-hover transition-all duration-300 cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Main Image */}
        <div className="lg:w-72 lg:flex-shrink-0 overflow-hidden">
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-64 lg:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col">
          {/* Title and description */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
            {project.shortDescription}
          </p>

          {/* Tools - show first 6 */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tools.slice(0, 6).map((tool) => (
              <span key={tool} className="tool-badge">
                {tool}
              </span>
            ))}
            {project.tools.length > 6 && (
              <span className="tool-badge">+{project.tools.length - 6} more</span>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {project.links.playStore && (
              <button
                onClick={(e) => handleLinkClick(e, project.links.playStore!)}
                className="transition-opacity hover:opacity-80"
              >
                <img src={googlePlayBadge} alt="Get it on Google Play" className="h-10" />
              </button>
            )}
            {project.links.appStore && (
              <button
                onClick={(e) => handleLinkClick(e, project.links.appStore!)}
                className="transition-opacity hover:opacity-80"
              >
                <img src={appStoreBadge} alt="Download on the App Store" className="h-10" />
              </button>
            )}
            {project.links.github && (
              <button
                onClick={(e) => handleLinkClick(e, project.links.github!)}
                className="inline-flex items-center gap-1.5 text-link hover:text-link-hover transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </button>
            )}
            {project.links.youtube && (
              <button
                onClick={(e) => handleLinkClick(e, project.links.youtube!)}
                className="inline-flex items-center gap-1.5 text-link hover:text-link-hover transition-colors"
              >
                <Play className="w-4 h-4" />
                Demo Video
              </button>
            )}
            {project.links.extra?.map((link) => (
              <button
                key={link.url}
                onClick={(e) => handleLinkClick(e, link.url)}
                className="inline-flex items-center gap-1.5 text-link hover:text-link-hover transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {link.label}
              </button>
            ))}
          </div>

          {/* Click hint */}
          <p className="text-xs text-muted-foreground mt-4">
            Click to view all screenshots and details →
          </p>
        </div>
      </div>
    </article>
  );
}
