import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Key, RefreshCcw, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const securityFeatures = [
  {
    icon: Key,
    title: "Non-custodial wallet",
    description: "Your keys never leave your machine.",
  },
  {
    icon: RefreshCcw,
    title: "Refund path",
    description: "Time-locked refunds if a seeder misbehaves (CLTV).",
  },
  {
    icon: FileText,
    title: "Exportable receipts",
    description: "Tamper-evident records for every transfer.",
  },
];

export const SecuritySection = () => {
  const navigate = useNavigate();
  return (
    <section id="security" className="py-20 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Central Shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl bg-card border border-primary/30 shadow-lg flex items-center justify-center animate-pulse-glow">
                  <Shield className="w-16 h-16 text-primary" />
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg animate-float">
                <Key className="w-8 h-8 text-seedrush-green" />
              </div>
              <div className="absolute top-8 right-8 w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <RefreshCcw className="w-7 h-7 text-seedrush-orange" />
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                <FileText className="w-8 h-8 text-primary" />
              </div>

              {/* Glow */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-seedrush-green/10 text-seedrush-green text-sm font-medium mb-4">
              Security
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Keep your keys.<br />Keep your privacy.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              SeedRush is designed with security and sovereignty at its core. Your data, your funds, your control.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => {navigate("/security")}}
              variant="hero-outline" size="lg" className="gap-2">
              Read our security approach
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
