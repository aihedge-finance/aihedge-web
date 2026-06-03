export interface Article {
  slug: string
  title: string
  description: string
  date: string
  coverGradient: string
  coverLabel: string
  coverSubLabel?: string
}

export const ARTICLES: Article[] = [
  {
    slug: 'crosschain-zap-launch',
    title: 'Crosschain ZAP is Live!',
    description:
      'Introducing Crosschain ZAP — deposit into any vault from any token on any chain in a single click. Powered by Enso routing.',
    date: 'May 28, 2026',
    coverGradient: 'linear-gradient(135deg, #0d1117 0%, #1a3a5c 40%, #00e5ff 100%)',
    coverLabel: 'Crosschain ZAP',
    coverSubLabel: 'Powered by Enso',
  },
  {
    slug: 'ai-strategy-engine-v2',
    title: 'AI Strategy Engine v2',
    description:
      'Our next-gen AI engine dynamically reallocates across protocols in real-time, maximizing yield while keeping drawdown under control.',
    date: 'May 12, 2026',
    coverGradient: 'linear-gradient(135deg, #0a0a14 0%, #2d1b69 50%, #b388ff 100%)',
    coverLabel: 'AI Engine v2',
    coverSubLabel: 'Real-time Rebalancing',
  },
  {
    slug: 'base-mainnet-deployment',
    title: 'AI Hedge Deploys on Base',
    description:
      'AI Hedge is now live on Base — Coinbase\'s L2 built for speed and low fees. Access institutional-grade yield with sub-cent gas costs.',
    date: 'April 20, 2026',
    coverGradient: 'linear-gradient(135deg, #0052ff 0%, #002d8a 50%, #0a0a14 100%)',
    coverLabel: 'Base Mainnet',
    coverSubLabel: 'Now Live',
  },
  {
    slug: 'zellic-audit-complete',
    title: 'Zellic Audit Complete',
    description:
      'Our smart contracts have been fully audited by Zellic with zero critical findings. Security is our foundation.',
    date: 'April 5, 2026',
    coverGradient: 'linear-gradient(135deg, #0a0a14 0%, #1a2332 40%, #00c853 100%)',
    coverLabel: 'Security Audit',
    coverSubLabel: 'By Zellic',
  },
  {
    slug: 'curator-program-launch',
    title: 'Curator Program Launch',
    description:
      'Professional curators can now create and manage vaults with custom allocation models, fee structures, and risk guardrails.',
    date: 'March 18, 2026',
    coverGradient: 'linear-gradient(135deg, #0a0a14 0%, #3d2e00 50%, #f0b100 100%)',
    coverLabel: 'Curator Program',
    coverSubLabel: 'Open for Applications',
  },
  {
    slug: 'immunefi-bug-bounty',
    title: 'Bug Bounty on Immunefi',
    description:
      'We\'ve launched a bug bounty program on Immunefi to crowdsource security research and keep our platform safe.',
    date: 'March 2, 2026',
    coverGradient: 'linear-gradient(135deg, #1a0a2e 0%, #4a1068 50%, #ff6d00 100%)',
    coverLabel: 'Bug Bounty',
    coverSubLabel: 'On Immunefi',
  },
  {
    slug: 'erc4626-vault-standard',
    title: 'Why We Chose ERC-4626',
    description:
      'A deep dive into why ERC-4626 tokenized vaults are the gold standard for composable yield — and how AI Hedge leverages them.',
    date: 'February 14, 2026',
    coverGradient: 'linear-gradient(135deg, #0a0a14 0%, #1c1c3a 40%, #627eea 100%)',
    coverLabel: 'ERC-4626',
    coverSubLabel: 'Technical Deep Dive',
  },
  {
    slug: 'multi-chain-vision',
    title: 'Our Multi-Chain Vision',
    description:
      'AI Hedge is expanding beyond Ethereum. Here\'s our roadmap for Arbitrum, Optimism, BNB Chain, and beyond.',
    date: 'January 30, 2026',
    coverGradient: 'linear-gradient(135deg, #0a0a14 0%, #2a1a00 50%, #ff9800 100%)',
    coverLabel: 'Roadmap 2026',
    coverSubLabel: 'Multi-Chain Expansion',
  },
]
