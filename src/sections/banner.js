/**  @jsxRuntime classic **/
/** @jsx jsx */
import { IconButton, jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import { IoDownloadOutline } from 'react-icons/io5';
import BannerBG from 'assets/dot_wave.png';
import DotWave from 'assets/dot_wave.png';
import BannerIllustration from 'assets/illustrations/banner-illustration.svg';

import client1 from 'assets/sponsor/paypal.svg';
import client2 from 'assets/sponsor/google.svg';
import client3 from 'assets/sponsor/dropbox.svg';

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
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Save lives with a single token
          </Heading>
          <Text as="p" variant="heroSecondary" sx={{
            color: "text"
          }}>
            Hold GlobalGive, change the world!
          </Text>
          {/* <Text as="p" variant="heroSecondary" sx={{
            color: "text"
          }}>
            The top exchanges for trading in GlobalGive are currently WhiteBIT, PancakeSwap, BitMart, and DODO BSC. 
            You can find others listed on our crypto exchanges page.
          </Text> */}
          <Flex sx={{
            flexWrap: 'wrap'
          }} >
            {/* <a href="#" sx={{
              cursor: 'auto',
              pointerEvents: 'none'
              // '&:hover > button > div > span': {
              //   visibility: 'visible',
              //   borderColor: 'primary',
              //   borderWidth: '1.5px',
              //   borderStyle: 'solid',
              //   borderRadius: '2px',
              //   backgroundColor: 'background',
              //   color: 'primary'
              // }
            }} >
              <Button variant="defaultBtn" aria-label="Get Started" sx={{
                opacity: 0.5,
                pointerEvents: 'none'
              }} >
                  <Container sx={{
                    fontFamily: 'Jost',
                    fontWeight: 500,
                    fontSize: '20px'
                  }}
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    Buy (Coming Soon)
                    
                  </Container>
              </Button>
            </a> */}
            <a href="#">
              <Button variant="defaultBtn" aria-label="Get Started">
                  <Container sx={{
                    fontFamily: 'Jost',
                    fontWeight: 500,
                    fontSize: '20px'
                  }}
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    White Paper
                    <IoDownloadOutline sx={{
                      mx: 2
                    }} />
                  </Container>
              </Button>
            </a>
            <a href="#" href="https://t.me/globalgivetokencommunity" target="_blank" rel="noopener noreferrer">
              <Button variant="accentButton" aria-label="Get Started">
                  <Container sx={{
                    fontFamily: 'Jost',
                    fontWeight: 500,
                    fontSize: '20px'
                  }}
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    Join Telegram
                  </Container>
              </Button>
            </a>
            {/* <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="dQw4w9WgXcQ"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}
              >
                <FaPlayCircle /> Watch Video
              </Button>
            </> */}
          </Flex>
          {/* <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Sponsored by:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex> */}
        </Box>

        <Flex sx={styles.banner.imageBox} css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image src={BannerIllustration} css={{
            'z-index': 1,
            'user-drag': 'none',
            'user-select': 'none'
          }}/>
        </Flex>
      </Container>
      <Image src={DotWave} sx={styles.banner.bgImage} css={{
        'z-index': 0,
        'user-drag': 'none',
        'user-select': 'none'
      }}/>

    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'background',
    container: {
      display: 'flex'
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
      width: '51.125rem'
    },
    contentBox: {
      width: ['100%', null, '85%', '70%', '65%', '70%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, 'flex'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'center',
      width: '100%',
    },
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
};
