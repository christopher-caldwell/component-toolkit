import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'

import { createEmotionCache } from '@/utils'

const clientSideEmotionCache = createEmotionCache()
export const EmotionCacheProvider = ({
  emotionCache = clientSideEmotionCache,
  children,
  Component,
  pageProps,
}: EmotionProps) => {
  return <CacheProvider value={emotionCache}>{children(Component, pageProps)}</CacheProvider>
}

export interface EmotionProps extends AppProps {
  emotionCache?: EmotionCache
  children: (Component: AppProps['Component'], pageProps: AppProps['pageProps']) => JSX.Element
}
