import * as React from 'react'
import Document, { DocumentInitialProps, DocumentContext } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'

import { createEmotionCache } from '@/utils/createEmotionCache'

/** NextJS Helper for properly rendering the document while using MUI v5 with Emotion  */
export const getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      /* eslint-disable react/display-name */
      enhanceApp: (App: any) => props => <App emotionCache={cache} {...props} />,
    })

  const initialProps = await Document.getInitialProps(ctx)
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  }
}
