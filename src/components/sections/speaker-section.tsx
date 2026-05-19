"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Clock,
  Languages,
  ArrowRight,
  Quote,
  BookOpen,
  Globe2,
  Brain,
  Sparkles,
  MessageSquare,
} from "lucide-react";

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ PALESTRAS E CONSULTORIA SECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const keynoteCards = [
  {
    id: "empreender-e-valentia",
    badge: "Keynote",
    title: "Empreender e Valentia",
    subtitle:
      "Do Sal ao Algoritmo: A Genealogia Civilizatoria do Empreendimento",
    description:
      "3.500 anos de historia empresarial â€” dos mercadores fenicios ao Large Language Model. Empreender e um ato de coragem antes de ser um ato economico.",
    format: "60-90 min | Presencial ou Remoto",
    languages: "PT | EN | ES | DE",
    color: "#d4a853",
    colorBg: "rgba(212, 168, 83, 0.1)",
    borderColor: "rgba(212, 168, 83, 0.2)",
    hoverGlow: "rgba(212, 168, 83, 0.06)",
  },
  {
    id: "digital-camada",
    badge: "Keynote",
    title: "Digital e Camada. Analogico e Substrato.",
    subtitle: "Ontologia de tres camadas: digital | analogico | quantico",
    description:
      "Para lideres de tecnologia e equipes de transformacao digital que precisam entender por que a desmaterializacao e uma ilusao estrategica.",
    format: "45-60 min | Presencial ou Remoto",
    languages: "PT | EN",
    color: "#0ea5e9",
    colorBg: "rgba(14, 165, 233, 0.1)",
    borderColor: "rgba(14, 165, 233, 0.2)",
    hoverGlow: "rgba(14, 165, 233, 0.06)",
  },
  {
    id: "inteligencia-negocio",
    badge: "Keynote",
    title: "A Inteligencia que Sempre Foi Negocio",
    subtitle:
      "Geopolitica como Business Intelligence: Uma Historia de 3.000 Anos",
    description:
      "Dos fenicios a Veneza, da VOC ao Overall 720 | geopolitica e inteligencia de negocios nunca foram coisas diferentes.",
    format: "45-60 min | Presencial ou Remoto",
    languages: "PT | EN",
    color: "#34d399",
    colorBg: "rgba(52, 211, 153, 0.1)",
    borderColor: "rgba(52, 211, 153, 0.2)",
    hoverGlow: "rgba(52, 211, 153, 0.06)",
  },
];

const consultingItems = [
  {
    title: "Inteligencia de Mercados Linguisticos",
    description:
      "Entrar e crescer em mercados de lingua nao-inglesa com precisao cultural.",
    icon: "Globe2",
    color: "#d4a853",
    colorBg: "rgba(212, 168, 83, 0.1)",
    borderColor: "rgba(212, 168, 83, 0.2)",
    hoverGlow: "rgba(212, 168, 83, 0.06)",
  },
  {
    title: "Empresa como Instituicao",
    description:
      "Missao, visao, valores com profundidade filosofica e impacto duradouro.",
    icon: "Brain",
    color: "#0ea5e9",
    colorBg: "rgba(14, 165, 233, 0.1)",
    borderColor: "rgba(14, 165, 233, 0.2)",
    hoverGlow: "rgba(14, 165, 233, 0.06)",
  },
  {
    title: "Fine-Tuning de IA Humanista",
    description:
      "Calibrar modelos com rigor linguistico e cultural para resultados eticos.",
    icon: "Sparkles",
    color: "#34d399",
    colorBg: "rgba(52, 211, 153, 0.1)",
    borderColor: "rgba(52, 211, 153, 0.2)",
    hoverGlow: "rgba(52, 211, 153, 0.06)",
  },
  {
    title: "Venture Building & Estrategia",
    description:
      "Consultoria estrategica completa: de ideaÃ§Ã£o a scaling, com visao 720.",
    icon: "MessageSquare",
    color: "#a78bfa",
    colorBg: "rgba(167, 139, 250, 0.1)",
    borderColor: "rgba(167, 139, 250, 0.2)",
    hoverGlow: "rgba(167, 139, 250, 0.06)",
  },
];

function KeynoteCard({ card, index }: { card: typeof keynoteCards[0]; index: number }) {
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
        style={{ borderColor: card.borderColor, borderWidth: "1px" }}
      >
        <div className="mb-5">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-wider uppercase font-medium"
            style={{ backgroundColor: card.colorBg, border: 1px solid , color: card.color }}
          >
            <Mic size={12} />
            {card.badge}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: card.color }}>
          {card.title}
        </h3>
        <p className="text-sm font-medium mb-4 leading-relaxed" style={{ color: ${card.color}99 }}>
          {card.subtitle}
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
          {card.description}
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs" style={{ color: ${card.color}aa }}>
            <Clock size={13} className="flex-shrink-0" />
            <span>{card.format}</span>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: ${card.color}aa }}>
            <Languages size={13} className="flex-shrink-0" />
            <span>{card.languages}</span>
          </div>
        </div>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: adial-gradient(ellipse at center, , transparent 70%) }}
        />
      </div>
    </motion.div>
  );
}

function ConsultingCard({ item, index }: { item: typeof consultingItems[0]; index: number }) {
  const icons: Record<string, any> = { Globe2, Brain, Sparkles, MessageSquare };
  const IconComp = icons[item.icon] || Globe2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative"
    >
      <div
        className="h-full p-5 md:p-6 rounded-2xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-500"
        style={{ borderColor: item.borderColor, borderWidth: "1px" }}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: item.colorBg, border: 1px solid  }}
          >
            <IconComp size={20} style={{ color: item.color }} />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm md:text-base font-bold mb-1 leading-snug" style={{ color: item.color }}>
              {item.title}
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: adial-gradient(ellipse at center, , transparent 70%) }}
        />
      </div>
    </motion.div>
  );
}

export default function SpeakerSection() {
  return (
    <section id="speaker" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1320]" />
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="absolute top-16 left-[10%] w-1 h-1 bg-[#d4a853]/20 rounded-full animate-float" />
      <div className="absolute top-48 right-[15%] w-1.5 h-1.5 bg-[#0ea5e9]/15 rounded-full animate-float-delayed" />
      <div className="absolute top-[60%] left-[5%] w-1 h-1 bg-[#34d399]/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-20 right-[30%] w-1 h-1 bg-[#d4a853]/15 rounded-full animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm text-[#d4a853] tracking-widest uppercase mb-4">
            <Mic size={14} />
            Servicos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Palestras & <span className="text-gold-gradient">Consultoria</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Keynotes e workshops que conectam 3.500 anos de historia civilizatoria
            aos desafios estrategicos do presente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {keynoteCards.map((card, index) => (
            <KeynoteCard key={card.id} card={card} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,168,83,0.1)] border border-[rgba(212,168,83,0.2)] flex items-center justify-center">
              <Quote size={20} className="text-[#d4a853]" />
            </div>
          </div>
          <blockquote className="text-base md:text-lg italic text-muted-foreground leading-relaxed mb-4">
            &ldquo;Empreender e valentia. Nao a temeridade do que ignora o
            risco â€” mas a coragem de quem reconhece o mar, conhece o cemiterio,
            e embarca assim mesmo.&rdquo;
          </blockquote>
          <cite className="text-sm text-[#d4a853]/80 not-italic font-medium">
            â€” Guilherme Goncalves Machado
          </cite>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 md:mb-28"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a853] to-[#e8c97a] text-[#0a0f1a] font-semibold text-sm tracking-wide hover:from-[#e8c97a] hover:to-[#d4a853] transition-all duration-300 shadow-lg shadow-[rgba(212,168,83,0.2)] hover:shadow-[rgba(212,168,83,0.35)] hover:-translate-y-0.5"
          >
            <MessageSquare size={16} />
            Agendar Palestra
            <ArrowRight size={16} />
          </a>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-transparent border border-[rgba(212,168,83,0.3)] text-[#d4a853] font-semibold text-sm tracking-wide hover:bg-[rgba(212,168,83,0.08)] hover:border-[rgba(212,168,83,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <BookOpen size={16} />
            Ver Publicacoes
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-gold-gradient">Consultoria Estrategica</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Servicos sob medida para organizacoes que buscam profundidade
              estrategica, rigor cultural e impacto institucional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {consultingItems.map((item, index) => (
              <ConsultingCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
