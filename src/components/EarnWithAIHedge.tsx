import { useState } from 'react'
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
    { title: 'Reinvest', description: 'Your interest is used to purchase more of the asset and reinvested (strategy dependent) automatically, saving you time and fees.' },
    { title: 'Risk Adjusted', description: 'AI Hedge regularly and automatically check for strategy risk and adjust proportion automatically.' }
  ],
  trainedAI: [
    { title: 'Check Strategy Specialty', description: "Examine the AI's model parameters, risk-mitigation features, and asset allocations." },
    { title: 'Deposit', description: 'Invest your tokens into the AI-managed vault to initiate the automated strategy.' },
    { title: 'Check Performance Statistics', description: 'Monitor live yield statistics, historical returns, and strategy health metrics.' },
    { title: 'Harvest', description: 'Yields are automatically harvested and compounded back into your position.' }
  ],
  zap: [
    { title: 'Select Target', description: 'Choose a target vault on your desired network (e.g., Ethereum Mainnet) that you want to deposit into.' },
    { title: 'Choose Source', description: 'Select any token you hold on any supported source network, regardless of the target vault\'s asset.' },
    { title: 'Enso Routing', description: 'AI Hedge utilizes Enso integration to seamlessly swap, route, and bridge your tokens cross-chain.' },
    { title: 'Zap & Earn', description: 'Your tokens are automatically deposited into the target vault and begin auto-compounding instantly.' }
  ]
}

export function EarnWithAIHedge() {
  const [activeTab, setActiveTab] = useState<TabType>('singleAsset')

  return (
    <section className="relative py-24 overflow-hidden bg-surface-400" id="earn">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-glow/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="section-heading gradient-text mb-4">
            Earn with AI Hedge
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Simple, automated yield optimization strategies that maximize your returns and reduce risk automatically.
          </p>
        </FadeIn>

        {/* Tab Controls */}
        <FadeIn className="flex justify-center mb-16" delay={0.1}>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STEPS_DATA[activeTab].map((step, idx) => (
            <StaggerItem
              key={step.title}
              className="glass-card glass-card-hover p-8 flex flex-col items-start min-h-[220px]"
            >
              {/* Step number badge */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center earn-number-badge font-mono font-bold text-lg mb-6 shadow-[0_0_15px_rgba(240,177,0,0.1)]">
                {idx + 1}
              </div>
              <h3 className="font-sans font-bold text-xl text-white mb-3">
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
