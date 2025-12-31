import { useState } from "react";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

/**
 * Projects Section
 * Displays all projects in a vertical list
 */
export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="container-portfolio">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
