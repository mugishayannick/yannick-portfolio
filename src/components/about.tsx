import { profile } from "@/data/profile";
import { Section } from "./ui/section";
import { Reveal } from "./ui/reveal";

export function About() {
  return (
    <Section id="about" title="About">
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {profile.bio}
        </p>
        <p className="mt-6 text-sm text-muted">{profile.location}</p>
      </Reveal>
    </Section>
  );
}
