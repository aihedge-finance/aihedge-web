import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, FileText } from 'lucide-react'

const NAV_LINKS = [
  // { label: 'Yield Earners', href: '/#yield-earners' },
  { label: 'How It Works', href: '/#how-it-works' },
  // { label: 'Vault Creation', href: '/#curators' },
  { label: 'Ecosystem', href: '/#ecosystem' },
  // { label: 'News', href: '/#news' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('/#', ''))
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-500/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center" id="nav-logo">
          <img src="/images/logo/logo2.png" alt="AI Hedge" className="h-8 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === `/#${activeSection}`
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 font-medium ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm !py-2.5 !px-4"
            id="nav-whitepaper"
          >
            <FileText className="w-4 h-4" />
            Whitepaper
          </a>
          <a
            href="https://dapp.aihedge.finance"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm !py-2.5 !px-5"
            id="nav-launch-app"
          >
            Launch App
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle navigation menu"
          id="nav-mobile-toggle"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface-100/95 backdrop-blur-xl border-b border-white/[0.06] px-6 pb-6"
          id="nav-mobile-menu"
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.href === `/#${activeSection}`
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 transition-colors font-medium ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="/whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm justify-center"
            >
              <FileText className="w-4 h-4" />
              Whitepaper
            </a>
            <a
              href="https://dapp.aihedge.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm justify-center"
            >
              Launch App
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
