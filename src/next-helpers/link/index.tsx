import React, { FC } from 'react'
import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { styled } from '@mui/material'
import isPropValid from '@emotion/is-prop-valid'

export const ActiveLink: FC<LinkProps> = ({ href, children, ...restProps }) => {
  const router = useRouter()

  const isActive = router.pathname.startsWith(typeof href === 'string' ? href : '')

  return (
    <NextLink href={href} {...restProps}>
      <LinkContainer isActive={isActive}>{children}</LinkContainer>
    </NextLink>
  )
}

interface LinkContainerProps {
  isActive: boolean
}
const LinkContainer = styled('div', {
  shouldForwardProp: isPropValid,
})<LinkContainerProps>`
  cursor: pointer;
  & a {
    position: relative;
    &::after {
      ${({
        isActive,
        theme: {
          palette: { primary },
        },
      }) =>
        isActive
          ? `
      position: absolute;
      content: '';
      bottom: -24px;
      left: 0;
      right: 0;
      border-bottom: 3px solid ${primary.main};
      `
          : ''}
    }
  }
`
