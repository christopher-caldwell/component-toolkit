import { FC } from 'react'

import { Header } from '@/components/header'
import { Seo } from './components/Meta'
import { Root } from './components/elements'

export const Layout: FC<Props> = ({ children, seo, noPadding = true }) => {
  return (
    <>
      <Seo {...seo} />
      <Header>
        <Root noPadding={noPadding}>{children}</Root>
      </Header>
    </>
  )
}

interface SeoProps {
  title: string
  imageUrl: string
  description: string
}
interface Props {
  //TODO: Implement perm drawer with hiding
  // hideDrawer?: boolean
  noPadding?: boolean
  seo?: Partial<SeoProps>
}
