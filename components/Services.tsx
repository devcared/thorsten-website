"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, viewportConfig, fadeInLeft, fadeInRight } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";
import ServiceCard from "./ui/ServiceCard";

export default function Services() {
  return (
    <section id="leistungen" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Top: heading left + image right */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            <SectionHeading
              label="Leistungen"
              grayWord="Unsere"
              title="Leistungen"
              subtitle="Vom kleinen Vorgarten bis zur großen Parkanlage – wir machen alles grün und gestalten mit Leidenschaft."
              align="left"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
            className="relative h-52 rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Gartenlandschaftsbau – Pflasterarbeiten"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-forest/30" />
            <div className="absolute bottom-4 left-4">
              <span className="text-white text-[11px] font-medium tracking-widest uppercase bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded">
                Meisterbetrieb seit 15+ Jahren
              </span>
            </div>
          </motion.div>
        </div>

        {/* 3x2 Card Grid – one featured card (index 2) */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={i === 3}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
