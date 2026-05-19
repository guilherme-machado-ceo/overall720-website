"use client";

import { motion } from "framer-motion";
import {
  Mic, Clock, Languages, ArrowRight, Quote,
  BookOpen, Globe2, Brain, Sparkles, MessageSquare,
} from "lucide-react";

const keynoteCards = [
  { id: "empreender-e-valentia", badge: "Keynote", title: "Empreender \u00e9 Valentia", subtitle: "Do Sal ao Algoritmo: A Genealogia Civilizat\u00f3ria do Empreendimento", description: "3.500 anos de hist\u00f3ria empresarial \u2014 dos mercadores fen\u00edcios ao Large Language Model. Empreender \u00e9 um ato de coragem antes de ser um ato econ\u00f4mico.", format: "60\u201390 min \u00b7 Presencial ou Remoto", languages: "PT \u00b7 EN \u00b7 ES \u00b7 DE", color: "#d4a853", colorBg: "rgba(212, 168, 83, 0.1)", borderColor: "rgba(212, 168, 83, 0.2)", hoverGlow: "rgba(212, 168, 83, 0.06)" },
  { id: "digital-camada", badge: "Keynote", title: "Digital \u00e9 Camada. Anal\u00f3gico \u00e9 Substrato.", subtitle: "Ontologia de tr\u00eas camadas: digital \u00b7 anal\u00f3gico \u00b7 qu\u00e2ntico", description: "Para l\u00edderes de tecnologia e equipes de transforma\u00e7\u00e3o digital que precisam entender por que a desmaterializa\u00e7\u00e3o \u00e9 uma ilus\u00e3o estrat\u00e9gica.", format: "45\u201360 min \u00b7 Presencial ou Remoto", languages: "PT \u00b7 EN", color: "#0ea5e9", colorBg: "rgba(14, 165, 233, 0.1)", borderColor: "rgba(14, 165, 233, 0.2)", hoverGlow: "rgba(14, 165, 233, 0.06)" },
  { id: "inteligencia-negocio", badge: "Keynote", title: "A Intelig\u00eancia que Sempre Foi Neg\u00f3cio", subtitle: "Geopol\u00edtica como Business Intelligence: Uma Hist\u00f3ria de 3.000 Anos", description: "Dos fen\u00edcios a Veneza, da VOC ao Overall 720\u00b0 \u2014 geopol\u00edtica e intelig\u00eancia de neg\u00f3cios nunca foram coisas diferentes.", format: "45\u201360 min \u00b7 Presencial ou Remoto", languages: "PT \u00b7 EN", color: "#34d399", colorBg: "rgba(52, 211, 153, 0.1)", borderColor: "rgba(52, 211, 153, 0.2)", hoverGlow: "rgba(52, 211, 153, 0.06)" },
];

const consultingItems = [
  { title: "Intelig\u00eancia de Mercados Lingu\u00edsticos", description: "Entrar e crescer em mercados de l\u00edngua n\u00e3o-inglesa com precis\u00e3o cultural.", icon: "Globe2", color: "#d4a853", colorBg: "rgba(212, 168, 83, 0.1)", borderColor: "rgba(212, 168, 83, 0.2)", hoverGlow: "rgba(212, 168, 83, 0.06)" },
  { title: "Empresa como Institui\u00e7\u00e3o", description: "Miss\u00e3o, vis\u00e3o, valores com profundidade filos\u00f3fica e impacto duradouro.", icon: "Brain", color: "#0ea5e9", colorBg: "rgba(14, 165, 233, 0.1)", borderColor: "rgba(14, 165, 233, 0.2)", hoverGlow: "rgba(14, 165, 233, 0.06)" },
  { title: "Fine-Tuning de IA Humanista", description: "Calibrar modelos com rigor lingu\u00edstico e cultural para resultados \u00e9ticos.", icon: "Sparkles", color: "#34d399", colorBg: "rgba(52, 211, 153, 0.1)", borderColor: "rgba(52, 211, 153, 0.2)", hoverGlow: "rgba(52, 211, 153, 0.06)" },
  { title: "Venture Building & Estrat\u00e9gia", description: "Consultoria estrat\u00e9gica completa: de idea\u00e7\u00e3o a scaling, com vis\u00e3o 720\u00b0.", icon: "MessageSquare", color: "#a78bfa", colorBg: "rgba(167, 139, 250, 0.1)", borderColor: "rgba(167, 139, 250, 0.2)", hoverGlow: "rgba(167, 139, 250, 0.06)" },
];

function KeynoteCard({ card, index }: { card: (typeof keynoteCards)[0]; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: index * 0.15 }} className="group relative h-full">
      <div className="h-full flex flex-col p-6 md:p-8 rounded-2xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-500" style={{ borderColor: card.borderColor, borderWidth: "1px" }}>
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-wider uppercase font-medium" style={{ backgroundColor: card.colorBg, border: "1px solid " + card.borderColor, color: card.color }}>
            <Mic size={12} />{card.badge}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: card.color }}>{card.title}</h3>
        <p className="text-sm font-medium mb-4 leading-relaxed" style={{ color: card.color + "99" }}>{card.subtitle}</p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{card.description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs" style={{ color: card.color + "aa" }}><Clock size={13} className="flex-shrink-0" /><span>{card.format}</span></div>
          <div className="flex items-center gap-2 text-xs" style={{ color: card.color + "aa" }}><Languages size={13} className="flex-shrink-0" /><span>{card.languages}</span></div>
        </div>
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, " + card.hoverGlow + ", transparent 70%)" }} />
      </div>
    </motion.div>
  );
}

function ConsultingCard({ item, index }: { item: (typeof consultingItems)[0]; index: number }) {
  const icons: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = { Globe2, Brain, Sparkles, MessageSquare };
  const IconComp = icons[item.icon] || Globe2;
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: index * 0.12 }} className="group relative">
      <div className="h-full p-5 md:p-6 rounded-2xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-500" style={{ borderColor: item.borderColor, borderWidth: "1px" }}>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.colorBg, border: "1px solid " + item.borderColor }}>
            <IconComp size={20} style={{ color: item.color }} />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm md:text-base font-bold mb-1 leading-snug" style={{ color: item.color }}>{item.title}</h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </div>
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, " + item.hoverGlow + ", transparent 70%)" }} />
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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm text-[#d4a853] tracking-widest uppercase mb-4"><Mic size={14} />Servi\u00e7os</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Palestras & <span className="text-gold-gradient">Consultoria</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">Keynotes e workshops que conectam 3.500 anos de hist\u00f3ria civilizat\u00f3ria aos desafios estrat\u00e9gicos do presente \u2014 para confer\u00eancias, corpora\u00e7\u00f5es e equipes de lideran\u00e7a.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">{keynoteCards.map((card, index) => (<KeynoteCard key={card.id} card={card} index={index} />))}</div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-6"><div className="w-12 h-12 rounded-full bg-[rgba(212,168,83,0.1)] border border-[rgba(212,168,83,0.2)] flex items-center justify-center"><Quote size={20} className="text-[#d4a853]" /></div></div>
          <blockquote className="text-base md:text-lg italic text-muted-foreground leading-relaxed mb-4">&ldquo;Empreender \u00e9 valentia. N\u00e3o a temeridade do que ignora o risco \u2014 mas a coragem de quem reconhece o mar, conhece o cemit\u00e9rio, e embarca assim mesmo.&rdquo;</blockquote>
          <cite className="text-sm text-[#d4a853]/80 not-italic font-medium">\u2014 Guilherme Gon\u00e7alves Machado</cite>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 md:mb-28">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4a853] to-[#e8c97a] text-[#0a0f1a] font-semibold text-sm tracking-wide hover:from-[#e8c97a] hover:to-[#d4a853] transition-all duration-300 shadow-lg shadow-[rgba(212,168,83,0.2)] hover:shadow-[rgba(212,168,83,0.35)] hover:-translate-y-0.5"><MessageSquare size={16} />Agendar Palestra<ArrowRight size={16} /></a>
          <a href="#blog" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-transparent border border-[rgba(212,168,83,0.3)] text-[#d4a853] font-semibold text-sm tracking-wide hover:bg-[rgba(212,168,83,0.08)] hover:border-[rgba(212,168,83,0.5)] transition-all duration-300 hover:-translate-y-0.5"><BookOpen size={16} />Ver Publica\u00e7\u00f5es<ArrowRight size={16} /></a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3"><span className="text-gold-gradient">Consultoria Estrat\u00e9gica</span></h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">Servi\u00e7os sob medida para organiza\u00e7\u00f5es que buscam profundidade estrat\u00e9gica, rigor cultural e impacto institucional.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">{consultingItems.map((item, index) => (<ConsultingCard key={item.title} item={item} index={index} />))}</div>
        </motion.div>
      </div>
    </section>
  );
}
