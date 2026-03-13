import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Feuerstein Gartenlandschaftsbau",
};

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6 text-[#2C2C2C]">
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p>Feuerstein Gartenlandschaftsbau</p>
            <p>Inhaber: Thorsten Feuerstein</p>
            <p>Musterstraße 12</p>
            <p>63762 Großostheim</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Kontakt
            </h2>
            <p>Telefon: 06026 / XXX XXXX</p>
            <p>E-Mail: info@feuerstein-garten.de</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>Berufsbezeichnung: Gärtner / Landschaftsgärtner (Meisterbetrieb)</p>
            <p>Zuständige Kammer: Handwerkskammer Unterfranken</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              DE XXX XXX XXX (Platzhalter)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Haftungsausschluss
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed text-sm">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
              für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
              ausschließlich deren Betreiber verantwortlich. (Platzhalter-Text)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
