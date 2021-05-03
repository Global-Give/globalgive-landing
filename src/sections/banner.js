/**  @jsxRuntime classic **/
/** @jsx jsx */
import {IconButton, jsx} from 'theme-ui'
import {Container, Flex, Box, Heading, Text, Image, Button} from 'theme-ui'
import React, {useState} from 'react'
import ModalVideo from 'react-modal-video'
import {Link} from 'components/link'
import {FaPlayCircle} from 'react-icons/fa'
import {IoDownloadOutline} from 'react-icons/io5'
import BannerBG from 'assets/dot_wave.png'
import DotWave from 'assets/dot_wave.png'
import AlternateGlobalGiveLogo from 'assets/logos/alternatelogo.svg'

import client1 from 'assets/sponsor/paypal.svg'
import client2 from 'assets/sponsor/google.svg'
import client3 from 'assets/sponsor/dropbox.svg'

const data = [
  {
    id: 1,
    path: '#',
    image: client1,
    title: 'paypal',
  },
  {
    id: 2,
    path: '#',
    image: client2,
    title: 'google',
  },
  {
    id: 3,
    path: '#',
    image: client3,
    title: 'dropbox',
  },
]

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false)
  const handleClick = e => {
    e.preventDefault()
    setVideoOpen(true)
  }
  return (
    <section sx={styles.banner} id='home' sx={{variant: 'section.feature'}}>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading
            as='h1'
            variant='heroPrimary'
            sx={{
              textAlign: ['center', 'center', 'center', 'center', 'center', 'center'],
            }}
          >
            GlobalGive
          </Heading>

          <Text as='h3' variant='heroTertiary' sx={styles.banner.subtext}>
          The Token of Choice for Global Charities
          </Text>
          <Text as='p' variant='heroSecondary' sx={styles.banner.description}>
          GlobalGive is a deflationary token built on the Binance Smart Chain. Investing in this token does not only grow your wealth, but hopefully makes the world a better place, as we donate a percentage of proceeds to a charity to be determined every month. GlobalGive is therefore a rotatory Charity Token representing a ground-breaking option for Charities to raise funds in an ever changing world.
          </Text>
          <Text as='p' variant='heroSecondary' sx={styles.banner.description}>
          Invest in the world while investing in your future!
          </Text>
          <Text as='p' variant='heroSecondary' sx={styles.banner.description}>
            Hold <Image src={AlternateGlobalGiveLogo} sx={{height: '15px'}} />
            <span sx={styles.banner.alternateLogo}> GlobalGive</span>, change
            the world!
          </Text>
          <Flex sx={styles.buttonsContainer}>
            <a href='#features' rel='noopener noreferrer'>
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
                  For Investors
                </Container>
              </Button>
            </a>
            <a href='#for-charity' rel='noopener noreferrer' sx={styles.charityA}>
              <Button variant='outlinePrimary' aria-label='Get Started'>
                <Container
                  sx={styles.forCharityBtn}
                >
                  For Charities
                </Container>
              </Button>
            </a>
          </Flex>
        </Box>

      </Container>
      <Image
        src={DotWave}
        sx={styles.banner.bgImage}
        css={{
          'z-index': 0,
          'user-drag': 'none',
          'user-select': 'none',
        }}
      />
    </section>
  )
}

const styles = {
  forCharityBtn:{
    fontFamily: 'Jost',
    fontWeight: 500,
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',    
  },

  charityA:{
    '@media screen and (max-width: 480px)': {
      marginTop: '40px'
    },
  },

  banner: {
    alternateLogo: {
      color: 'white',
    },
    overflow: ['hidden', 'initial', null, 'hidden'],
    
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'background',
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom:'-120px',
      '@media screen and (max-width: 1024px)': {
        marginTop: '140px'
      },
    },
    bgImage: {
      pointerEvents: 'none',
      position: 'absolute',
      opacity: 0.15,
      left: 0,
      right: 0,
      top: '10%',
      marginLeft: 'auto',
      marginRight: 'auto',
      height: '56.563rem',
      width: '51.125rem',
    },
    contentBox: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      justifySelf: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      flexShrink: 0,
      textAlign: 'center',
    //   pt: [0, null, null, null, null, null, 5, 7],
    },
    description: {
      color: 'text',
      width: '100%',
      textAlign: 'center',
      paddingRight: '0px'
    },
    subtext: {
      width: '100%',
      textAlign: 'center',
      paddingRight: '0px'
    },
  },
  buttonsContainer: {
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: ['column', 'column', 'column', 'row', 'row', 'row'],
    width: ['100%', '100%', '100%'],
    alignItems: ['center', 'center', 'center', 'center', 'center', 'center'],
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
  // tooltiptext: {
  //   visibility: 'hidden',
  //   width: '120px',
  //   'background-color': 'black',
  //   color: '#fff',
  //   'text-align': 'center',
  //   padding: '5px 0',
  //   'border-radius': '6px',

  //   position: 'absolute',
  //   'z-index': 1,
  //   top: '20px',
  // }
}
