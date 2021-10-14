import { FC } from 'react'
import { styled } from '@mui/material'

export const BrandColorText: FC = ({ children }) => {
  return <Text>{children}</Text>
}

const Text = styled('span')`
  color: ${({ theme }) => theme.palette.primary.main} !important;
`
