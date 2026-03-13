import {
  PenTool,
  Layers,
  Flower2,
  Shield,
  Waves,
  Scissors,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const COMPANY = {
  name: "Feuerstein Gartenlandschaftsbau",
  owner: "Thorsten Feuerstein",
  street: "Musterstraße 12",
  city: "63762 Großostheim",
  phone: "06026 / XXX XXXX",
  email: "info@feuerstein-garten.de",
  hours: {
    weekdays: "Mo–Fr: 07:00–17:00 Uhr",
    saturday: "Sa: nach Vereinbarung",
  },
};

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    id: "gartenplanung",
    title: "Gartenplanung & Design",
    description:
      "Individuelle Gartenkonzepte, 3D-Visualisierungen, Pflanzpläne und Materialberatung. Wir planen Ihren Traumgarten von A bis Z.",
    icon: PenTool,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    imageAlt: "Gartenplanung und Design – Skizze eines Gartenkonzepts",
  },
  {
    id: "pflasterarbeiten",
    title: "Pflasterarbeiten & Wegebau",
    description:
      "Terrassen, Einfahrten, Gartenwege und Sitzplätze aus Naturstein, Klinker oder Betonstein – fachgerecht und dauerhaft verlegt.",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Pflasterarbeiten und Wegebau – Natursteinteasse",
  },
  {
    id: "bepflanzung",
    title: "Bepflanzung & Grünanlagen",
    description:
      "Professionelle Bepflanzung von Beeten, Rabatten und Grünanlagen. Wir wählen die perfekten Pflanzen für Ihren Standort.",
    icon: Flower2,
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    imageAlt: "Bepflanzung und Grünanlagen – bunte Gartenbeete",
  },
  {
    id: "zaunbau",
    title: "Zaunbau & Sichtschutz",
    description:
      "Holzzäune, Metallzäune, Gabionen und lebende Hecken – für Privatsphäre und ein stimmiges Gesamtbild.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?w=800&q=80",
    imageAlt: "Zaunbau und Sichtschutz – Holzzaun im Garten",
  },
  {
    id: "teichbau",
    title: "Teich- & Wasserbau",
    description:
      "Gartenteiche, Bachläufe, Brunnen und Wasserspiele – wir bringen das beruhigende Element Wasser in Ihren Garten.",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    imageAlt: "Teich- und Wasserbau – Gartenteich mit Wasserpflanzen",
  },
  {
    id: "gartenpflege",
    title: "Gartenpflege & Wartung",
    description:
      "Regelmäßige Rasenpflege, Heckenschnitt, Baumpflege und saisonale Bepflanzung – Ihr Garten bleibt das ganze Jahr über gepflegt.",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80",
    imageAlt: "Gartenpflege und Wartung – Rasenpflege und Heckenschnitt",
  },
];

export interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  image: string;
  imageAlt: string;
}

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Moderner Stadtgarten",
    location: "Frankfurt am Main",
    category: "Pflasterarbeiten & Bepflanzung",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    imageAlt: "Moderner Stadtgarten in Frankfurt",
  },
  {
    id: "p2",
    name: "Romantischer Landhausgarten",
    location: "Aschaffenburg",
    category: "Gartenplanung & Design",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    imageAlt: "Romantischer Landhausgarten in Aschaffenburg",
  },
  {
    id: "p3",
    name: "Naturteich mit Bachanlage",
    location: "Großostheim",
    category: "Teich- & Wasserbau",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    imageAlt: "Naturteich mit Bachanlage in Großostheim",
  },
  {
    id: "p4",
    name: "Mediterrane Terrassenanlage",
    location: "Würzburg",
    category: "Pflasterarbeiten & Wegebau",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    imageAlt: "Mediterrane Terrassenanlage in Würzburg",
  },
  {
    id: "p5",
    name: "Minimalistischer Vorgarten",
    location: "Darmstadt",
    category: "Bepflanzung & Grünanlagen",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    imageAlt: "Minimalistischer Vorgarten in Darmstadt",
  },
  {
    id: "p6",
    name: "Familiengarten mit Pool",
    location: "Hanau",
    category: "Gartenplanung & Pflasterarbeiten",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    imageAlt: "Familiengarten mit Pool in Hanau",
  },
  {
    id: "p7",
    name: "Japanischer Zen-Garten",
    location: "Offenbach",
    category: "Gartenplanung & Design",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    imageAlt: "Japanischer Zen-Garten in Offenbach",
  },
  {
    id: "p8",
    name: "Repräsentativer Parkgarten",
    location: "Aschaffenburg",
    category: "Alle Gewerke",
    image:
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&q=80",
    imageAlt: "Repräsentativer Parkgarten in Aschaffenburg",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  stars: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Familie Weber",
    location: "Großostheim",
    text: "Herr Feuerstein und sein Team haben unseren Garten komplett umgestaltet. Von der Terrasse über den Rasen bis zur Bepflanzung – alles perfekt! Wir genießen jeden Tag draußen.",
    stars: 5,
  },
  {
    id: "t2",
    name: "Dr. Markus Stein",
    location: "Aschaffenburg",
    text: "Professionell, zuverlässig und mit einem unglaublichen Auge für Details. Unser neuer Garten ist genau so geworden, wie wir ihn uns vorgestellt haben. Vielen Dank!",
    stars: 5,
  },
  {
    id: "t3",
    name: "Sandra & Michael Braun",
    location: "Darmstadt",
    text: "Wir hatten nur eine vage Idee und Herr Feuerstein hat daraus ein Gesamtkonzept entwickelt, das uns sprachlos gemacht hat. Absolute Empfehlung!",
    stars: 5,
  },
];

export const STATS = [
  { label: "Jahre Erfahrung", value: "15+", icon: "🏅" },
  { label: "Abgeschlossene Projekte", value: "500+", icon: "🌿" },
  { label: "Leidenschaft", value: "100%", icon: "❤️" },
  { label: "Meisterbetrieb", value: "✓", icon: "🏆" },
];

export const NAV_ITEMS = [
  { label: "Startseite", href: "#home" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];
