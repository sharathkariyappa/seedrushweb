import { ArrowRight, Users, Server, Palette, Download, Code } from "lucide-react";

const personas = [
  {
    icon: Users,
    title: "Independent Seeders",
    description: "Your idle bandwidth prints sats",
    href: "#seeders",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Server,
    title: "Trackers / Infra",
    description: "Monetize your private swarm reliably",
    href: "#trackers",
    color: "text-seedrush-green",
    bgColor: "bg-seedrush-green/10",
  },
  {
    icon: Palette,
    title: "Creators / Publishers",
    description: "Usage-linked distribution economics",
    href: "#creators",
    color: "text-seedrush-orange",
    bgColor: "bg-seedrush-orange/10",
  },
  {
    icon: Download,
    title: "Power Downloaders",
    description: "High-speed, pay-per-chunk downloads",
    href: "#downloaders",
    color: "text-seedrush-purple",
    bgColor: "bg-seedrush-purple/10",
  },
  {
    icon: Code,
    title: "Developers",
    description: "Open protocol. Familiar stack.",
    href: "#developers",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export const PersonasSection = () => {
  return (
    <section id="creators" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            For everyone
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Built for you
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're seeding, downloading, building, or publishing—SeedRush has you covered.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {personas.map((persona) => (
            <a
              key={persona.title}
              href={persona.href}
              className="group bg-card border border-border rounded-2xl p-6 transition-all hover:border-primary/50"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${persona.bgColor} flex items-center justify-center mb-4`}>
                <persona.icon className={`w-6 h-6 ${persona.color}`} />
              </div>

              {/* Content */}
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                {persona.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {persona.description}
              </p>

              {/* Arrow */}
              <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
