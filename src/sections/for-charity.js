/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx, Container, Box, Flex, Button} from 'theme-ui'
import TextFeature from 'components/text-feature'
import Image from 'components/image'
import Logo from 'assets/logos/gg_icon.svg'

// import Charity from 'assets/illustrations/charity.svg'

const data = {
  subTitle: (<span sx={{display:'flex', justifyContent:'center', alignItems: 'center'}}><img src={Logo} sx={{height: '30px', width: '30px', marginRight: '1rem'}}></img> GlobalGive</span>),
  title: 'For Charity',
  description: (
    <div>
      Are you a charity looking to increase global reach and visibility for the 
      life-changing work you do? Could increased donations boost your 
      ability to channel help exactly where it is needed most, without costly fees or delays?

      We are looking to support you!

      Finding new ways to raise important funds is essential in an ever 
      changing world. We have created an innovative way to do this and 
      believe this is the future of fundraising for every charity. Please get in 
      touch today to find out the many ways we can support your important work.

      <br></br>Contact our Charity Director – Damian, at:{' '}
      <a css={{color: '#fff', fontSize: '18px'}} href='mailto:Charity@globalgive.finance? subject=Reaching out concerning for charity'>
        charity@globalgive.finance
      </a>
			<div>
				<a href='/charities' rel='noopener noreferrer'>
					<Button variant='outlinePrimary' aria-label='Get Started'>
						<Container
						>
							View our partner charities here
						</Container>
					</Button>
				</a>
			</div>
    </div>
  ),
}

export default function ForCharity() {
  return (
    <section sx={{variant: 'section.partner'}} id='for-charity'>
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
      </Container>
    </section>
  )
}

const styles = {
  containerBox: {
    marginTop: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    padding: '2rem',
    textAlign: 'center',
    flexShrink: 0,
    px: [0, null, '30px', 0],
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
}
