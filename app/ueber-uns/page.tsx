"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const TEAM = [
  {
    name: "Thorsten Feuerstein",
    role: "Gründer & Chefplaner",
    desc: "Über 15 Jahre Erfahrung in der Gartengestaltung. Sein Herzensanliegen: Gärten als lebendige Kunstwerke.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&q=80&fit=crop&crop=face",
  },
  {
    name: "Anna Kühn",
    role: "Landschaftsarchitektin",
    desc: "Spezialisiert auf nachhaltige Pflanzenkonzepte und naturnahe Gartengestaltung.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&q=80&fit=crop&crop=face",
  },
  {
    name: "Marcus Weber",
    role: "Bauführer",
    desc: "Meister im Garten- und Landschaftsbau mit Expertise in Pflasterarbeiten und Teichbau.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&q=80&fit=crop&crop=face",
  },
  {
    name: "Lisa Schmidt",
    role: "Pflanzenexpertin",
    desc: "Botanikerin mit Leidenschaft für seltene Pflanzenarten und saisonale Bepflanzungskonzepte.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&q=80&fit=crop&crop=face",
  },
];

const VALUES = [
  {
    icon: "♡",
    title: "Leidenschaft in jeder Arbeit",
    desc: "Wir setzen uns mit Herzblut für die Gestaltung nachhaltiger Grünflächen für unsere Kunden ein.",
  },
  {
    icon: "⟳",
    title: "Zusammenarbeit an erster Stelle",
    desc: "Ihre Träume kombiniert mit unserem 15-jährigen Gartenplanungs-Know-how.",
  },
  {
    icon: "✦",
    title: "Nachhaltigkeit im Fokus",
    desc: "Wir lieben die Natur – ein Garten nach dem anderen, damit Sie die Schönheit der Umwelt genießen können.",
  },
  {
    icon: "◈",
    title: "Kreativität entfalten",
    desc: "Innovative Designs, die auffallen – damit Ihr Garten wirklich einzigartig wird.",
  },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=75",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=75",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=75",
  "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&q=75",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=75",
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO BANNER ── */}
        <div className="relative h-[380px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?w=1600&q=80"
            alt="Das Team von Feuerstein Gartenlandschaftsbau"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/40" />
          <div className="absolute inset-0 flex flex-col justify-end pb-12 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto w-full left-0 right-0">
            <div className="flex items-center gap-2 text-white/50 text-[11px] tracking-widest uppercase mb-5">
              <Link href="/" className="hover:text-white/80 transition-colors duration-200">Startseite</Link>
              <span className="text-white/25">|</span>
              <span className="text-white/75">Über uns</span>
            </div>
            <h1
              className="text-white font-bold uppercase leading-none"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(52px, 8vw, 100px)",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.3)" }}>Über </span>
              Uns
            </h1>
          </div>
        </div>

        {/* ── INTRO: CRAFTING DREAMS ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-3 gap-10 mb-14">
              <motion.div
                initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInLeft}
                className="lg:col-span-1"
              >
                <h2
                  className="font-bold leading-[1.0] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: "#191919" }}
                >
                  <span style={{ color: "#A8B8A6" }}>Gartenträume </span>
                  in die Realität umsetzen
                </h2>
              </motion.div>
              <motion.p
                initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUp}
                className="text-mid text-[14px] leading-relaxed font-light"
              >
                Bei Feuerstein Gartenlandschaftsbau sind wir leidenschaftlich darin, Außenbereiche in atemberaubende Gärten zu verwandeln, die eine einzigartige Geschichte erzählen. Unsere Reise begann vor über einem Jahrzehnt aus einer gemeinsamen Leidenschaft für Natur und Design.
              </motion.p>
              <motion.p
                initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUp}
                className="text-mid text-[14px] leading-relaxed font-light"
              >
                Seitdem haben wir uns der Schaffung von Gärten gewidmet, die Ihre Immobilie aufwerten. Unser Engagement für Nachhaltigkeit, Innovation und Zusammenarbeit ist das Fundament unseres Erfolgs.
              </motion.p>
            </div>

            {/* Two images */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInLeft}
                className="col-span-1 relative rounded-xl overflow-hidden aspect-[3/4] group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80"
                  alt="Team bei der Arbeit" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <span className="text-white text-lg">▶</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInRight}
                className="col-span-2 relative rounded-xl overflow-hidden group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80"
                  alt="Fertiggestellter Garten" fill className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="66vw"
                />
                <div className="absolute bottom-4 right-4">
                  <Link
                    href="/projekte"
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-ink text-[11px] font-semibold px-4 py-2 rounded hover:bg-white transition-colors duration-200"
                  >
                    Projekte entdecken <ArrowUpRight size={13} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── VALUES (dark forest green) ── */}
        <section className="bg-forest py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Left: label + numbered list + heading + CTA */}
              <div className="lg:border-r border-white/10 lg:pr-16 pb-16 lg:pb-0">
                <p className="bracket-label mb-8" style={{ color: "rgba(255,255,255,0.3)" }}>Werte</p>

                {/* Numbered list */}
                <div className="space-y-0 mb-10">
                  {["Gartenplanung & Design", "Pflasterarbeiten & Wegebau", "Bepflanzung & Grünanlagen"].map((item, i) => (
                    <div key={item} className="flex items-center justify-between py-4 border-b border-white/10">
                      <span className="text-white/75 text-[14px] font-light">{item}</span>
                      <span className="text-white/30 text-[12px] font-medium tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>

                <h2
                  className="font-bold leading-[1.0] uppercase text-white mb-10"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)" }}
                >
                  Wir sind anders
                  <br />
                  in jeder Hinsicht
                </h2>

                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById("kontakt") && (window.location.href = "/#kontakt")}
                  className="px-6 py-3 bg-white text-forest text-[12px] font-semibold rounded hover:bg-white/90 transition-colors duration-200"
                  type="button"
                >
                  Beratung starten
                </motion.button>
              </div>

              {/* Right: image + 4 value cards */}
              <div className="lg:pl-16 pt-16 lg:pt-0">
                <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-8">
                  <Image
                    src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80"
                    alt="Gartenarbeit" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-forest/30" />
                </div>

                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
                >
                  {VALUES.map((v, i) => (
                    <motion.div key={v.title} variants={staggerItem}
                      className={`rounded-xl p-5 ${i === 1 ? "bg-white/15" : "bg-white/8"}`}
                      style={{ backgroundColor: i === 1 ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)" }}
                    >
                      <span className="text-white/50 text-lg block mb-2">{v.icon}</span>
                      <p className="text-white font-semibold text-[13px] mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {v.title}
                      </p>
                      <p className="text-white/50 text-[12px] leading-relaxed font-light">{v.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex items-end justify-between mb-14">
              <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUp}>
                <p className="bracket-label mb-4">Team</p>
                <h2
                  className="font-bold leading-[1.0] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(30px, 4vw, 52px)", color: "#191919" }}
                >
                  <span style={{ color: "#A8B8A6" }}>Unser Team der </span>
                  <br />
                  Leidenschaft
                </h2>
              </motion.div>
              <div className="hidden sm:flex items-center gap-3 text-[12px] text-muted mb-2">
                <span>1 / 2</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border border-bdr flex items-center justify-center hover:border-forest hover:text-forest transition-all duration-200" type="button">‹</button>
                  <button className="w-8 h-8 rounded-full border border-bdr flex items-center justify-center hover:border-forest hover:text-forest transition-all duration-200" type="button">›</button>
                </div>
              </div>
            </div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
            >
              {TEAM.map((member, i) => (
                <motion.div key={member.name} variants={staggerItem}
                  className="group relative rounded-xl overflow-hidden cursor-pointer bg-white"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={member.image} alt={member.name} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={14} color="white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-[14px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {member.name}
                      </p>
                      <p className="text-white/65 text-[11px] mt-0.5">{member.role}</p>
                    </div>
                  </div>
                  {/* Hover description */}
                  <div className="p-4 bg-sage border-t border-bdr">
                    <p className="text-mid text-[12px] leading-relaxed font-light">{member.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PARTNER LOGOS ── */}
        <section className="py-10 bg-white border-y border-bdr">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-center justify-between gap-8 opacity-40">
              {["Meisterbetrieb", "IHK Zertifiziert", "Naturstein-Fachbetrieb", "BUGA Partner", "BGL Mitglied", "DIN EN ISO"].map((name) => (
                <div key={name} className="flex items-center gap-2">
                  <Leaf size={14} className="text-forest" />
                  <span className="text-ink text-[11px] font-semibold tracking-widest uppercase">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY / OUR WORK ── */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex items-end justify-between mb-12">
              <motion.div initial="hidden" whileInView="visible" viewport={viewportConfig} variants={fadeInUp}>
                <p className="bracket-label mb-4">Galerie</p>
                <h2
                  className="font-bold leading-[0.92] tracking-tight uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(48px, 7vw, 90px)", color: "#191919" }}
                >
                  <span style={{ color: "#A8B8A6" }}>Unsere </span>
                  <br />
                  Arbeiten
                </h2>
              </motion.div>
              <Link
                href="/projekte"
                className="hidden sm:flex items-center gap-2 text-[12px] font-medium text-forest hover:text-forest-hover transition-colors duration-200 border-b border-forest pb-0.5 mb-2"
              >
                Alle Projekte <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* Masonry-style grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-3 gap-3"
              initial="hidden" whileInView="visible" viewport={viewportConfig} variants={staggerContainer}
            >
              {GALLERY.map((src, i) => (
                <motion.div
                  key={src}
                  variants={staggerItem}
                  className={`group relative overflow-hidden rounded-xl ${
                    i === 0 ? "row-span-2 aspect-[3/4] lg:row-span-1 lg:aspect-[4/5]" : "aspect-[4/3]"
                  } ${i === 4 ? "bg-forest flex items-center justify-center" : ""}`}
                >
                  {i === 4 ? (
                    <div className="w-full h-full bg-forest flex flex-col items-center justify-center gap-3 p-6">
                      <p className="text-white text-[11px] tracking-widest uppercase font-medium">Projekt A</p>
                      <p className="text-white/40 text-[11px]">2023</p>
                    </div>
                  ) : (
                    <>
                      <Image
                        src={src} alt={`Gartenarbeit ${i + 1}`} fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-400" />
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
