/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Container, Grid, Button, Box} from 'theme-ui'
import SectionHeader from 'components/section-header'
import FeatureCard from 'components/feature-card.js'
import Money from 'assets/feature/money.png'
import Charity from 'assets/feature/generous.png'
import Burn from 'assets/feature/fire.png'
import Redistribution from 'assets/feature/networking.png'
import Whale from 'assets/feature/whale.png'
import Lock from 'assets/feature/lock.png'
import Development from 'assets/feature/development.png'
import Transparent from 'assets/feature/transparent.png'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {useState} from 'react'

const data = [
  {
    id: 1,
    imgSrc: Money,
    altText: 'Supply',
    title: 'Supply',
    text:
      'Total supply is 1,500,000,000 (1.5 billion) - 25% sold in presale.',
  },
  {
    id: 2,
    imgSrc: Charity,
    altText: 'Charity',
    title: 'Charity',
    text: 'Our Charity wallet has 5% of the total supply and will be where all charity donations come from.',
  },
  {
    id: 3,
    imgSrc: Development,
    altText: 'Development',
    title: 'Development',
    text: 'This wallet has 5% of total supply and will be used to fund marketing and go towards other project costs like exchange listings.'
  },
  {
    id: 4,
    imgSrc: Burn,
    altText: 'Defi',
    title: 'Defi',
    text: 'There is a 10% tax on sales; of which 2% is redistributed to HODlers, 2% is burnt, and 6% is added to the liquidity pool. LP tokens are locked on Dxsale to provide extra investor protection (see FAQ section "is this safe to invest in")',
  },
  {
    id: 5,
    imgSrc: Redistribution,
    altText: 'Redistribution',
    title: 'Redistribution',
    text:
      'The longer you hold, the more you receive. There is a 2% tax on each sale which is redistributed to present hodlers based on the ratio of tokens they own.',
  },
  {
    id: 6,
    imgSrc: Whale,
    altText: 'Whale tax',
    title: 'Whale tax',
    text: 'Up to 10% extra tax on sales over 0.1% of the total supply (see Whale tax document)',
  }, 
  {
    id: 8,
    imgSrc: Lock,
    altText: 'Liquidity & Burn',
    title: 'Liquidity & Burn',
    text: 'LP locked for 4 months to begin with and reviewed for extension to mitigate any issues with pancakeswap upgrades and migration',
  },
]

export default function Feature() {
  const [CopyAddress, setCopyAddress] = useState(false)

  return (
    <section sx={{variant: 'section.feature'}} id='features'>
      <Container sx={{marginTop:'120px'}}>
        <SectionHeader slogan='' title='Tokenomics' />
      
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
          </Grid>

          <Grid sx={styles.grid} >
            <a href='#' rel='noopener noreferrer' sx={styles.borderAnchor}>
              <Button variant='outlinePrimary' aria-label='Get Started'>
                <Container
                  sx={{
                    fontFamily: 'Jost',
                    fontWeight: 500,
                    fontSize: '20px',
                    width: '300px',
                    '@media screen and (max-width: 1215px)': {
                      fontSize: '15px',
                      width: '250px',
                    },
                    
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
            <a href='https://pdfhost.io/v/zcAbLq4f3_GlobalGive_Toxic_Whale_Tax.pdf' target="_blank" rel='noopener noreferrer'  sx={styles.borderAnchor}>
              <Button variant='outlinePrimary' aria-label='Get Started'>
                <Container
                    sx={{
                      fontFamily: 'Jost',
                      fontWeight: 500,
                      fontSize: '20px',
                      width: '300px',
                      '@media screen and (max-width: 1215px)': {
                        fontSize: '15px',
                        width: '250px',
                      },
                    }}
                    css={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                >
                  Read more on Whale Tax
                </Container>
              </Button>
            </a>
            <a rel='noopener noreferrer' sx={styles.borderAnchor}>
            <CopyToClipboard text='0x60e9880daef10e960da3c45b076dbdac4f111edf'>
              <Button
                onClick={() => {
                  setCopyAddress(true)
                }}
                variant='outlinePrimary'
                aria-label='Get Started'
                id="contract-address"
              >
                <Container
                  sx={{
                    fontFamily: 'Jost',
                    fontWeight: 500,
                    fontSize: '20px',
                    width: '300px',
                    '@media screen and (max-width: 1215px)': {
                      fontSize: '15px',
                      width: '250px',
                    },
                  }}
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {CopyAddress ? 'COPIED' : 'Copy Contract Address'}
                </Container>
              </Button>
            </CopyToClipboard>
          </a>
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  grid: {
    marginBottom: '60px',
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
  borderAnchor:{
    textAlign: 'center',
    '@media screen and (max-width: 530px)': {
      paddingLeft: '20px'
    },
  }

}
