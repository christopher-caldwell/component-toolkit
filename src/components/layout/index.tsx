import { FC } from 'react'

import { Header, HeaderProps } from '@/components/header'
import { Seo } from './components/Meta'
import { Root } from './components/elements'

export const Layout: FC<Props> = ({ children, seo, ...restProps }) => {
  return (
    <>
      <Seo {...seo} />
      <Header>
        <Root noPadding={restProps.noPadding}>{children}</Root>
      </Header>
    </>
  )
}

interface SeoProps {
  title: string
  imageUrl: string
  description: string
}
interface Props extends HeaderProps {
  //TODO: Implement perm drawer with hiding
  // hideDrawer?: boolean
  noPadding?: boolean
  seo?: Partial<SeoProps>
  headerConfig: HeaderProps
}
