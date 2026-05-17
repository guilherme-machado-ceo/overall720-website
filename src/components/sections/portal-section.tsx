"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Cpu,
  Shield,
  ExternalLink,
  Compass,
} from "lucide-react";

/* ───────────────────────── GLOBAL INTELLIGENCE PORTAL SECTION ───────────────────────── */

interface PortalLink {
  name: string;
  url: string;
}

interface PortalPillar {
  title: string;
  color: string;
  colorBg: string;
  borderColor: string;
  icon: typeof Globe2;
  links: PortalLink[];
}

const portalPillars: PortalPillar[] = [
  {
    title: "Geopolítica",
    color: "#d4a853",
    colorBg: "rgba(212, 168, 83, 0.1)",
    borderColor: "rgba(212, 168, 83, 0.2)",
    icon: Globe2,
    links: [
      { name: "Council on Foreign Relations", url: "https://cfr.org" },
      { name: "Chatham House", url: "https://chathamhouse.org" },
      { name: "Brookings Institution", url: "https://brookings.edu" },
      { name: "RAND Corporation", url: "https://rand.org" },
      { name: "International Crisis Group", url: "https://crisisgroup.org" },
      { name: "World Economic Forum", url: "https://weforum.org" },
      { name: "Carnegie Endowment", url: "https://carnegieendowment.org" },
      { name: "SIPRI", url: "https://sipri.org" },
    ],
  },
  {
    title: "Politech",
    color: "#0ea5e9",
    colorBg: "rgba(14, 165, 233, 0.1)",
    borderColor: "rgba(14, 165, 233, 0.2)",
    icon: Cpu,
    links: [
      { name: "MIT Technology Review", url: "https://technologyreview.com" },
      { name: "AI Index — Stanford HAI", url: "https://aiindex.stanford.edu" },
      { name: "OpenAI Research", url: "https://openai.com/research" },
      { name: "DeepMind", url: "https://deepmind.google" },
      { name: "ArXiv", url: "https://arxiv.org" },
      { name: "Our World in Data", url: "https://ourworldindata.org" },
      { name: "Cybersecurity & Infrastructure Agency", url: "https://cisa.gov" },
      { name: "NIST AI", url: "https://nist.gov/ai" },
    ],
  },
  {
    title: "Governança & Sustentabilidade",
    color: "#34d399",
    colorBg: "rgba(52, 211, 153, 0.1)",
    borderColor: "rgba(52, 211, 153, 0.2)",
    icon: Shield,
    links: [
      { name: "UN Global Compact", url: "https://unglobalcompact.org" },
      { name: "World Resources Institute", url: "https://wri.org" },
      { name: "CDP", url: "https://cdp.net" },
      {
        name: "Task Force on Climate-related Financial Disclosures",
        url: "https://fsb-tcfd.org",
      },
      { name: "OECD", url: "https://oecd.org" },
      { name: "ISSB Standards", url: "https://ifrs.org" },
      { name: "Climate Analytics", url: "https://climateanalytics.org" },
      { name: "ESG Book", url: "https://esgbook.com" },
    ],
  },
];

function PillarColumn({
  pillar,
  index,
}: {
  pillar: PortalPillar;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div
        className="h-full p-6 md:p-8 rounded-2xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-500"
        style={{
          borderColor: pillar.borderColor,
          borderWidth: "1px",
        }}
      >
        {/* Pillar Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: pillar.colorBg }}
          >
            <pillar.icon size={22} style={{ color: pillar.color }} />
          </div>
          <h3
            className="text-lg md:text-xl font-bold"
            style={{ color: pillar.color }}
          >
            {pillar.title}
          </h3>
        </div>

        {/* Links */}
        <ul className="space-y-1">
          {pillar.links.map((link, linkIdx) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.1 + linkIdx * 0.04 }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-[rgba(20,28,46,0.6)] transition-all duration-300"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover/link:scale-125 transition-transform duration-300"
                  style={{ backgroundColor: pillar.color }}
                />
                <span className="text-sm text-muted-foreground group-hover/link:text-foreground transition-colors duration-300 flex-1">
                  {link.name}
                </span>
                <ExternalLink
                  size={13}
                  className="flex-shrink-0 opacity-0 group-hover/link:opacity-60 transition-all duration-300"
                  style={{ color: pillar.color }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${pillar.colorBg}, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function PortalSection() {
  return (
    <section id="portal" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1a]" />
      <div className="absolute inset-0 bg-grid" />

      {/* Floating particles */}
      <div className="absolute top-20 right-[12%] w-1 h-1 bg-[#0ea5e9]/20 rounded-full animate-float" />
      <div className="absolute top-52 left-[8%] w-1.5 h-1.5 bg-[#34d399]/15 rounded-full animate-float-delayed" />
      <div className="absolute bottom-28 right-[25%] w-1 h-1 bg-[#d4a853]/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm text-[#d4a853] tracking-widest uppercase mb-4">
            <Compass size={14} />
            Portal Global
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Links de{" "}
            <span className="text-gold-gradient">Inteligência Curada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Acesso direto às fontes mais relevantes de inteligência global,
            organizadas pelos tr\u00EAs pilares da Overall 720° — geopolítica,
            politech e governança sustentável.
          </p>
        </motion.div>

        {/* 3-Column Pillar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portalPillars.map((pillar, index) => (
            <div key={pillar.title} className="relative">
              <PillarColumn pillar={pillar} index={index} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground/50 mt-10"
        >
          Todos os links abrem em nova aba. Fontes selecionadas pela equipe
          Overall 720° como referências de excelência em inteligência
          estratégica global.
        </motion.p>
      </div>
    </section>
  );
}
