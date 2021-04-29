/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Container, Grid, Button} from 'theme-ui'
import SectionHeader from 'components/section-header'
import FeatureCard from 'components/feature-card.js'
import Link from 'next/link'

const data = [
  {
    id: 1,
    text: 'How to buy BNB (YouTube Video link)',
    title: 'Click',
    link: 'https://youtu.be/atfGsZY5sqo'
  },
  {
    id: 2,
    text: 'How to Buy BNB (downloadable PDF)',
    title: 'Click',
    link: 'https://pdfhost.io/v/VoVlPe4AN_Download_Free_Guide_Pinterest_Pin.pdf',
  },
  {
    id: 3,
    text: 'How to Load and use Trust Wallet onto your Phone (YouTube Video link)',
    title:'Click',
    link: 'https://youtu.be/BdWCVKINwKc'
  },
  {
    id: 4,
    text: 'How to Load and use Trust Wallet onto your phone (downloadable PDF)',
    title: 'Click',
    link: 'https://pdfhost.io/v/VoVlPe4AN_Download_Free_Guide_Pinterest_Pin.pdf'
  },
  {
    id: 5,
    text: 'How to Buy GlobalGive on Pancake Swap (YouTube Video Link)',
    title: 'Click',
    link: 'https://youtu.be/a8d9VBT--Hw'
  },
  {
    id: 6,
    text: 'How to Buy GlobalGive on pancake Swap (downloadable PDF)',
    title: 'Click',
    link: 'https://pdfhost.io/v/VoVlPe4AN_Download_Free_Guide_Pinterest_Pin.pdf'
  },
]

export default function HowToBuy() {
  return (
    <section sx={{
        paddingBottom: '3rem',
        variant: 'section.securePayment',
        background:
          'linear-gradient(0deg, rgba(29,31,41,1) 0%, rgba(23,25,33,1) 100%)',
      }} id='how-to-buy'>
      <Container>
        <SectionHeader slogan='' title='How to buy' />
        <p sx={{marginTop: '-5rem', textAlign:'center'}}>If you already have Smart Chain BNB in a Trust Wallet simply use the  <a href="#features" rel='noopener noreferrer' sx={{color: '#fff'}}>GlobalGive Token contract address</a> on PancakeSwap V2 to purchase GlobalGive Tokens. </p>
        <div sx={{display: 'flex', justifyContent: 'center', width: '100%', marginTop: '1.5rem', marginBottom: '2.5rem'}}>
            <div sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <p sx={{textAlign:'center'}}>If you are having issues buying:</p>
                <ul sx={{textAlign:'center', marginTop: '-1rem', listStyle: 'none'}}>
                    <li>- Increase the slippage – going to up to 12 can help</li>
                    <li>- Change the amount of tokens you are buying to a round number (500,000 for example)</li>
                    <li>- Make sure you have enough bnb for the fees (this is the case for buying and selling)</li>
                </ul>
            </div>
        </div>
        <Grid sx={styles.grid}>
          {data.map(item => (
            <div sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                <a href={item.link} 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <Button variant='outlinePrimary' aria-label={item.text}>
                        <Container
                            sx={{
                                fontFamily: 'Jost',
                                fontWeight: 500,
                                fontSize: '20px',
                                height: '60px'
                            }}
                            css={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            >
                            {item.title}
                        </Container>
                    </Button>
                </a>
                <a sx={{height:'70px'}}>
                <FeatureCard text={item.text} />
                </a>
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  workflow: {
    backgroundColor: 'background_secondary',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    variant: 'section.feature',
    py: [8, null, 9, null, null, 10],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
}
