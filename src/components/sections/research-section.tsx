"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  Code2,
  GitBranch,
  FileText,
  Brain,
  Link2,
  Scale,
} from "lucide-react";

/* ───────────────────────── RESEARCH & PUBLICATIONS SECTION ───────────────────────── */

const researchCards = [
  {
    id: "do-sal-ao-algoritmo",
    badge: "Paper",
    badgeIcon: FileText,
    title: "Do Sal ao Algoritmo",
    subtitle: "Teoria da Empresa como Instituicao Civilizatoria Pancronica",
    doi: "https://doi.org/10.5281/zenodo.20285002",
    description:
      "Working paper que estabelece a empresa como operador constante da organizacao do valor humano â€” do sal fenicio ao algoritmo quantico. A tese articula 3.500 anos de historia empresarial para demonstrar que a empresa e uma instituicao civilizatoria pancronica.",
    components: [
      "Empresa como Instituicao Civilizatoria",
      "Genealogia do Empreendimento",
      "Ontologia do Imigrante Empreendedor",
      "Do Sal Fenicio ao Algoritmo Quantico",
      "Regime de Fluxo Continuo",
      "Impresa Renascentista",
    ],
    author: "Guilherme Goncalves Machado",
    orcid: "0009-0008-1083-0784",
    affiliation: "Instituto PCIH3 / Hubstry Deep Tech",
    license: "CC BY 4.0",
    github: null,
  },
  {
    id: "imip-paper",
    badge: "Paper",
    badgeIcon: FileText,
    title: "IMIP Framework v1.0.0",
    subtitle: "Constitutional Architecture for AGI",
    doi: "https://doi.org/10.5281/zenodo.19772798",
    description:
      "Framework de Instância Múltipla Integrada do Pensamento — modelo formal no qual um mesmo sujeito cognitivo opera simultaneamente em instâncias científica, artística e empreendedora. Propõe que o alinhamento em IAG pode ser resolvido por design constitucional de instâncias.",
    components: [
      "GuruMatrix 5D",
      "IPII Protocol (OPDIN)",
      "Constitutional Containment",
      "Cross-domain Analogy Operator",
      "Continuous Flow Regime",
      "DISPATCH_ON_HERMENEUTICS (7 levels)",
    ],
    author: "Guilherme Gonçalves Machado",
    orcid: "0009-0008-1083-0784",
    affiliation: "PCIH³ — Polymath Cyborg Intelligence Hub",
    license: "PolyForm Noncommercial 1.0.0",
    github: "https://github.com/guilherme-machado-ceo/imip-framework",
  },
  {
    id: "imip-code",
    badge: "Code",
    badgeIcon: Code2,
    title: "IMIP Framework — Code Repository",
    subtitle: "Computational Implementation of IMIP Architecture",
    doi: "https://doi.org/10.5281/zenodo.19775021",
    description:
      "Código-fonte que implementa os cinco componentes da arquitetura IMIP, incluindo GuruMatrix 5D, Protocolo IPII (OPDIN), Contencionamento Constitucional, Operador de Analogia Transdomínios e Regime de Fluxo Contínuo.",
    components: [
      "GuruMatrix 5D",
      "IPII Protocol (OPDIN)",
      "Constitutional Containment",
      "Cross-domain Analogy Operator",
      "Continuous Flow Regime",
    ],
    author: "Guilherme Gonçalves Machado",
    orcid: null,
    affiliation: null,
    license: null,
    github: "https://github.com/guilherme-machado-ceo/imip-framework",
  },
];

const relatedRepos = [
  {
    name: "GuruDev Lang",
    description: "Programming Language",
    icon: Code2,
    color: "#0ea5e9",
  },
  {
    name: "Álgebra Hexarrelacional de Significância π√f(A)",
    description: "Mathematical Framework",
    icon: Brain,
    color: "#d4a853",
  },
];

function ResearchCard({
  card,
  index,
}: {
  card: (typeof researchCards)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="h-full p-6 md:p-8 rounded-2xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-500 border border-[rgba(212,168,83,0.15)] hover:border-[rgba(212,168,83,0.3)]">
        {/* Badge + GitHub */}
        <div className="flex items-center justify-between mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(212,168,83,0.1)] border border-[rgba(212,168,83,0.2)] text-xs text-[#d4a853] tracking-wider uppercase">
            <card.badgeIcon size={14} />
            {card.badge}
          </span>
          {card.github && (
            <a
              href={card.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[rgba(212,168,83,0.08)] border border-[rgba(212,168,83,0.15)] flex items-center justify-center text-[#d4a853]/70 hover:text-[#d4a853] hover:bg-[rgba(212,168,83,0.15)] transition-all duration-300"
              aria-label="GitHub Repository"
            >
              <GitBranch size={16} />
            </a>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl md:text-2xl font-bold text-gold-gradient mb-2">
          {card.title}
        </h3>
        <p className="text-sm text-[#d4a853]/70 mb-4 font-medium">
          {card.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {card.description}
        </p>

        {/* Key Components */}
        <div className="mb-6">
          <h4 className="text-xs text-[#d4a853]/60 tracking-widest uppercase mb-3 flex items-center gap-2">
            <Brain size={12} />
            Key Components
          </h4>
          <div className="flex flex-wrap gap-2">
            {card.components.map((comp) => (
              <span
                key={comp}
                className="inline-block px-3 py-1 rounded-md bg-[rgba(10,15,26,0.6)] border border-[rgba(212,168,83,0.08)] text-xs text-muted-foreground hover:border-[rgba(212,168,83,0.25)] transition-colors duration-300"
              >
                {comp}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="section-divider mb-4" />

        <div className="space-y-2 text-xs text-muted-foreground">
          {/* Author */}
          <div className="flex items-center gap-2">
            <BookOpen size={12} className="text-[#d4a853]/50 flex-shrink-0" />
            <span>{card.author}</span>
          </div>

          {/* ORCID */}
          {card.orcid && (
            <div className="flex items-center gap-2">
              <Link2 size={12} className="text-[#d4a853]/50 flex-shrink-0" />
              <span>
                ORCID:{" "}
                <a
                  href={`https://orcid.org/${card.orcid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4a853]/80 hover:text-[#d4a853] transition-colors"
                >
                  {card.orcid}
                </a>
              </span>
            </div>
          )}

          {/* Affiliation */}
          {card.affiliation && (
            <div className="flex items-center gap-2">
              <Scale size={12} className="text-[#d4a853]/50 flex-shrink-0" />
              <span>{card.affiliation}</span>
            </div>
          )}

          {/* License */}
          {card.license && (
            <div className="flex items-center gap-2">
              <FileText
                size={12}
                className="text-[#d4a853]/50 flex-shrink-0"
              />
              <span>{card.license}</span>
            </div>
          )}

          {/* DOI */}
          <div className="flex items-center gap-2">
            <ExternalLink
              size={12}
              className="text-[#d4a853]/50 flex-shrink-0"
            />
            <a
              href={card.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4a853]/80 hover:text-[#d4a853] transition-colors"
            >
              DOI: zenodo.org
            </a>
          </div>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.06),_transparent_70%)]" />
      </div>
    </motion.div>
  );
}

export default function ResearchSection() {
  return (
    <section id="research" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1320]" />
      <div className="absolute inset-0 bg-radial-gold" />

      {/* Floating particles */}
      <div className="absolute top-16 left-[10%] w-1 h-1 bg-[#d4a853]/20 rounded-full animate-float" />
      <div className="absolute top-48 right-[15%] w-1.5 h-1.5 bg-[#d4a853]/15 rounded-full animate-float-delayed" />
      <div className="absolute bottom-20 left-[30%] w-1 h-1 bg-[#d4a853]/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />

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
            <BookOpen size={14} />
            Research & PublicaÃ§Ãµes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Inteligência <span className="text-gold-gradient">Acadêmica & Formal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Frameworks, publicaÃ§Ãµes e repositórios que formalizam a
            arquitetura IMIP e suas contribuiÃ§Ãµes para alinhamento
            constitucional em inteligência artificial geral.
          </p>
        </motion.div>

        {/* Research Cards — 2 columns on desktop, stacked on mobile */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {researchCards.map((card, index) => (
            <ResearchCard key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Related Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xs text-[#d4a853]/60 tracking-widest uppercase mb-4 text-center">
            Related Repositories
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedRepos.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-300 border border-[rgba(212,168,83,0.1)] hover:border-[rgba(212,168,83,0.25)]"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${repo.color}15`,
                    border: `1px solid ${repo.color}30`,
                  }}
                >
                  <repo.icon size={16} style={{ color: repo.color }} />
                </div>
                <div>
                  <div className="text-sm font-semibold group-hover:text-[#d4a853] transition-colors duration-300">
                    {repo.name}
                  </div>
                  <div className="text-xs text-muted-foreground/60">
                    {repo.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
