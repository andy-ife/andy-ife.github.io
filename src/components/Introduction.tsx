import { profile } from "@/data/profile";

/**
 * Introduction Section
 * Displays the professional summary
 */
export function Introduction() {
  return (
    <section className="container-portfolio">
      <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
        {profile.introduction}
      </p>
    </section>
  );
}
