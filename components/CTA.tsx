"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export default function CTA() {
  const scrollToContact = () =>
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 lg:py-36 bg-forest overflow-hidden relative">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
        >
          {/* Label */}
          <p className="bracket-label mb-8" style={{ color: "rgba(255,255,255,0.35)" }}>
            Jetzt starten
          </p>

          {/* Giant text like screenshot */}
          <div className="mb-12">
            <h2
              className="font-bold leading-[0.92] tracking-tight uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(52px, 10vw, 130px)",
                color: "rgba(255,255,255,0.18)",
              }}
            >
              Für Ihren
            </h2>
            <h2
              className="font-bold leading-[0.92] tracking-tight uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(52px, 10vw, 130px)",
                color: "white",
              }}
            >
              Traumgarten
            </h2>
            <h2
              className="font-bold leading-[0.92] tracking-tight uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(52px, 10vw, 130px)",
                color: "rgba(255,255,255,0.18)",
              }}
            >
              sind wir da.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-white text-forest text-[13px] font-semibold hover:bg-white/90 transition-colors duration-200 group"
              type="button"
            >
              Beratungstermin vereinbaren
              <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.button>

            <a
              href="tel:06026XXXXXXX"
              className="flex items-center gap-3 text-white/60 hover:text-white/90 transition-colors duration-200"
            >
              <Phone size={16} strokeWidth={1.6} />
              <span className="text-[13px]">06026 / XXX XXXX</span>
            </a>
          </div>

          {/* Sub-text */}
          <p className="text-white/35 text-[13px] mt-8 max-w-md font-light leading-relaxed">
            Kontaktieren Sie uns für eine kostenlose und unverbindliche Erstberatung.
            Thorsten Feuerstein freut sich auf Ihr Projekt.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
