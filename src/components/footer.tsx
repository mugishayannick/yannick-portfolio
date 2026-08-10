import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </p>
        <a
          href="#top"
          className="group inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-foreground"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
