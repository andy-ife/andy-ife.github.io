import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Header Component
 * Displays headshot, name, greeting, and social links
 */
export function Header() {
  return (
    <header className="container-portfolio py-12 md:py-20">
      {/* Theme toggle - positioned at top right */}
      <div className="flex justify-end mb-8">
        <ThemeToggle />
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left side: Headshot and Name */}
        <div className="flex items-center gap-6">
          <img
            src={profile.headshot}
            alt={`${profile.name} headshot`}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-primary/10"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {profile.name}
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
              {profile.greeting}
            </p>
          </div>
        </div>

        {/* Right side: Social links */}
        <nav className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover:text-link-hover"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover:text-link-hover"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link hover:text-link-hover"
          >
            Twitter
          </a>
          <a
            href={`mailto:${profile.social.email}`}
            className="social-link hover:text-link-hover"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
