"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, Phone } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver – only on homepage
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection(null);
      return;
    }
    const sectionIds = ["home", "leistungen", "projekte", "ueber-uns", "kontakt"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) {
      router.push(href);
      return;
    }
    const id = href.replace("#", "");
    if (!isHomePage) {
      router.push(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isNavActive = (href: string) => {
    if (href.startsWith("/")) return pathname === href;
    // Anchor links are only ever active on the homepage
    if (!isHomePage) return false;
    return activeSection === href.replace("#", "");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-400 ${
          scrolled
            ? "py-3 bg-white/95 backdrop-blur-sm border-b border-bdr"
            : "py-5 bg-gradient-to-b from-black/55 to-transparent backdrop-blur-[2px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="#home"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <Leaf
                size={18}
                className={`transition-colors duration-300 ${scrolled ? "text-forest" : "text-white"}`}
                strokeWidth={1.8}
              />
              <div className="flex flex-col leading-none">
                <span
                  className={`text-[15px] font-bold tracking-[0.1em] transition-colors duration-300 ${
                    scrolled ? "text-forest" : "text-white"
                  }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  feuerstein
                </span>
                <span
                  className={`text-[9px] tracking-[0.08em] sm:tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${
                    scrolled ? "text-muted" : "text-white/75"
                  }`}
                >
                  gartenlandschaftsbau
                </span>
              </div>
            </Link>

            {/* Desktop Nav – centered */}
            <nav className="hidden md:flex items-center flex-1 justify-center">
              {NAV_ITEMS.map((item) => {
                const isActive = isNavActive(item.href);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${
                      scrolled
                        ? isActive ? "text-forest" : "text-mid hover:text-ink"
                        : isActive ? "text-white" : "text-white/90 hover:text-white"
                    }`}
                    type="button"
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-4 right-4 h-[1.5px]"
                        style={{ backgroundColor: scrolled ? "#1C2E1C" : "rgba(255,255,255,0.8)" }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right icons + CTA */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <a
                href="tel:06026XXXXXXX"
                className={`transition-colors duration-300 ${
                  scrolled ? "text-mid hover:text-forest" : "text-white/90 hover:text-white"
                }`}
                aria-label="Anrufen"
              >
                <Phone size={16} strokeWidth={1.6} />
              </a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick("#kontakt")}
                className={`px-4 py-2 rounded text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 ${
                  scrolled
                    ? "bg-forest text-white hover:bg-forest-hover"
                    : "bg-white text-ink hover:bg-white/90"
                }`}
                type="button"
              >
                Beratung
              </motion.button>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-1.5 transition-colors duration-300 ${
                scrolled ? "text-ink" : "text-white"
              }`}
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              type="button"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-forest flex flex-col"
          >
            <div className="flex-1 flex flex-col items-start justify-center px-8 gap-1 pt-20">
              <p className="bracket-label mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>
                Navigation
              </p>
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white text-4xl font-bold py-2.5 hover:text-white/60 transition-colors duration-200"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  type="button"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => handleNavClick("#kontakt")}
                className="mt-8 px-6 py-3 rounded-md bg-white text-forest text-sm font-semibold"
                type="button"
              >
                Kostenlose Beratung →
              </motion.button>
            </div>
            <div className="pb-8 px-8 text-white/30 text-xs tracking-widest uppercase">
              info@feuerstein-garten.de
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
