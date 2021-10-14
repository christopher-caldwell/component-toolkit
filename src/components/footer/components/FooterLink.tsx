import { FC } from 'react'
import LaunchIcon from '@mui/icons-material/Launch'

import { FooterSubtitle } from './elements'

export const FooterLink: FC<Props> = ({ isExternal, isNested, goesToPath, title }) => {
  const keyPrefix = isNested ? 'subtitle' : 'title'
  return (
    <FooterSubtitle key={`${keyPrefix}-${title}`} href={goesToPath} target={isExternal ? '_blank' : undefined}>
      {title}
      {isExternal ? <LaunchIcon /> : null}
    </FooterSubtitle>
  )
}

interface Props extends FooterItem {
  isNested?: boolean
}

export interface RootFooterItem {
  title: string
  children: FooterItem[]
  root?: RootFooterItem
}
export interface FooterItem {
  title: string
  goesToPath: string
  isExternal?: boolean
}
