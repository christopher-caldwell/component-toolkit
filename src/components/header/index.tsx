import React, { FC, useContext } from 'react'
import { useScrollTrigger, Slide, AppBar } from '@mui/material'
import Link from 'next/link'

import { ToolkitConfig } from '@/providers/Toolkit'
import {
  TitleProps,
  LeftGroup,
  LogoContainer,
  Root,
  Toolbar,
  Title,
  Settings,
  DarkModeToggle,
  MobileDrawer,
  DrawerProps,
  BrandLogo,
} from './components'
import { useIsMobile } from 'hooks'

export const Header: FC<HeaderProps> = ({
  children,
  logo,
  drawerConfig,
  shouldRemoveTitle,
  LeftContent = null,
  RightContent = null,
}) => {
  const isMobile = useIsMobile()
  const trigger = useScrollTrigger()

  return (
    <Root>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar sx={{ zIndex: 100000, height: '30px' }} position='fixed'>
          <Toolbar variant='dense'>
            {isMobile && drawerConfig ? (
              <MobileDrawer logo={logo} {...drawerConfig} />
            ) : (
              <>
                <LeftGroup>
                  <LogoTitle logo={logo} shouldRemoveTitle={shouldRemoveTitle} />
                  {LeftContent}
                </LeftGroup>
                <Settings>
                  {RightContent}
                  <DarkModeToggle />
                </Settings>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
      {children}
    </Root>
  )
}

interface LogoProps extends TitleProps {
  logo?: DrawerProps['logo']
}
export const LogoTitle: FC<LogoProps> = ({ logo, shouldRemoveTitle }) => {
  const { tenantName } = useContext(ToolkitConfig)
  return (
    <Link href='/'>
      <a href='/'>
        <LogoContainer>
          <BrandLogo {...logo} />
          <Title shouldRemoveTitle={shouldRemoveTitle}>{tenantName}</Title>
        </LogoContainer>
      </a>
    </Link>
  )
}
export interface HeaderProps extends LogoProps {
  children: React.ReactElement
  drawerConfig?: Omit<DrawerProps, 'logo'>
  LeftContent?: JSX.Element
  RightContent?: JSX.Element
}
