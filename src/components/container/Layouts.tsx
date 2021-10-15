import { FC } from 'react'
import { styled, Grid } from '@mui/material'
import isValidProp from '@emotion/is-prop-valid'

import { getMobileBreakpoint } from '@/hooks'

interface RootProps {
  isOffColor?: boolean
}
export const Root = styled('div', {
  shouldForwardProp: isValidProp,
})<RootProps>`
  width: 100vw;
  background-color: ${({ theme: { palette }, isOffColor }) =>
    isOffColor ? palette.background.default : palette.background.paper};
  display: flex;
  justify-content: center;
  padding: 5vh 2vh;
  ${getMobileBreakpoint} {
    padding: 2% 0;
  }
`

export const SubRoot = styled(Grid)`
  max-width: 100vw;
  ${getMobileBreakpoint} {
    max-width: 70vw;
  }
`

export const subRootSpacing = 3

interface RowProps {
  isOffColor?: boolean
  title?: string
}
export const Row: FC<RowProps> = ({ isOffColor, title, children }) => (
  <Root isOffColor={isOffColor}>
    <SubRoot container spacing={subRootSpacing}>
      <Grid item xs={12}>
        {title ? <RowTitle>{title}</RowTitle> : null}
        {children}
      </Grid>
    </SubRoot>
  </Root>
)

const RowTitle = styled('h2')`
  margin-top: 0;
`
