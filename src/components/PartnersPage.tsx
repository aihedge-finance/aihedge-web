import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, ArrowLeft, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PARTNERS, PartnerLogo } from './Ecosystem'
import { FadeIn } from './Animations'

export function PartnersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const activePartners = useMemo(() => {
    return [...PARTNERS].filter((p) => p.active).sort((a, b) => a.name.localeCompare(b.name))
  }, [])

  const categories = useMemo(() => {
    const cats = new Set(activePartners.map((p) => p.category))
    return ['ALL', ...Array.from(cats).sort()]
  }, [activePartners])

  const filteredPartners = useMemo(() => {
    return activePartners.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory =
        selectedCategory === 'ALL' || p.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [activePartners, searchQuery, selectedCategory])

  return (
    <div className="min-h-screen bg-surface-500 pt-32 pb-24 relative overflow-hidden">
      {/* Background aurora glows */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen filter blur-[120px] pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent-cyan/20" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-brand-500/15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Page Title */}
        <div className="max-w-3xl mb-12">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Ecosystem Partners
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Explore the integrations, security auditors, coverage protocols, 
              and decentralized networks that power the AI Hedge Finance marketplace.
            </p>
          </FadeIn>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-surface-100/40 border border-white/[0.06] rounded-3xl p-6 mb-12 backdrop-blur-md flex flex-col gap-6">
          {/* Search Bar Row */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
            <input
              type="text"
              placeholder="Search partners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/[0.06] rounded-full pl-11 pr-10 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-white rounded-full bg-white/[0.02] border border-white/[0.04] transition-all hover:bg-white/[0.08]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Categories wrapping row */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent-cyan border-accent-cyan text-surface-500 shadow-lg shadow-accent-cyan/15'
                    : 'bg-white/[0.03] border-white/[0.06] text-gray-400 hover:text-white hover:border-white/[0.12]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        {filteredPartners.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((p, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.3) }}
                key={p.name}
                className="glass-card glass-card-hover p-6 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <PartnerLogo name={p.name} logo={p.logo} />
                    <div>
                      <h4 className="font-bold text-white leading-tight text-lg">
                        {p.name}
                      </h4>
                      <span className="text-[10px] font-bold text-accent-cyan tracking-wider font-mono uppercase bg-accent-cyan/10 px-2 py-0.5 rounded-full mt-1.5 inline-block">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-white bg-white/[0.03] border border-white/[0.06] rounded-xl transition-all hover:scale-105 duration-200"
                  >
                    <ExternalLink className="w-4.5 h-4.5" />
                  </a>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-surface-100/20 border border-white/[0.04] rounded-3xl">
            <p className="text-gray-500 text-lg">No partners found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
