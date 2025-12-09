import React, { useState } from 'react';
import { DollarSign, Zap, Shield, TrendingUp, Info, Download } from 'lucide-react';

const PricingPage = () => {
  const [trafficType, setTrafficType] = useState('light');
  const [dataAmount, setDataAmount] = useState(10);

  const priceBands = {
    light: { min: 600, max: 900, label: 'Light traffic', color: 'text-green-500' },
    peak: { min: 900, max: 1500, label: 'Peak hours', color: 'text-yellow-500' },
    premium: { min: 1500, max: 2400, label: 'Premium / 1 Gbps', color: 'text-primary' }
  };

  const calculateCost = () => {
    const avgPrice = (priceBands[trafficType].min + priceBands[trafficType].max) / 2;
    const mib = (dataAmount * 1024) / 1.048576;
    const sats = Math.round((mib * avgPrice) / 1000);
    return sats.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            SeedRush is <span className="text-gradient">free</span>. Network fees are minimal.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You set the price per MiB you're willing to pay (downloader) or charge (seeder).
          </p>
        </div>
      </section>

      {/* How Fees Work */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How fees work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tiny channel fees</h3>
              <p className="text-muted-foreground">
                Payment channel updates keep on-chain fees minimal. Open once, transact thousands of times off-chain.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Refund protection</h3>
              <p className="text-muted-foreground">
                Time-locked refund path (CLTV) protects downloaders if seeders don't deliver.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dynamic pricing</h3>
              <p className="text-muted-foreground">
                Suggested ranges adjust with network demand and regional conditions automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Price Bands */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Suggested price bands</h2>
          
          <div className="space-y-6">
            {Object.entries(priceBands).map(([key, band]) => (
              <div key={key} className="card-gradient p-8 rounded-2xl border border-border">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <h3 className={`text-2xl font-bold mb-2 ${band.color}`}>{band.label}</h3>
                    <p className="text-muted-foreground mb-4">
                      {key === 'light' && 'Off-peak hours with lower demand'}
                      {key === 'peak' && 'High-demand periods, busy networks'}
                      {key === 'premium' && 'Premium regions or gigabit seeders'}
                    </p>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Min</p>
                      <p className="text-3xl font-bold text-primary">{band.min}</p>
                      <p className="text-xs text-muted-foreground">sat/MiB</p>
                    </div>
                    <div className="text-muted-foreground text-2xl">—</div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Max</p>
                      <p className="text-3xl font-bold text-primary">{band.max}</p>
                      <p className="text-xs text-muted-foreground">sat/MiB</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 bg-muted/30 p-6 rounded-xl border border-border">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> These are community-suggested ranges. 
                Seeders and downloaders are free to negotiate any price. The market naturally adjusts 
                based on supply, demand, and network conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="py-16 px-6 bg-radial-glow">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-8 md:p-12 rounded-2xl border border-border glow-effect">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">What should I charge?</h2>
            </div>

            <div className="space-y-8 mb-8">
              {/* Traffic Type */}
              <div>
                <label className="text-lg font-semibold mb-4 block">Traffic type</label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(priceBands).map(([key, band]) => (
                    <button
                      key={key}
                      onClick={() => setTrafficType(key)}
                      className={`p-4 rounded-xl border transition-all ${
                        trafficType === key
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-secondary/50 hover:bg-secondary'
                      }`}
                    >
                      <p className={`font-semibold mb-1 ${trafficType === key ? 'text-primary' : ''}`}>
                        {band.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {band.min}–{band.max} sat/MiB
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Amount */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lg font-semibold">Data to transfer</label>
                  <span className="text-2xl font-bold text-primary">{dataAmount} GB</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={dataAmount}
                  onChange={(e) => setDataAmount(Number(e.target.value))}
                  className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>1 GB</span>
                  <span>100 GB</span>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
              <p className="text-muted-foreground mb-2">Estimated cost</p>
              <p className="text-5xl font-bold text-gradient mb-4">{calculateCost()} sats</p>
              <p className="text-sm text-muted-foreground mb-6">
                For {dataAmount} GB at {priceBands[trafficType].label.toLowerCase()} rates
              </p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-muted/30 p-3 rounded-lg">
                  <p className="text-muted-foreground mb-1">Avg price</p>
                  <p className="font-semibold">
                    {Math.round((priceBands[trafficType].min + priceBands[trafficType].max) / 2)} sat/MiB
                  </p>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg">
                  <p className="text-muted-foreground mb-1">Channel fees</p>
                  <p className="font-semibold">~2 sats</p>
                </div>
                <div className="bg-muted/30 p-3 rounded-lg">
                  <p className="text-muted-foreground mb-1">Total</p>
                  <p className="font-semibold">{(parseInt(calculateCost().replace(/,/g, '')) + 2).toLocaleString()} sats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Breakdown */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Fee breakdown</h2>
          <div className="card-gradient p-8 rounded-2xl border border-border">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-6 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Channel open</h3>
                  <p className="text-sm text-muted-foreground">One-time on-chain transaction to fund channel</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">~1 sat</p>
                  <p className="text-xs text-muted-foreground">Network dependent</p>
                </div>
              </div>

              <div className="flex justify-between items-center pb-6 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Per-chunk updates</h3>
                  <p className="text-sm text-muted-foreground">Off-chain payment channel updates</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-500">0 sats</p>
                  <p className="text-xs text-muted-foreground">No on-chain cost</p>
                </div>
              </div>

              <div className="flex justify-between items-center pb-6 border-b border-border">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Channel close</h3>
                  <p className="text-sm text-muted-foreground">Final settlement on-chain</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">~1 sat</p>
                  <p className="text-xs text-muted-foreground">Network dependent</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold mb-1">SeedRush fee</h3>
                  <p className="text-sm text-muted-foreground">Platform maintenance and development</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-500">0 sats</p>
                  <p className="text-xs text-muted-foreground">Free and open</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-primary/10 border border-primary/30 rounded-lg p-6">
              <p className="text-center">
                <span className="text-muted-foreground">Typical total overhead: </span>
                <span className="text-2xl font-bold text-primary">~2 sats</span>
                <span className="text-muted-foreground"> per session</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Download SeedRush and set your own pricing. The network is waiting.
          </p>
          <button className="bg-primary text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-all duration-300 glow-effect inline-flex items-center gap-3">
            <Download className="w-6 h-6" />
            Download SeedRush
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;