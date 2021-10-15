import { DefaultSeoProps } from 'next-seo'

export const tenantName = 'Testing'

export const defaultSeo: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'http://localhost',
    site_name: tenantName,
    description: 'Testing 1... 2... 3...',
    title: tenantName,
  },
  description: 'Testing 1... 2... 3...',
  title: tenantName,
}
