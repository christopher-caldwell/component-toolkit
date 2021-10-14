import { FC } from 'react'
import { Grid } from '@mui/material'

import { FooterSubtitle, FooterTitle } from './elements'
import { AltColorText } from '@/components/text'

export const Contact: FC<ContactProps> = ({ address, contacts = [] }) => {
  return (
    <Grid item xs={12} md={3} justifyContent='center'>
      <FooterTitle>Contact Us</FooterTitle>
      <div>{address}</div>
      <br />
      {contacts.map(({ name, value, display }) => (
        <FooterSubtitle href={value}>
          {display ? (
            <span>
              Phone: &nbsp;<AltColorText>{display}</AltColorText>
            </span>
          ) : (
            name
          )}
        </FooterSubtitle>
      ))}
    </Grid>
  )
}

interface ContactProps {
  address?: string
  contacts?: {
    name: string
    value: string
    display?: string
  }[]
}
