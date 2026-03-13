"use client";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  grayWord?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  grayWord,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  return (
    <motion.div
      className={`max-w-3xl mb-14 ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeInUp}
    >
      {label && (
        <p className="bracket-label mb-4" style={{ color: light ? "rgba(255,255,255,0.55)" : undefined }}>
          {label}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 ${light ? "text-white" : "text-ink"}`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {grayWord && (
          <span style={{ color: light ? "rgba(255,255,255,0.35)" : "#A8B8A6" }}>{grayWord} </span>
        )}
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[15px] leading-relaxed font-light ${light ? "text-white/65" : "text-mid"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
