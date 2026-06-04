import { useState, useMemo, useEffect } from 'react'
import { Search, ExternalLink, ArrowLeft, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PARTNERS, PartnerLogo } from './Ecosystem'

export function PartnersPage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'ecosystem' } })
  }

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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-brand-500/10 blur-[160px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[700px] h-[700px] rounded-full bg-accent-cyan/8 blur-[180px]" />
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-accent-purple/6 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <div className="mb-10">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-500 uppercase mb-4 font-mono">
            Ecosystem
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight leading-[1.1]">
            Our{' '}
            <span className="gradient-text">Partners</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            Explore the integrations, security auditors, coverage protocols, 
            and decentralized networks that power the AI Hedge Finance marketplace.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div
          className="rounded-2xl p-6 mb-12 flex flex-col gap-5"
          style={{
            background: 'linear-gradient(135deg, rgba(74,77,92,0.35) 0%, rgba(45,48,57,0.5) 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search partners..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl pl-11 pr-10 py-3 text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.08)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 hover:text-white rounded-lg transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Result count */}
            <span className="text-xs text-gray-500 font-mono tabular-nums whitespace-nowrap">
              {filteredPartners.length} partner{filteredPartners.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                style={
                  selectedCategory === cat
                    ? {
                        background: 'linear-gradient(135deg, rgb(240,177,0), rgb(212,155,0))',
                        color: '#0a0a14',
                        border: '1px solid transparent',
                        boxShadow: '0 4px 20px -4px rgba(240,177,0,0.3)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.03)',
                        color: 'rgb(156,163,175)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid List */}
        {filteredPartners.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPartners.map((p) => (
              <div
                key={p.name}
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(160deg, rgba(74,77,92,0.5) 0%, rgba(45,48,57,0.6) 100%)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.borderColor = 'rgba(240,177,0,0.2)'
                  e.currentTarget.style.boxShadow = '0 20px 60px -15px rgba(240,177,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top accent bar */}
                <div
                  className="h-[2px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgb(240,177,0), rgb(0,229,255), transparent)',
                  }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.06)',
                        }}
                      >
                        <PartnerLogo name={p.name} logo={p.logo} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white leading-tight text-[15px] tracking-tight">
                          {p.name}
                        </h4>
                        <span
                          className="text-[10px] font-bold tracking-wider font-mono uppercase mt-1 inline-block px-2 py-0.5 rounded"
                          style={{
                            color: 'var(--color-accent-cyan)',
                            background: 'rgba(0,229,255,0.08)',
                            border: '1px solid rgba(0,229,255,0.12)',
                          }}
                        >
                          {p.category}
                        </span>
                      </div>
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-white rounded-lg transition-all duration-200 flex-shrink-0"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">
                    {p.description}
                  </p>

                  {/* Bottom link */}
                  <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-gray-500 hover:text-brand-500 transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                      Visit website
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-24 rounded-2xl"
            style={{
              background: 'rgba(74,77,92,0.2)',
              border: '1px solid rgba(255,255,255,0.04)',
            }}
          >
            <div className="text-4xl mb-4 opacity-30">🔍</div>
            <p className="text-gray-500 text-lg font-medium">No partners found matching your filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('ALL') }}
              className="mt-4 text-sm text-brand-500 hover:text-brand-400 font-semibold transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Bottom divider */}
        <div className="mt-20">
          <div
            className="h-px w-full"
            style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }}
          />
        </div>
      </div>
    </div>
  )
}
