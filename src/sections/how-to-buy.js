/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Container, Grid, Button, Box} from 'theme-ui'
import SectionHeader from 'components/section-header'
import FeatureCard from 'components/feature-card.js'
import Link from 'next/link'

const data = [
  {
    id: 1,
    title: 'Watch on Youtube ',
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

const data2 = [
  {
    id: 1,
    title: 'Buying BNB on Binance (for mobile)',
    btn1:  'Download PDF',
    link1: 'https://pdfhost.io/v/VoVlPe4AN_Download_Free_Guide_Pinterest_Pin.pdf',
    btn2:  'Watch on Youtube',
    link:  'https://youtu.be/atfGsZY5sqo'
  },
  {
    id: 2,
    title: 'Setting TrustWallet and loading with BNB(for mobile)',
    btn1: 'Download PDF',
    link1:'https://pdfhost.io/v/VoVlPe4AN_Download_Free_Guide_Pinterest_Pin.pdf',
    btn2: 'Watch on Youtube',
    link2:'https://youtu.be/BdWCVKINwKc'
  },
  {
    id: 3,
    title: 'Using PancakeSwap and buying GlobalGive(for mobile)',
    btn1: 'Download PDF',
    link1:'https://pdfhost.io/v/VoVlPe4AN_Download_Free_Guide_Pinterest_Pin.pdf',
    btn2: 'Video tutorial coming soon',
    link: 'https://youtu.be/a8d9VBT--Hw'
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
        <p sx={{marginTop: '-5rem'}}>If you already have Smart Chain BNB in a Trust Wallet simply use the  <a href="#features" rel='noopener noreferrer' sx={{color: '#fff'}}>GlobalGive Token contract address</a> on PancakeSwap V2 to purchase GlobalGive Tokens. </p>
          <div sx={styles.howToText}>
            <p sx={{marginTop: '2rem', fontSize:'20px', color:'#ffff', fontWeight:'300'}}>How to buy using TrustWallet and PancakeSwap</p>
            <ol>
              <li>Download TrustWallet app from Google Play or App Store and set up your wallet.</li>
              <li>Activate BNB coin in your wallet - choosing the Smart Chain Token </li>
              <li>Purchase BNB from Binance or your chosen Exchange.</li>
              <li>Using BEP20 network, send your BNB to your Wallet and then swap it to Binance Smart Chain</li>
              <li>Click DApps tab in TrustWallet. Scroll down and select PancakeSwap
                <ul>
                  <li>iOS users: To enable DApps Browser:</li>
                  <li>Type trust://browser_enable into Safari and tap Go. Tap Open when prompted</li>
                  <li>For iOS users you’ll want to Enable DApp trust://browser_enable</li>
                </ul>
              </li>
              <li>Select PancakeSwap V2.
                <ul>
                  <li>In the ‘From’ box , ensure BNB is selected</li>
                  <li>In the ‘To’ box, tap select a currency. Enter the GlobalGive contract address and tap Add</li>
                </ul>
              </li>
              <li>Adjust slippage %. to 11 – 13%. This can be adjusted by tapping the settings icon in the Exchange box </li>
              <li>Choose the amount of BNB you want to swap to GlobalGive and hit Swap</li>            
            </ol>       
            <p>Your GlobalGive balance will automatically be added to your TrustWallet. Head back to your wallet to see your tokens. You may need to activate GlobalGive token by selecting the toggle icon in the top right corner and entering the contract address into ‘Search Tokens’.</p>
            <p sx={{marginTop: '2rem', fontSize:'20px', color:'#e5e5e5', fontWeight:'300'}}> Helpful guides meant to assist you if you're new to crypto or need a little extra guidance</p>
          </div> 
        <Grid sx={styles.grid}> 
          {data2.map(item => (
            <Box>
              <div sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                <a sx={{height:'110px'}}>
                  <p sx={{fontSize:'20px', color:'#e5e5e5', fontWeight:'300'}}>{item.title}</p>
                </a>
                <a href={item.link1}  target='_blank' rel='noopener noreferrer' >
                    <Button variant='outlinePrimary' aria-label={item.title}>
                        <Container sx={{ fontFamily: 'Jost',
                                          fontWeight: 300,
                                          fontSize: '17px', 
                                          marginX:'10px', }}
                                   css={{ display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',}}  >
                            {item.btn1}
                        </Container>
                    </Button>
                </a>
                <a href={item.link2}  target='_blank' rel='noopener noreferrer' sx={{marginTop:'30px'}}>
                    <Button variant='outlinePrimary' aria-label={item.title}>
                        <Container sx={{ fontFamily: 'Jost',
                                          fontWeight: 300,
                                          fontSize: '17px', }}
                                   css={{ display: 'flex',
                                          alignItems: 'center',
                                            justifyContent: 'center',}}  >
                            {item.btn2}
                        </Container>
                    </Button>
                </a>
                
            </div>

            </Box>
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
  howToText:{
    display:'block', 
    paddingLeft:'100px',
    '@media screen and (max-width: 768px)': {
      paddingLeft: '0px'
  }
    
  }
}
