import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Earn", href: "/earn" },
  { label: "For Creators", href: "/creators" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  // { label: 'request access', href: '/request-access' },
  // { label: "Developer Docs", href: "/developers" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/">
          <div className="flex flex-col gap-1">
            <img
              src="/Full_logo_Dark.svg"
              alt="SeedRush Logo"
              className="w-36 h-auto scale-105"
            />
          </div>
        </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href} // use 'to' instead of href
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              onClick={() => {navigate('/request-access')
              }}
              size="default" className="gap-2">
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href} // use 'to' instead of href
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button 
                  onClick={() => {navigate('/request-access')
                  }}
                  variant="hero" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Download SeedRush
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
