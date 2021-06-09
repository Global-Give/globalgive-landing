/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx, Image} from 'theme-ui'
import {Container, Grid, div, Heading, Text, Button} from 'theme-ui'
import SectionHeader from 'components/section-header'
import STYLES from './css/roadmap.module.css'

import ArcIcon1 from 'assets/Arc1.svg'
import ArcIcon2 from 'assets/Arc2.svg'
import ArcIcon3 from 'assets/Arc3.svg'
import globalIcon from 'assets/world.png'

import ArrowOdd from 'assets/arrowOdd.png'
import ArrowEven from 'assets/arrowEven.png'

export default function WorkFlow() {
  return (
    <section sx={{...styles.workflow}} id='roadmap'>
      <Container>
        <SectionHeader slogan='Our Vision' title='Roadmap' isWhite={true} />

        <Container className={STYLES.gridContainer}>
          <div className={STYLES.one}>
            <div sx={styles.wrapper}>
              <div sx={{display: 'flex'}}>
                <div sx={styles.icondiv}>
                    <img src={globalIcon} sx={styles.iconImg}></img>
                </div>
                <div>
                  
                  <Text sx={styles.wrapper.secondTitle}>The Crust</Text>
                </div>
              </div>
              <div sx={styles.objectivediv}>
                <div sx={styles.objectiveLine}>
                  <Text sx={styles.wrapper.objective}>
                    <ul><li>Announcements of First Charity Donation and organisation</li></ul>
                    <ul><li>First donation completed within 30 days of token launch</li></ul>
                    <ul><li>Listed with Price tracking sites</li></ul>
                    <ul><li>Begin application process for exchange listings</li></ul>
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div sx={styles.arrow} className={STYLES.arc1}>
            <Image
              src={ArcIcon1}
              sx={{
                position: 'absolute',
                top: '20%',
                maxWidth: '190%',
                left: '-60%',
                transform: 'rotate(5deg)',
              }}
            />
          </div>

          <div sx={styles.card} className={STYLES.two}>
            <div sx={styles.wrapper}>
              <div sx={{display: 'flex'}}>
                <div sx={styles.icondiv}>
                    <img src={globalIcon} sx={styles.iconImg}></img>
                </div>
                <div>
                  
                  <Text sx={styles.wrapper.secondTitle}>The Mantle</Text>
                </div>
              </div>
              <div sx={styles.objectivediv}>
                <div sx={styles.objectiveLine}>
                  <Text sx={styles.wrapper.objective}>
                    <ul><li>Start of Community competitions – winners choose Charity of the month</li></ul>
                    <ul><li>Create charity HODLers foundation</li></ul>
                    <ul><li>Partnerships creating with several Charities</li></ul>
                    <ul><li>Move GlobalGive Token into its own mainnet</li></ul>
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div sx={styles.arrow} className={STYLES.arc2}>
            <Image
              src={ArcIcon2}
              sx={{
                position: 'absolute',
                top: '60%',
                maxWidth: '85%',
                left: '-80%',
                transform: 'rotate(100deg)',
              }}
            />
          </div>

          <div sx={styles.card} className={STYLES.three}>
            <div sx={styles.wrapper}>
              <div sx={{display: 'flex'}}>
                <div sx={styles.icondiv}>
                    <img src={globalIcon} sx={styles.iconImg}></img>
                </div>
                <div>
                  
                  <Text sx={styles.wrapper.secondTitle}>Outer Core</Text>
                </div>
              </div>
              
              <div sx={styles.objectivediv}>
                <div sx={styles.objectiveLine}>
                  <Text sx={styles.wrapper.objective}>
                    <ul><li>Enable HODLer direct charity donation with selected partners</li></ul>
                    <ul><li>Enable users to write off donation activity within our ecosystem</li></ul>
                    <ul><li>Start conversations with Leonardo Di Caprio foundation for donations and cross promotion</li></ul>
                    <ul><li>United Nations certification as a global charitable organization</li></ul>
                    <ul><li>Start working with several charity tokens on creating a ‘Charity Exchange’</li></ul>
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div sx={styles.arrow} className={STYLES.arc3}>
            <Image
              src={ArcIcon3}
              sx={{
                position: 'absolute',
                top: '120%',
                maxWidth: '200%',
                left: '-120%',
                transform: 'rotate(-10deg)',
              }}
            />
          </div>

          <div sx={styles.card} className={STYLES.four}>
            <div sx={styles.wrapper}>
              <div sx={{display: 'flex'}}>
                <div sx={styles.icondiv}>
                    <img src={globalIcon} sx={styles.iconImg}></img>
                </div>
                <div>                  
                  <Text sx={styles.wrapper.secondTitle}>Inner Core</Text>
                </div>
              </div>
              <div sx={styles.objectivediv}>
                <div sx={styles.objectiveLine}>
                  <Text sx={styles.wrapper.objective}>
                    <ul><li>GlobalGive will be the choice for Charity donations around the world with hundreds of charities using the GlobalGive token as a means to raise funds.</li></ul>
                    <ul><li>GlobalGive will establish itself as a pivotal and critical crypto asset for decentralized donations worldwide.</li></ul>
                    <ul><li>The founders and HOLDers will continue to work in saving millions from poverty, increasing education in areas that need it and helping people move up from living on the street. We strive to carry on the great works of all those environmentalists who we so proudly stand on the shoulders of.</li></ul>
                  </Text>
                </div>
              </div>
            </div>
          </div>
    
        </Container>
        <a href='#' rel='noopener noreferrer' sx={styles.mobileCentered}>
            <Button variant='outlinePrimary' aria-label='Get Started' >
              <Container
                sx={{
                  fontFamily: 'Jost',
                  fontWeight: 500,
                  fontSize: '20px',
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
                See Detailed Roadmap
              </Container>
            </Button>
        </a>
      </Container>
    </section>
  )
}

const styles = {
  mobileCentered:{
    '@media screen and (max-width: 380px)': {
      paddingLeft: '30px'
    },
    '@media screen and (min-width: 385px) and (max-width: 480px)': {
      paddingLeft: '50px'
    },
  },
  workflow: {
    backgroundColor: 'background_secondary',
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    py: [8, null, 9, null, null, 10],
    // '&::before': {
    //   position: 'absolute',
    //   content: '""',
    //   top: 0,
    //   right: 0,
    //   width: '100%',
    //   backgroundSize: '320px 320px',
    //   height: '100%',
    //   opacity: 0.3,
    //   zIndex: 0,
    // },
  },
  arrow: {
    '@media screen and (max-width:600px)': {
      display: 'none',
    },
    position: 'relative',
  },

  iconImg: {
    height: '100px',
    width: 'auto',
    paddingLeft: '30px',
    '@media screen and (max-width: 800px)': {
      height: '70px',      
    },
  },

  icondiv: {
    width: ['100px', null, '60px', null, null, '50px'],
    height: ['100px', null, '60px', null, null, '50px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
   // backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mr: '5rem',
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
    '@media screen and (max-width: 800px)': {
      width: ['50px', null, '50px', null, null, '50px'],
      height: ['50px', null, '50px', null, null, '50px'],  
      mr: '3rem',   
    },
  },

  objectivediv: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: '50px'
  },

  objectiveLine: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },

  checkdiv: {
    marginLeft: '1rem',
    height: '1rem',
    width: '1rem',
    backgroundColor: '#555',
  },

  wrapper: {
    width: '100%',
    display: 'flex',
    // marginLeft: '-6rem',
    flexDirection: 'column',
    alignItems: 'center',
    mt: '-5px',
    title: {
      fontSize: 8,
      color: 'white',
      lineHeight: 1,
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    secondTitle: {
      fontSize: 8,
      fontWeight: 600,
      lineHeight: 2,
      color: '#00D3BA',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
      '@media screen and (max-width: 800px)': {
        fontSize: 6,
        fontWeight: 400,
      },
    },

    objective: {
      fontSize: 2,
      fontWeight: 200,
      lineHeight: 1.3,
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
    },
   
  },
}
