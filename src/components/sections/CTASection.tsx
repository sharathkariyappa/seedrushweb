import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Apple, Monitor } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="download" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to <span className="text-gradient">rush</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Download SeedRush and start earning from your bandwidth—or get faster downloads, chunk by chunk.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto">
              <Download className="w-5 h-5" />
              Download SeedRush
            </Button>
            <Button variant="hero-outline" size="xl" className="gap-2 w-full sm:w-auto">
              Read How it works
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Apple className="w-5 h-5" />
              <span>macOS 12+</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Monitor className="w-5 h-5" />
              <span>Windows 10+</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.504 0c-.155 0-.311.001-.465.003-.658.007-1.312.054-1.957.143-.642.09-1.272.217-1.884.384A11.13 11.13 0 0 0 6.21 1.48a10.96 10.96 0 0 0-1.738 1.35A10.96 10.96 0 0 0 3.12 4.568a11.13 11.13 0 0 0-.95 1.988c-.167.612-.294 1.242-.384 1.884a15.95 15.95 0 0 0-.143 1.957A15.95 15.95 0 0 0 1.64 10.86v2.28c0 .154.001.31.003.465.007.658.054 1.312.143 1.957.09.642.217 1.272.384 1.884a11.13 11.13 0 0 0 .95 1.988 10.96 10.96 0 0 0 1.35 1.738 10.96 10.96 0 0 0 1.738 1.35 11.13 11.13 0 0 0 1.988.95c.612.167 1.242.294 1.884.384a15.95 15.95 0 0 0 1.957.143c.154.002.31.003.465.003h2.28c.154 0 .31-.001.465-.003a15.95 15.95 0 0 0 1.957-.143c.642-.09 1.272-.217 1.884-.384a11.13 11.13 0 0 0 1.988-.95 10.96 10.96 0 0 0 1.738-1.35 10.96 10.96 0 0 0 1.35-1.738 11.13 11.13 0 0 0 .95-1.988c.167-.612.294-1.242.384-1.884a15.95 15.95 0 0 0 .143-1.957c.002-.154.003-.31.003-.465v-2.28c0-.154-.001-.31-.003-.465a15.95 15.95 0 0 0-.143-1.957 11.62 11.62 0 0 0-.384-1.884 11.13 11.13 0 0 0-.95-1.988 10.96 10.96 0 0 0-1.35-1.738 10.96 10.96 0 0 0-1.738-1.35 11.13 11.13 0 0 0-1.988-.95 11.62 11.62 0 0 0-1.884-.384 15.95 15.95 0 0 0-1.957-.143A15.95 15.95 0 0 0 14.784 0h-2.28zm.7 5.998h1.592a3.992 3.992 0 0 1 3.992 3.992v4.02a3.992 3.992 0 0 1-3.992 3.992h-4.02a3.992 3.992 0 0 1-3.992-3.992V9.99a3.992 3.992 0 0 1 3.992-3.992h2.428z"/>
              </svg>
              <span>Ubuntu 22.04+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
