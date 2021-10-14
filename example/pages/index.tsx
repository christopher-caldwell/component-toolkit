import { FC } from 'react'
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('components/landing/hero'))
const Hiring = dynamic(() => import('components/landing/hiring'))

const Landing: FC = () => {
  return (
    <Layout noPadding>
      <Hero />
      <Row>
        <Stats />
      </Row>
      <Row isOffColor>
        <ItWorks />
      </Row>
      <Row>
        <Reviews />
      </Row>
      <Row isOffColor>
        <Hiring />
      </Row>
    </Layout>
  )
}

export default Landing
