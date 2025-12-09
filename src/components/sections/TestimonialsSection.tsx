import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I went from hobby seeder to covering my home internet bill.",
    author: "Alex M.",
    role: "Independent Seeder",
    avatar: "🌱",
  },
  {
    quote: "Our private tracker finally has reliable seeders at peak hours.",
    author: "Jordan K.",
    role: "Infra Operator",
    avatar: "⚡",
  },
  {
    quote: "Launch day downloads didn't melt our servers.",
    author: "Sam T.",
    role: "Game Studio",
    avatar: "🎮",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why users switch
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card border border-border rounded-2xl p-8"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Quote */}
              <p className="text-lg font-medium mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
