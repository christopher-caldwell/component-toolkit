import { styled } from '@mui/material'
import isPropValid from '@emotion/is-prop-valid'

import { getMobileBreakpoint } from '@/hooks'

interface HeroRootProps {
  backgroundUrl?: string
}
export const HeroRoot = styled('div', {
  shouldForwardProp: isPropValid,
})<HeroRootProps>`
  width: 100vw;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2vh;
  ${getMobileBreakpoint} {
    padding: 0;
    min-height: 40vh;
    align-items: flex-end;
    ${({
      backgroundUrl,
      theme: {
        palette: { background },
      },
    }) =>
      backgroundUrl
        ? `
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), ${background.paper}),
    url(${require(backgroundUrl)});
  background-size: cover;
  `
        : ''}
  }
`
