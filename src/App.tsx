import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EarnWithAIHedge } from './components/EarnWithAIHedge'
// import { YieldEarners } from './components/YieldEarners'
import { HowItWorks } from './components/HowItWorks'
// import { Curators } from './components/Curators'
import { Ecosystem } from './components/Ecosystem'
import { FinalCTA } from './components/FinalCTA'
import { PartnersPage } from './components/PartnersPage'
// import { News } from './components/News'
import { ArticlesPage } from './components/ArticlesPage'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const scrollTo = (location.state as any)?.scrollTo
    if (scrollTo) {
      const el = document.getElementById(scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.state])

  return (
    <>
      <Hero />
      <EarnWithAIHedge />
      {/* <YieldEarners /> */}
      <HowItWorks />
      {/* <Curators /> */}
      <Ecosystem />
      <FinalCTA />
      {/* <News /> */}
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-surface-500 overflow-x-hidden">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

