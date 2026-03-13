"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/constants";
import { staggerItem } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-bdr"
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="text-white/60 text-[10px] font-medium tracking-[0.12em] uppercase mb-1">
              {project.category}
            </p>
            <h3 className="text-white font-semibold text-[15px] leading-tight">
              {project.name}
            </h3>
            <p className="text-white/60 text-[12px] mt-0.5">{project.location}</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <ArrowUpRight size={14} color="white" />
          </div>
        </div>
      </div>
      <div className="absolute top-3 left-3">
        <span className="bg-white/90 text-ink text-[10px] font-medium px-2.5 py-1 rounded-full">
          {project.location}
        </span>
      </div>
    </motion.div>
  );
}
