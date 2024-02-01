'use client';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';
import { arbitrum, mainnet } from '@wagmi/core/chains';

// 1. Define constants
const projectId = '10dd96df3c1b27c7c028d125071be835'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
const modal = createWeb3Modal({ wagmiConfig, projectId, chains })

const ConnectWalletButton = () => <w3m-button />;

export default ConnectWalletButton;
