/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx, Image} from 'theme-ui'
import {Container, Grid, div, Heading, Text, Button} from 'theme-ui'
import SectionHeader from 'components/section-header'
import STYLES from './css/roadmap.module.css'

import ArcIcon1 from 'assets/Arc1.svg'
import ArcIcon2 from 'assets/Arc2.svg'
import ArcIcon3 from 'assets/Arc3.svg'
import globalIcon from 'assets/worldwide.svg'

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
                    <img src={globalIcon} sx={{
                        height: '50px',
                        width: 'auto',
                    }}></img>
                </div>
                <div>
                  <Heading sx={styles.wrapper.title}>April 2021</Heading>
                  <Text sx={styles.wrapper.secondTitle}>The Crust</Text>
                </div>
              </div>
              <div sx={styles.objectivediv}>
                <div sx={styles.objectiveLine}>
                  <Text sx={styles.wrapper.objective}>
                    <ul>Selection and addition of first charities for donations</ul>
                    <ul>First donation completed within 30 days of token launch</ul>
                    <ul>Price tracking various platforms</ul>
                    <ul>Begin application process for exchange listings</ul>
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
                    <img src={globalIcon} sx={{
                        height: '50px',
                        width: 'auto',
                    }}></img>
                </div>
                <div>
                  <Heading sx={styles.wrapper.title}>May 2021</Heading>
                  <Text sx={styles.wrapper.secondTitle}>The Mantle</Text>
                </div>
              </div>
              <div sx={styles.objectivediv}>
                <div sx={styles.objectiveLine}>
                  <Text sx={styles.wrapper.objective}>
                    <ul>Enable monthly donation selection by the community </ul>
                    <ul>Create charity HODLers foundation</ul>
                    <ul>Charity organization cross promotion</ul>
                    <ul>Move Global Give Token into its own mainnet</ul>
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
                    <img src={globalIcon} sx={{
                        height: '50px',
                        width: 'auto',
                    }}></img>
                </div>
                <div>
                  <Heading sx={styles.wrapper.title}>June 2021</Heading>
                  <Text sx={styles.wrapper.secondTitle}>Outer Core</Text>
                </div>
              </div>
              
              <div sx={styles.objectivediv}>
                <div sx={styles.objectiveLine}>
                  <Text sx={styles.wrapper.objective}>
                    <ul>Enable HODLer direct charity donation {' '}</ul>
                    <ul>Enable users to write off donation activity within our ecosystem {' '}</ul>
                    <ul>Work with Leonardo Di Caprio foundation for donations and cross promotion {' '}</ul>
                    <ul>United Nations certification as a global charitable organization {' '}</ul>
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
                    <img src={globalIcon} sx={{
                        height: '50px',
                        width: 'auto',
                    }}></img>
                </div>
                <div>
                  <Heading sx={styles.wrapper.title}>July 2021</Heading>
                  <Text sx={styles.wrapper.secondTitle}>Inner Core</Text>
                </div>
              </div>
              <div sx={styles.objectivediv}>
                <div sx={styles.objectiveLine}>
                  <Text sx={styles.wrapper.objective}>
                    <ul>Global Give will be the choice for Charity donations around the world with hundreds of charities using the Global Give token as a means to raise funds.  </ul>
                    <ul>Global Give will establish itself as a pivotal  and critical crypto asset for decentralized donations worldwide. </ul>
                    <ul>The founders and HOLDers will continue to work in saving millions from poverty, increasing education in areas that need it and helping people move up from living on the street. We strive to carry on the great works of all those environmentalists who we so proudly stand on the shoulders of.</ul>
                  </Text>
                </div>
              </div>
            </div>
          </div>
    
        </Container>
        <a href='#' rel='noopener noreferrer'>
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
                See Detailed Roadmap
              </Container>
            </Button>
        </a>
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

  // card: {
  //   marginLeft: '4rem',
  //   marginTop: '2rem',
  //   width: '100%',
  // },
  // card: {
  // display: 'flex',
  // flexDirection: '',
  // position: 'relative',
  // textAlign: ['center', null, 'left'],
  // width: ['100%', '100%', '100%'],
  // mx: 'auto',
  //   '&::before': {
  //     position: 'absolute',
  //     content: '""',
  //     top: 0,
  //     left: [0, null, null, null, null, 75, null, 100],
  //     backgroundRepeat: `no-repeat`,
  //     backgroundPosition: 'center center',
  //     width: 180,
  //     height: 57,
  //     opacity: 0.3,
  //     '@media screen and (max-width:1220px)': {
  //       display: 'none',
  //     },
  //   },
  // },
  arrow: {
    '@media screen and (max-width:600px)': {
      display: 'none',
    },
    position: 'relative',
  },

  icondiv: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mr: '7rem',
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },

  objectivediv: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
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
      fontSize: 6,
      fontWeight: 600,
      lineHeight: 2,
      color: '#00D3BA',
      opacity: 0.65,
      pr: [0, null, null, null, null, 5],
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
