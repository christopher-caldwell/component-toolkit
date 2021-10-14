import { styled } from '@mui/material'
import isPropValid from '@emotion/is-prop-valid'

export const layoutPadding = '1% 2% 10vh 2%'

interface RootProps {
  noPadding?: boolean
}
export const Root = styled('div', {
  shouldForwardProp: isPropValid,
})<RootProps>`
  padding: ${({ noPadding }) => (noPadding ? '0' : layoutPadding)};
  width: 100%;
  min-height: 85vh;
  & * {
    font-family: Segoe Alt Regular;
  }
  & a {
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`
