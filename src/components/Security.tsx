import { ShieldCheck, Eye, Lock, FileCheck } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './Animations'

const TRUST_ITEMS = [
  {
    icon: Lock,
    title: 'Noncustodial',
    description: 'Your assets remain in smart contracts you control. No intermediary ever holds your funds.',
  },
  {
    icon: Eye,
    title: 'Transparent Onchain',
    description: 'Every vault, strategy, and transaction is fully verifiable onchain. No black boxes.',
  },
  {
    icon: FileCheck,
    title: 'Risk Checklists',
    description: 'Each strategy comes with a transparent risk profile so you can make informed decisions.',
  },
  {
    icon: ShieldCheck,
    title: 'Battle-Tested Standard',
    description: 'Built on the ERC-4626 tokenized vault standard — the most widely adopted vault interface in DeFi.',
  },
]

export function Security() {
  return (
    <section className="relative py-24 lg:py-32" id="security">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,230,118,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-brand-500 font-semibold text-sm tracking-widest uppercase mb-4">
              Trust & Infrastructure
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-heading text-white mb-5">
              Security you can{' '}
              <span className="gradient-text">verify</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-400">
              Every piece of the protocol is designed for transparency, composability, and user sovereignty.
            </p>
          </FadeIn>
        </div>

        {/* Trust cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <div className="glass-card glass-card-hover p-6 text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
