import {
  Shield,
  Layers,
  Sparkles,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './Animations'

const BENEFITS = [
  {
    icon: Layers,
    title: 'Multi-Strategy Diversification',
    description:
      'A single vault automatically allocates capital across multiple strategies — mitigating risk and smoothing returns without you lifting a finger.',
    accent: 'text-brand-500',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
    glow: 'rgba(240,177,0,0.3)',
    gradFrom: 'from-brand-500',
    gradTo: 'to-yellow-300',
  },
  {
    icon: Sparkles,
    title: 'AI-Curated Yield Profiles',
    description:
      'Professional entities curate transparent yield strategies with pre-defined risk profiles. Choose your risk tolerance and let the protocol handle the rest.',
    accent: 'text-accent-cyan',
    bg: 'bg-accent-cyan/10',
    border: 'border-accent-cyan/20',
    glow: 'rgba(0,229,255,0.3)',
    gradFrom: 'from-accent-cyan',
    gradTo: 'to-blue-400',
  },
  {
    icon: Shield,
    title: 'Always Your Keys',
    description:
      'Fully noncustodial, onchain workflows ensure you always maintain control of your assets. No middlemen, no counterparty risk.',
    accent: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
    border: 'border-accent-purple/20',
    glow: 'rgba(179,136,255,0.3)',
    gradFrom: 'from-accent-purple',
    gradTo: 'to-pink-400',
  },
  {
    icon: TrendingUp,
    title: 'Set-and-Forget Yield',
    description:
      'Deposit once and earn continuously. Managed risk, automated rebalancing, and compounding — your capital works around the clock.',
    accent: 'text-accent-gold',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    glow: 'rgba(255,214,0,0.3)',
    gradFrom: 'from-yellow-400',
    gradTo: 'to-brand-500',
  },
]

export function YieldEarners() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface-500" id="yield-earners">
      {/* Subtle top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, rgba(240,177,0,1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, rgba(0,229,255,1) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <FadeIn>
            <p className="text-brand-500 font-semibold text-sm tracking-widest uppercase mb-4">
              For Yield Earners
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-heading text-white mb-5">
              Passive yield,{' '}
              <span className="gradient-text">actively managed</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether you're a first-time DeFi user or a seasoned allocator,
              our marketplace gives you transparent access to institutional-grade
              yield strategies — all from one interface.
            </p>
          </FadeIn>
        </div>

        {/* Benefit cards */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <div className="glass-card p-7 h-full flex flex-col group relative overflow-hidden cursor-default"
                style={{ transition: 'box-shadow 0.4s ease, border-color 0.4s ease, transform 0.3s ease' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = `0 20px 60px -15px ${b.glow}`
                  el.style.borderColor = b.glow.replace('0.3', '0.35')
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = ''
                  el.style.borderColor = ''
                }}
              >
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${b.gradFrom} ${b.gradTo} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon with pulsing glow */}
                <div className="relative mb-5 w-fit">
                  {/* Pulsing outer ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl ${b.bg}`}
                    animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div
                    className={`relative w-14 h-14 rounded-xl ${b.bg} border ${b.border} flex items-center justify-center`}
                    style={{ boxShadow: `0 0 20px ${b.glow}` }}
                  >
                    <b.icon className={`w-7 h-7 ${b.accent}`} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {b.title}
                </h3>
                <p className="text-gray-400 text-[0.95rem] leading-relaxed flex-1">
                  {b.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex justify-center sm:justify-start">
            <a
              href="https://dapp.aihedge.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="yield-earners-cta"
            >
              Explore Vaults
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
