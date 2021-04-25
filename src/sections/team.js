/**  @jsxRuntime classic **/
/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {Container, Grid, Image, Text} from 'theme-ui'
import SectionHeader from 'components/section-header'
import Nadia from 'assets/team/nadia.jpeg'
import Nic from 'assets/team/nic.jpg'
import Damian from 'assets/team/damian.jpeg'
import Lee from 'assets/team/lee.jpeg'
import John from 'assets/team/john.jpeg'

const data = [
  {
    id: 1,
    name: 'Nadïa',
    description: (
        <div sx={{width: '100%', padding: '0'}}>
            OK with people, prefers animals. Happy to throw herself off a cliff and build the plane on the way down 
            YOLO ✌
        </div>
    ),
    picture: Nadia,
  },
  {
    id: 2,
    name: 'John',
    description: (
        <div sx={{width: '100%', padding: '0'}}>
            OK with people, prefers animals. Happy to throw herself off a cliff and build the plane on the way down 
            YOLO ✌
        </div>
    ),
    picture: John,
  },
  {
    id: 3,
    name: 'Damian Knight',
    description: (
        <div sx={{width: '100%', padding: '0'}}>
            <h4>Charity Director</h4>
            Damian is our organisation's liaison to all charities. His years of experience running companies in Europe, as well as his excellent professional attitude  make for easier  communication with large Charity organisations. We encourage all interested charities to get in touch with Damian, who will gladly explain the application procedure. 

            <a css={{color: '#fff', fontSize: '18px'}} href='mailto:Charity@globalgive.finance? subject=Reaching out concerning for charity'>
                charity@globalgive.finance
            </a>
        </div>
    ),
    picture: Damian,
  },
  {
    id: 4,
    name: 'Lee Culp',
    description: (
        <div sx={{width: '100%', padding: '0'}}>
            <h4>Communications Director</h4>
            As Communications Director, Lee serves to keep a seamless information flow between the team, our project partners and the community as well. He is responsible for putting out important updates and information the team wants shared about the projects development.
        </div>
    ),
    picture: Lee,
  },
  {
    id: 5,
    name: 'Nic Davidson',
    description: (
        <div sx={{width: '100%', padding: '0'}}>
            <h4>Technical Director</h4>
            Damian is our organisation's liaison to all charities. His years of experience running companies in Europe, as well as his excellent professional attitude  make for easier  communication with large Charity organisations. We encourage all interested charities to get in touch with Damian, who will gladly explain the application procedure. 
            If humans had super-powers, Nic's would be the ability to control computers with his mind. Nic provides the needed technological backbone for the GlobalGive project. He feels at home caged-in, working on backend. Rare sightings occur in the spring and summer months.
        </div>
    ),
    picture: Nic,
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
              <Container sx={styles.textContainer}>
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
                <Text sx={{fontSize: '14px'}}>
                    {person.description}
                </Text>
              </Container>
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
    alignItems: 'start',
    alignContent: 'center'
  },
  gridContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    flex: '1 0 30%', 
    margin: '1rem', 
    width: '348px', 
    height: 'auto',
    '@media screen and (max-width: 768px)': {
        flex: '1 0 48%'
    }
  },
  textContainer: {
      display: 'flex',
      flexDirection: 'column'
  }
}
