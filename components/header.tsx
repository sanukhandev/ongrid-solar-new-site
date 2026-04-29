"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useContent } from "@/hooks/use-content";
import { useLanguage } from "@/contexts/language-context";

type ContentType = {
  site: { name: string };
  navigation: {
    links: { label: string; href: string }[];
    cta: { primary: string; secondary: string };
  };
  contact: {
    phone: string;
  };
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const data = useContent() as unknown as ContentType;
  const { language, setLanguage, isLoading } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
          : "bg-white/60 backdrop-blur-md"
      }`}
      style={{
        boxShadow: isScrolled 
          ? "0 8px 32px 0 rgba(255, 255, 255, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1)"
          : "0 4px 16px 0 rgba(255, 255, 255, 0.05)",
      }}
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
            {data.navigation.links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="text-sm font-semibold text-gray-700 hover:text-orange-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-orange transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center rounded-full border border-orange-400 overflow-hidden text-xs font-semibold relative">
              {isLoading && (
                <div className="absolute inset-0 bg-orange-500/50 backdrop-blur-sm flex items-center justify-center z-10">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <button
                onClick={() => setLanguage("en")}
                disabled={isLoading}
                className={`px-3 py-1.5 transition-colors ${
                  language === "en"
                    ? "bg-orange-500 text-white"
                    : "text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ml")}
                disabled={isLoading}
                className={`px-3 py-1.5 transition-colors ${
                  language === "ml"
                    ? "bg-orange-500 text-white"
                    : "text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                മല
              </button>
            </div>
            <a href={`tel:${data.contact.phone.replace(/[^+0-9]/g, "")}`}>
              <Button
                size="sm"
                className="bg-gradient-orange text-white hover:shadow-lg hover-lift"
              >
                {data.navigation.cta.primary}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 z-50 rounded-lg transition-all duration-200 text-gray-700 bg-white/50 hover:bg-white/80 hover:text-orange-600 backdrop-blur-sm border border-gray-200/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-gray-200/50 bg-white/90 backdrop-blur-xl shadow-lg"
            >
              <nav className="flex flex-col gap-4">
                {data.navigation.links.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    whileTap={{ scale: 0.98 }}
                    className="text-sm font-medium transition-colors px-2 py-1 rounded text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-current/20">
                {/* Language Toggle (mobile) */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {language === "ml" ? "ഭാഷ:" : "Language:"}
                  </span>
                  <div className="flex items-center rounded-full border border-orange-400 overflow-hidden text-xs font-semibold relative">
                    {isLoading && (
                      <div className="absolute inset-0 bg-orange-500/50 backdrop-blur-sm flex items-center justify-center z-10">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    <button
                      onClick={() => setLanguage("en")}
                      disabled={isLoading}
                      className={`px-3 py-1.5 transition-colors ${
                        language === "en"
                          ? "bg-orange-500 text-white"
                          : "text-orange-500 hover:bg-orange-50"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage("ml")}
                      disabled={isLoading}
                      className={`px-3 py-1.5 transition-colors ${
                        language === "ml"
                          ? "bg-orange-500 text-white"
                          : "text-orange-500 hover:bg-orange-50"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      മല
                    </button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                >
                  {data.navigation.cta.secondary}
                </Button>
                <a href={`tel:${data.contact.phone.replace(/[^+0-9]/g, "")}`}>
                  <Button
                    size="sm"
                    className="bg-gradient-orange text-white hover:shadow-lg w-full"
                  >
                    {data.navigation.cta.primary}
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
