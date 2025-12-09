import React from 'react';
import { Zap, Shield, DollarSign, Lock, FileText, GitBranch, Download, Upload } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Atomic, <span className="text-gradient">pay-per-chunk</span> file transfer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SeedRush encrypts each micro-chunk. Seeders commit to the decryption key's hash; 
            keys are revealed only after payment lands—so money and data swap atomically.
          </p>
        </div>
      </section>

      {/* For Downloaders */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">For downloaders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pay for speed, not promises</h3>
              <p className="text-muted-foreground">
                Fund a small balance and stream chunks as they arrive. No upfront commitments.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Spend controls</h3>
              <p className="text-muted-foreground">
                Set a price cap and a daily budget. You're always in control of your spending.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Refunds</h3>
              <p className="text-muted-foreground">
                If a key isn't revealed in time, your refund path triggers automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Seeders */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Upload className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold">For seeders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Set your price</h3>
              <p className="text-muted-foreground">
                Choose your price per MiB and minimum batch size. Stay competitive, stay profitable.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Auto-payouts</h3>
              <p className="text-muted-foreground">
                Earnings stream as you serve chunks. No waiting, no manual withdrawals.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Receipts</h3>
              <p className="text-muted-foreground">
                Export CSV for accounting and tax reporting. Every transaction documented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Under the Hood */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Under the hood</h2>

          <div className="space-y-6">
            <div className="card-gradient p-8 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Key commitment</h3>
                  <p className="text-muted-foreground mb-4">
                    Seeders pre-commit to H(Kᵢ) for every chunk. This cryptographic hash ensures 
                    the seeder can't change the key after commitment, protecting downloaders from fraud.
                  </p>
                  <code className="text-sm bg-muted/30 px-3 py-2 rounded inline-block text-primary">
                    commit(chunk_i) = H(decryption_key_i)
                  </code>
                </div>
              </div>
            </div>

            <div className="card-gradient p-8 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <GitBranch className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Payment channels</h3>
                  <p className="text-muted-foreground mb-4">
                    Tiny, unidirectional channels minimize on-chain fees. Payments flow continuously 
                    as chunks are delivered, with final settlement happening off-chain.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div className="bg-muted/30 px-4 py-2 rounded">
                      <span className="text-muted-foreground">Channel open:</span> <span className="text-primary">~1 sat</span>
                    </div>
                    <div className="bg-muted/30 px-4 py-2 rounded">
                      <span className="text-muted-foreground">Per update:</span> <span className="text-primary">~0 sat</span>
                    </div>
                    <div className="bg-muted/30 px-4 py-2 rounded">
                      <span className="text-muted-foreground">Channel close:</span> <span className="text-primary">~1 sat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-gradient p-8 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Compatibility</h3>
                  <p className="text-muted-foreground">
                    Standard torrents + a BEP-10 extension for payments. Works with existing magnet 
                    links and integrates seamlessly with the BitTorrent ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Flow */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">The flow</h2>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-green-500 to-primary opacity-30"></div>

            <div className="space-y-12">
              {[
                {
                  step: '1',
                  title: 'Downloader finds content',
                  desc: 'Searches for torrent via standard magnet link or tracker',
                  side: 'left'
                },
                {
                  step: '2',
                  title: 'Seeder advertises price',
                  desc: 'Broadcasts availability and sat/MiB rate to the swarm',
                  side: 'right'
                },
                {
                  step: '3',
                  title: 'Channel opens',
                  desc: 'Downloader funds a tiny payment channel for this session',
                  side: 'left'
                },
                {
                  step: '4',
                  title: 'Chunks flow',
                  desc: 'Each encrypted chunk is delivered → payment confirmed → key revealed',
                  side: 'right'
                },
                {
                  step: '5',
                  title: 'Session ends',
                  desc: 'Channel closes, final settlement on-chain, receipts generated',
                  side: 'left'
                }
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${item.side === 'right' ? 'md:text-right' : ''}`}>
                    <div className="card-gradient p-6 rounded-xl border border-border inline-block w-full md:w-auto">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-12 h-12 rounded-full bg-primary/20 border-4 border-background flex-shrink-0 z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto card-gradient p-12 rounded-2xl border border-border">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">
            Download SeedRush and start earning from your bandwidth, or download at guaranteed speeds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/earn" className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all">
              Start earning →
            </a>
            <a href="/download" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all">
              Download →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;