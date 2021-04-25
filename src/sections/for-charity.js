/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx, Container, Box} from 'theme-ui'
import TextFeature from 'components/text-feature'
import Image from 'components/image'

import Charity from 'assets/illustrations/charity.svg'

const data = {
  subTitle: 'GlobalGive',
  title: 'For Charity',
  description: (
    <div>
      GlobalGive may have been started by a group of people who met whilst
      trading cryptos and bonded telling stories about their wins and losses,
      but after long discussions between the founders, we all felt that it was
      not a chance meeting. There was a reason! We started to discuss our
      thoughts and feelings… it got dark pretty quick, as we all discovered that
      we felt the same about charities. We all wanted to donate to charities but
      either did not have the funds or did not have the time. (Not having the
      time is really code for, cannot be bothered in going online and getting
      out our bank cards and finding the right charity for us to donate to).
      That all changes today as we have developed the future of Charitable
      donations through investment funds. If you are a charity looking to be
      part of the future, raise funds and support a group of investors who have
      committed to making the World a better place, please get in touch today.
      Don’t wait, email us now:{' '}
      <a css={{color: '#fff', fontSize: '18px'}} href='mailto:Charity@globalgive.finance? subject=Reaching out concerning for charity'>
        Charity@globalgive.finance.
      </a>
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
        <Box
          sx={{px: [0, null, '40px', 0]}}
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            height: '100%',
          }}
        >
          <Image src={Charity} alt='Charity' />
        </Box>
      </Container>
    </section>
  )
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
}
