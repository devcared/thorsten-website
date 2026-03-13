"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import { staggerContainer, viewportConfig, fadeInUp } from "@/lib/animations";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projekte" className="py-24 lg:py-36 bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeading
            label="Projekte"
            grayWord="Unsere"
            title="Referenzprojekte"
            subtitle="Lassen Sie sich von unseren Arbeiten inspirieren."
            align="left"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            className="flex-shrink-0 self-start sm:self-auto"
          >
            <Link
              href="/projekte"
              className="flex items-center gap-2 px-5 py-2.5 rounded border border-forest text-forest text-[12px] font-medium hover:bg-forest hover:text-white transition-all duration-200 group"
            >
              Alle Projekte
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
