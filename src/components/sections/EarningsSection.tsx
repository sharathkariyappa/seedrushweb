import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Download, TrendingUp, Clock, Wifi } from "lucide-react";

export const EarningsSection = () => {
  const [uploadSpeed, setUploadSpeed] = useState([50]); // Mbps
  const [hoursPerDay, setHoursPerDay] = useState([8]);
  const [pricePerMib, setPricePerMib] = useState([1000]); // sats

  // Calculate estimated earnings
  const mbpsToMibPerSecond = uploadSpeed[0] / 8;
  const totalMibPerDay = mbpsToMibPerSecond * 3600 * hoursPerDay[0];
  const estimatedSatsPerDay = Math.floor(totalMibPerDay * pricePerMib[0] * 0.4); // 40% utilization factor
  const estimatedUsdPerDay = (estimatedSatsPerDay / 100000000 * 65000).toFixed(2); // Assuming BTC price

  return (
    <section id="earn" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-seedrush-green/10 text-seedrush-green text-sm font-medium mb-4">
              For Seeders
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What could you earn?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Set a price floor and seed what you love. SeedRush handles payments, receipts, and reputation.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Wifi, text: "Keep your client online (uptime wins)" },
                { icon: TrendingUp, text: "Price competitively for your region" },
                { icon: Clock, text: "Export detailed receipts for tax reporting" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="gap-2">
              <Download className="w-5 h-5" />
              Start seeding & earn
            </Button>
          </div>

          {/* Calculator */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Earnings Estimator</h3>

            {/* Upload Speed */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-muted-foreground">Upload Speed</label>
                <span className="text-sm font-bold text-foreground">{uploadSpeed[0]} Mbps</span>
              </div>
              <Slider
                value={uploadSpeed}
                onValueChange={setUploadSpeed}
                min={1}
                max={200}
                step={1}
                className="w-full"
              />
            </div>

            {/* Hours Per Day */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-muted-foreground">Hours per day</label>
                <span className="text-sm font-bold text-foreground">{hoursPerDay[0]} hrs</span>
              </div>
              <Slider
                value={hoursPerDay}
                onValueChange={setHoursPerDay}
                min={1}
                max={24}
                step={1}
                className="w-full"
              />
            </div>

            {/* Price Per MiB */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-muted-foreground">Price per MiB</label>
                <span className="text-sm font-bold text-foreground">{pricePerMib[0]} sats</span>
              </div>
              <Slider
                value={pricePerMib}
                onValueChange={setPricePerMib}
                min={100}
                max={3000}
                step={50}
                className="w-full"
              />
            </div>

            {/* Result */}
            <div className="bg-secondary/50 border border-border rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Estimated daily earnings</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-gradient">{estimatedSatsPerDay.toLocaleString()}</span>
                <span className="text-lg text-muted-foreground">sats/day</span>
              </div>
              <p className="text-sm text-muted-foreground">
                ≈ ${estimatedUsdPerDay} USD
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                * Actual earnings vary by demand and uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
