/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Container, Grid, Button} from 'theme-ui'
import SectionHeader from 'components/section-header'
import FeatureCard from 'components/feature-card.js'
import Money from 'assets/feature/money.png'
import Charity from 'assets/feature/generous.png'
import Burn from 'assets/feature/fire.png'
import Redistribution from 'assets/feature/networking.png'
import Whale from 'assets/feature/whale.png'
import Lock from 'assets/feature/lock.png'

const data = [
  {
    id: 1,
    imgSrc: Money,
    altText: 'Supply',
    title: 'Supply',
    text:
      'We have 150,000,000 tokens in total – 30% were sold in a 5-minute sell out.',
  },
  {
    id: 2,
    imgSrc: Charity,
    altText: 'Charity',
    title: 'Charity',
    text:
      'Our Charity wallet has 5% of the total supply and will be part of the distribution.',
  },
  {
    id: 3,
    imgSrc: Burn,
    altText: 'Defi',
    title: 'Defi',
    text: '2% redistributed to hodlers and 8% burnt to LP on each transaction.',
  },
  {
    id: 4,
    imgSrc: Redistribution,
    altText: 'Redistribution',
    title: 'Redistribution',
    text:
      'The long you hold, the more you have. 2% redistributed to hodlers on each transaction.',
  },
  {
    id: 5,
    imgSrc: Whale,
    altText: 'Whale tax',
    title: 'Whale tax',
    text: 'Up to 10% extra tax on sales over 1% of the total supply.',
  },
  {
    id: 6,
    imgSrc: Lock,
    altText: 'Liquidity & Burn',
    title: 'Liquidity & Burn',
    text: ' LP locked for 4 years',
  },
]

export default function Feature() {
  return (
    <section sx={{variant: 'section.feature'}} id='features'>
      <Container>
        <SectionHeader slogan='Tokenomics' title='Our Proposal' />

        <Grid sx={styles.grid}>
          {data.map(item => (
            <FeatureCard
              img
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
          <a href='#payment' rel='noopener noreferrer'>
            <Button variant='outlinePrimary' aria-label='Get Started'>
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
                See Chart
              </Container>
            </Button>
          </a>
          <a
            href='https://bscscan.com/token/0x00d01af5e11f9b218accdcab75d31440c4858a70'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='outlinePrimary' aria-label='Get Started'>
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
                Contract Address
              </Container>
            </Button>
          </a>
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
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
