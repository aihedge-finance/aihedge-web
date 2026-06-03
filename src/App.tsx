import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EarnWithAIHedge } from './components/EarnWithAIHedge'
import { YieldEarners } from './components/YieldEarners'
import { HowItWorks } from './components/HowItWorks'
import { Curators } from './components/Curators'
import { Ecosystem } from './components/Ecosystem'
import { FinalCTA } from './components/FinalCTA'
import { PartnersPage } from './components/PartnersPage'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

function HomePage() {
  return (
    <>
      <Hero />
      <EarnWithAIHedge />
      <YieldEarners />
      <HowItWorks />
      <Curators />
      <Ecosystem />
      <FinalCTA />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-surface-500">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/partners" element={<PartnersPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

