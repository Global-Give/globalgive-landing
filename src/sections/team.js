/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Container, Grid, Image, Text} from 'theme-ui'
import SectionHeader from 'components/section-header'
import Nadia from 'assets/team/nadia.jpeg'
import Nic from 'assets/team/nic.jpeg'
import Damian from 'assets/team/damian.jpeg'
import Lee from 'assets/team/lee.jpeg'
import John from 'assets/team/john.jpeg'

const data = [
  {
    id: 1,
    name: 'Nadia',
    picture: Nadia,
  },
  {
    id: 2,
    name: 'Nic',
    picture: Nic,
  },
  {
    id: 3,
    name: 'Damian',
    picture: Damian,
  },
  {
    id: 4,
    name: 'Lee',
    picture: Lee,
  },
  {
    id: 5,
    name: 'John',
    picture: John,
  },
  //   {
  //     id: 6,
  //    picture: 'How to Buy GlobalGive on pancake Swap (downloadable PDF)',
  //   },
]

export default function Team() {
  return (
    <section sx={styles.workflow} id='team'>
      <Container>
        <SectionHeader slogan='GlobalGive' title='Our Team' />

        <Grid sx={styles.grid}>
          {data.map(person => (
            <Container sx={{display: 'flex', flexDirection: 'column'}}>
              <Image src={person.picture} variant='teammember' />
              <Text
                sx={{
                  fontSize: '25px',
                  fontWeight: '500',
                  color: '#ffffff',
                }}
              >
                {' '}
                {person.name}{' '}
              </Text>
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
    justifyContent: 'space-evenly',
    justifyItems: 'center',
    alignContent: 'space-evenly',
    alignItems: 'center',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
}
