import React, { useState } from 'react';
import { Download, Copy, Check, Apple, Monitor, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DownloadPage = () => {
  const [selectedOS, setSelectedOS] = useState('macos');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const osData = {
    macos: {
      name: 'macOS',
      icon: <Apple className="w-6 h-6" />,
      version: '1.0.2',
      size: '89.4 MB',
      minVersion: 'macOS 12+',
      checksum: 'a7f3b2c1d4e5f6a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2'
    },
    windows: {
      name: 'Windows',
      icon: <Monitor className="w-6 h-6" />,
      version: '1.0.2',
      size: '92.1 MB',
      minVersion: 'Windows 10+',
      checksum: 'b8f4c3d2e5f7a9c1d0e2f4b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d6'
    },
    linux: {
      name: 'Linux',
      icon: <Terminal className="w-6 h-6" />,
      version: '1.0.2',
      size: '87.8 MB',
      minVersion: 'Ubuntu 22.04+',
      checksum: 'c9g5d4e3f6a8b0c2d1e3f5a7c9d1e3f5a7b9c1d3e5f7a9b1c3d5e7f9a1b3c5d7'
    }
  };

  const copyChecksum = () => {
    navigator.clipboard.writeText(osData[selectedOS].checksum);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Get SeedRush for <span className="text-gradient">your desktop</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">Choose your operating system to download</p>
          
          {/* OS Picker */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(osData).map(([key, os]) => (
              <button
                key={key}
                onClick={() => setSelectedOS(key)}
                className={`px-8 py-4 rounded-xl border transition-all duration-300 flex items-center gap-3 text-lg font-semibold hover-lift ${
                  selectedOS === key
                    ? 'bg-primary text-primary-foreground border-primary glow-effect'
                    : 'border-border bg-secondary/50 hover:bg-secondary'
                }`}
              >
                {os.icon}
                {os.name}
              </button>
            ))}
          </div>

          {/* Download Button */}
          <div className="animate-slide-up">
            <button 
              onClick={() => {navigate('/request-access')}}
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-all duration-300 glow-effect">
              <Download className="w-6 h-6" />
              Download for {osData[selectedOS].name}
            </button>
            <p className="text-sm text-muted-foreground mt-4">
              Version {osData[selectedOS].version} • {osData[selectedOS].size} • Checksums and signatures included
            </p>
            {selectedOS === 'macos' && (
              <a href="#" className="text-primary hover:text-primary/80 text-sm mt-2 inline-block">
                Download Apple Silicon version →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Verify Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-8 rounded-2xl border border-border">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" />
              </div>
              Verify your download
            </h2>
            <p className="text-muted-foreground mb-6">We publish SHA-256 checksums and signatures for every build.</p>
            
            <div className="bg-muted/30 p-4 rounded-lg border border-border mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground font-mono">SHA-256</span>
                <button 
                  onClick={copyChecksum}
                  className="text-primary hover:text-primary/80 text-sm flex items-center gap-2 transition-colors"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <code className="text-sm text-primary break-all block">
                {osData[selectedOS].checksum}
              </code>
            </div>

            <div className="bg-secondary/50 p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Verify with:</p>
              <code className="text-sm bg-muted/30 px-3 py-1 rounded block">
                shasum -a 256 SeedRush-{selectedOS}-{osData[selectedOS].version}.dmg
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* First-run Quickstart */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">First-run quickstart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Open SeedRush', desc: 'Choose Seeding or Downloading mode' },
              { step: '2', title: 'Set preferences', desc: 'Set price floor (seeders) or max cost/GB (downloaders)' },
              { step: '3', title: 'Start earning', desc: 'Add torrents and begin seeding or downloading' }
            ].map((item, idx) => (
              <div key={idx} className="card-gradient p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-8 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold mb-6">Requirements & changelog</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Runs on {osData[selectedOS].minVersion}
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Minimum 2GB RAM recommended
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                100MB free disk space for installation
              </p>
              <a href="#" className="text-primary hover:text-primary/80 inline-block mt-4">
                See what's new in the latest release →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 text-center">
        <p className="text-muted-foreground mb-4">Having trouble?</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-primary hover:text-primary/80 font-semibold">Visit Docs</a>
          <span className="text-muted-foreground">or</span>
          <a href="#" className="text-primary hover:text-primary/80 font-semibold">Join Discord</a>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;