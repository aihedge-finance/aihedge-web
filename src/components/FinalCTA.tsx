import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from './Animations'

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32" id="cta">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,230,118,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
            Ready to put your{' '}
            <span className="gradient-text">capital to work?</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Whether you're depositing into curated vaults or deploying
            your next strategy — the yield marketplace is open.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
