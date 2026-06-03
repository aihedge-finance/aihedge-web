import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from './Animations'

export function Hero() {
  const particles = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 8,
      driftX: Math.random() * 30 - 15,
    }))
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]"
      id="hero"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden bg-surface-500">
        {/* Animated Aurora Glows */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen filter blur-[120px] pointer-events-none">
          {/* Glow 1 (Green) */}
          <motion.div
            animate={{
              x: [-120, 120, -120],
              y: [-60, 100, -60],
              scale: [1, 1.25, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-20%] left-[15%] w-[600px] h-[600px] rounded-full bg-brand-500/20"
          />
          {/* Glow 2 (Cyan) */}
          <motion.div
            animate={{
              x: [120, -120, 120],
              y: [80, -80, 80],
              scale: [1.2, 0.9, 1.2],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[10%] right-[5%] w-[700px] h-[700px] rounded-full bg-accent-cyan/25"
          />
          {/* Glow 3 (Purple) */}
          <motion.div
            animate={{
              x: [-80, 80, -80],
              y: [120, -120, 120],
              scale: [0.95, 1.15, 0.95],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-[-15%] left-[5%] w-[650px] h-[650px] rounded-full bg-accent-purple/20"
          />
        </div>

        {/* 3D Perspective Grid flowing forward */}
        <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1000px' }}>
          <motion.div 
            className="absolute inset-0 origin-top opacity-[0.2]"
            style={{
              transform: 'rotateX(60deg) scale(2.2) translateY(-15%)',
              backgroundImage: `
                linear-gradient(rgba(240, 177, 0, 0.25) 1px, transparent 1px),
                linear-gradient(90deg, rgba(240, 177, 0, 0.25) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              maskImage: 'linear-gradient(to bottom, transparent, black 80%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 80%)',
            }}
            animate={{
              backgroundPosition: ["0px 0px", "0px 50px"]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Dynamic Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-brand-500/40"
              style={{
                top: `${p.y}%`,
                left: `${p.x}%`,
                width: p.size,
                height: p.size,
                filter: 'blur(0.5px)',
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, p.driftX, 0],
                opacity: [0, 0.7, 0],
                scale: [0.8, 1.4, 0.8],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: p.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <FadeIn delay={0.2}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.15] mb-6">
            <span className="block text-white pb-1">Invest wisely with</span>
            <span className="block gradient-text pb-2">AI Hedge.finance</span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={0.35}>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
            Earn great APYs across chains with fascinating innovations
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://dapp.aihedge.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
              id="hero-launch-app"
            >
              Launch App
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://docs.aihedge.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-4"
              id="hero-view-docs"
            >
              View Docs
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-500 to-transparent" />
    </section>
  )
}
