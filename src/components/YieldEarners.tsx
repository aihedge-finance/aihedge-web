import {
  Shield,
  Layers,
  Sparkles,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
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
  },
  {
    icon: Sparkles,
    title: 'AI-Curated Yield Profiles',
    description:
      'Professional entities curate transparent yield strategies with pre-defined risk profiles. Choose your risk tolerance and let the protocol handle the rest.',
    accent: 'text-accent-cyan',
    bg: 'bg-accent-cyan/10',
    border: 'border-accent-cyan/20',
  },
  {
    icon: Shield,
    title: 'Always Your Keys',
    description:
      'Fully noncustodial, onchain workflows ensure you always maintain control of your assets. No middlemen, no counterparty risk.',
    accent: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
    border: 'border-accent-purple/20',
  },
  {
    icon: TrendingUp,
    title: 'Set-and-Forget Yield',
    description:
      'Deposit once and earn continuously. Managed risk, automated rebalancing, and compounding — your capital works around the clock.',
    accent: 'text-accent-gold',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
]

export function YieldEarners() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface-500" id="yield-earners">
      <div className="max-w-7xl mx-auto px-6">
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
              <div className="glass-card glass-card-hover p-7 h-full flex flex-col">
                <div
                  className={`w-12 h-12 rounded-xl ${b.bg} border ${b.border} flex items-center justify-center mb-5`}
                >
                  <b.icon className={`w-6 h-6 ${b.accent}`} />
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
