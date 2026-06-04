import {
  ArrowRight,
  TrendingUp,
  Percent,
  ShieldCheck,
  BarChart2,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn } from './Animations'

const MOCK_ALLOCATIONS = [
  { label: 'Aave Lending',   pct: 42, color: '#00e5ff' },
  { label: 'Lido Staking',   pct: 28, color: '#f0b100' },
  { label: 'Yearn Vaults',   pct: 18, color: '#b388ff' },
  { label: 'Reserve Buffer', pct: 12, color: '#4a5568' },
]

// Mini sparkline path
const SPARKLINE = 'M0 40 C10 38 20 45 30 35 C40 25 50 30 60 20 C70 10 80 15 90 8 C100 2 110 5 120 0'

export function Curators() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface-400" id="curators">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background ambient */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 pointer-events-none opacity-[0.05] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,1), transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Two-column layout: text+cards left, dashboard mockup right */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <div className="flex flex-col justify-center">
            <FadeIn>
              <p className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-4">
                Vault Creation
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="section-heading text-white mb-5">
                Become a <span className="gradient-text">leading curator</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                Curate unique strategies to streamline lending at any scale or sophistication.
                Build trust, attract capital, and monetize your investment expertise.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <a
                href="https://docs.aihedge.finance/curator"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
                id="curator-cta"
              >
                Start Curating
                <ArrowRight className="w-5 h-5" />
              </a>
            </FadeIn>
          </div>

          {/* Right column: Curator Dashboard Glass Mockup */}
          <FadeIn delay={0.25}>
            <div className="sticky top-28">
              <div
                className="rounded-2xl border border-white/10 overflow-hidden"
                style={{
                  background: 'rgba(45, 48, 57, 0.7)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  boxShadow: '0 32px 80px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
              >
                {/* Dashboard title bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="ml-2 text-xs font-mono text-gray-400">Curator Dashboard</span>
                  </div>
                  <span className="text-xs font-mono text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                    Live
                  </span>
                </div>

                <div className="p-5 space-y-5">
                  {/* Vault name + sparkline row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Active Vault</p>
                      <p className="text-sm font-bold text-white">ETH Yield Maximizer</p>
                    </div>
                    {/* Mini sparkline */}
                    <div className="w-[130px] h-[44px]">
                      <svg viewBox="0 0 120 44" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgba(240,177,0,0.3)" />
                            <stop offset="100%" stopColor="rgba(240,177,0,1)" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d={SPARKLINE}
                          fill="none"
                          stroke="url(#sparkGrad)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                        />
                        {/* End dot */}
                        <motion.circle
                          cx="120" cy="0" r="3" fill="rgba(240,177,0,1)"
                          style={{ filter: 'drop-shadow(0 0 4px rgba(240,177,0,0.8))' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.8 }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Allocation bars */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                        <BarChart2 className="w-3.5 h-3.5" /> Strategy Allocation
                      </span>
                      <span className="text-xs text-gray-500">100%</span>
                    </div>
                    <div className="space-y-2.5">
                      {MOCK_ALLOCATIONS.map((alloc, i) => (
                        <div key={alloc.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">{alloc.label}</span>
                            <span className="font-mono" style={{ color: alloc.color }}>{alloc.pct}%</span>
                          </div>
                          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: alloc.color, boxShadow: `0 0 8px ${alloc.color}` }}
                              initial={{ width: '0%' }}
                              animate={{ width: `${alloc.pct}%` }}
                              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 + i * 0.15 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Net APY', value: '14.2%', icon: TrendingUp, color: '#f0b100' },
                      { label: 'Perf. Fee', value: '10%', icon: Percent, color: '#00e5ff' },
                      { label: 'Risk Level', value: 'Low', icon: ShieldCheck, color: '#b388ff' },
                    ].map((m) => (
                      <div key={m.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 text-center">
                        <m.icon className="w-4 h-4 mx-auto mb-1" style={{ color: m.color }} />
                        <p className="text-[11px] text-gray-500 mb-0.5">{m.label}</p>
                        <p className="text-sm font-bold text-white">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Guardrails */}
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                    <p className="text-xs font-mono text-gray-500 mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent-purple" />
                      Active Guardrails
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Max 20% single protocol', 'Drawdown: -15%', 'Whitelist: 8 protocols'].map((g) => (
                        <span key={g} className="text-[10px] font-mono bg-accent-purple/10 border border-accent-purple/20 text-accent-purple px-2 py-0.5 rounded-full">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
