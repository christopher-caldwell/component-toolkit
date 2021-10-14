import { FC, useState } from 'react'
import { styled, IconButton, Drawer as MuiDrawer, Box } from '@mui/material'
import { Menu } from '@mui/icons-material'

import { useOutsideClick } from '@/hooks'
import { FlexContainer } from '@/components'
// import DarkModeToggle from '../DarkModeToggle'

export const MobileDrawer: FC<DrawerProps> = ({ logo, anchor, DrawerContent }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const openDrawer = () => {
    setIsDrawerOpen(true)
  }
  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  const ref = useOutsideClick<HTMLDivElement>(closeDrawer)

  return (
    <>
      <FlexContainer justify='space-between' width='100%'>
        {logo ? <BrandLogo {...logo} /> : null}
        <IconButton onClick={openDrawer} color='inherit' aria-label='open drawer' edge='start'>
          <Menu />
        </IconButton>
      </FlexContainer>
      <Drawer ref={ref} variant='persistent' anchor={anchor || 'right'} open={isDrawerOpen}>
        <Box>{DrawerContent}</Box>
      </Drawer>
    </>
  )
}

export const BrandLogo: FC<DrawerProps['logo']> = ({ url, height, width, alt }) => (
  <img src={url} height={height || '32px'} width={width || '32px'} alt={alt} />
)

export interface DrawerProps {
  logo?: {
    url: string
    height?: string
    width?: string
    alt: string
  }
  /** Determines which side of the screen the drawer comes from
   * @default right
   */
  anchor?: 'left' | 'right'
  DrawerContent: JSX.Element
}

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  ...theme.mixins.toolbar,
  '& .MuiDrawer-paper': {
    width: 240,
  },
}))

/* <List>
            <ListItem>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>About</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>FAQ</ListItemText>
            </ListItem>
            <ListItem>
              <DarkModeToggle />
            </ListItem>
          </List> */
