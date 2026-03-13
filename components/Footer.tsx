"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Leaf, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const QUICK_LINKS = [
  { label: "Startseite", href: "#home" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

const SERVICE_LINKS = [
  { label: "Gartenplanung & Design", href: "#leistungen" },
  { label: "Pflasterarbeiten", href: "#leistungen" },
  { label: "Bepflanzung & Grünanlagen", href: "#leistungen" },
  { label: "Zaunbau & Sichtschutz", href: "#leistungen" },
  { label: "Teich- & Wasserbau", href: "#leistungen" },
  { label: "Gartenpflege & Wartung", href: "#leistungen" },
];

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLink = (href: string) => {
    if (href.startsWith("/")) {
      router.push(href);
      return;
    }
    const id = href.replace("#", "");
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111a11]">

      {/* Top CTA bar */}
      <div className="border-b border-white/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-white font-semibold text-[15px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Kostenloses Erstgespräch vereinbaren
            </p>
            <p className="text-white/65 text-[13px] mt-0.5 font-light">
              Wir melden uns innerhalb von 24 Stunden – unverbindlich & kostenlos.
            </p>
          </div>
          <button
            onClick={() => handleLink("#kontakt")}
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/15 hover:bg-white/25 border border-white/25 hover:border-white/40 text-white text-[13px] font-medium tracking-wide transition-all duration-200 group flex-shrink-0"
          >
            Jetzt anfragen
            <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-14 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">

          {/* Brand – 4 cols */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-md bg-white/12 border border-white/20 flex items-center justify-center">
                <Leaf size={15} className="text-white/80" strokeWidth={1.6} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-[14px] font-bold tracking-[0.08em]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  feuerstein
                </span>
                <span className="text-white/55 text-[8px] tracking-[0.16em] uppercase">
                  gartenlandschaftsbau
                </span>
              </div>
            </div>

            <p className="text-white/65 text-[13px] leading-relaxed font-light mb-7 max-w-xs">
              Professioneller Gartenlandschaftsbau in Großostheim, Aschaffenburg
              und dem gesamten Rhein-Main-Gebiet. Seit über 15 Jahren.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 mb-7">
              {[
                { value: "15+", label: "Jahre" },
                { value: "500+", label: "Projekte" },
                { value: "100%", label: "Qualität" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-white text-[18px] font-bold leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {value}
                  </p>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {[
                { label: "Facebook", icon: <Facebook size={13} strokeWidth={1.6} /> },
                { label: "Instagram", icon: <Instagram size={13} strokeWidth={1.6} /> },
                { label: "YouTube", icon: <Youtube size={13} strokeWidth={1.6} /> },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-md flex items-center justify-center bg-white/10 border border-white/20 text-white/60 hover:text-white hover:bg-white/18 hover:border-white/35 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer on large */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Schnelllinks – 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-white/55 text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    type="button"
                    className="text-white/70 hover:text-white text-[13px] font-light transition-colors duration-200 text-left group flex items-center gap-1.5"
                  >
                    <span className="w-3 h-[1px] bg-white/35 group-hover:bg-white/70 group-hover:w-4 transition-all duration-200 inline-block" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen – 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="text-white/55 text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">
              Leistungen
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((s) => (
                <li key={s.label}>
                  <button
                    onClick={() => handleLink(s.href)}
                    type="button"
                    className="text-white/70 hover:text-white text-[13px] font-light transition-colors duration-200 text-left group flex items-center gap-1.5"
                  >
                    <span className="w-3 h-[1px] bg-white/35 group-hover:bg-white/70 group-hover:w-4 transition-all duration-200 inline-block" />
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt – 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-white/55 text-[10px] tracking-[0.2em] uppercase font-semibold mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-white/50 flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-[13px] font-light leading-relaxed">
                  {COMPANY.street}<br />{COMPANY.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s|\//g, "")}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white text-[13px] font-light transition-colors duration-200"
                >
                  <Phone size={13} className="text-white/50 flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white text-[13px] font-light transition-colors duration-200"
                >
                  <Mail size={13} className="text-white/50 flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="pt-1 border-t border-white/15">
                <p className="text-white/50 text-[12px] leading-relaxed font-light pt-3">
                  {COMPANY.hours.weekdays}<br />{COMPANY.hours.saturday}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-[12px] font-light">
            © 2026 Feuerstein Gartenlandschaftsbau · Alle Rechte vorbehalten
          </p>
          <div className="flex items-center gap-1 text-white/40 text-[12px]">
            <Link href="/impressum" className="px-3 py-1 hover:text-white/70 transition-colors duration-200">
              Impressum
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/datenschutz" className="px-3 py-1 hover:text-white/70 transition-colors duration-200">
              Datenschutz
            </Link>
            <span className="text-white/20">·</span>
            <Link href="/sitemap.xml" className="px-3 py-1 hover:text-white/70 transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
