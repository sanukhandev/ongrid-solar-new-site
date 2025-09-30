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

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 transition-all duration-300 ${
        isScrolled
          ? "z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 top-0"
          : "z-30 bg-white/10 backdrop-blur-sm"
      }`}
      style={{ top: isScrolled ? "0" : "52px" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={() => handleNavClick("#home")}
          >
            <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/SVG/logo.svg"
                alt="OnGrid Solar logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span
              className={`font-lato font-bold text-xl transition-colors ${
                isScrolled
                  ? "text-gray-800 dark:text-white"
                  : "text-white font-black drop-shadow-md"
              }`}
            >
              {data.site.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {data.navigation.links.map((link: any) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-all duration-300 relative group cursor-pointer px-3 py-2 rounded-lg ${
                  isScrolled
                    ? "text-gray-700 dark:text-gray-200 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                    : "text-white hover:text-orange-200 hover:bg-white/10 font-semibold shadow-sm"
                }`}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-4"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={scrollToContact}
              size="sm"
              className={`transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isScrolled
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  : "bg-white text-orange-600 hover:bg-orange-50 shadow-md"
              }`}
            >
              {data.navigation.cta.primary}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm shadow-sm"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden py-4 border-t animate-fade-in shadow-lg ${
              isScrolled
                ? "bg-white/98 dark:bg-gray-900/98 backdrop-blur-lg border-gray-200/30 dark:border-gray-700/30"
                : "bg-white/98 backdrop-blur-lg border-white/30"
            }`}
          >
            <nav className="flex flex-col gap-2">
              {data.navigation.links.map((link: any) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-orange-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:shadow-sm"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200/50 dark:border-gray-700/50 px-2">
                <Button
                  onClick={scrollToContact}
                  size="sm"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
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
