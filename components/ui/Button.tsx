"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "dark" | "white" | "outline-white" | "outline-dark" | "sage";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "dark",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 cursor-pointer select-none";

  const sizes = {
    sm: "px-5 py-2.5 text-[11px] rounded",
    md: "px-6 py-3 text-[12px] rounded-md",
    lg: "px-8 py-3.5 text-[13px] rounded-md",
  };

  const variants: Record<string, string> = {
    dark: "bg-forest text-white hover:bg-forest-hover",
    white: "bg-white text-ink hover:bg-white/90",
    "outline-white": "border border-white text-white hover:bg-white hover:text-ink",
    "outline-dark": "border border-forest text-forest hover:bg-forest hover:text-white",
    sage: "bg-sage text-forest hover:bg-sage-hover",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant] ?? ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>{children}</Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
