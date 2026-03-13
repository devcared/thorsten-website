"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";

export default function Introduction() {
  const scrollToContact = () =>
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="einleitung" className="py-24 lg:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Label + Bold heading + text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <p className="bracket-label mb-8">Werte</p>
            <h2
              className="font-bold leading-[1.05] tracking-tight mb-8"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                color: "#191919",
              }}
            >
              <span style={{ color: "#A8B8A6" }}>Wir stehen für </span>
              mehr als nur einen
              <br />
              schönen Garten.
            </h2>
            <p className="text-mid text-[15px] leading-relaxed font-light mb-10 max-w-lg">
              Feuerstein Gartenlandschaftsbau ist ein inhabergeführtes Unternehmen
              von <span className="text-ink font-medium">Thorsten Feuerstein</span>,
              das handwerkliche Meisterqualität mit kreativem Design verbindet.
              Jeder Garten wird individuell geplant und mit Liebe zum Detail
              umgesetzt – vom ersten Gespräch bis zur finalen Abnahme.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-bdr">
              {[
                { value: "15+", label: "Jahre Erfahrung" },
                { value: "500+", label: "Projekte" },
                { value: "100%", label: "Leidenschaft" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="text-3xl font-bold text-forest"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-muted text-[12px] mt-0.5 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Numbered service list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
          >
            <motion.div
              className="space-y-0"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerContainer}
            >
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={staggerItem}
                    className="group flex items-center justify-between py-5 border-b border-bdr hover:border-forest/30 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[11px] font-medium text-muted tracking-widest w-6 flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-3">
                        <Icon size={16} strokeWidth={1.6} className="text-mid group-hover:text-forest transition-colors duration-300" />
                        <span
                          className="text-[15px] font-medium text-ink group-hover:text-forest transition-colors duration-300"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {service.title}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={15}
                      className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-forest transition-all duration-300"
                    />
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="mt-8 px-6 py-3 rounded-md bg-forest text-white text-[12px] font-semibold tracking-wide uppercase hover:bg-forest-hover transition-colors duration-200"
              type="button"
            >
              Beratung starten
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
