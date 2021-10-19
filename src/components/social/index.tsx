import { FC } from 'react'

import { SocialWrapper, SocialLink } from './elements'

export const SocialIcons: FC<ISocialIcon> = ({ platform, link, height = '40px' }) => {
  const logoSrc = require(`@/logos/${platform}.svg`)
  return (
    <SocialLink href={link} target='_blank' rel='noopener noreferrer'>
      <SocialWrapper height={height} width={height} src={logoSrc} alt='Icon link to Facebook travel page' />
    </SocialLink>
  )
}

export enum SupportedSocialIcons {
  LinkedIn = 'linked-in',
  FaceBook = 'facebook',
  Instagram = 'instagram',
  YouTube = 'you-tube',
  Yelp = 'yelp',
  GoogleMaps = 'google-maps',
}
export interface ISocialIcon {
  link: string
  platform: SupportedSocialIcons
  /** Height of the icon
   * @default 40px
   */
  height?: string
}
