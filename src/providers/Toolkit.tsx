import { FC, createContext } from 'react'
import { DefaultSeoProps } from 'next-seo'

import { HeaderProps } from '@/components/header'

export const ToolkitConfig = createContext<IToolkitConfig>({} as IToolkitConfig)

export const ToolkitProvider: FC<IToolkitConfig> = ({ children, ...config }) => {
  return <ToolkitConfig.Provider value={config}>{children}</ToolkitConfig.Provider>
}

export interface IToolkitConfig {
  tenantName: string
  seoConfig: DefaultSeoProps
  headerConfig?: HeaderProps
}
