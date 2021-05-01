/**  @jsxRuntime classic **/
/** @jsx jsx */
import {Flex, jsx} from 'theme-ui'
import {Container, Grid, Image, Text} from 'theme-ui'
import SectionHeader from 'components/section-header'
import Nic from 'assets/team/nic.jpg'
import Nadia from 'assets/team/nadia.jpg'
import Damian from 'assets/team/damian.jpeg'
import Lee from 'assets/team/lee.jpeg'
import John from 'assets/team/john.jpeg'

const data = [
  {
    id: 1,
    name: 'John Ikwuobe',
    title: 'HEAD OF DEVELOPMENT',
    description: (
        <div sx={{width: '100%', padding: '0',  textAlign: 'center'}}>       
          As the Head of Development, John will be at the coalface; forging partnerships with businesses and spearheading innovation in the area of token adoption. With an uncanny eye for details, an intuitive sense of direction, as well as a never-ending curiosity for the new and exciting, he is committed to do the type of duties that will be indispensable for the heights to which GlobalGive aspires.
        </div>
    ),
    picture: John,
  },
  {
    id: 2,
    name: 'Nadïa Monem',
    title: 'BRAND DIRECTOR',
    description: (
        <div sx={{width: '100%', padding: '0',  textAlign: 'center'}}>       
          Nadïa brings over a decade of experience, having worked closely with numerous start-ups, prominent individuals and the occasional celebrity. But it's her passion for connecting purpose-driven businesses to a wider audience that bought her to GlobalGive where she's constantly looking for new and exciting ways to help share our vision globally.
        </div>
    ),
    picture: Nadia,
  },
  {
    id: 3,
    name: 'Damian Knight',
    title: 'CHARITY DIRECTOR',
    description: (
        <div sx={{width: '100%', padding: '0',  textAlign: 'center'}}>
          As the Charity Director, Damian is our organisation's liaison to all charities. His years of experience running companies in Europe, as well as his excellent professional attitude  makes for easier communication with larger Charity organisations. We encourage all interested parties to get in touch with Damian, who will gladly explain the application procedure.
        </div>
    ),
    picture: Damian,
  },
  {
    id: 4,
    name: 'Lee Culp',
    title: 'COMMUNICATIONS DIRECTOR',
    description: (
        <div sx={{width: '100%', padding: '0',  textAlign: 'center'}}>            
          Lee is a liaison between the team, our project partners and the community as well. He is the representative of the team that will most often express the important updates and information the team wants shared about the projects development.
        </div>
    ),
    picture: Lee,
  },
  {
    id: 5,
    name: 'Nic Davidson',
    title: 'TECHNICAL DIRECTOR',
    description: (
        <div sx={{width: '100%', padding: '0',  textAlign: 'center'}}>
            Nic forms the technical backbone for the GlobalGive project. While we usually keep his ugly mug working on backend and integrations, when we hear expletives and maniacal laughter, we usually know he solved the problem.
        </div>
    ),
    picture: Nic,
  },

]

export default function Team() {
  return (
    <section sx={styles.workflow} id='team'>
      <Container>
        <SectionHeader slogan='GlobalGive' title='Our Team' />

        <Flex sx={styles.grid}>
          {data.map(person => (
            <Container sx={styles.gridContainer}>
              <Image src={person.picture} variant='teammember' sx={styles.images} />
              <Container sx={styles.textContainer}>
              <Text sx={styles.personsTitle}>                   
                    {person.title}
                </Text>
                <Text sx={styles.personsName}>                   
                    {person.name}
                </Text>
                <Text sx={{fontSize: '15px'}}>
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
  },
  images: {
    maxHeight: '300px', 
    maxWidth: '288px',
    display: 'block',
    margin: '0 auto',
    '@media screen and (max-width: 380px)': {
      paddingRight: '20px'
    },
  },
  personsName:{
    fontSize: '25px',
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  personsTitle: {
    margin: '10px 0 0 0 ',
    fontSize: '16px',
    fontWeight: '280',
    textAlign: 'center',
  },
  description:{
    width: '100%', padding: '0',  textAlign: 'center'
  }

}
