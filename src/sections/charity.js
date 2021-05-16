/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx, Container, Box, Button} from 'theme-ui'
import TextFeatureCharity from 'components/text-feature-charity'
import Image from 'components/image'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {useState} from 'react'

import Orangutan from 'assets/chairties/orangutan.jpg'

const data = {  
  title: ' Orangutan Charity',
  subTitle: 'Charity Projects',
  paragraph: 'Why has Global Give decided to support the Orangutans?',
  description: `GlobalGive is going to make an impact with it's Charitable donations. We support all Charities, but felt it was right to start off by introducing our members to one of the most vitally critical times for one of the most beloved animals on the planet. As these species of ape are not seen by many of us, its hard to appreciate the danger they are in. It's at a critical point. This is not a joke. They are also an umbrella species as their survival is imperative to the survival of the forest and jungle they live in, but also the tens of thousands of other species that live in the area. Save the Orangutan and it all gets saved.
 Our first target is to reach a 1 million dollars of donations, so an entire jungle area of 500,000 acres can be sponsored for these amazing animals, but all of our donations are to be spent by these organisation in a way THEY see fit as they are the professionals that understand the delicate ecosystem.  
 Orangutan Charities, not only support the amazing Orangutan, but also supports the locals who work within this area and their families. This is also vital is it creates an environment where families can earn money for looking after these animals and not join logging and palm oil companies to survive.
 All of the species within the Jungle are protected by these organisations and we want you to feel free and ENCOURAGE you to donate a few GlobalGive tokens to there wallet directly.
 To do this please find the exact instructions on how to below:
  `,
}

export default function PartnerSection() {
  const [CopyAddress, setCopyAddress] = useState(false)
  return (
    <section sx={{variant: 'section.partner', ...styles.workflow}} id='charity'>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeatureCharity
            subTitle={data.subTitle}
            title={data.title}
            paragraph={data.paragraph}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            sx={styles.title}
          />
        </Box>
        <Box
         
          css={{
            paddingTop: '12rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            '@media screen and (max-width: 775px)': {
              paddingTop: '3rem',
            },
          }}
        >
          <img src={Orangutan} alt='Globalgive Finance' sx={{height: '80%', width:'80%'}}></img>
        </Box>
        </Container>
        <Container>
          <Box            
            css={{
              paddingTop: '12rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              '@media screen and (max-width: 775px)': {
                paddingTop: '3rem',
              },
            }}
          >
            <a rel='noopener noreferrer' sx={styles.borderAnchor}>
                <CopyToClipboard text=''>
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
                      {CopyAddress ? 'COPIED' : 'Wallet Address Coming up'}
                    </Container>
                  </Button>
                </CopyToClipboard>
              </a>
          </Box>
        </Container>
    </section>
  )
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  title:{

  },
  contentBox: {
    paddingTop: '5rem',
    marginBottom: '-120px',
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '685px'],
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
    '@media screen and (max-width: 775px)': {
      marginBottom: '0px',
    },
  },
}

function getPriceGGiveCoinGecko() {
    return fetch('https://api.coingecko.com/api/v3/simple/price?ids=globalgive&vs_currencies=usd')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    })
}