import { contributions } from "@/data/contributions";
import { ExternalLink } from "lucide-react";

/**
 * Open Source Contributions Section
 * Displays contributions to open source projects
 */
export function Contributions() {
  return (
    <section className="container-portfolio">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        Open Source Contributions
      </h2>

      <div className="space-y-6">
        {contributions.map((contribution) => (
          <article
            key={contribution.id}
            className="bg-card rounded-xl card-shadow p-5 sm:p-6"
          >
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
              {contribution.project}
            </h3>
            
            <ul className="space-y-2 mb-4">
              {contribution.description.map((item, index) => (
                <li 
                  key={index} 
                  className="text-muted-foreground leading-relaxed text-sm sm:text-base pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              {contribution.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-link hover:text-link-hover transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
