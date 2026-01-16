import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Building, User } from "lucide-react";

export const RequestAccessSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("https://formspree.io/f/xblnnpjy", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    }
  };

  return (
    <section
      id="request-access"
      className="py-20 lg:py-32 relative bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Early access
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Request access to<br />SeedRush
          </h2>

          <p className="text-lg text-muted-foreground">
            Get early access to atomic, pay-per-chunk torrenting powered by BSV.
            Tell us who you are and how you plan to use SeedRush.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8">
            {success && (
              <div className="mb-6 rounded-xl bg-seedrush-green/10 text-seedrush-green px-4 py-3 text-sm">
                Your request has been submitted successfully. We’ll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  name="name"
                  required
                  placeholder="Full name"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              {/* Company */}
              <div className="relative">
                <Building className="absolute left-3 top-3.5 w-5 h-5 text-muted-foreground" />
                <input
                  name="company"
                  placeholder="Company / Organization (optional)"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                rows={4}
                placeholder="What are you requesting SeedRush for?"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />

              {/* CTA */}
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit request"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
