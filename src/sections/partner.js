/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx, Container, Box} from 'theme-ui'
import TextFeature from 'components/text-feature'
import Image from 'components/image'

import Logo from 'assets/logos/gg_icon.svg'

const data = {  
  title: 'Our Mission',
  subTitle: 'What we do',
  description: `We are here to disrupt an archaic system and replace it with a model that benefits investors, charities and the donators in a much better way. 

    We see cryptocurrency as the future and we have positioned ourselves to be the token of choice for global charities whereby donations can be made in $GGIVE from anyone around the world to any charity.

    By using our innovative platform to create longterm partnerships, global charities will have an ongoing means of fundraising and donation drives via $GGIVE providing a co-beneficial financial ecosystem in 
    `,
}

export default function PartnerSection() {
  return (
    <section sx={{variant: 'section.partner', ...styles.workflow}} id='mission'>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box
          sx={{px: [0, null, '40px', 0]}}
          css={{
            paddingTop: '12rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            height: '100%',
            '@media screen and (max-width: 775px)': {
              paddingTop: '3rem',
            },
          }}
        >
          <img src={Logo} alt='Globalgive Finance' sx={{height: '25%', width:'25%'}}></img>
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
