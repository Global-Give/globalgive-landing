/**  @jsxRuntime classic **/
/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
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

        <Flex sx={styles.grid}>
          {data.map(person => (
            <Container sx={styles.gridContainer}>
              <Image src={person.picture} variant='teammember' sx={{maxHeight: '300px', maxWidth: '288px'}} />
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
        </Flex>
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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  gridContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    flex: '1 0 30%', 
    margin: '1rem', 
    maxWidth: '348px', 
    maxHeight: '345px',
    '@media screen and (max-width: 768px)': {
        flex: '1 0 48%'
    }
  }
}
