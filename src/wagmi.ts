import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'

const walletConnectProjectId = '3de04829a3d736f4f83cb71f49738f3c'

export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: 'My wagmi + ConnectKit App',
    walletConnectProjectId,
    alchemyId: import.meta.env.VITE_ALCHEMY_API_KEY!,
  })
)
