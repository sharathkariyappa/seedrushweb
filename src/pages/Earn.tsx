import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, Zap, FileText, Download, Upload, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EarnPage = () => {
  const [uploadSpeed, setUploadSpeed] = useState(50);
  const [hoursPerDay, setHoursPerDay] = useState(12);
  const [pricePerMib, setPricePerMib] = useState(1000);
  const navigate = useNavigate();

  // Calculate estimated earnings
  const calculateEarnings = () => {
    const mbPerHour = (uploadSpeed * 3600) / 8;
    const mbPerDay = mbPerHour * hoursPerDay;
    const mibPerDay = mbPerDay / 1.048576;
    const satsPerDay = Math.round((mibPerDay * pricePerMib) / 1000);
    return satsPerDay.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Turn upload into <span className="text-gradient">income</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Set a price floor and seed what you love. SeedRush handles payments, receipts, and reputation.
          </p>
          <button 
            onClick={() => navigate('/request-access')
            }
            className="bg-primary text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-all duration-300 glow-effect inline-flex items-center gap-3">
            <Download className="w-6 h-6" />
            Download & start earning
          </button>
        </div>
      </section>

      {/* Earnings Estimator */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-8 md:p-12 rounded-2xl border border-border glow-effect">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">What could you earn?</h2>
            </div>

            <div className="space-y-8 mb-8">
              {/* Upload Speed */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lg font-semibold flex items-center gap-2">
                    <Upload className="w-5 h-5 text-primary" />
                    Upload speed (Mbps)
                  </label>
                  <span className="text-2xl font-bold text-primary">{uploadSpeed}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={uploadSpeed}
                  onChange={(e) => setUploadSpeed(Number(e.target.value))}
                  className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>1 Mbps</span>
                  <span>1000 Mbps</span>
                </div>
              </div>

              {/* Hours per Day */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lg font-semibold flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Hours per day
                  </label>
                  <span className="text-2xl font-bold text-primary">{hoursPerDay}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(Number(e.target.value))}
                  className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>1 hour</span>
                  <span>24 hours</span>
                </div>
              </div>

              {/* Price per MiB */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-lg font-semibold flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Price per MiB (sats)
                  </label>
                  <span className="text-2xl font-bold text-primary">{pricePerMib}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="100"
                  value={pricePerMib}
                  onChange={(e) => setPricePerMib(Number(e.target.value))}
                  className="w-full h-3 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-1">
                  <span>100 sats</span>
                  <span>3000 sats</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
              <p className="text-muted-foreground mb-2">Estimated daily earnings</p>
              <p className="text-5xl font-bold text-gradient mb-4">{calculateEarnings()} sats/day</p>
              <p className="text-sm text-muted-foreground">
                Actual earnings vary by demand and uptime. Higher uptime and competitive pricing increase your discoverability.
              </p>
            </div>

            <div className="mt-6 flex items-start gap-3 bg-muted/30 p-4 rounded-lg border border-border">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Tip:</strong> Higher uptime and competitive pricing increase your discoverability. 
                Seeders with 99%+ uptime typically earn 2-3x more than occasional seeders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Setup guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                icon: <FileText className="w-6 h-6" />,
                title: 'Add content',
                desc: 'Add folders or torrents to SeedRush. Organize your content library.'
              },
              {
                step: '2',
                icon: <DollarSign className="w-6 h-6" />,
                title: 'Set your price',
                desc: 'Choose a price floor (sat/MiB) and minimum batch size.'
              },
              {
                step: '3',
                icon: <Zap className="w-6 h-6" />,
                title: 'Start seeding',
                desc: 'Click Start seeding. Earnings appear in real time as chunks flow.'
              }
            ].map((item, idx) => (
              <div key={idx} className="card-gradient p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Best practices</h2>
          <div className="space-y-4">
            {[
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Keep your client online',
                desc: 'Uptime wins. Seeders with consistent availability earn significantly more.'
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: 'Price competitively',
                desc: 'Check regional rates. Undercutting slightly can increase your chunk delivery rate.'
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Batch small chunks',
                desc: 'Reduce fees in volatile mempools by batching micro-transactions efficiently.'
              }
            ].map((item, idx) => (
              <div key={idx} className="card-gradient p-6 rounded-xl border border-border flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Records & Taxes */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient p-8 rounded-2xl border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Records & taxes</h2>
                <p className="text-muted-foreground mb-6">
                  Export detailed receipts.csv with all the information you need for accounting and tax reporting.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">CSV includes:</p>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Timestamp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Torrent info</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Chunk count</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Sats earned</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Transaction ID</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span>Status</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to start earning?</h2>
          <p className="text-muted-foreground mb-8">
            Download SeedRush and turn your idle bandwidth into income today.
          </p>
          <button 
            onClick={() => navigate('/request-access')
            }
            className="bg-primary text-primary-foreground px-10 py-5 rounded-xl text-xl font-bold hover:scale-105 transition-all duration-300 glow-effect inline-flex items-center gap-3">
            <Download className="w-6 h-6" />
            Download SeedRush
          </button>
        </div>
      </section>
    </div>
  );
};

export default EarnPage;