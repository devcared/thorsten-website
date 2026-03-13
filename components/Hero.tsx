"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] flex items-center overflow-hidden"
    >
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1800&q=85"
        alt="Professionell gestalteter Garten – Feuerstein Gartenlandschaftsbau"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay – heavier at bottom like screenshot */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/25" />

      {/* Content – left-aligned like screenshot */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-2"
          >
            <span className="w-6 h-px bg-white/60" />
            Feuerstein Gartenlandschaftsbau
          </motion.p>

          {/* Headline – Barlow Condensed heavy */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white font-bold leading-[0.92] tracking-tight uppercase mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(52px, 9vw, 110px)",
              fontWeight: 800,
            }}
          >
            Wir verwandeln
            <br />
            Ihren Garten
            <br />
            in Ihr
            <br />
            Paradies.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/65 text-[15px] leading-relaxed max-w-md mb-10 font-light"
          >
            Seit über 15 Jahren gestaltet Thorsten Feuerstein und sein Team
            einzigartige Gartenlandschaften – von der ersten Skizze bis zum
            letzten Grashalm.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("kontakt")}
              className="px-7 py-3 rounded bg-white text-ink text-[13px] font-semibold hover:bg-white/90 transition-colors duration-200"
              type="button"
            >
              Beratung starten
            </motion.button>
            <button
              onClick={() => scrollTo("projekte")}
              className="flex items-center gap-2 text-white text-[13px] font-medium hover:text-white/75 transition-colors duration-200 group"
              type="button"
            >
              Projekte ansehen
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-5 sm:left-8 lg:left-10 flex items-center gap-4"
      >
        <span className="text-white/50 text-[11px] font-medium tracking-wider">01</span>
        <div className="w-24 h-px bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-white/70"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ delay: 1.3, duration: 1 }}
          />
        </div>
        <span className="text-white/25 text-[11px] font-medium tracking-wider">03</span>
      </motion.div>

      {/* Scroll */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollTo("einleitung")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-300"
        type="button"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={18} className="animate-scroll-bounce" />
      </motion.button>
    </section>
  );
}
