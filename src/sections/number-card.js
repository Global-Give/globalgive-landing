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
    number: 'Coming Soon',
    img: 'data:image/png;base64,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'
  },
  {
    id: 2,
    text: 'Number of Holders 💎🙌',
    number: 'Coming Soon',
    img: null
  },
  {
    id: 3,
    text: 'MarketCap 🚀',
    number: 'Coming Soon',
    img: null
  },
  {
    id: 4,
    text: 'Amount of $GIVE burnt 🔥',
    number: 'Coming Soon',
    img: null
  },
]

export default function NumberCard() {
  return (
    <section
      sx={{variant: 'section.partner', ...styles.workflow}}
      id='features'
    >
      <Container>
        <SectionHeader slogan='' title='Stats' />

        <Grid sx={styles.grid}>
          {data.map(item => (
            <Container>
              <Box sx={styles.card}>
                <p sx={styles.number}>{item.number}</p>
                <p
                  sx={{
                    fontWeight: '300px',
                    color: '#000000',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {item.text}
                  {item.img != null ? <img src={item.img} sx={{height: '40px', width: '40px'}}></img> : ''}
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
      'repeat(4,1fr)',
    ],
  },
  card: {
    background: '#ffffff',
    borderRadius: '11px',
    width: '135%',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    paddingBottom: '1.5rem',
    '@media screen and (max-width: 768px)': {
        width: '100%'
    }
  },
  number: {
    fontFamily: 'Jost',
    fontWeight: 900,
    fontSize: '25px',
    color: '#FFD700',
  },
}
