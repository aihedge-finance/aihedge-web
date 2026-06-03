import {
  Wrench,
  Percent,
  Coins,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './Animations'

const FEATURES = [
  {
    icon: Wrench,
    title: 'Custom Allocation Models',
    description:
      'Curate and weight multiple underlying strategies dynamically. Optimize yield and spread risk across different DeFi protocols seamlessly.',
    tag: 'Flexible Allocation',
  },
  {
    icon: Percent,
    title: 'Custom Fee Architectures',
    description:
      'Set your own performance and management fee structures. Align incentives with your depositors and earn as you grow.',
    tag: 'Monetization',
  },
  {
    icon: Coins,
    title: 'Multi-Chain Syndication',
    description:
      'Attract capital from any EVM-compatible chain. Streamline onboarding and aggregate liquidity in a single, unified vault.',
    tag: 'Global Liquidity',
  },
  {
    icon: ShieldCheck,
    title: 'Curator Guardrails',
    description:
      'Set hard limits, drawdown boundaries, and whitelisted protocols. Deploy institutional-grade strategies with total peace of mind.',
    tag: 'Risk Control',
  },
]

export function Curators() {
  return (
    <section className="relative py-24 lg:py-32" id="curators">
      {/* Subtle divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl ml-auto text-right mb-16">
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
            <p className="text-lg text-gray-400 leading-relaxed">
              Curate unique strategies to streamline lending at any scale or sophistication. 
              Build trust, attract depositor capital, and monetize your investment expertise.
            </p>
          </FadeIn>
        </div>

        {/* Feature cards */}
        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
          {FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <div className="glass-card glass-card-hover p-7 h-full group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-500 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                    {f.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-[0.95rem] leading-relaxed">
                  {f.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="mt-12 flex justify-center sm:justify-end">
            <a
              href="https://docs.aihedge.finance/curator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="curator-cta"
            >
              Start Curating
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
