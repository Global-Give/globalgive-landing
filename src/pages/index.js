import React from 'react'
import {ThemeProvider} from 'theme-ui'
import {StickyProvider} from 'contexts/app/app.provider'
import theme from 'theme'
import SEO from 'components/seo'
import Layout from 'components/layout'
import Banner from 'sections/banner'
import Feature from 'sections/feature'
import PartnerSection from 'sections/partner'
import WorkFlow from 'sections/workflow'
import Faq from 'sections/faq'
import ForCharity from 'sections/for-charity'
import HowToBuy from 'sections/how-to-buy'
import NumberCard from 'sections/number-card'
import Team from 'sections/team'
import Listings from 'sections/listings'

export default function IndexPage({domainName}) {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title='GlobalGive Token - Charity Token' domainName={domainName} />
          <Banner />
          {/* <KeyFeature /> */}
          {/* <CoreFeature /> */}          
          <Feature />
          <Listings/>
          <NumberCard />
          <PartnerSection />
          <ForCharity />
          <WorkFlow />
          {/* <TestimonialCard /> */}
          {/* <SecurePayment /> */}
          <HowToBuy />
          {/* <Package /> */}
          <Faq />
          
          <Team />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
    
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
  return {
    props: {
      domainName: JSON.parse(JSON.stringify(req['headers']['host']))
    }, // will be passed to the page component as props
  }
}