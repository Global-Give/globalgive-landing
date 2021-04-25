/**  @jsxRuntime classic **/
/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {Container, Grid, Box} from 'theme-ui'
import SectionHeader from 'components/section-header'
// import FeatureCard from 'components/feature-card.js'

const data = [
  {
    id: 1,
    text: 'Amount donated to charities',
    number: '1,023,179',
  },
  {
    id: 2,
    text: 'Number of Holders',
    number: '50,258',
  },
  {
    id: 3,
    text: 'MarketCap',
    number: '45,248',
  },
  {
    id: 4,
    text: 'Amount of $GIVE burn',
    number: '1,548,486',
  },
]

export default function NumberCard() {
  return (
    <section
      sx={{variant: 'section.partner', ...styles.workflow}}
      id='features'
    >
      <Container>
        <SectionHeader slogan='' title='Our Numbers' />

        <Grid sx={styles.grid}>
          {data.map(item => (
            <Container>
              <Box sx={styles.card}>
                <p sx={styles.number}>{item.number}</p>
                <p
                  sx={{
                    fontWeight: '300px',
                    color: '#000000',
                  }}
                >
                  {item.text}
                </p>
              </Box>
            </Container>
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
  card: {
    background: '#ffffff',
    borderRadius: '11px',
    width: '90%',
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontFamily: 'Jost',
    fontWeight: 900,
    fontSize: '25px',
    color: '#FFD700',
  },
}
