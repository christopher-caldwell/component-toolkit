import { FC, useContext } from 'react'
import { Grid } from '@mui/material'

import { Container, FooterTitle, Copyright, Contact, FooterLink, FooterLogo, ContactProps } from './components'

import { ToolkitConfig } from '@/providers/Toolkit'
import { DrawerProps } from '@/components/header/components/Drawer'

export const Footer: FC<FooterProps> = ({ links, logo, contact }) => {
  const { tenantName } = useContext(ToolkitConfig)
  return (
    <Container>
      <Grid container item xs={12} md={9} justifyContent='center'>
        <Contact {...contact} />
        {links.map(({ title, children, root }) => (
          <Grid item xs={12} md={3} key={`root-${title}`}>
            <FooterTitle>{title}</FooterTitle>
            {children.map(link => (
              <FooterLink key={link.goesToPath} {...link} />
            ))}
            {root ? (
              <>
                <FooterTitle>{title}</FooterTitle>
                {root.children.map(link => (
                  <FooterLink isNested key={link.goesToPath} {...link} />
                ))}
              </>
            ) : null}
          </Grid>
        ))}
        {logo ? <FooterLogo {...logo} /> : null}
        <Copyright>
          Copyright © {new Date().getFullYear()} {tenantName}.
        </Copyright>
      </Grid>
    </Container>
  )
}

export interface FooterProps {
  links: RootFooterItem[]
  logo?: DrawerProps['logo']
  contact?: ContactProps
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
