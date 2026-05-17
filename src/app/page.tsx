"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Globe2,
  Cpu,
  Shield,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Eye,
  Orbit,
  Brain,
  TrendingUp,
  Network,
  Satellite,
  FileSearch,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ResearchSection from "@/components/sections/research-section";
import PortalSection from "@/components/sections/portal-section";
import BlogSection from "@/components/sections/blog-section";

/* ───────────────────────── NAVIGATION ───────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Pilares", href: "#pillars" },
    { label: "Portal", href: "#portal" },
    { label: "Blog", href: "#blog" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#d4a853]/40 overflow-hidden bg-navy-light flex items-center justify-center">
              <img
                src="/logo-overall720.jpg"
                alt="Overall 720"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gold-gradient font-bold text-sm md:text-base tracking-wider uppercase">
                Overall 720°
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase hidden sm:block">
                Geopolitical Business Platform
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-[#d4a853] transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-[#d4a853] hover:bg-[#b8892e] text-[#0a0f1a] font-semibold text-sm tracking-wide">
                Fale Conosco
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#d4a853] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glass-strong border-t border-[#d4a853]/10"
        >
          <div className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-[#d4a853] transition-colors tracking-wide uppercase py-2"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-[#d4a853] hover:bg-[#b8892e] text-[#0a0f1a] font-semibold text-sm tracking-wide mt-2">
                Fale Conosco
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ───────────────────────── HERO SECTION ───────────────────────── */

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0f1a]" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-radial-gold" />

      {/* Animated orbital rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px]">
        <div className="absolute inset-0 border border-[#d4a853]/5 rounded-full animate-rotate-slow" />
        <div
          className="absolute inset-8 border border-[#0ea5e9]/5 rounded-full animate-rotate-slow"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        />
        <div className="absolute inset-16 border border-[#d4a853]/3 rounded-full animate-rotate-slow" style={{ animationDuration: "25s" }} />
        {/* Orbital dots */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#d4a853]/40 rounded-full animate-pulse-glow" />
        <div
          className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#0ea5e9]/40 rounded-full animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-[15%] w-1 h-1 bg-[#d4a853]/30 rounded-full animate-float" />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-[#0ea5e9]/20 rounded-full animate-float-delayed" />
      <div className="absolute bottom-32 left-[25%] w-1 h-1 bg-[#d4a853]/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-60 right-[35%] w-1 h-1 bg-[#0ea5e9]/30 rounded-full animate-float-delayed" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm text-[#d4a853] tracking-widest uppercase">
            <Orbit size={14} />
            Geopolitical Business Platform
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 md:mb-6"
        >
          <span className="text-gold-gradient">OVERALL</span>
          <br />
          <span className="text-foreground">CONSULTORIA</span>
          <br />
          <span className="text-gold-gradient">720°</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          A Powerhouse of Classical & Quantum Strategic Intelligence
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-8 md:mb-10"
        >
          720° Advisory & Consulting across{" "}
          <span className="text-[#d4a853]">Geopolitics</span>,{" "}
          <span className="text-[#0ea5e9]">Politech</span>, and{" "}
          <span className="text-emerald-400">Global Governance & Sustainability</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#about">
            <Button
              size="lg"
              className="bg-[#d4a853] hover:bg-[#b8892e] text-[#0a0f1a] font-semibold text-base px-8 py-6 tracking-wide group"
            >
              Conheça Nossa Visão
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="border-[#d4a853]/30 text-[#d4a853] hover:bg-[#d4a853]/10 font-semibold text-base px-8 py-6 tracking-wide"
            >
              Entre em Contato
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-[#d4a853]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── ABOUT SECTION ───────────────────────── */

function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1320]" />
      <div className="absolute inset-0 bg-radial-teal" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Concentric circles */}
              <div className="absolute inset-0 border border-[#d4a853]/10 rounded-full" />
              <div className="absolute inset-4 border border-[#0ea5e9]/8 rounded-full" />
              <div className="absolute inset-8 border border-[#d4a853]/6 rounded-full" />
              <div className="absolute inset-12 border border-emerald-400/5 rounded-full" />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full glass flex items-center justify-center">
                  <Globe2 size={56} className="text-[#d4a853]" />
                </div>
              </div>

              {/* Orbiting icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center">
                    <Shield size={24} className="text-[#d4a853]" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-14 h-14 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center">
                    <Cpu size={24} className="text-[#0ea5e9]" />
                  </div>
                </div>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                    <TrendingUp size={24} className="text-emerald-400" />
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 rounded-full bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center">
                    <Brain size={24} className="text-[#d4a853]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs text-[#d4a853] tracking-widest uppercase mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Inteligência Estratégica para um{" "}
              <span className="text-gold-gradient">Mundo em Transição</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A Overall Consultoria 720° é uma plataforma de inteligência e visão
              estratégica global que combina geopolítica, tecnologia e sustentabilidade
              para redesenhar a forma como negócios se adaptam e prosperam em ambientes
              complexos. Com uma abordagem 720°, observamos o contexto econômico, climático
              e político de forma integrada — do satélite à tomada de decisão.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa atuação conecta dados, inteligência artificial e planejamento estratégico
              para apoiar líderes, empresas e ecossistemas em transição, promovendo inovação,
              governança e sustentabilidade global com visão sistêmica e impacto real.
              Operamos na intersecção entre sistemas clássicos e dinâmicas quânticas,
              integrando governança institucional, geopolítica e tecnologias emergentes.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "720°", label: "Visão Estratégica" },
                { number: "3", label: "Pilares de Atuação" },
                { number: "IA", label: "Inteligência Artificial" },
                { number: "∞", label: "Impacto Global" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl glass text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gold-gradient mb-1">
                    {item.number}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wide uppercase">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PILLARS SECTION ───────────────────────── */

const pillars = [
  {
    icon: Globe2,
    title: "Geopolítica",
    color: "#d4a853",
    colorBg: "rgba(212, 168, 83, 0.1)",
    borderColor: "rgba(212, 168, 83, 0.2)",
    description:
      "Análise aprofundada das dinâmicas geopolíticas globais, mapeando riscos, oportunidades e tendências que impactam negócios e governos. Monitoramos tensões regionais, acordos comerciais, sanções e realinhamentos de poder para entregar inteligência acionável que permite decisões antecipadas e fundamentadas.",
    items: [
      "Análise de Riscos Geopolíticos",
      "Monitoramento de Tensões Regionais",
      "Inteligência de Mercados Emergentes",
      "Cenários Estratégicos Globais",
    ],
  },
  {
    icon: Cpu,
    title: "Politech",
    color: "#0ea5e9",
    colorBg: "rgba(14, 165, 233, 0.1)",
    borderColor: "rgba(14, 165, 233, 0.2)",
    description:
      "Atuação na interseção entre infraestruturas tecnológicas clássicas e dinâmicas emergentes de alta complexidade. Nosso pilar de Politech integra arquiteturas tecnológicas clássicas a modelos avançados, permitindo uma abordagem híbrida para análise, simulação e inteligência estratégica.",
    items: [
      "Abordagem Híbrida Clássico-Quântica",
      "Cibersegurança & Infraestrutura",
      "IA & Machine Learning Aplicado",
      "Simulação de Cenários Não-Lineares",
    ],
  },
  {
    icon: Shield,
    title: "Governança & Sustentabilidade",
    color: "#34d399",
    colorBg: "rgba(52, 211, 153, 0.1)",
    borderColor: "rgba(52, 211, 153, 0.2)",
    description:
      "Desenvolvimento de frameworks de governança corporativa e sustentabilidade que integram ESG, compliance regulatório e transição climática. Construímos caminhos de desenvolvimento que conciliam competitividade, ética e sustentabilidade planetária em escala global.",
    items: [
      "Frameworks ESG Avançados",
      "Transição Climática & Energética",
      "Compliance Regulatório Global",
      "Governança Corporativa Estratégica",
    ],
  },
];

function PillarsSection() {
  return (
    <section id="pillars" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1a]" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs text-[#d4a853] tracking-widest uppercase mb-4">
            Nossos Pilares
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Três Eixos de{" "}
            <span className="text-gold-gradient">Inteligência Integrada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A Overall Consultoria 720° estrutura sua atuação em três pilares que se
            complementam para entregar uma visão verdadeiramente panorâmica dos desafios
            e oportunidades do mundo contemporâneo.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div
                className="h-full p-6 md:p-8 rounded-2xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-500"
                style={{
                  borderColor: pillar.borderColor,
                  borderWidth: "1px",
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: pillar.colorBg }}
                >
                  <pillar.icon size={28} style={{ color: pillar.color }} />
                </div>

                {/* Title */}
                <h3
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: pillar.color }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground/80"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: pillar.color }}
                      />
                      {item}
                    </li>
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
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 720° VISION SECTION ───────────────────────── */

function VisionSection() {
  const visionItems = [
    {
      icon: Eye,
      title: "Visão Panorâmica",
      description:
        "Uma perspectiva 360° multiplicada por 2 — observamos além do convencional, integrando camadas de inteligência que vão do satélite à estratégia, do micro ao macro, do presente ao futuro.",
    },
    {
      icon: Satellite,
      title: "Do Satélite à Decisão",
      description:
        "Integramos dados de múltiplas fontes — imagens de satélite, dados climáticos, indicadores econômicos e sinais geopolíticos — para construir uma imagem nítida e acionável do cenário global.",
    },
    {
      icon: Network,
      title: "Conexão Sistêmica",
      description:
        "Cada decisão é parte de um ecossistema complexo. Nossa abordagem mapeia interconexões entre geopolítica, tecnologia, clima e governança para revelar padrões invisíveis ao olhar convencional.",
    },
    {
      icon: Lightbulb,
      title: "Inteligência Adaptativa",
      description:
        "Combinamos modelos analíticos clássicos com dinâmicas quânticas e IA avançada para criar soluções adaptativas que evoluem com o contexto, garantindo resiliência e antecipação estratégica.",
    },
  ];

  return (
    <section id="vision" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1320]" />
      <div className="absolute inset-0 bg-radial-gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs text-[#d4a853] tracking-widest uppercase mb-4">
              Visão 720°
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Além do 360°:{" "}
              <span className="text-gold-gradient">Uma Nova Dimensão de Inteligência</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A visão 720° representa uma dupla rotação estratégica — não apenas olhamos
              em todas as direções, mas penetramos nas camadas de complexidade que definem
              o mundo contemporâneo. É uma abordagem que combina profundidade analítica
              com amplitude de perspectiva, gerando insights que verdadeiramente transformam
              a tomada de decisão.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa metodologia incorpora inteligência artificial e análise sistêmica para
              processar volumes massivos de dados multiescalares, transformando-os em
              inteligência estratégica que antecipa movimentos, identifica oportunidades
              e mitiga riscos antes que se tornem visíveis ao mercado.
            </p>
          </motion.div>

          {/* Right - Vision Items */}
          <div className="space-y-6">
            {visionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-4 p-5 rounded-xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#d4a853]/10 border border-[#d4a853]/20 flex items-center justify-center">
                  <item.icon size={22} className="text-[#d4a853]" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-2 group-hover:text-[#d4a853] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── METHODOLOGY SECTION ───────────────────────── */

function MethodologySection() {
  const steps = [
    {
      step: "01",
      title: "Mapeamento",
      description:
        "Coleta e integração de dados geopolíticos, tecnológicos, climáticos e econômicos de fontes globais, formando uma base de inteligência multidimensional.",
      icon: FileSearch,
    },
    {
      step: "02",
      title: "Análise Sistêmica",
      description:
        "Aplicação de modelos analíticos clássicos e quânticos para identificar padrões, correlações e sinais fracos nos dados coletados.",
      icon: Brain,
    },
    {
      step: "03",
      title: "Simulação & Cenários",
      description:
        "Construção de cenários probabilísticos e simulações não-lineares para antecipar movimentos e avaliar impactos estratégicos.",
      icon: Cpu,
    },
    {
      step: "04",
      title: "Entrega de Inteligência",
      description:
        "Tradução de insights complexos em recomendações claras, acionáveis e orientadas por contexto para tomada de decisão estratégica.",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="methodology" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0f1a]" />
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs text-[#0ea5e9] tracking-widest uppercase mb-4">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nosso Processo{" "}
            <span className="text-gold-gradient">720° de Inteligência</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma metodologia que integra IA, dados climáticos e visão sistêmica para criar
            soluções adaptativas e orientadas por contexto, desde a coleta de dados até
            a entrega de recomendações estratégicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl glass hover:bg-[rgba(20,28,46,0.8)] transition-all duration-300">
                {/* Step number */}
                <div className="text-4xl font-bold text-[#d4a853]/10 mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center mb-4">
                  <step.icon size={22} className="text-[#0ea5e9]" />
                </div>

                <h3 className="text-lg font-semibold mb-3 group-hover:text-[#d4a853] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-[#d4a853]/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CONTACT SECTION ───────────────────────── */

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1320]" />
      <div className="absolute inset-0 bg-radial-gold" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs text-[#d4a853] tracking-widest uppercase mb-4">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Inicie Sua{" "}
              <span className="text-gold-gradient">Jornada 720°</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Pronto para expandir sua visão estratégica? Entre em contato com nossa equipe
              e descubra como a inteligência 720° pode transformar a tomada de decisão
              da sua organização.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-2xl glass-strong"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-[#d4a853] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold mb-1">E-mail</div>
                    <a href="mailto:guilhermemachado@overall720.xyz" className="text-sm text-muted-foreground hover:text-[#d4a853] transition-colors">guilhermemachado@overall720.xyz</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-[#0ea5e9] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold mb-1">WhatsApp</div>
                    <a href="https://wa.me/5521971213054" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-[#0ea5e9] transition-colors">+55 21 97121-3054</a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Globe2 size={20} className="text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold mb-1">Website</div>
                    <a href="https://overall720.xyz" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-emerald-400 transition-colors">overall720.xyz</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Satellite size={20} className="text-[#d4a853] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold mb-1">Atuação</div>
                    <div className="text-sm text-muted-foreground">Do Satélite à Estratégia</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-divider mb-8" />

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(10,15,26,0.6)] border border-[#d4a853]/10 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-[#d4a853]/40 transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-3 rounded-lg bg-[rgba(10,15,26,0.6)] border border-[#d4a853]/10 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-[#d4a853]/40 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Empresa"
                className="w-full px-4 py-3 rounded-lg bg-[rgba(10,15,26,0.6)] border border-[#d4a853]/10 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-[#d4a853]/40 transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Sua mensagem..."
                className="w-full px-4 py-3 rounded-lg bg-[rgba(10,15,26,0.6)] border border-[#d4a853]/10 text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-[#d4a853]/40 transition-colors resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-[#d4a853] hover:bg-[#b8892e] text-[#0a0f1a] font-semibold text-base py-6 tracking-wide group"
              >
                Enviar Mensagem
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */

function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[#080c16]" />
      <div className="section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#d4a853]/40 overflow-hidden">
                <img
                  src="/logo-overall720.jpg"
                  alt="Overall 720"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-gold-gradient font-bold text-sm tracking-wider uppercase">
                  Overall 720°
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Powerhouse of Classical & Quantum Strategic Intelligence.
              720° Advisory & Consulting across Geopolitics, Politech,
              and Global Governance & Sustainability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#d4a853] tracking-wider uppercase mb-4">
              Navegação
            </h4>
            <div className="space-y-2">
              {[
                { label: "Sobre", href: "#about" },
                { label: "Research", href: "#research" },
                { label: "Pilares", href: "#pillars" },
                { label: "Portal", href: "#portal" },
                { label: "Blog", href: "#blog" },
                { label: "Contato", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-[#d4a853] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#d4a853] tracking-wider uppercase mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:guilhermemachado@overall720.xyz" className="block hover:text-[#d4a853] transition-colors">guilhermemachado@overall720.xyz</a>
              <a href="https://wa.me/5521971213054" target="_blank" rel="noopener noreferrer" className="block hover:text-[#d4a853] transition-colors">+55 21 97121-3054</a>
              <a href="https://overall720.xyz" target="_blank" rel="noopener noreferrer" className="block hover:text-[#d4a853] transition-colors">overall720.xyz</a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Overall Consultoria 720°. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Geopolitical Business Platform — Visão 720° do Satélite à Estratégia
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── MAIN PAGE ───────────────────────── */

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <ResearchSection />
      <div className="section-divider" />
      <PillarsSection />
      <div className="section-divider" />
      <VisionSection />
      <div className="section-divider" />
      <PortalSection />
      <div className="section-divider" />
      <BlogSection />
      <div className="section-divider" />
      <MethodologySection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </main>
  );
}
