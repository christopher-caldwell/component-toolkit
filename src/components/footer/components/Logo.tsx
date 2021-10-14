import { FC } from 'react'
import { Grid } from '@mui/material'

import { FlexContainer } from '@/components/container'
import { BrandLogo, DrawerProps } from '@/components/header/components/Drawer'

export const FooterLogo: FC<Props> = props => {
  return (
    <Grid item xs={12} md={3} justifyContent='center' sx={{ display: 'flex', flexDirection: 'column' }}>
      <FlexContainer>
        <BrandLogo {...props} />
      </FlexContainer>
      {/* <SocialIcons /> */}
    </Grid>
  )
}

type Props = DrawerProps['logo']
