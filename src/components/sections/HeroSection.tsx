import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Shield, Wallet, Zap } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Non-custodial" },
  { icon: Wallet, label: "BSV Micro-payments" },
  { icon: Zap, label: "Open Protocol" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-seedrush-green/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Earn while you seed.</span>
            <br />
            <span className="text-gradient">Download at warp speed.</span>
          </h1>
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            SeedRush is a BitTorrent-compatible desktop client that pays you sats for every micro-chunk you upload—and lets downloaders buy guaranteed speed, per chunk.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto">
              <Download className="w-5 h-5" />
              Download SeedRush
            </Button>
            <Button variant="hero-outline" size="xl" className="gap-2 w-full sm:w-auto">
              See how it works
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/30 border border-border/50"
              >
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">{badge.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-seedrush-green/10 border border-seedrush-green/30">
              <Shield className="w-4 h-4 text-seedrush-green" />
              <span className="text-sm font-medium text-seedrush-green">Refund Guarantees (CLTV)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
