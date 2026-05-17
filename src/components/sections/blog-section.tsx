"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Tag, GitBranch } from "lucide-react";

/* ───────────────────────── BLOG & PUBLICAÇÕES REAIS ───────────────────────── */

const publications = [
  {
    id: "imip-paper",
    category: "Research Paper",
    title: "IMIP Framework v1.0.0 — Constitutional Architecture for AGI",
    excerpt:
      "Apresenta o Framework de Instância Múltipla Integrada do Pensamento (IMIP) — modelo formal no qual um mesmo sujeito cognitivo opera simultaneamente em instâncias científica, artística e empreendedora. Propõe que o alinhamento em IAG pode ser resolvido por design constitucional de instâncias.",
    date: "2025",
    color: "#d4a853",
    colorBg: "rgba(212, 168, 83, 0.1)",
    borderColor: "rgba(212, 168, 83, 0.2)",
    hoverGlow: "rgba(212, 168, 83, 0.06)",
    url: "https://doi.org/10.5281/zenodo.19772798",
    urlLabel: "doi.org/10.5281/zenodo.19772798",
    type: "paper" as const,
  },
  {
    id: "imip-code",
    category: "Código Fonte",
    title: "IMIP Framework — Implementação Computacional",
    excerpt:
      "Código-fonte que implementa os cinco componentes da arquitetura IMIP: GuruMatrix 5D, Protocolo IPII (OPDIN), Contencionamento Constitucional, Operador de Analogia Transdomínios e Regime de Fluxo Contínuo.",
    date: "2025",
    color: "#0ea5e9",
    colorBg: "rgba(14, 165, 233, 0.1)",
    borderColor: "rgba(14, 165, 233, 0.2)",
    hoverGlow: "rgba(14, 165, 233, 0.06)",
    url: "https://doi.org/10.5281/zenodo.19775021",
    urlLabel: "doi.org/10.5281/zenodo.19775021",
    type: "code" as const,
  },
  {
    id: "imip-github",
    category: "Repositório",
    title: "IMIP Framework — GitHub",
    excerpt:
      "Repositório completo do IMIP Framework no GitHub. Inclui a linguagem de programação GuruDev, a Álgebra Hexarrelacional de Significância e toda a documentação da arquitetura de instâncias cognitivas para IAG.",
    date: "2025",
    color: "#34d399",
    colorBg: "rgba(52, 211, 153, 0.1)",
    borderColor: "rgba(52, 211, 153, 0.2)",
    hoverGlow: "rgba(52, 211, 153, 0.06)",
    url: "https://github.com/guilherme-machado-ceo/imip-framework",
    urlLabel: "github.com/guilherme-machado-ceo/imip-framework",
    type: "repo" as const,
  },
];

function PublicationCard({
  pub,
  index,
}: {
  pub: (typeof publications)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative h-full"
    >
      <a
        href={pub.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div
          className="h-full flex flex-col p-6 md:p-8 rounded-2xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-500"
          style={{
            borderColor: pub.borderColor,
            borderWidth: "1px",
          }}
        >
          {/* Category Badge */}
          <div className="mb-5 flex items-center justify-between">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-wider uppercase font-medium"
              style={{
                backgroundColor: pub.colorBg,
                border: `1px solid ${pub.borderColor}`,
                color: pub.color,
              }}
            >
              {pub.type === "paper" && <BookOpen size={12} />}
              {pub.type === "code" && <BookOpen size={12} />}
              {pub.type === "repo" && <GitBranch size={12} />}
              {pub.category}
            </span>
            <ExternalLink
              size={16}
              className="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors"
            />
          </div>

          {/* Title */}
          <h3
            className="text-lg md:text-xl font-bold mb-3 leading-snug group-hover:text-[#d4a853] transition-colors duration-300"
            style={{ color: pub.color }}
          >
            {pub.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
            {pub.excerpt}
          </p>

          {/* URL */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground/70 border-t border-[#d4a853]/10 pt-4">
            {pub.type === "paper" && <Tag size={12} style={{ color: pub.color }} />}
            {pub.type === "code" && <BookOpen size={12} style={{ color: pub.color }} />}
            {pub.type === "repo" && <GitBranch size={12} style={{ color: pub.color }} />}
            <span className="truncate">{pub.urlLabel}</span>
          </div>

          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${pub.hoverGlow}, transparent 70%)`,
            }}
          />
        </div>
      </a>
    </motion.div>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1320]" />
      <div className="absolute inset-0 bg-radial-teal" />

      {/* Floating particles */}
      <div className="absolute top-20 left-[12%] w-1 h-1 bg-[#0ea5e9]/20 rounded-full animate-float" />
      <div className="absolute top-52 right-[18%] w-1.5 h-1.5 bg-[#d4a853]/15 rounded-full animate-float-delayed" />
      <div className="absolute bottom-24 left-[28%] w-1 h-1 bg-[#34d399]/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />

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
            Publicações & Trabalhos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pesquisa &{" "}
            <span className="text-gold-gradient">Produção Intelectual</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Artigos, frameworks e código-fonte publicados em plataformas acadêmicas
            e de código aberto. Toda a produção intelectual com DOI e versionamento.
          </p>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {publications.map((pub, index) => (
            <PublicationCard key={pub.id} pub={pub} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
