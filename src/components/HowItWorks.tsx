import { motion } from 'framer-motion'
import { Wallet, Search, PiggyBank, Repeat } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './Animations'

const STEPS = [
  {
    number: '01',
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Connect your wallet to the AI Hedge dApp on Base. No sign-ups, no KYC.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Choose a Vault',
    description: 'Browse curated vaults by risk profile, strategy type, and historical performance.',
  },
  {
    number: '03',
    icon: PiggyBank,
    title: 'Deposit & Earn',
    description: 'Deposit into ERC-4626 vaults and start earning yield instantly. Withdraw anytime.',
  },
  {
    number: '04',
    icon: Repeat,
    title: 'Compound or Withdraw',
    description: 'Yield auto-compounds within the vault. Withdraw your full balance whenever you choose.',
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32" id="how-it-works">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="text-accent-purple font-semibold text-sm tracking-widest uppercase mb-4">
              How It Works
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="section-heading text-white mb-5">
              Start earning in{' '}
              <span className="gradient-text">four steps</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-400">
              From wallet connection to yield — in under two minutes.
            </p>
          </FadeIn>
        </div>

        {/* Steps */}
        <StaggerContainer className="grid md:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+32px)] right-[-calc(50%-32px)] h-px bg-gradient-to-r from-white/10 to-transparent w-[calc(100%-64px)]" />
                )}

                <div className="glass-card p-7 text-center h-full group hover:border-brand-500/20 transition-colors duration-300">
                  {/* Step number */}
                  <div className="text-4xl font-extrabold text-white/20 group-hover:text-brand-500/40 font-mono absolute top-4 right-4 transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/20 to-accent-cyan/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-5"
                  >
                    <step.icon className="w-7 h-7 text-brand-500" />
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
