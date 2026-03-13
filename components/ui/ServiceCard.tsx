"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/constants";
import { staggerItem } from "@/lib/animations";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <motion.div
      variants={staggerItem}
      className={`group rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-all duration-300 ${
        featured
          ? "bg-forest text-white"
          : "bg-sage hover:bg-sage-hover"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            featured ? "bg-white/15" : "bg-forest/10"
          }`}
        >
          <Icon
            size={19}
            strokeWidth={1.8}
            color={featured ? "white" : "#1C2E1C"}
          />
        </div>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            featured ? "bg-white/20" : "bg-forest/10"
          }`}
        >
          <ArrowUpRight size={14} color={featured ? "white" : "#1C2E1C"} />
        </div>
      </div>

      <div>
        <h3
          className={`text-[16px] font-semibold leading-snug mb-2 ${featured ? "text-white" : "text-forest"}`}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {service.title}
        </h3>
        <p
          className={`text-[13px] leading-relaxed ${featured ? "text-white/70" : "text-mid"}`}
        >
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
