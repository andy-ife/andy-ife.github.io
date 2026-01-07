import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * Header Component
 * Displays headshot, name, greeting, and social links
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { label: "GitHub", href: profile.social.github, external: true },
    { label: "LinkedIn", href: profile.social.linkedin, external: true },
    { label: "Twitter", href: profile.social.twitter, external: true },
    { label: "Email", href: `mailto:${profile.social.email}`, external: false },
  ];

  return (
    <header className="container-portfolio py-12 md:py-20">
      {/* Top bar - Theme toggle and hamburger menu */}
      <div className="flex justify-between items-center mb-8 md:justify-end">
        {/* Hamburger menu - mobile only */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden p-2 -ml-2">
            <Menu className="h-6 w-6 text-foreground" />
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <nav className="flex flex-col gap-4 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="social-link hover:text-link-hover text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <ThemeToggle />
      </div>

      {/* Mobile layout: Centered avatar with name below */}
      <div className="flex flex-col items-center text-center md:hidden gap-4">
        <img
          src={profile.headshot}
          alt={`${profile.name} headshot`}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-primary/10"
        />
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {profile.name}
          </h1>
          <p className="text-lg text-muted-foreground mt-1">
            {profile.greeting}
          </p>
        </div>
      </div>

      {/* Desktop layout: Side by side */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex items-center gap-6">
          <img
            src={profile.headshot}
            alt={`${profile.name} headshot`}
            className="w-32 h-32 rounded-full object-cover ring-4 ring-primary/10"
          />
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              {profile.name}
            </h1>
            <p className="text-lg text-muted-foreground mt-1">
              {profile.greeting}
            </p>
          </div>
        </div>

        {/* Desktop social links */}
        <nav className="flex flex-wrap gap-6 text-base">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="social-link hover:text-link-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
