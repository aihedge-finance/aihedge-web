import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from './Animations'

export function FinalCTA() {
  const floatingTokens = useMemo(() => [
    { src: '/images/partners/ethereum.svg',  size: 48, top: '15%', left: '8%',  delay: 0,   floatY: 12 },
    { src: '/images/partners/bitcoin.svg',   size: 40, top: '65%', left: '5%',  delay: 1.2, floatY: 15 },
    { src: '/images/partners/solana.svg',    size: 36, top: '35%', left: '12%', delay: 0.7, floatY: 10 },
    { src: '/images/partners/uniswap.svg',   size: 44, top: '20%', right: '8%', delay: 0.5, floatY: 14 },
    { src: '/images/partners/aave.svg',      size: 38, top: '60%', right: '6%', delay: 1.8, floatY: 12 },
    { src: '/images/partners/arbitrum.svg',  size: 32, top: '80%', right: '12%',delay: 0.9, floatY: 8  },
  ], [])

  return (
    <section className="relative py-24 lg:py-32 bg-surface-400 overflow-hidden" id="cta">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Double-ring pulse background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 2.5, 5].map((delay) => (
          <motion.div
            key={delay}
            className="absolute rounded-full border border-brand-500/10"
            animate={{ scale: [0.6, 2.2], opacity: [0.4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeOut', delay }}
            style={{ width: '500px', height: '500px' }}
          />
        ))}
        {/* Static central glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(240,177,0,0.06) 0%, rgba(0,229,255,0.03) 40%, transparent 70%)',
          }}
        />
      </div>

      {/* Floating token icons */}
      {floatingTokens.map((t, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: t.top, left: (t as any).left, right: (t as any).right }}
          animate={{ y: [-t.floatY, t.floatY, -t.floatY] }}
          transition={{ duration: 6 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: t.delay }}
        >
          <img
            src={t.src}
            alt=""
            style={{
              width: t.size,
              height: t.size,
              filter: 'blur(3px) brightness(0.85) saturate(1.2)',
              opacity: 0.55,
            }}
            draggable={false}
          />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-3">
            Get Started
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
            Ready to put your{' '}
            <span className="gradient-text">capital to work?</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Whether you're depositing into curated vaults or deploying
            your next strategy — the yield marketplace is open.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://dapp.aihedge.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 animate-glow"
              id="final-cta-launch"
            >
              Launch App
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-10 py-5"
              id="final-cta-whitepaper"
            >
              Read Whitepaper
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
