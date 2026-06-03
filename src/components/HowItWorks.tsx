import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wallet, Search, PiggyBank, Repeat, Clock } from 'lucide-react'
import { FadeIn } from './Animations'

const STEPS = [
  {
    number: '01',
    icon: Wallet,
    title: 'Connect Wallet',
    description: 'Connect your wallet to the AI Hedge dApp on Base. No sign-ups, no KYC.',
    time: '~30 sec',
    color: 'rgba(240,177,0,0.8)',
    glow: 'rgba(240,177,0,0.25)',
  },
  {
    number: '02',
    icon: Search,
    title: 'Choose a Vault',
    description: 'Browse curated vaults by risk profile, strategy type, and historical performance.',
    time: '~1 min',
    color: 'rgba(0,229,255,0.8)',
    glow: 'rgba(0,229,255,0.25)',
  },
  {
    number: '03',
    icon: PiggyBank,
    title: 'Deposit & Earn',
    description: 'Deposit into ERC-4626 vaults and start earning yield instantly. Withdraw anytime.',
    time: '~30 sec',
    color: 'rgba(179,136,255,0.8)',
    glow: 'rgba(179,136,255,0.25)',
  },
  {
    number: '04',
    icon: Repeat,
    title: 'Compound or Withdraw',
    description: 'Yield auto-compounds within the vault. Withdraw your full balance whenever you choose.',
    time: 'Ongoing',
    color: 'rgba(240,177,0,0.8)',
    glow: 'rgba(240,177,0,0.25)',
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 bg-surface-400" id="how-it-works">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Ambient corner glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, rgba(179,136,255,1), transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, rgba(240,177,0,1), transparent 70%)' }} />

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

        {/* Steps with inline connectors */}
        <div ref={ref}>
          <FadeIn delay={0.15}>
            <div className="flex flex-col md:flex-row items-stretch gap-0">
              {STEPS.map((step, i) => (
                <div key={step.number} className="flex md:flex-col items-center flex-1">

                  {/* Step card */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-col items-center text-center group p-4">
                      {/* Pulse icon */}
                      <div className="relative mb-4">
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ border: `1px solid ${step.color}` }}
                          animate={{ scale: [1, 1.65, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.45 }}
                        />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-[64px] h-[64px] rounded-full border flex items-center justify-center relative overflow-hidden"
                          style={{
                            background: `radial-gradient(circle at center, ${step.glow}, rgba(45,48,57,0.95))`,
                            borderColor: step.color,
                            boxShadow: `0 0 18px ${step.glow}`,
                          }}
                        >
                          <step.icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>

                      {/* Step number */}
                      <span className="text-3xl font-extrabold font-mono mb-3"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}, white)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {step.number}
                      </span>

                      {/* Card */}
                      <div
                        className="glass-card p-5 w-full transition-all duration-300"
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px -10px ${step.glow}` }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '' }}
                      >
                        <div className="flex items-center justify-center gap-1.5 mb-2">
                          <Clock className="w-3 h-3 text-gray-500" />
                          <span className="text-xs font-mono text-gray-500">{step.time}</span>
                        </div>
                        <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Connector between steps (not after the last one) */}
                  {i < STEPS.length - 1 && (
                    <div className="
                      flex-shrink-0
                      md:w-auto md:h-auto
                      w-full h-8 md:h-[64px]
                      flex items-center justify-center
                      md:self-start md:mt-[36px]
                      relative
                      px-1
                    ">
                      {/* Track */}
                      <div className="
                        md:w-10 md:h-[2px] md:flex-row
                        w-[2px] h-full
                        bg-white/10 rounded-full relative overflow-hidden
                      ">
                        {/* Animated fill */}
                        <motion.div
                          className="absolute bg-gradient-to-r from-brand-500/70 to-accent-cyan/70 rounded-full"
                          style={{
                            top: 0, left: 0,
                            boxShadow: '0 0 6px rgba(240,177,0,0.5)',
                          }}
                          animate={inView
                            ? { width: ['0%', '100%', '100%'], height: '100%' }
                            : { width: '0%', height: '100%' }
                          }
                          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 + i * 0.45 }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
