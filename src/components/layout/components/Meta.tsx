import { FC, useContext } from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'

import { ToolkitConfig, IToolkitConfig } from '@/providers/Toolkit'

export const Seo: FC<SeoProps> = props => {
  const { tenantName, seoConfig } = useContext(ToolkitConfig)
  const { title = tenantName, description } = props
  const documentTitle = title === tenantName ? tenantName : `${title} | ${tenantName}`
  const openGraph = generateOpenGraph({ ...props, title: documentTitle }, seoConfig)
  return <NextSeo title={documentTitle} description={description} openGraph={openGraph} />
}

const generateOpenGraph = (
  { title, imageUrl, description }: SeoProps,
  seoConfig: IToolkitConfig['seoConfig']
): NextSeoProps['openGraph'] => ({
  ...seoConfig,
  title,
  description,
  images: imageUrl
    ? [
        {
          url: imageUrl,
        },
      ]
    : [],
})

export type SeoProps = Partial<{
  title: string
  imageUrl: string
  description: string
}>
