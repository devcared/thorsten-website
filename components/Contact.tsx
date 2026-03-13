"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { fadeInLeft, fadeInRight, viewportConfig } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";

const BETREFF_OPTIONS = [
  "Gartenplanung",
  "Pflasterarbeiten",
  "Bepflanzung",
  "Gartenpflege",
  "Sonstiges",
];

const INPUT_CLASS =
  "w-full border border-bdr bg-cream rounded-md px-4 py-3 text-[14px] text-ink placeholder-muted focus:outline-none focus:border-forest transition-colors duration-200 font-light";

export default function Contact() {
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    betreff: "",
    nachricht: "",
    datenschutz: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          label="Kontakt"
          grayWord="Sprechen Sie"
          title="mit uns"
          subtitle="Wir melden uns innerhalb von 24 Stunden. Kostenlos und unverbindlich."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form – wider */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInLeft}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 gap-4 text-center"
              >
                <CheckCircle2 size={52} className="text-forest" />
                <h3 className="text-2xl font-bold text-ink" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Vielen Dank!
                </h3>
                <p className="text-mid text-[15px] max-w-xs font-light leading-relaxed">
                  Ihre Nachricht wurde übermittelt. Wir melden uns innerhalb von 24 Stunden.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text" name="vorname" value={formData.vorname}
                    onChange={handleChange} placeholder="Vorname *" required
                    className={INPUT_CLASS}
                  />
                  <input
                    type="text" name="nachname" value={formData.nachname}
                    onChange={handleChange} placeholder="Nachname *" required
                    className={INPUT_CLASS}
                  />
                </div>
                <input
                  type="email" name="email" value={formData.email}
                  onChange={handleChange} placeholder="E-Mail-Adresse *" required
                  className={INPUT_CLASS}
                />
                <input
                  type="tel" name="telefon" value={formData.telefon}
                  onChange={handleChange} placeholder="Telefon (optional)"
                  className={INPUT_CLASS}
                />
                <div className="relative">
                  <select
                    name="betreff" value={formData.betreff}
                    onChange={handleChange} required
                    className={`${INPUT_CLASS} appearance-none cursor-pointer`}
                    style={{ color: formData.betreff ? "#191919" : "#8A9C88" }}
                  >
                    <option value="" disabled>Betreff auswählen *</option>
                    {BETREFF_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="#8A9C88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <textarea
                  name="nachricht" value={formData.nachricht}
                  onChange={handleChange} required rows={5}
                  placeholder="Ihre Nachricht *"
                  className={`${INPUT_CLASS} resize-none`}
                />
                <label className="flex gap-3 cursor-pointer items-start">
                  <input
                    type="checkbox" name="datenschutz"
                    checked={formData.datenschutz} onChange={handleChange}
                    required className="w-4 h-4 mt-0.5 accent-forest flex-shrink-0"
                  />
                  <span className="text-[12px] text-mid leading-relaxed font-light">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-forest underline underline-offset-2">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung zu. *
                  </span>
                </label>
                <motion.button
                  type="submit" disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.01 }}
                  whileTap={{ scale: loading ? 1 : 0.99 }}
                  className="w-full py-3.5 rounded-md bg-forest text-white text-[13px] font-semibold tracking-wide hover:bg-forest-hover transition-colors duration-200 disabled:opacity-60"
                >
                  {loading ? "Wird gesendet…" : "Nachricht senden"}
                </motion.button>
                <p className="text-[11px] text-center text-muted">
                  Wir antworten innerhalb von 24 Stunden.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeInRight}
          >
            <div className="bg-cream rounded-xl p-7 space-y-5 border border-bdr">
              <div>
                <p className="font-semibold text-ink text-[15px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {COMPANY.name}
                </p>
                <p className="text-muted text-[12px] mt-0.5">Inh. {COMPANY.owner}</p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <MapPin size={15} />, label: "Adresse", value: `${COMPANY.street}, ${COMPANY.city}` },
                  { icon: <Phone size={15} />, label: "Telefon", value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s|\//g, "")}` },
                  { icon: <Mail size={15} />, label: "E-Mail", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { icon: <Clock size={15} />, label: "Öffnungszeiten", value: `${COMPANY.hours.weekdays} · ${COMPANY.hours.saturday}` },
                ].map(({ icon, label, value, href }) => {
                  const content = (
                    <div className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded bg-sage flex items-center justify-center flex-shrink-0 mt-0.5 text-forest">
                        {icon}
                      </div>
                      <div>
                        <p className="text-[10px] text-muted uppercase tracking-widest font-medium mb-0.5">{label}</p>
                        <p className="text-ink text-[13px] font-medium leading-relaxed">{value}</p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href} className="block hover:opacity-75 transition-opacity">{content}</a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-bdr h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10355.44!2d9.0833!3d49.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a2042e94de3a25%3A0x41fbabf8bc72dcf0!2sGro%C3%9Fostheim!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Feuerstein Gartenlandschaftsbau"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
