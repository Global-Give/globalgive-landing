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
    text: 'How to buy BNB(YouTube Video link)',
    link: '#'
  },
  {
    id: 2,
    text: 'How to Buy BNB(downloadable PDF)',
    link: 'https://pdfhost.io/v/qY5QS1inZ_EN_How2Buy_GIVE_steps.pdf',
  },
  {
    id: 3,
    text: 'How to Load and use Trust Wallet onto your Phone (YouTube Video link)',
    link: '#'
  },
  {
    id: 4,
    text: 'How to Load and use Trust Wallet onto your phone (downloadable PDF)',
    link: '#'
  },
  {
    id: 5,
    text: 'How to Buy GlobalGive on Pancake Swap (YouTube Video Link) ',
    link: '#'
  },
  {
    id: 6,
    text: 'How to Buy GlobalGive on pancake Swap (downloadable PDF)',
    link: '#'
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

        <Grid sx={styles.grid}>
          {data.map(item => (
            <div>
                <a 
                    href={item.link} 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    <Button variant='outlinePrimary' aria-label={item.text}>
                        <Container
                            sx={{
                            fontFamily: 'Jost',
                            fontWeight: 500,
                            fontSize: '20px',
                            }}
                            css={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}
                        >
                            BUY
                        </Container>
                    </Button>
                </a>
                <FeatureCard text={item.text} />
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
