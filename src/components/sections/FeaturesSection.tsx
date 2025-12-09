import { Coins, Rocket, Globe } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Monetize your bandwidth",
    description: "Turn idle upload into sats—automatically, as you seed.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    icon: Rocket,
    title: "Faster, predictable downloads",
    description: "Pay only for what you actually receive, per micro-chunk.",
    color: "text-seedrush-green",
    bgColor: "bg-seedrush-green/10",
    borderColor: "border-seedrush-green/20",
  },
  {
    icon: Globe,
    title: "Open & compatible",
    description: "Works with standard magnet links and plays nice with other clients.",
    color: "text-seedrush-orange",
    bgColor: "bg-seedrush-orange/10",
    borderColor: "border-seedrush-orange/20",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-2xl bg-card border ${feature.borderColor} cursor-default`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} ${feature.borderColor} border flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
