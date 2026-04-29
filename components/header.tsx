"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useContent } from "@/hooks/use-content";

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header Bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl shadow-md border-b border-gray-200/60"
            : "bg-white/70 backdrop-blur-md border-b border-white/30"
        }`}
        style={{ top: "32px" }}
      >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[64px] md:h-[72px]">
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
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <a href={`tel:${data.contact.phone.replace(/[^+0-9]/g, "")}`}>
              <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
                {data.navigation.cta.primary}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          {/* Mobile Hamburger */}
          <motion.button
            whileTap={{ scale: 0.88 }}
            className="md:hidden p-2 rounded-xl text-gray-700 bg-white/60 hover:bg-orange-50 hover:text-orange-600 backdrop-blur-sm border border-gray-200/60 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="block">
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="block">
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
      </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[45] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-[46] shadow-2xl md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280, mass: 0.7 }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white shrink-0">
                <div className="flex items-center gap-2">
                  <img src="/SVG/logo.svg" alt="logo" className="w-8 h-8 object-contain" />
                  <span className="font-black text-base" style={{ background: "linear-gradient(135deg, #ea580c, #f97316, #fbbf24)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                    {data.site.name}
                  </span>
                </div>
                <motion.button whileTap={{ scale: 0.88 }} onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full bg-gray-100 hover:bg-orange-50 text-gray-500 hover:text-orange-600 transition-colors">
                  <X size={18} />
                </motion.button>
              </div>
              <nav className="flex-1 flex flex-col px-4 py-4 gap-1 overflow-y-auto">
                {data.navigation.links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.055, duration: 0.28, ease: "easeOut" }}
                    className="flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-orange-600 py-3.5 px-4 rounded-xl hover:bg-orange-50 transition-all duration-150 border-b border-gray-50 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                className="p-5 border-t border-gray-100 bg-gray-50/80 shrink-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <a href={`tel:${data.contact.phone.replace(/[^+0-9]/g, "")}`} className="block" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold py-5 text-base rounded-xl hover:shadow-lg transition-all duration-200">
                    {data.navigation.cta.primary}
                  </Button>
                </a>
                <p className="text-center text-xs text-gray-400 mt-2 font-medium tracking-wide">{data.contact.phone}</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
