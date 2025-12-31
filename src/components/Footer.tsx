import { profile } from "@/data/profile";

/**
 * Footer Component
 * Displays tagline, social links, and copyright
 */
export function Footer() {
  return (
    <footer className="container-portfolio py-12">
      <div className="text-center">
        <p className="text-lg font-medium text-foreground mb-4">
          {profile.footer.tagline}
        </p>

        {/* Social links */}
        <nav className="flex justify-center gap-6 mb-6 text-sm">
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

        <p className="text-sm text-muted-foreground">
          {profile.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
