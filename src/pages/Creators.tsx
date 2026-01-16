import React from 'react';
import { Rocket, DollarSign, Zap, FileText, Users, Globe, Lock, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreatorsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Usage-linked distribution that <span className="text-gradient">scales with you</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sponsor fast, reliable seeding at launch—and let demand fund the rest, per chunk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => { navigate('/request-access'); }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 glow-effect inline-flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Talk to us
            </button>
            {/* <a href="#" className="bg-secondary text-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-secondary/80 transition-all inline-flex items-center gap-2 border border-border">
              Packaging guide →
            </a> */}
          </div>
        </div>
      </section>

      {/* Why Creators Choose SeedRush */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why creators choose SeedRush</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-gradient p-8 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Predictable costs</h3>
              <p className="text-muted-foreground">
                Spend only when downloads happen. No more paying for idle bandwidth or overprovisioned servers.
              </p>
            </div>

            <div className="card-gradient p-8 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Faster launch days</h3>
              <p className="text-muted-foreground">
                Pay for initial speed; community seeders stay online for earnings. Your launch doesn't melt servers.
              </p>
            </div>

            <div className="card-gradient p-8 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Proof of delivery</h3>
              <p className="text-muted-foreground">
                Receipts for every byte delivered. Track exactly what your audience downloaded and when.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Workflow</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold flex-shrink-0">
                1
              </div>
              <div className="card-gradient p-6 rounded-xl border border-border flex-1">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Package your release
                </h3>
                <p className="text-muted-foreground">
                  Create a torrent + optional paid manifest. Include metadata, checksums, and recommended price bands for your audience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div className="card-gradient p-6 rounded-xl border border-border flex-1">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Set recommended pricing
                </h3>
                <p className="text-muted-foreground">
                  Define price bands for different regions and connection speeds. Announce to your audience via your preferred channels.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold flex-shrink-0">
                3
              </div>
              <div className="card-gradient p-6 rounded-xl border border-border flex-1">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Monitor and optimize
                </h3>
                <p className="text-muted-foreground">
                  Track receipts and delivery metrics. Tune pricing after day one based on actual demand and network conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-6 bg-radial-glow">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Perfect for</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Game studios</h3>
              </div>
              <p className="text-muted-foreground">
                Launch day patches and full releases without melting CDN budgets. Community keeps seeding for earnings.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Software distributors</h3>
              </div>
              <p className="text-muted-foreground">
                Large binary releases (ISOs, installers) with guaranteed availability and transparent delivery costs.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Content creators</h3>
              </div>
              <p className="text-muted-foreground">
                High-quality video files, educational content, and digital products with usage-based distribution.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Open source projects</h3>
              </div>
              <p className="text-muted-foreground">
                Distribute releases globally with community-funded bandwidth and verifiable delivery receipts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Private groups</h3>
              <p className="text-muted-foreground">
                Invite-only swarms for exclusive releases or beta testing communities.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Region-based pricing</h3>
              <p className="text-muted-foreground">
                Set different price recommendations based on geographic regions and market conditions.
              </p>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Studio dashboards</h3>
              <p className="text-muted-foreground">
                Custom analytics and monitoring for enterprise deployments. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-8 md:p-12 rounded-2xl border border-primary/30 glow-effect">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-primary font-semibold mb-2">CASE STUDY</p>
                <h3 className="text-2xl font-bold mb-4">Indie game launch: 50TB in 48 hours</h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              An indie studio launched their 8GB game using SeedRush. They seeded initially with 5 sponsored nodes at 
              peak rates. Within hours, community seeders joined for earnings. Total cost: <strong className="text-foreground">$480</strong> for 
              guaranteed launch capacity, then down to <strong className="text-foreground">$0.02/GB</strong> as community took over.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-1">50TB</p>
                <p className="text-sm text-muted-foreground">Total delivered</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-1">48hrs</p>
                <p className="text-sm text-muted-foreground">Launch window</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-1">95%</p>
                <p className="text-sm text-muted-foreground">Cost reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your distribution?</h2>
          <p className="text-muted-foreground mb-8">
            Get in touch to discuss your use case and access our creator toolkit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => { navigate('/request-access'); }}
              className="bg-primary text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-all duration-300 glow-effect inline-flex items-center gap-3">
              <MessageSquare className="w-6 h-6" />
              Contact team
            </button>
            {/* <a href="#" className="bg-secondary text-foreground px-10 py-5 rounded-xl text-xl font-bold hover:bg-secondary/80 transition-all inline-flex items-center gap-3 border border-border">
              Read packaging guide →
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatorsPage;