import { FC } from 'react'
import { styled } from '@mui/material'

export const AltColorText: FC = ({ children }) => {
  return <Text>{children}</Text>
}

const Text = styled('span')`
  color: ${({ theme }) => theme.palette.secondary.main} !important;
`
