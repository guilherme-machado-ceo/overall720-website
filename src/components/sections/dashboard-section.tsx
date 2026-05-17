"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  Globe,
  Shield,
  TrendingUp,
  Zap,
  Eye,
} from "lucide-react";

/* ───────────────────────── DASHBOARD SECTION ───────────────────────── */

const dashboardCards = [
  {
    id: "geo-risk",
    title: "Geopolitical Risk Index",
    icon: Activity,
    value: "72/100",
    status: "Moderate Risk",
    description: "Trend: ▲ +3.2 from last week",
    color: "#d4a853",
    colorBg: "rgba(212, 168, 83, 0.1)",
    borderColor: "rgba(212, 168, 83, 0.15)",
    gaugePercent: 72,
    gaugeColor: "#d4a853",
  },
  {
    id: "ai-insights",
    title: "AI Insights",
    icon: Brain,
    stats: [
      { label: "Active analyses", value: "3" },
      { label: "Reports generated", value: "12" },
      { label: "GuruMatrix 5D", value: "Online", isStatus: true },
    ],
    color: "#0ea5e9",
    colorBg: "rgba(14, 165, 233, 0.1)",
    borderColor: "rgba(14, 165, 233, 0.15)",
  },
  {
    id: "global-coverage",
    title: "Global Coverage",
    icon: Globe,
    stats: [
      { label: "Countries monitored", value: "47" },
      { label: "Data sources", value: "156" },
    ],
    color: "#34d399",
    colorBg: "rgba(52, 211, 153, 0.1)",
    borderColor: "rgba(52, 211, 153, 0.15)",
  },
  {
    id: "sustainability",
    title: "Sustainability Score",
    icon: Shield,
    stats: [
      { label: "E", value: "81", barPercent: 81, barColor: "#34d399" },
      { label: "S", value: "74", barPercent: 74, barColor: "#0ea5e9" },
      { label: "G", value: "88", barPercent: 88, barColor: "#d4a853" },
    ],
    subtitle: "ESG Composite Index",
    color: "#34d399",
    colorBg: "rgba(52, 211, 153, 0.1)",
    borderColor: "rgba(52, 211, 153, 0.15)",
  },
];

const activityFeed = [
  {
    id: "feed-1",
    text: "🔍 Análise geopolítica atualizada — Sudeste Asiático",
    time: "2 min atrás",
    color: "#d4a853",
  },
  {
    id: "feed-2",
    text: "📊 Relatório ESG Q2 2026 gerado automaticamente",
    time: "15 min atrás",
    color: "#34d399",
  },
  {
    id: "feed-3",
    text: "⚠️ Alerta: Volatilidade cambial detectada — BRL/USD",
    time: "32 min atrás",
    color: "#d4a853",
  },
  {
    id: "feed-4",
    text: "🧠 IMIP Framework — Nova instância de análise ativada",
    time: "1h atrás",
    color: "#0ea5e9",
  },
];

function GaugeIndicator({
  percent,
  color,
  size = 120,
}: {
  percent: number;
  color: string;
  size?: number;
}) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background circle */}
      <svg
        width={size}
        height={size}
        className="-rotate-90"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color }}>
            {percent}
          </div>
          <div className="text-[10px] text-muted-foreground/60">/ 100</div>
        </div>
      </div>
    </div>
  );
}

export default function DashboardSection() {
  return (
    <section id="dashboard" className="relative py-24 md:py-32 overflow-hidden">
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs md:text-sm text-[#0ea5e9] tracking-widest uppercase mb-4">
            <Eye size={14} />
            Dashboard 720°
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Inteligência em{" "}
            <span className="text-gold-gradient">Tempo Real</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Painel de inteligência artificial que integra dados geopolíticos,
            indicadores ESG e análises preditivas para suporte à tomada de
            decisão estratégica em escala global.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl glass-strong p-4 md:p-6 lg:p-8"
          style={{ borderColor: "rgba(14, 165, 233, 0.15)" }}
        >
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[rgba(14,165,233,0.1)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.2)] flex items-center justify-center">
                <Zap size={20} className="text-[#0ea5e9]" />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground">
                  Overall 720° Intelligence Dashboard
                </h3>
                <p className="text-xs text-muted-foreground">
                  AI-Powered Strategic Intelligence
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Live indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34d399]" />
                </span>
                <span className="text-xs font-medium text-[#34d399]">LIVE</span>
              </div>

              {/* Last updated */}
              <span className="text-xs text-muted-foreground/60 hidden md:inline">
                Atualizado: 18 Mai 2026 — 14:32 UTC
              </span>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
            {/* Geopolitical Risk Index */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div
                className="h-full p-5 rounded-xl transition-all duration-300 hover:bg-[rgba(20,28,46,0.6)]"
                style={{
                  backgroundColor: "rgba(10, 15, 26, 0.6)",
                  border: `1px solid ${dashboardCards[0].borderColor}`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Activity size={16} style={{ color: dashboardCards[0].color }} />
                  <h4 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                    {dashboardCards[0].title}
                  </h4>
                </div>

                <div className="flex flex-col items-center mb-4">
                  <GaugeIndicator
                    percent={dashboardCards[0].gaugePercent}
                    color={dashboardCards[0].gaugeColor}
                  />
                </div>

                <div className="text-center">
                  <div
                    className="text-sm font-bold mb-1"
                    style={{ color: dashboardCards[0].color }}
                  >
                    {dashboardCards[0].status}
                  </div>
                  <div className="text-xs text-muted-foreground/60">
                    {dashboardCards[0].description}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div
                className="h-full p-5 rounded-xl transition-all duration-300 hover:bg-[rgba(20,28,46,0.6)]"
                style={{
                  backgroundColor: "rgba(10, 15, 26, 0.6)",
                  border: `1px solid ${dashboardCards[1].borderColor}`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Brain size={16} style={{ color: dashboardCards[1].color }} />
                  <h4 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                    {dashboardCards[1].title}
                  </h4>
                </div>

                <div className="space-y-3">
                  {dashboardCards[1].stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between py-2 px-3 rounded-lg"
                      style={{ backgroundColor: "rgba(10, 15, 26, 0.4)" }}
                    >
                      <span className="text-xs text-muted-foreground">
                        {stat.label}
                      </span>
                      {stat.isStatus ? (
                        <span className="flex items-center gap-1.5 text-xs font-medium text-[#34d399]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                          {stat.value}
                        </span>
                      ) : (
                        <span
                          className="text-sm font-bold"
                          style={{ color: dashboardCards[1].color }}
                        >
                          {stat.value}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Global Coverage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <div
                className="h-full p-5 rounded-xl transition-all duration-300 hover:bg-[rgba(20,28,46,0.6)]"
                style={{
                  backgroundColor: "rgba(10, 15, 26, 0.6)",
                  border: `1px solid ${dashboardCards[2].borderColor}`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Globe size={16} style={{ color: dashboardCards[2].color }} />
                  <h4 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                    {dashboardCards[2].title}
                  </h4>
                </div>

                <div className="space-y-3 mb-4">
                  {dashboardCards[2].stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between py-2 px-3 rounded-lg"
                      style={{ backgroundColor: "rgba(10, 15, 26, 0.4)" }}
                    >
                      <span className="text-xs text-muted-foreground">
                        {stat.label}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: dashboardCards[2].color }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mini coverage bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] text-muted-foreground/60">Coverage</span>
                    <span className="text-[10px] font-medium" style={{ color: dashboardCards[2].color }}>
                      94%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: "94%",
                        background: `linear-gradient(90deg, ${dashboardCards[2].color}80, ${dashboardCards[2].color})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sustainability Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <div
                className="h-full p-5 rounded-xl transition-all duration-300 hover:bg-[rgba(20,28,46,0.6)]"
                style={{
                  backgroundColor: "rgba(10, 15, 26, 0.6)",
                  border: `1px solid ${dashboardCards[3].borderColor}`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Shield size={16} style={{ color: dashboardCards[3].color }} />
                  <h4 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                    {dashboardCards[3].title}
                  </h4>
                </div>

                <div className="text-[10px] text-muted-foreground/50 mb-3 tracking-wider uppercase">
                  {dashboardCards[3].subtitle}
                </div>

                <div className="space-y-3">
                  {dashboardCards[3].stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold" style={{ color: stat.barColor }}>
                          {stat.label}
                        </span>
                        <span className="text-xs font-bold" style={{ color: stat.barColor }}>
                          {stat.value}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${stat.barPercent}%`,
                            background: `linear-gradient(90deg, ${stat.barColor}80, ${stat.barColor})`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Composite score */}
                <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.05)] text-center">
                  <div className="text-[10px] text-muted-foreground/50 mb-1">Composite</div>
                  <div className="text-lg font-bold text-[#d4a853]">81.0</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div
              className="p-5 rounded-xl"
              style={{
                backgroundColor: "rgba(10, 15, 26, 0.6)",
                border: "1px solid rgba(14, 165, 233, 0.1)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={14} className="text-[#0ea5e9]" />
                <h4 className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                  Activity Feed
                </h4>
              </div>

              <div className="space-y-2">
                {activityFeed.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-[rgba(20,28,46,0.6)] transition-colors duration-200"
                    style={{
                      borderLeft: `2px solid ${item.color}40`,
                    }}
                  >
                    <span className="text-sm text-muted-foreground">{item.text}</span>
                    <span className="text-[10px] text-muted-foreground/40 flex-shrink-0 ml-4 hidden sm:block">
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
