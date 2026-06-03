import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EarnWithAIHedge } from './components/EarnWithAIHedge'
import { Depositors } from './components/Depositors'
import { HowItWorks } from './components/HowItWorks'
import { Security } from './components/Security'
import { Curators } from './components/Curators'
import { Ecosystem } from './components/Ecosystem'
import { FinalCTA } from './components/FinalCTA'
import { PartnersPage } from './components/PartnersPage'
import { Footer } from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <EarnWithAIHedge />
      <Depositors />
      <HowItWorks />
      <Security />
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
    </div>
  )
}

export default App

