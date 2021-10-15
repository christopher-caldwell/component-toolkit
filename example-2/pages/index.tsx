import { FC } from 'react'
import { Layout, Row } from '@thatdevdude/component-toolkit'

const Landing: FC = () => {
  return (
    <Layout>
      <Row title='Your Mother'>Hey</Row>
      <Row isOffColor>Hey</Row>
      <Row>Hey</Row>
      <Row isOffColor>Hey</Row>
    </Layout>
  )
}

export default Landing
