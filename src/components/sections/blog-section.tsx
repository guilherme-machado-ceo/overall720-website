"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ───────────────────────── BLOG & INSIGHTS SECTION ───────────────────────── */

const articles = [
  {
    id: "geopolitica-nova-ordem",
    category: "Geopolítica",
    title: "A Nova Ordem Multipolar: Riscos e Oportunidades para o Brasil",
    excerpt:
      "Análise das dinâmicas de poder emergentes no sistema internacional e seu impacto estratégico para organizações brasileiras que atuam em escala global.",
    date: "15 Mai 2026",
    readTime: "8 min",
    color: "#d4a853",
    colorBg: "rgba(212, 168, 83, 0.1)",
    borderColor: "rgba(212, 168, 83, 0.2)",
    hoverGlow: "rgba(212, 168, 83, 0.06)",
  },
  {
    id: "politech-imip-framework",
    category: "Politech",
    title: "IMIP Framework: Alinhamento Constitucional como Terceiro Paradigma para IAG",
    excerpt:
      "Como a Instanciação Múltipla Integrada do Pensamento propõe resolver o problema de alinhamento em Inteligência Artificial Geral por design constitucional de instâncias.",
    date: "10 Mai 2026",
    readTime: "12 min",
    color: "#0ea5e9",
    colorBg: "rgba(14, 165, 233, 0.1)",
    borderColor: "rgba(14, 165, 233, 0.2)",
    hoverGlow: "rgba(14, 165, 233, 0.06)",
  },
  {
    id: "governanca-esg-ia",
    category: "Governança & Sustentabilidade",
    title: "ESG e Governança Global: O Papel da Inteligência na Tomada de Decisão Sustentável",
    excerpt:
      "Frameworks avançados de governança corporativa que integram dados climáticos, indicadores ESG e inteligência artificial para posicionamento sustentável em escala global.",
    date: "05 Mai 2026",
    readTime: "6 min",
    color: "#34d399",
    colorBg: "rgba(52, 211, 153, 0.1)",
    borderColor: "rgba(52, 211, 153, 0.2)",
    hoverGlow: "rgba(52, 211, 153, 0.06)",
  },
];

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
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
      <div
        className="h-full flex flex-col p-6 md:p-8 rounded-2xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-500"
        style={{
          borderColor: article.borderColor,
          borderWidth: "1px",
        }}
      >
        {/* Category Badge */}
        <div className="mb-5">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-wider uppercase font-medium"
            style={{
              backgroundColor: article.colorBg,
              border: `1px solid ${article.borderColor}`,
              color: article.color,
            }}
          >
            <Tag size={12} />
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg md:text-xl font-bold mb-3 leading-snug group-hover:text-[#d4a853] transition-colors duration-300"
          style={{ color: article.color }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
          {article.excerpt}
        </p>

        {/* Meta: Date + Read Time */}
        <div className="flex items-center gap-4 mb-5 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <BookOpen size={12} style={{ color: `${article.color}80` }} />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} style={{ color: `${article.color}80` }} />
            {article.readTime}
          </span>
        </div>

        {/* Read Article Link */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium group/link transition-colors duration-300"
          style={{ color: article.color }}
        >
          Ler Artigo
          <ArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-300"
          />
        </a>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${article.hoverGlow}, transparent 70%)`,
          }}
        />
      </div>
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
            Blog &amp; Insights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pensamento Estratégico{" "}
            <span className="text-gold-gradient">em Ação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Artigos, análises e reflexões que traduzem inteligência 720° em
            thought leadership acionável para líderes e organizações que operam
            em escala global.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-[#d4a853]/30 text-[#d4a853] hover:bg-[#d4a853]/10 font-semibold text-base px-8 py-6 tracking-wide group"
          >
            Ver Todos os Artigos
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
