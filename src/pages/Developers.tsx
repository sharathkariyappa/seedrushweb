import React from 'react';
import { Code, Github, Book, Terminal, Cpu, Database, GitBranch, MessageSquare } from 'lucide-react';

const DevelopersPage = () => {
  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Open protocol. <span className="text-gradient">Familiar stack.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            BitTorrent + a BEP-10 payment extension. SDKs in Go. Wallet API follows BRC-100-style actions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 glow-effect inline-flex items-center gap-2">
              <Book className="w-5 h-5" />
              Read the spec →
            </a>
            <a href="#" className="bg-secondary text-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-secondary/80 transition-all inline-flex items-center gap-2 border border-border">
              <Github className="w-5 h-5" />
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What you get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <GitBranch className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Extension messages</h3>
              <p className="text-muted-foreground mb-4">
                Protocol messages for offer/bid, channel open, update, and close—all compatible with BEP-10.
              </p>
              <code className="text-xs bg-muted/30 px-2 py-1 rounded inline-block text-primary">
                msg_type: OFFER | BID | CHANNEL_OPEN | UPDATE | CLOSE
              </code>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Go SDK</h3>
              <p className="text-muted-foreground mb-4">
                Complete SDK for torrent handling + payment channel management. Battle-tested, production-ready.
              </p>
              <code className="text-xs bg-muted/30 px-2 py-1 rounded inline-block text-primary">
                import "github.com/seedrush/sdk-go"
              </code>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Receipts API</h3>
              <p className="text-muted-foreground mb-4">
                Query and export transaction receipts with local SQLite schemas for easy integration.
              </p>
              <code className="text-xs bg-muted/30 px-2 py-1 rounded inline-block text-primary">
                receipts.Query(filters).Export("csv")
              </code>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wallet integration</h3>
              <p className="text-muted-foreground mb-4">
                BRC-100-style wallet actions for signing, channel management, and key reveals.
              </p>
              <code className="text-xs bg-muted/30 px-2 py-1 rounded inline-block text-primary">
                wallet.Sign() | wallet.OpenChannel()
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick start example</h2>
          <div className="card-gradient p-8 rounded-2xl border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground font-mono">main.go</span>
              </div>
              <button className="text-primary hover:text-primary/80 text-sm">Copy</button>
            </div>
            <pre className="bg-muted/30 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-foreground font-mono">{`package main

import (
    "github.com/seedrush/sdk-go/torrent"
    "github.com/seedrush/sdk-go/payment"
)

func main() {
    // Initialize client
    client := torrent.NewClient(&torrent.Config{
        DataDir: "./data",
        Port:    6881,
    })

    // Add payment extension
    paymentExt := payment.NewExtension(&payment.Config{
        PricePerMiB: 1000, // sats
        MinBatch:    64,   // chunks
    })
    client.AddExtension(paymentExt)

    // Add torrent and start seeding
    t, _ := client.AddMagnet(magnetURI)
    t.StartSeeding()

    // Listen for earnings
    for receipt := range paymentExt.Receipts() {
        log.Printf("Earned %d sats for %d chunks", 
            receipt.Sats, receipt.ChunkCount)
    }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Build With It */}
      <section className="py-16 px-6 bg-radial-glow">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Build with it</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-gradient p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-semibold mb-4">Write your own client</h3>
              <p className="text-muted-foreground mb-6">
                Integrate the payment extension into your existing torrent client or build from scratch. 
                The protocol is open and fully documented.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Full BEP-10 compatibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Reference implementations available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Test suite for protocol compliance</span>
                </li>
              </ul>
            </div>

            <div className="card-gradient p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-semibold mb-4">Run an overlay</h3>
              <p className="text-muted-foreground mb-6">
                Build optional services like price boards, reputation systems, or discovery layers. 
                Totally optional—clients work fine without them.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Price aggregation services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Reputation and reliability tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Enhanced discovery mechanisms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Details */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Protocol overview</h2>
          <div className="space-y-4">
            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Extension handshake</h3>
                  <p className="text-muted-foreground mb-3">
                    Peers exchange payment capabilities during BEP-10 handshake. Compatible peers proceed with payment negotiation.
                  </p>
                  <code className="text-xs bg-muted/30 px-2 py-1 rounded text-primary">
                    ext_handshake: {"{payment_v1: 1, price_per_mib: 1000}"}
                  </code>
                </div>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Channel establishment</h3>
                  <p className="text-muted-foreground mb-3">
                    Downloader opens a payment channel with initial funding. Seeder confirms and begins serving chunks.
                  </p>
                  <code className="text-xs bg-muted/30 px-2 py-1 rounded text-primary">
                    CHANNEL_OPEN: {"{funding_tx, capacity, timeout}"}
                  </code>
                </div>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atomic exchange</h3>
                  <p className="text-muted-foreground mb-3">
                    Encrypted chunk + key hash commitment → Payment → Key reveal. Each step is atomic and verifiable.
                  </p>
                  <code className="text-xs bg-muted/30 px-2 py-1 rounded text-primary">
                    CHUNK_OFFER: {"{encrypted_data, H(key), price}"}
                  </code>
                </div>
              </div>
            </div>

            <div className="card-gradient p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Settlement</h3>
                  <p className="text-muted-foreground">
                    Channel closes when transfer completes or timeout occurs. Final balances settle on-chain with CLTV refund protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-12 rounded-2xl border border-primary/30 text-center glow-effect">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Github className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Contribute</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We love issues, PRs, and protocol discussions. Join the Discord community or submit directly on GitHub.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a href="#" className="bg-secondary text-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-secondary/80 transition-all inline-flex items-center gap-2 border border-border">
                <MessageSquare className="w-5 h-5" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#" className="card-gradient p-6 rounded-xl border border-border group">
              <Book className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                Documentation →
              </h3>
              <p className="text-muted-foreground text-sm">
                Complete API reference and integration guides
              </p>
            </a>

            <a href="#" className="card-gradient p-6 rounded-xl border border-border group">
              <Code className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                Examples →
              </h3>
              <p className="text-muted-foreground text-sm">
                Sample projects and implementation patterns
              </p>
            </a>

            <a href="#" className="card-gradient p-6 rounded-xl border border-border group">
              <Terminal className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                CLI tools →
              </h3>
              <p className="text-muted-foreground text-sm">
                Command-line utilities for testing and debugging
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopersPage;