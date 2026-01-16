import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";

const priceBands = [
  { label: "Light traffic", range: "600–900 sat/MiB", description: "Off-peak hours, lower demand" },
  { label: "Peak hours", range: "900–1,500 sat/MiB", description: "High demand periods" },
  { label: "Premium", range: "1,500–2,400 sat/MiB", description: "1 Gbps seeders, premium regions" },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            SeedRush is free.<br />Network fees are minimal.
          </h2>
          <p className="text-lg text-muted-foreground">
            You set the price per MiB you're willing to pay (downloader) or charge (seeder).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* How it works */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">How fees work</h3>
            <div className="space-y-4">
              {[
                "Payment channel updates keep on-chain fees tiny",
                "Refund path protects downloaders",
                "Suggested ranges adjust with demand and region",
                "No subscription or platform fees",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-seedrush-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-seedrush-green" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price bands */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Suggested price bands</h3>
            <div className="space-y-4">
              {priceBands.map((band) => (
                <div key={band.label} className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">{band.label}</span>
                    <span className="text-primary font-mono font-bold">{band.range}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{band.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                For organizations and trackers looking for SLAs, <a href="/request-access" className="text-primary hover:underline">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
