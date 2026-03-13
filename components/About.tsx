"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

const USP_ITEMS = [
  { label: "Nachhaltig", desc: "Regionale Pflanzen & umweltfreundliche Materialien" },
  { label: "Meisterqualität", desc: "Handwerkliche Perfektion in jedem Detail" },
  { label: "Persönlich", desc: "Thorsten Feuerstein ist bei jedem Projekt dabei" },
  { label: "Kreativ", desc: "Individuelle Lösungen – keine 08/15-Gärten" },
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Das Team von Feuerstein Gartenlandschaftsbau"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />
            </div>

            {/* Quote card – floating over image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="absolute bottom-6 left-5 right-5 bg-white rounded-xl p-5"
            >
              <p
                className="text-ink text-[14px] leading-relaxed font-light"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                „Für mich ist jeder Garten ein Kunstwerk. Wir arbeiten nicht
                einfach nur – wir erschaffen Lebensräume."
              </p>
              <p className="text-muted text-[11px] font-medium mt-2 tracking-wider uppercase">
                — Thorsten Feuerstein
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
          >
            <p className="bracket-label mb-6">Über uns</p>

            <h2
              className="font-bold leading-[1.05] tracking-tight mb-7"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "#191919",
              }}
            >
              <span style={{ color: "#A8B8A6" }}>Wer steckt hinter</span>
              <br />
              Feuerstein?
            </h2>

            <div className="space-y-4 text-mid text-[15px] leading-relaxed font-light mb-10">
              <p>
                Thorsten Feuerstein gründete das Unternehmen aus purer Leidenschaft
                für Natur und Design. Was als Ein-Mann-Betrieb begann, ist heute ein
                eingespieltes Team aus erfahrenen Gärtnern, Landschaftsbauern und
                Planern.
              </p>
              <p>
                Wir verstehen uns als Partner unserer Kunden – von der ersten Idee
                über die kreative Planung bis zur sorgfältigen Ausführung. Dabei
                leben wir die Werte{" "}
                <span className="text-ink font-medium">
                  Qualität, Zuverlässigkeit, Nachhaltigkeit und Kreativität
                </span>
                .
              </p>
            </div>

            {/* USP Grid – sage green like screenshot */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerContainer}
            >
              {USP_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem}
                  className={`rounded-xl p-5 ${i === 1 ? "bg-forest text-white" : "bg-sage"}`}
                >
                  <p
                    className={`font-semibold text-[14px] mb-1.5 ${i === 1 ? "text-white" : "text-forest"}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p className={`text-[12px] leading-relaxed ${i === 1 ? "text-white/70" : "text-mid"}`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
