"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, viewportConfig } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";
import TestimonialCard from "./ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          label="Kundenstimmen"
          grayWord="Das sagen"
          title="unsere Kunden"
          subtitle="Kundenzufriedenheit ist unser wichtigstes Qualitätsmerkmal."
        />

        <motion.div
          className="grid md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
