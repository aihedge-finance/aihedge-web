import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FadeIn } from './Animations'




export const PARTNERS = [
  {
    name: '1inch',
    category: 'EXCHANGE',
    logo: '/images/partners/1inch.svg',
    link: 'https://www.1inch.io',
    description: '1inch is a leading price aggregator that delivers the very best of exchange pricing for your digital assets. Through AI Hedge ZAP, you can enter any vault at optimal prices faciliated by 1inch.',
    active: false
  },
  {
    name: 'Aave',
    category: 'DEFI',
    logo: '/images/partners/aave.svg',
    link: 'https://aave.com',
    description: 'Aave is a decentralized non-custodial liquidity market protocol where users can participate as depositors or borrowers. AI Hedge leverages Aave\'s lending pools to generate stable, collateralized yields.',
    active: true
  },
  {
    name: 'ANKR',
    category: 'INFRA',
    logo: '/images/partners/ankr.svg',
    link: 'https://www.ankr.com',
    description: 'ANKR is a leading provider of decentralized infrastructure, with a global RPC network and advanced APIs for accessing onchain data. As a key partner for RPCs, ANKR delivers the data that users need to track their onchain positions and profits through the AI Hedge application.',
    active: true
  },
  {
    name: 'Arbitrum',
    category: 'INFRA',
    logo: '/images/partners/arbitrum.svg',
    link: 'https://arbitrum.io',
    description: 'Arbitrum is a leading Layer 2 scaling solution for Ethereum, offering ultra-fast transactions and low gas fees. AI Hedge deploys vaults on Arbitrum to leverage its high throughput and secure execution environment.',
    active: true
  },
  {
    name: 'Axelar',
    category: 'BRIDGE',
    logo: '/images/partners/axelar.svg',
    link: 'https://axelar.network',
    description: 'Axelar delivers secure cross-chain communication for Web3. Our infrastructure enables dApp users to interact with any asset or application, on any chain, with one click.',
    active: true
  },
  {
    name: 'Base',
    category: 'INFRA',
    logo: '/images/partners/base.svg',
    link: 'https://base.org',
    description: 'Base is a secure, low-cost, builder-friendly Ethereum L2 built by Coinbase. AI Hedge is natively deployed on Base, leveraging its high throughput and low fees to deliver the best possible experience for users and curators alike.',
    active: true
  },
  {
    name: 'Binance',
    category: 'EXCHANGE',
    logo: '/images/partners/binance.svg',
    link: 'https://www.binance.com',
    description: 'Binance is one of the largest global cryptocurrency exchange, handling millions of dollars in trading volume each day. Among other services, Binance maintains its BNB Chain as an advanced and easy to use EVM blockchain for DeFi activities like yield farming.',
    active: true
  },
  {
    name: 'Chainlink CCIP',
    category: 'BRIDGE',
    logo: '/images/partners/chainlink_ccip.svg',
    link: 'https://chain.link/cross-chain',
    description: 'Chainlink CCIP provides a single interface for dApps and web3 organizations to securely transfer data and tokens across chains, to build truly decentralized and permissionless applications.',
    active: true
  },
  {
    name: 'Coinbase Wallet',
    category: 'WALLET',
    logo: '/images/partners/coinbase_wallet.svg',
    link: 'https://www.coinbase.com/wallet',
    description: 'Store and manage all of your crypto, NFTs, and multiple wallets in one place with Coinbase\'s flagship wallet. Seemless deposit and withdraw onchain assets onto Coinbase Exchange with just a few taps.',
    active: false
  },
  {
    name: 'CoinGecko',
    category: 'INFRA',
    logo: '/images/partners/coingecko.svg',
    link: 'https://www.coingecko.com/',
    description: 'CoinGecko is a data aggregator, providing users with up-to-date information on prices, market caps, and trading volumes for thousands of digital assets.',
    active: true
  },
  {
    name: 'Connext xERC20',
    category: 'BRIDGE',
    logo: '/images/partners/connext_xerc20.svg',
    link: 'https://www.connext.network/xerc20',
    description: 'Connext\'s xERC20 standard facilitates the secure canonical bridging of digital assets across the EVM universe using any number of different bridging services. With xERC20, AI Hedge users can bridge their assets seamlessly using the provider that they prefer.',
    active: false
  },
  {
    name: 'Convex',
    category: 'DEFI',
    logo: '/images/partners/convex.svg',
    link: 'https://www.convexfinance.com',
    description: 'Convex Finance allows Curve liquidity providers and CRV stakers to boost rewards and maximize yield potential. AI Hedge leverages Convex to amplify yield generation across our automated vaults.',
    active: true
  },
  {
    name: 'Cryptio',
    category: 'GOVERNANCE',
    logo: '/images/partners/cryptio.svg',
    link: 'https://www.cryptio.co',
    description: 'Enterprise-grade accounting, audit and tax software for digital assets. Cryptio helps AI Hedge to transparently monitor and display treasury operations, and manage the project\'s financial health.',
    active: false
  },
  {
    name: 'Crypto.com',
    category: 'EXCHANGE',
    logo: '/images/partners/cryptocom.svg',
    link: 'https://crypto.com',
    description: 'One of the world\'s largest digital asset exchanges, Crypto.com offers access to hundreds of digital assets at the click of a button. CDC also built and maintain the Cronos blockchain, an EVM chain that hosts AI Hedge yield strategies.',
    active: false
  },
  {
    name: 'Curve.fi',
    category: 'DEFI',
    logo: '/images/partners/curve.svg',
    link: 'https://curve.fi',
    description: 'Curve is a decentralized exchange liquidity pool designed for extremely efficient stablecoin trading and low-slippage swaps. AI Hedge integrates Curve pools to deploy low-risk, high-efficiency yield strategies.',
    active: true
  },
  {
    name: 'DeBank',
    category: 'INFRA',
    logo: '/images/partners/debank.svg',
    link: 'https://debank.com',
    description: 'The web3-native messenger & portfolio tracking appliation that brings together all of your tokens, DeFi protocols, NFTs and other digital assets across all EVM chains.',
    active: true
  },
  {
    name: 'Enso',
    category: 'INFRA',
    logo: '/images/partners/enso.png',
    link: 'https://enso.finance',
    description: 'Enso is a DeFi-native intent execution and liquidity routing layer. AI Hedge integrates Enso to power seamless ZAP functionality — enabling users to deposit into any vault from any token on any supported chain in a single transaction.',
    active: true
  },
  {
    name: 'Ether.fi',
    category: 'DEFI',
    logo: '/images/partners/etherfi.jpg',
    link: 'https://www.ether.fi',
    description: 'Ether.fi is a decentralized, non-custodial delegated staking protocol with a Liquid Staking Token. AI Hedge utilizes Ether.fi\'s liquid staking solutions to offer users optimized restaking yield.',
    active: true
  },
  {
    name: 'Fireblocks',
    category: 'WALLET',
    logo: '/images/partners/fireblocks.svg',
    link: 'https://www.fireblocks.com',
    description: 'Fireblocks provides a comprehensive suite of applications to manage digital asset operations and a complete development platform to build your business on the blockchain. Access incredible yields on AI Hedge with the security of Fireblocks in just a few clicks.',
    active: true
  },
  {
    name: 'Gelato',
    category: 'INFRA',
    logo: '/images/partners/gelato.svg',
    link: 'https://www.gelato.network',
    description: 'Gelato is web3’s decentralized backend empowering builders to create augmented smart contracts that are automated, gasless & off-chain aware on all major EVM-compatible blockchains.',
    active: false
  },
  {
    name: 'Immunefi',
    category: 'SECURITY',
    logo: '/images/partners/immunefi.svg',
    link: 'https://immunefi.com',
    description: 'Immunefi is the premier bug bounty platform for Web3, protecting billions in user funds. AI Hedge leverages Immunefi to run its bug bounty program, crowdsourcing security research to keep our contracts and platform safe.',
    active: true
  },
  {
    name: 'InsurAce.io',
    category: 'COVERAGE',
    logo: '/images/partners/insuraceio.svg',
    link: 'https://www.insurace.io',
    description: 'InsurAce provide reliable, robust, and secure protection services to DeFi users, allowing them to secure investment assets against various risks with onchain coverage products.',
    active: false
  },
  {
    name: 'LayerZero',
    category: 'BRIDGE',
    logo: '/images/partners/layerzero.svg',
    link: 'https://www.layerzero.network',
    description: 'LayerZero is a leading network for crosschain messaging across over dozens of EVM blockchains. It facilitates flexible and near-instant bridging transactions, making working across different chains easier and more accessible for everyone.',
    active: true
  },
  {
    name: 'Lido',
    category: 'DEFI',
    logo: '/images/partners/lido.svg',
    link: 'https://lido.fi',
    description: 'Lido is the leading liquid-staking protocol for Ethereum, offering easy access to staking services and high yields on your Ether with none of the complexity of managing your own validators.',
    active: true
  },
  {
    name: 'Mt Pelerin',
    category: 'ONRAMP',
    logo: '/images/partners/mt_pelerin.svg',
    link: 'https://www.mtpelerin.com/',
    description: 'Mt Pelerin is an on/off-ramp service regulated in Switzerland allowing you to buy, bridge and cash out crypto easily, with low fees and no identification required.',
    active: true
  },
  {
    name: 'Nexus Mutual',
    category: 'COVERAGE',
    logo: '/images/partners/nexus_mutual.svg',
    link: 'https://nexusmutual.io',
    description: 'Nexus is one of the original coverage protocols, allowing members to protect themselves from onchain risks by pooling funds to offer coverage positions for hundreds of protocols and DeFi assets.',
    active: true
  },
  {
    name: 'OKX Wallet',
    category: 'WALLET',
    logo: '/images/partners/okx_wallet.jpg',
    link: 'https://www.okx.com/web3',
    description: 'OKX Wallet is a secure, multi-platform, non-custodial digital asset wallet supporting over 80 blockchains. AI Hedge integrates OKX Wallet to give users seamless access to institutional-grade yield strategies.',
    active: true
  },
  {
    name: 'OpenZeppelin',
    category: 'SECURITY',
    logo: '/images/partners/openzeppelin.svg',
    link: 'https://www.openzeppelin.com',
    description: 'OpenZeppelin sets the standards for smart contracts across the EVM universe. As one of the leading auditing teams and contributors to the Solidity language, their brand is synonymous with onchain security.',
    active: true
  },
  {
    name: 'Optimism',
    category: 'BRIDGE',
    logo: '/images/partners/optimism.svg',
    link: 'https://www.optimism.io',
    description: 'OP Mainnet is a fast, stable, and scalable L2 blockchain built by Ethereum developers, for Ethereum developers. The OP Bridge facilitates secure interactions between various EVM chains and OP Mainnet with dozens of your favourite digital assets.',
    active: true
  },
  {
    name: 'QiDao',
    category: 'DEFI',
    logo: '/images/partners/qidao.svg',
    link: 'https://app.mai.finance',
    description: 'QiDao is the original cross-chain overcollateralized stablecoin protocol, which allows users to mint stablecoins (MAI) against the value of their decentralized token collaterals.',
    active: false
  },
  {
    name: 'Rabby',
    category: 'WALLET',
    logo: '/images/partners/rabby.svg',
    link: 'https://rabby.io',
    description: 'Rabby is THE game-changing wallet, offering you access to assets on 120 different blockchains, with leading user experience and functionality. Integrated with DeBank\'s portfolio tracker, Rabby helps users to seamlessly manage their portfolios.',
    active: false
  },
  {
    name: 'RAILGUN',
    category: 'SECURITY',
    logo: '/images/partners/railgun.svg',
    link: 'https://www.railgun.org',
    description: 'RAILGUN is an uncompromising on-chain privacy solution with unparalleled encryption, security. It delivers all the DeFi functionality of a typical wallet, but with privacy embedded at its core.',
    active: false
  },
  {
    name: 'Safe',
    category: 'WALLET',
    logo: '/images/partners/safe.svg',
    link: 'https://www.safe.global',
    description: 'Safe is a leading account abstraction tooling provider for EVM blockchains. It offers a range of smart wallets and multisignature authorisation infrastructure, making it easier to manage shared funds.',
    active: true
  },
  {
    name: 'Snapshot',
    category: 'GOVERNANCE',
    logo: '/images/partners/snapshot.svg',
    link: 'https://snapshot.org',
    description: 'Snapshot is the go-to voting platform that allows DAOs, DeFi protocols and NFT communities to easily vote and resolve governance questions securely and without expensive gas fees.',
    active: true
  },
  {
    name: 'Stader Labs',
    category: 'DEFI',
    logo: '/images/partners/stader_labs.svg',
    link: 'https://www.staderlabs.com',
    description: 'One of the leading staking services for assets across the EVM universe, Stader abstracts the difficulties of deploying and managing validators, giving users easy access to high yields on their native chain assets.',
    active: true
  },
  {
    name: 'Stargate',
    category: 'BRIDGE',
    logo: '/images/partners/stargate.svg',
    link: 'https://stargate.finance',
    description: 'Stargate is a fully composable liquidity transport protocol that lives at the heart of Omnichain DeFi. The protocol facilitates near instantaneous bridging transactions using LayerZero\'s lightning-fast technology.',
    active: true
  },
  {
    name: 'System 9',
    category: 'EXCHANGE',
    logo: '/images/partners/system_9.svg',
    link: 'https://system9.io',
    description: 'System 9 is a global market maker and software development company that offers crypto projects like AI Hedge the expertise, flexibility and transparency they need to achieve successful liquidity both on and off the blockchain.',
    active: false
  },
  {
    name: 'Transak',
    category: 'ONRAMP',
    logo: '/images/partners/transak.svg',
    link: 'https://transak.com',
    description: 'Transak is a leading Web 3.0 on-ramp service, that allows you to get funds from your bank account in to AI Hedge vaults in just a few clicks.',
    active: true
  },
  {
    name: 'XRP',
    category: 'INFRA',
    logo: '/images/partners/xrp.svg',
    link: 'https://xrpl.org',
    description: 'XRP Ledger (XRPL) is a decentralized, public blockchain run by a global developer community. It is fast, energy-efficient, and reliable, offering a robust foundation for building advanced tokenized use cases.',
    active: true
  },
  {
    name: 'XRPL EVM Sidechain',
    category: 'INFRA',
    logo: '/images/partners/xrpl_sidechain.svg',
    link: 'https://xrpl.org/evm-sidechain.html',
    description: 'The XRPL EVM Sidechain brings full Ethereum Virtual Machine compatibility to the XRP Ledger ecosystem, allowing developers to deploy composable Solidity smart contracts and leverage XRP as the native gas token.',
    active: true
  },
  {
    name: 'Yearn Finance',
    category: 'INFRA',
    logo: '/images/partners/yearn.svg',
    link: 'https://yearn.fi',
    description: 'Yearn Finance is a suite of decentralized finance (DeFi) products that provides yield generation, lending aggregation, and more. AI Hedge utilizes Yearn\'s yield infrastructure to maximize returns for vaults.',
    active: true
  },
  {
    name: 'Zellic',
    category: 'SECURITY',
    logo: '/images/partners/zellic.svg',
    link: 'https://www.zellic.io',
    description: 'Zellic specializes in securing emerging technologies. AI Hedge relies on Zellic\'s comprehensive security assessments to catch vulnerabilities and weaknesses in smart contracts and protect user funds.',
    active: false
  }
]

export function PartnerLogo({ name, logo }: { name: string; logo?: string }) {
  const [error, setError] = useState(false)

  if (error || !logo) {
    const initials = name.slice(0, 2).toUpperCase()
    return (
      <div className="w-10 h-10 rounded-lg bg-surface-300 border border-white/[0.08] flex items-center justify-center text-white font-bold font-mono text-xs">
        {initials}
      </div>
    )
  }

  return (
    <img
      src={logo}
      alt={name}
      onError={() => setError(true)}
      className="w-10 h-10 object-contain filter brightness-95 hover:brightness-100 transition-all"
    />
  )
}

export function Ecosystem() {
  const activePartners = useMemo(() => {
    return [...PARTNERS].filter((p) => p.active).sort((a, b) => a.name.localeCompare(b.name))
  }, [])

  // Split active partners for scrolling marquee rows
  const row1 = useMemo(() => activePartners.slice(0, Math.ceil(activePartners.length / 2)), [activePartners])
  const row2 = useMemo(() => activePartners.slice(Math.ceil(activePartners.length / 2)), [activePartners])

  return (
    <section className="relative py-24 overflow-hidden bg-surface-500" id="ecosystem">
      {/* Top divider light line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-12">
        <FadeIn>
          <p className="text-accent-cyan font-semibold text-sm tracking-widest uppercase mb-3">
            Trusted Partners
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Our Ecosystem
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our success is built on the shared growth and collective strength of our partners.
          </p>
        </FadeIn>
      </div>

      {/* Rolling Banner */}
      <div className="relative w-full overflow-hidden select-none py-10 flex flex-col gap-6 bg-surface-400/30">
        {/* Row 1 - Scroll Left */}
        <div className="flex w-full marquee-container">
          <div className="marquee-content-left flex gap-6 flex-shrink-0 min-w-full justify-around">
            {[...row1, ...row1, ...row1].map((p, idx) => (
              <div
                key={`${p.name}-r1-${idx}`}
                className="group w-16 h-16 sm:w-20 sm:h-20 bg-surface-200 border border-white/[0.08] rounded-2xl rotate-45 flex items-center justify-center overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:border-accent-cyan/40 cursor-pointer shadow-lg"
              >
                <div className="-rotate-45 flex items-center justify-center w-full h-full p-1.5 relative">
                  {/* Logo state */}
                  <div className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-75 flex items-center justify-center">
                    <PartnerLogo name={p.name} logo={p.logo} />
                  </div>
                  {/* Hover name state */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 p-1 text-center select-none pointer-events-none">
                    <span className="text-[9px] sm:text-[10px] font-bold text-white leading-tight tracking-tight">
                      {p.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex w-full marquee-container mt-2">
          <div className="marquee-content-right flex gap-6 flex-shrink-0 min-w-full justify-around">
            {[...row2, ...row2, ...row2].map((p, idx) => (
              <div
                key={`${p.name}-r2-${idx}`}
                className="group w-16 h-16 sm:w-20 sm:h-20 bg-surface-200 border border-white/[0.08] rounded-2xl rotate-45 flex items-center justify-center overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-110 hover:border-accent-cyan/40 cursor-pointer shadow-lg"
              >
                <div className="-rotate-45 flex items-center justify-center w-full h-full p-1.5 relative">
                  {/* Logo state */}
                  <div className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-75 flex items-center justify-center">
                    <PartnerLogo name={p.name} logo={p.logo} />
                  </div>
                  {/* Hover name state */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 p-1 text-center select-none pointer-events-none">
                    <span className="text-[9px] sm:text-[10px] font-bold text-white leading-tight tracking-tight">
                      {p.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center Circular Badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#121420] border-4 border-surface-100 flex items-center justify-center shadow-2xl relative pointer-events-auto select-none overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 via-accent-cyan/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="/images/logo/logo1.png"
              alt="AI Hedge"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain z-10 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Explore Button */}
      <div className="flex justify-center mt-12 relative z-10">
        <Link
          to="/partners"
          className="btn-primary px-8 py-3.5"
          id="explore-partners-btn"
        >
          Explore Partners
        </Link>
      </div>
    </section>
  )
}
