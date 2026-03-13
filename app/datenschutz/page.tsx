import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Feuerstein Gartenlandschaftsbau",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen py-24 px-4" style={{ backgroundColor: "#FAF8F2" }}>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8 hover:underline"
          style={{ color: "#4A7C28" }}
        >
          ← Zurück zur Startseite
        </Link>

        <h1
          className="text-4xl font-bold text-[#2C2C2C] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Datenschutzerklärung
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6 text-[#2C2C2C]">
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              1. Datenschutz auf einen Blick
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed text-sm">
              Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck
              der Verarbeitung von personenbezogenen Daten auf dieser Website auf.
              (Platzhalter – bitte durch eine rechtskonforme Datenschutzerklärung ersetzen.)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              2. Verantwortliche Stelle
            </h2>
            <p>Feuerstein Gartenlandschaftsbau</p>
            <p>Thorsten Feuerstein</p>
            <p>Musterstraße 12, 63762 Großostheim</p>
            <p>E-Mail: info@feuerstein-garten.de</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              3. Erhebung und Speicherung personenbezogener Daten
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed text-sm">
              Bei der Nutzung des Kontaktformulars werden die eingegebenen Daten
              (Name, E-Mail, Telefon, Nachricht) nur zur Bearbeitung Ihrer Anfrage
              verwendet und nicht an Dritte weitergegeben. (Platzhalter)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              4. Ihre Rechte
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed text-sm">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das
              Recht auf Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierzu
              an: info@feuerstein-garten.de (Platzhalter)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              5. Cookies
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed text-sm">
              Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich
              technisch notwendige Cookies verwendet. (Platzhalter)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
