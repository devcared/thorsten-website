"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowUpDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import type { Metadata } from "next";

const PROJECTS = [
  {
    id: "p1",
    name: "Moderner Stadtgarten",
    location: "Frankfurt am Main",
    category: "Pflasterarbeiten",
    year: "2024",
    service: "Pflasterarbeiten & Bepflanzung",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    imageAlt: "Moderner Stadtgarten in Frankfurt",
  },
  {
    id: "p2",
    name: "Romantischer Landhausgarten",
    location: "Aschaffenburg",
    category: "Gartenplanung",
    year: "2024",
    service: "Gartenplanung & Design",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
    imageAlt: "Romantischer Landhausgarten in Aschaffenburg",
  },
  {
    id: "p3",
    name: "Naturteich mit Bachanlage",
    location: "Großostheim",
    category: "Sonstiges",
    year: "2023",
    service: "Teich- & Wasserbau",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
    imageAlt: "Naturteich mit Bachanlage in Großostheim",
  },
  {
    id: "p4",
    name: "Mediterrane Terrassenanlage",
    location: "Würzburg",
    category: "Pflasterarbeiten",
    year: "2023",
    service: "Pflasterarbeiten & Wegebau",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
    imageAlt: "Mediterrane Terrassenanlage in Würzburg",
  },
  {
    id: "p5",
    name: "Minimalistischer Vorgarten",
    location: "Darmstadt",
    category: "Bepflanzung",
    year: "2022",
    service: "Bepflanzung & Grünanlagen",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=900&q=80",
    imageAlt: "Minimalistischer Vorgarten in Darmstadt",
  },
  {
    id: "p6",
    name: "Familiengarten mit Pool",
    location: "Hanau",
    category: "Gartenplanung",
    year: "2022",
    service: "Gartenplanung & Pflasterarbeiten",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80",
    imageAlt: "Familiengarten mit Pool in Hanau",
  },
  {
    id: "p7",
    name: "Japanischer Zen-Garten",
    location: "Offenbach",
    category: "Gartenplanung",
    year: "2021",
    service: "Gartenplanung & Design",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80",
    imageAlt: "Japanischer Zen-Garten in Offenbach",
  },
  {
    id: "p8",
    name: "Repräsentativer Parkgarten",
    location: "Aschaffenburg",
    category: "Bepflanzung",
    year: "2021",
    service: "Alle Gewerke",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=900&q=80",
    imageAlt: "Repräsentativer Parkgarten in Aschaffenburg",
  },
];

const CATEGORIES = ["Alle", "Gartenplanung", "Pflasterarbeiten", "Bepflanzung", "Sonstiges"];

export default function ProjektePage() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [sortAZ, setSortAZ] = useState(false);

  let filtered = activeCategory === "Alle"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  if (sortAZ) {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <div className="relative h-[380px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80"
            alt="Unsere Referenzprojekte – Feuerstein Gartenlandschaftsbau"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/40" />
          <div className="absolute inset-0 flex flex-col justify-end pb-12 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full left-0 right-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/50 text-[11px] tracking-widest uppercase mb-5">
              <Link href="/" className="hover:text-white/80 transition-colors duration-200">Startseite</Link>
              <span className="text-white/25">|</span>
              <span className="text-white/75">Projekte</span>
            </div>
            <h1
              className="text-white font-bold uppercase leading-none"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(52px, 8vw, 100px)",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.3)" }}>Unsere </span>
              Projekte
            </h1>
          </div>
        </div>

        {/* Filter + Sort Bar */}
        <div className="bg-white border-b border-bdr sticky top-[56px] z-30">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-14 flex items-center justify-between gap-6">
            <button
              onClick={() => setSortAZ((v) => !v)}
              className="flex items-center gap-2 text-[11px] font-medium tracking-wider text-mid hover:text-ink transition-colors duration-200"
              type="button"
            >
              <ArrowUpDown size={13} />
              Sort A – Z
              {sortAZ && <span className="text-forest">↑</span>}
            </button>

            <div className="flex items-center gap-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 text-[12px] font-medium tracking-wide transition-all duration-200 border-b-2 ${
                    activeCategory === cat
                      ? "text-forest border-forest"
                      : "text-mid border-transparent hover:text-ink"
                  }`}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="bg-cream">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + String(sortAZ)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className="group grid lg:grid-cols-[1fr_1fr] gap-0 border-b border-bdr py-16 lg:py-20 items-center cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-xl aspect-[16/10] lg:aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>

                    {/* Details */}
                    <div className="lg:pl-14 pt-6 lg:pt-0 flex flex-col justify-between h-full">
                      <div>
                        <p className="text-muted text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
                          {project.service}
                        </p>
                        <h2
                          className="font-bold leading-[0.92] tracking-tight uppercase text-ink group-hover:text-forest transition-colors duration-300"
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(40px, 5.5vw, 80px)",
                          }}
                        >
                          {project.name.split(" ").map((word, wi) => (
                            <span key={wi}>
                              {wi % 2 === 0 ? (
                                <span style={{ color: wi === 0 ? "#A8B8A6" : "inherit" }}>
                                  {word}{" "}
                                </span>
                              ) : (
                                <span>{word} </span>
                              )}
                            </span>
                          ))}
                        </h2>
                      </div>

                      {/* Metadata */}
                      <div className="flex gap-10 mt-8 pt-8 border-t border-bdr">
                        <div>
                          <p className="text-muted text-[10px] tracking-[0.2em] uppercase font-medium mb-1">Jahr</p>
                          <p className="text-ink font-bold text-[14px]">{project.year}</p>
                        </div>
                        <div>
                          <p className="text-muted text-[10px] tracking-[0.2em] uppercase font-medium mb-1">Standort</p>
                          <p className="text-ink font-bold text-[14px] uppercase">{project.location}</p>
                        </div>
                        <div>
                          <p className="text-muted text-[10px] tracking-[0.2em] uppercase font-medium mb-1">Leistung</p>
                          <p className="text-ink font-bold text-[14px] uppercase">{project.category}</p>
                        </div>
                        <div className="ml-auto self-end">
                          <div className="w-10 h-10 rounded-full border border-bdr flex items-center justify-center group-hover:bg-forest group-hover:border-forest transition-all duration-300">
                            <ArrowUpRight size={16} className="text-mid group-hover:text-white transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {filtered.length === 0 && (
                  <div className="py-24 text-center text-muted text-[14px]">
                    Keine Projekte in dieser Kategorie.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
