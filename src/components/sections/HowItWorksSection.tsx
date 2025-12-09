import { Button } from "@/components/ui/button";
import { ArrowRight, FileDown, Coins, Key } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileDown,
    title: "Add a torrent",
    description: "Drag a file or paste a magnet link to get started.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    number: "02",
    icon: Coins,
    title: "Pay or earn per chunk",
    description: "Leechers fund a tiny payment channel; seeders get paid as chunks flow.",
    color: "text-seedrush-green",
    bgColor: "bg-seedrush-green/10",
  },
  {
    number: "03",
    icon: Key,
    title: "Automatic key-reveal",
    description: "Each chunk unlocks on payment—atomic value for value.",
    color: "text-seedrush-orange",
    bgColor: "bg-seedrush-orange/10",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Atomic, pay-per-chunk<br />file transfer
          </h2>
          <p className="text-lg text-muted-foreground">
            SeedRush encrypts each micro-chunk. Keys are revealed only after payment lands—so money and data swap atomically.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary/50 via-seedrush-green/50 to-seedrush-orange/50" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-border">{step.number}</span>
                  <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {/* Arrow (mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg" className="gap-2">
            Learn the mechanics
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
