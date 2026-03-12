import React, { useState } from 'react';
import { Download, Apple, Monitor, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DownloadPage = () => {
  const [selectedOS, setSelectedOS] = useState('macos');
  const navigate = useNavigate();

  const osData = {
    macos: {
      name: 'macOS',
      icon: <Apple className="w-6 h-6" />,
      version: '1.0.0',
      minVersion: 'ARM',
      downloadUrl: "https://api.neucron.io/assets/seedrush-mac-arm.dmg"
    },
    windows: {
      name: 'Windows',
      icon: <Monitor className="w-6 h-6" />,
      version: '1.0.0',
      minVersion: 'x86 ARM',
      downloadUrl: "https://api.neucron.io/assets/seedrush-windows-amd64.exe"
    },
    linux: {
      name: 'Linux',
      icon: <Terminal className="w-6 h-6" />,
      version: '1.0.0',
      minVersion: 'flatpak',
      downloadUrl: "https://api.neucron.io/assets/seedrush-linux.flatpak"
    }
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
            <a
              href={osData[selectedOS].downloadUrl}
              download
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-all duration-300 glow-effect"
            >
              <Download className="w-6 h-6" />
              Download for {osData[selectedOS].name}
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Version {osData[selectedOS].version} • Available as a {osData[selectedOS].minVersion}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;