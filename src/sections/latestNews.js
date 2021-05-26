/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Container, Grid, Button, Box} from 'theme-ui'
import SectionHeader from 'components/section-header'
import TextFeatureNews from 'components/text-feature-news'
import {useState} from 'react'
import Coinsbit from 'assets/latestNews/coinbitT.png'

const data = {  
  logoImage: Coinsbit,
  logoDescription: 'Coinsbit logo',
  title: 'New Exchange Listing',   
  description: `We are happy to announce our first listing on Coinsbit. Please use the button below to register and start buying #GGIVE directly on their platform  `,
  btnName: 'Register to Coinsbit',
  btnURL:'https://coinsbit.io/register'
}

export default function LatestNews() {
  const [CopyAddress, setCopyAddress] = useState(false)

  return (
    <section sx={{variant: 'section.latestNews', ...styles.workflow}} id='latestNews'>
      <Container sx={{paddingTop:'120px'}}> 
      <SectionHeader
          title='Latest News'
          slogan=''
        />
          <Grid sx={styles.grid} >
            <Box>
              <TextFeatureNews
                logoImage= {data.logoImage}
                logoDescription={data.logoDescription}
                subTitle={data.subTitle}
                title={data.title}
                paragraph={data.paragraph}
                description={data.description}
                btnName={data.btnName}
                btnURL={data.btnURL}               
              />
              
            </Box>
           
           
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
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
  borderAnchor:{
    textAlign: 'center',
    '@media screen and (max-width: 530px)': {
      paddingLeft: '20px'
    },
  }

}
