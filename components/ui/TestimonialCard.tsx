"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/constants";
import { staggerItem } from "@/lib/animations";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="bg-white rounded-xl p-7 flex flex-col gap-5 border border-bdr hover:border-sage-hover transition-colors duration-300"
    >
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} size={13} fill="#1C2E1C" color="#1C2E1C" />
        ))}
      </div>
      <p
        className="text-[15px] text-ink leading-relaxed font-light flex-1"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        &bdquo;{testimonial.text}&ldquo;
      </p>
      <div className="h-px bg-bdr" />
      <div>
        <p className="font-semibold text-[14px] text-ink">{testimonial.name}</p>
        <p className="text-[12px] text-muted mt-0.5">{testimonial.location}</p>
      </div>
    </motion.div>
  );
}
