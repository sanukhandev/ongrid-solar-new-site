"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import content from "@/data/content.json";

type ContentType = {
  site: { name: string };
  navigation: {
    links: { label: string; href: string }[];
    cta: { primary: string; secondary: string };
  };
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const data = content as unknown as ContentType;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-dark shadow-lg top-0" : "bg-transparent"
      }`}
      style={{ top: "40px" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/SVG/logo.svg"
                alt="OnGrid Solar logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span
              className="font-lato font-bold text-xl text-gray-800 dark:text-white"
              style={{
                background:
                  "linear-gradient(135deg, #ea580c 0%, #f97316 25%, #fb923c 50%, #fbbf24 75%, #f59e0b 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                animation: "gradient-shift 4s ease-in-out infinite",
                fontWeight: 900,
                letterSpacing: "-0.025em",
                filter: "drop-shadow(0 2px 4px rgba(234, 88, 12, 0.1))",
                textShadow: "0 0 1px rgba(234, 88, 12, 0.2)",
              }}
            >
              {data.site.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {data.navigation.links.map((link: any) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${
                  isScrolled
                    ? "text-white dark:text-white"
                    : "text-gray-800 dark:text-gray-300"
                } hover:text-orange-600 transition-colors relative group`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              className="bg-gradient-orange text-white hover:shadow-lg hover-lift"
            >
              {data.navigation.cta.primary}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col gap-4">
              {data.navigation.links.map((link: any) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="ghost" size="sm">
                  {data.navigation.cta.secondary}
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary-hover">
                  {data.navigation.cta.primary}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
