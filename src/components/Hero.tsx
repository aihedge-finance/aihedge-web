import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from './Animations'

export function Hero() {
  const particles = useMemo(() => {
    const colors = [
      'rgba(240, 177, 0, 0.6)',
      'rgba(0, 229, 255, 0.5)',
      'rgba(179, 136, 255, 0.5)',
      'rgba(252, 211, 77, 0.5)',
      'rgba(255, 255, 255, 0.3)',
    ]
    return [...Array(40)].map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 12,
      driftX: Math.random() * 50 - 25,
      driftY: -(Math.random() * 100 + 40),
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
  }, [])

  const streaks = useMemo(() => {
    return [...Array(5)].map((_, i) => ({
      id: i,
      angle: -25 + Math.random() * 10,
      top: 10 + Math.random() * 60,
      left: Math.random() * 40,
      width: 180 + Math.random() * 250,
      delay: i * 3.5 + Math.random() * 2,
      duration: 2.5 + Math.random() * 1.5,
    }))
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]"
      id="hero"
    >
      {/* ====== Premium Cinematic Background ====== */}
      <div className="absolute inset-0 overflow-hidden bg-surface-500">

        {/* Layer 1: Deep Nebula Mesh – 4 huge blurred blobs morphing slowly */}
        <div className="absolute inset-0 pointer-events-none" style={{ filter: 'blur(100px)' }}>
          <motion.div
            animate={{
              x: [-100, 160, -60, -100],
              y: [-40, 120, -90, -40],
              scale: [1, 1.35, 0.9, 1],
              borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '50% 50% 30% 70% / 60% 40% 60% 40%', '70% 30% 50% 50% / 40% 70% 30% 60%', '30% 70% 70% 30% / 30% 30% 70% 70%'],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-[15%] left-[10%] w-[700px] h-[700px]"
            style={{ background: 'radial-gradient(circle, rgba(240,177,0,0.35) 0%, rgba(240,177,0,0.05) 70%, transparent 100%)' }}
          />
          <motion.div
            animate={{
              x: [100, -140, 80, 100],
              y: [60, -100, 120, 60],
              scale: [1.15, 0.85, 1.25, 1.15],
              borderRadius: ['60% 40% 30% 70% / 50% 60% 40% 50%', '30% 70% 60% 40% / 70% 30% 50% 50%', '50% 50% 50% 50% / 40% 60% 40% 60%', '60% 40% 30% 70% / 50% 60% 40% 50%'],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute top-[5%] right-[-5%] w-[800px] h-[800px]"
            style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.3) 0%, rgba(0,229,255,0.05) 65%, transparent 100%)' }}
          />
          <motion.div
            animate={{
              x: [-60, 100, -100, -60],
              y: [100, -60, 80, 100],
              scale: [0.9, 1.2, 1.05, 0.9],
              borderRadius: ['40% 60% 50% 50% / 60% 40% 60% 40%', '70% 30% 40% 60% / 30% 70% 30% 70%', '50% 50% 60% 40% / 50% 50% 50% 50%', '40% 60% 50% 50% / 60% 40% 60% 40%'],
            }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
            className="absolute bottom-[-20%] left-[-5%] w-[750px] h-[750px]"
            style={{ background: 'radial-gradient(circle, rgba(179,136,255,0.3) 0%, rgba(179,136,255,0.05) 65%, transparent 100%)' }}
          />
          <motion.div
            animate={{
              x: [80, -80, 40, 80],
              y: [-80, 60, -40, -80],
              scale: [1.1, 0.95, 1.3, 1.1],
              borderRadius: ['50% 50% 40% 60% / 40% 60% 40% 60%', '40% 60% 60% 40% / 60% 40% 60% 40%', '60% 40% 40% 60% / 50% 50% 50% 50%', '50% 50% 40% 60% / 40% 60% 40% 60%'],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
            className="absolute top-[30%] left-[40%] w-[500px] h-[500px]"
            style={{ background: 'radial-gradient(circle, rgba(240,177,0,0.2) 0%, rgba(252,211,77,0.08) 60%, transparent 100%)' }}
          />
        </div>

        {/* Layer 2: Radial Pulse Ring from center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              className="absolute rounded-full"
              style={{
                border: '3px solid rgba(240, 177, 0, 0.25)',
                boxShadow: '0 0 15px rgba(240, 177, 0, 0.12), inset 0 0 15px rgba(240, 177, 0, 0.06)',
                width: 200,
                height: 200,
              }}
              animate={{
                scale: [0.5, 3],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeOut',
                delay,
              }}
            />
          ))}
        </div>

        {/* Layer 3: Shooting Light Streaks */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {streaks.map((s) => (
            <motion.div
              key={s.id}
              className="absolute h-[3px] rounded-full"
              style={{
                top: `${s.top}%`,
                left: `${s.left}%`,
                width: s.width,
                transform: `rotate(${s.angle}deg)`,
                filter: 'blur(1px)',
                background: 'linear-gradient(90deg, transparent, rgba(240,177,0,0.6) 30%, rgba(255,255,255,0.9) 50%, rgba(0,229,255,0.5) 70%, transparent)',
              }}
              animate={{
                x: [-200, window.innerWidth + 200],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: s.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: s.delay,
                repeatDelay: 4 + Math.random() * 6,
              }}
            />
          ))}
        </div>

        {/* Layer 4: Hexagonal Grid Overlay */}
        <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
          <motion.div
            className="absolute inset-0 origin-center opacity-[0.12]"
            style={{
              transform: 'rotateX(55deg) scale(2.5)',
              backgroundImage: `
                url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z' fill='none' stroke='rgba(240,177,0,0.35)' stroke-width='0.5'/%3E%3Cpath d='M28 100L0 84L0 50L28 34L56 50L56 84L28 100Z' fill='none' stroke='rgba(240,177,0,0.35)' stroke-width='0.5'/%3E%3C/svg%3E")
              `,
              backgroundSize: '56px 100px',
              maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '0px 100px'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Layer 5: Center Glow Spotlight */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '900px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(240,177,0,0.08) 0%, rgba(240,177,0,0.02) 40%, transparent 70%)',
          }}
        />

        {/* Layer 6: Luminous Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                top: `${p.y}%`,
                left: `${p.x}%`,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 4}px ${p.color}, 0 0 ${p.size * 8}px ${p.color}`,
              }}
              animate={{
                y: [0, p.driftY, 0],
                x: [0, p.driftX, 0],
                opacity: [0, 0.9, 0],
                scale: [0.5, 1.6, 0.5],
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
