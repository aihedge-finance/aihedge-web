import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { FadeIn } from './Animations'
import { ARTICLES, type Article } from './articlesData'

function ArticleCard({ article }: { article: Article }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-400 hover:border-brand-500/30 hover:shadow-[0_20px_60px_-15px_rgba(240,177,0,0.12)] flex flex-col h-full cursor-default"
      style={{ background: 'rgba(45,48,57,0.5)' }}
    >
      {/* Cover */}
      <div
        className="relative h-48 overflow-hidden flex-shrink-0"
        style={{ background: article.coverGradient }}
      >
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <span className="text-white/90 text-xl sm:text-2xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            {article.coverLabel}
          </span>
          {article.coverSubLabel && (
            <span className="mt-1.5 text-white/60 text-xs font-semibold tracking-wider uppercase drop-shadow">
              {article.coverSubLabel}
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-500 transition-colors duration-300 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
          {article.description}
        </p>
        <time className="text-xs font-mono text-gray-500">{article.date}</time>
      </div>
    </div>
  )
}

export function ArticlesPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'news' } })
  }
  return (
    <div className="min-h-screen bg-surface-500 pt-32 pb-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(240,177,0,1), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>

        {/* Page Title */}
        <div className="max-w-3xl mb-12">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
              News &amp; Articles
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Keep up to date with the latest AI Hedge news, product updates, and ecosystem announcements.
            </p>
          </FadeIn>
        </div>

        {/* Articles Grid */}
        <FadeIn delay={0.15}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ARTICLES.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
