import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feuerstein Gartenlandschaftsbau | Ihr Gartenexperte in Großostheim & Umgebung",
  description:
    "Thorsten Feuerstein und sein Team gestalten individuelle Gärten, Terrassen und Grünanlagen. Professioneller Gartenlandschaftsbau in Großostheim, Aschaffenburg und dem Rhein-Main-Gebiet.",
  keywords: "Gartenlandschaftsbau, Großostheim, Aschaffenburg, Garten, Terrasse, Bepflanzung, Pflasterarbeiten, Feuerstein",
  openGraph: {
    title: "Feuerstein Gartenlandschaftsbau | Ihr Gartenexperte in Großostheim & Umgebung",
    description:
      "Thorsten Feuerstein und sein Team gestalten individuelle Gärten, Terrassen und Grünanlagen im Rhein-Main-Gebiet.",
    type: "website",
    locale: "de_DE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Feuerstein Gartenlandschaftsbau",
  description:
    "Professioneller Gartenlandschaftsbau in Großostheim, Aschaffenburg und dem Rhein-Main-Gebiet.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Musterstraße 12",
    addressLocality: "Großostheim",
    postalCode: "63762",
    addressCountry: "DE",
  },
  telephone: "06026XXXXXXX",
  email: "info@feuerstein-garten.de",
  openingHours: ["Mo-Fr 07:00-17:00"],
  founder: {
    "@type": "Person",
    name: "Thorsten Feuerstein",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
