import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './Animations'

interface Step {
  title: string
  description: string
}

type TabType = 'singleAsset' | 'trainedAI' | 'zap'

const TABS: { id: TabType; label: string }[] = [
  { id: 'singleAsset', label: 'Single Asset' },
  { id: 'trainedAI', label: 'Trained AI' },
  { id: 'zap', label: 'ZAP' }
]

const STEPS_DATA: Record<TabType, Step[]> = {
  singleAsset: [
    { title: 'Deposit', description: 'Invest your token in an AI Hedge single asset Vault.' },
    { title: 'Earn', description: 'AI Hedge stakes the token on an external, interest-bearing platform.' },
    { title: 'Reinvest', description: 'Your interest is used to purchase more of the asset and reinvested automatically, saving you time and fees.' },
    { title: 'Risk Adjusted', description: 'AI Hedge regularly and automatically check for strategy risk and adjust proportion automatically.' }
  ],
  trainedAI: [
    { title: 'Check Strategy Specialty', description: "Examine the AI's model parameters, risk-mitigation features, and asset allocations." },
    { title: 'Deposit', description: 'Invest your tokens into the AI-managed vault to initiate the automated strategy.' },
    { title: 'Check Performance Statistics', description: 'Monitor live yield statistics, historical returns, and strategy health metrics.' },
    { title: 'Harvest', description: 'Yields are automatically harvested and compounded back into your position.' }
  ],
  zap: [
    { title: 'Select Target', description: 'Choose a target vault on your desired network that you want to deposit into.' },
    { title: 'Choose Source', description: 'Select any token you hold on any supported source network, regardless of the target vault\'s asset.' },
    { title: 'Enso Routing', description: 'AI Hedge utilizes Enso integration to seamlessly swap, route, and bridge your tokens cross-chain.' },
    { title: 'Zap & Earn', description: 'Your tokens are automatically deposited into the target vault and begin auto-compounding instantly.' }
  ]
}

const FLOW_NODES = ['Deposit', 'Vault', 'Strategy', 'Yield']

const STEP_ACCENTS = [
  'from-brand-500 to-yellow-300',
  'from-accent-cyan to-blue-400',
  'from-accent-purple to-pink-400',
  'from-brand-500 to-accent-cyan',
]

export function EarnWithAIHedge() {
  const [activeTab, setActiveTab] = useState<TabType>('singleAsset')

  return (
    <section className="relative py-24 overflow-hidden bg-surface-400" id="earn">
      {/* Background hex grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z' fill='none' stroke='white' stroke-width='1'/%3E%3Cpath d='M28 100L0 84L0 50L28 34L56 50L56 84L28 100Z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 100px',
        }}
      />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(240,177,0,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-12">
          <p className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-3">How You Earn</p>
          <h2 className="section-heading gradient-text mb-4">
            Earn with AI Hedge
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Simple, automated yield optimization strategies that maximize your returns and reduce risk automatically.
          </p>
        </FadeIn>

        {/* Animated Yield Flow Diagram */}
        <FadeIn delay={0.1} className="mb-14">
          <div className="relative flex items-center justify-center gap-0 overflow-hidden">
            <div className="relative flex items-center w-full max-w-3xl mx-auto">
              {FLOW_NODES.map((node, i) => (
                <div key={node} className={`flex items-center ${i < FLOW_NODES.length - 1 ? 'flex-1' : ''}`}>
                  {/* Node */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div
                      animate={{ boxShadow: ['0 0 0px rgba(240,177,0,0)', '0 0 20px rgba(240,177,0,0.4)', '0 0 0px rgba(240,177,0,0)'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-surface-300 border border-white/10 flex items-center justify-center relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-cyan/5" />
                      <span className="relative text-xs sm:text-sm font-bold text-white text-center px-1 leading-tight">{node}</span>
                    </motion.div>
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500/50" />
                  </div>

                  {/* Connector with travelling dot */}
                  {i < FLOW_NODES.length - 1 && (
                    <div className="flex-1 relative h-[2px] mx-1 sm:mx-2">
                      {/* Base line */}
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-500/30 via-accent-cyan/20 to-brand-500/30 rounded-full" />
                      {/* Travelling glow dot */}
                      <motion.div
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand-500"
                        style={{ boxShadow: '0 0 12px rgba(240,177,0,0.8), 0 0 24px rgba(240,177,0,0.4)' }}
                        animate={{ left: ['0%', '100%'] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: i * 0.5,
                          repeatDelay: 1,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Tab Controls */}
        <FadeIn className="flex justify-center mb-10" delay={0.15}>
          <div className="inline-flex bg-surface-200 border border-white/5 p-1.5 rounded-2xl gap-1 shadow-2xl backdrop-blur-md">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'earn-tab-active shadow-lg shadow-brand-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* Steps Grid */}
        <StaggerContainer
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {STEPS_DATA[activeTab].map((step, idx) => (
            <StaggerItem
              key={step.title}
              className="relative glass-card glass-card-hover p-7 flex flex-col items-start min-h-[220px] overflow-hidden group"
            >
              {/* Gradient top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${STEP_ACCENTS[idx]} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Subtle glow behind the card on hover */}
              <div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-br ${STEP_ACCENTS[idx]} opacity-0 group-hover:opacity-[0.06] blur-2xl transition-opacity duration-500`} />

              {/* Step number badge */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full flex items-center justify-center earn-number-badge font-mono font-bold text-lg mb-5 shadow-[0_0_15px_rgba(240,177,0,0.15)] relative"
              >
                {idx + 1}
              </motion.div>
              <h3 className="font-sans font-bold text-lg text-white mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
