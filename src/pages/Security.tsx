import React from 'react';
import { Shield, Lock, Key, FileText, Clock, AlertTriangle, Mail, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SecurityPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Security and <span className="text-gradient">sovereignty</span> by default
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your keys, your data, your control. SeedRush is designed with security and user sovereignty as foundational principles.
          </p>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Core security pillars</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Non-custodial wallet */}
            <div className="card-gradient p-8 rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Key className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Non-custodial wallet</h3>
              <p className="text-muted-foreground mb-6">
                Your private keys never leave your machine. SeedRush uses an embedded wallet that you fully control. 
                Export your seed phrase at any time.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Keys generated locally and encrypted at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>BIP-39 seed phrase backup supported</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>No third-party custody, ever</span>
                </li>
              </ul>
            </div>

            {/* Atomic exchange */}
            <div className="card-gradient p-8 rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Atomic exchange</h3>
              <p className="text-muted-foreground mb-6">
                Decryption keys only reveal after payment confirmation. This cryptographic guarantee ensures 
                fair exchange—no payment, no key; no key, automatic refund.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Hash commitment prevents key tampering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Payment verified before key release</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Cryptographically enforced fairness</span>
                </li>
              </ul>
            </div>

            {/* Refund path */}
            <div className="card-gradient p-8 rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Refund path (CLTV)</h3>
              <p className="text-muted-foreground mb-6">
                Time-locked refunds protect downloaders. If a seeder fails to reveal a decryption key within 
                the timeout window, your funds automatically become refundable.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>CheckLockTimeVerify (CLTV) protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Automatic refund eligibility after timeout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>No trust required in counterparty</span>
                </li>
              </ul>
            </div>

            {/* Receipts */}
            <div className="card-gradient p-8 rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Tamper-evident receipts</h3>
              <p className="text-muted-foreground mb-6">
                Every transaction generates a cryptographically signed receipt. These receipts are verifiable, 
                exportable, and provide an audit trail for all transfers.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Includes transaction ID, timestamp, amounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Cryptographically signed by both parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Export to CSV for accounting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-radial-glow">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Security in action</h2>
          <div className="space-y-6">
            <div className="card-gradient p-8 rounded-xl border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Key commitment phase</h3>
                  <p className="text-muted-foreground">
                    Before any payment, the seeder commits to the hash of each chunk's decryption key: H(K₁), H(K₂), etc. 
                    This commitment is cryptographically binding and verifiable.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg border border-border mt-4">
                <code className="text-sm text-primary">
                  commitment = SHA256(decryption_key)
                </code>
              </div>
            </div>

            <div className="card-gradient p-8 rounded-xl border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Encrypted chunk delivery</h3>
                  <p className="text-muted-foreground">
                    The seeder sends the encrypted chunk data along with the key commitment. The downloader verifies 
                    the chunk integrity but cannot decrypt it yet.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-gradient p-8 rounded-xl border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Payment confirmation</h3>
                  <p className="text-muted-foreground">
                    The downloader updates the payment channel, moving sats to the seeder. This update is signed 
                    and recorded off-chain, with minimal fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-gradient p-8 rounded-xl border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Key reveal and verification</h3>
                  <p className="text-muted-foreground">
                    After payment confirmation, the seeder reveals the decryption key. The downloader verifies that 
                    SHA256(revealed_key) matches the original commitment. If valid, the chunk is decrypted.
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-lg border border-border mt-4">
                <code className="text-sm text-primary">
                  verify: SHA256(revealed_key) === commitment ✓
                </code>
              </div>
            </div>

            <div className="card-gradient p-8 rounded-xl border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Timeout and refunds</h3>
                  <p className="text-muted-foreground">
                    If the seeder fails to reveal the key within the timeout period, the CLTV refund path activates. 
                    The downloader can reclaim their sats with no cooperation needed from the seeder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Considerations */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Privacy considerations</h2>
          <div className="card-gradient p-8 rounded-2xl border border-border">
            <p className="text-muted-foreground mb-6">
              SeedRush inherits BitTorrent's privacy model. Your IP address is visible to peers in the swarm, 
              just as with standard torrents. Consider these best practices:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">VPN recommended:</strong> Use a VPN if you want to mask your IP from peers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Payment privacy:</strong> BSV transactions are pseudonymous; consider using fresh addresses
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Receipt storage:</strong> Receipts are stored locally; encrypt your device for additional protection
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Responsible Disclosure */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-12 rounded-2xl border border-primary/30 text-center glow-effect">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Responsible disclosure</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Found a security vulnerability? We take security seriously and appreciate responsible disclosure. 
              Please report issues privately so we can address them before public disclosure.
            </p>
            <div className="inline-flex items-center gap-3 bg-muted/30 px-6 py-4 rounded-xl border border-border mb-6">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:security@seedrush.app" className="text-primary hover:text-primary/80 font-semibold">
                security@seedrush.app
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">PGP key fingerprint:</p>
              <code className="bg-muted/30 px-4 py-2 rounded inline-block text-xs">
                4A1B 2C3D 4E5F 6A7B 8C9D 0E1F 2A3B 4C5D 6E7F
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Security Resources */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Security resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#" className="card-gradient p-6 rounded-xl border border-border group">
              <FileText className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                Security whitepaper →
              </h3>
              <p className="text-muted-foreground text-sm">
                Technical deep-dive into our security model
              </p>
            </a>

            <a href="#" className="card-gradient p-6 rounded-xl border border-border group">
              <Lock className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                Audit reports →
              </h3>
              <p className="text-muted-foreground text-sm">
                Third-party security audits and findings
              </p>
            </a>

            <a href="#" className="card-gradient p-6 rounded-xl border border-border group">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                Best practices →
              </h3>
              <p className="text-muted-foreground text-sm">
                Guide to secure usage and configuration
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Secure by design</h2>
          <p className="text-muted-foreground mb-8">
            Experience peer-to-peer file sharing with cryptographic guarantees and full control over your keys.
          </p>
          <button 
            onClick={() => {navigate("/request-access")}}
            className="bg-primary text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-all duration-300 glow-effect inline-flex items-center gap-3">
            <Download className="w-6 h-6" />
            Download SeedRush
          </button>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;