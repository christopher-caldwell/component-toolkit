import { styled } from '@mui/material'

export const FlexContainer = styled('div')<Props>`
  display: flex;
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  flex-direction: ${({ direction = 'row' }) => direction};
  ${({ height }) => (height ? `height: ${height};` : '')}
  ${({ width }) => (width ? `width: ${width};` : '')}
`
interface Props {
  justify?: string
  align?: string
  width?: string
  height?: string
  direction?: string
}
