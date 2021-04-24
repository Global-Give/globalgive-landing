/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import World from 'assets/illustrations/world.svg';

const data = {
  subTitle: 'What we do',
  title: 'Our Mission',
  description:
  `At Global Give, we are leading the field in using the power of decentralised finance to become the industry-standard for charities to acquire and receive donations – from grassroots non-profits and disaster relief funds to established charities with global reach. 
    
    Our goal is to provide a platform, driven by our community of Global Giver’s, to boost awareness to causes that need it most as well as donating to more charities monthly. 
    
    We are doing all of the above whilst rewarding investors for simply holding $GIVE and providing increased investor protection measures.
    
    Hold Global Give. Change the world!`,
};

export default function PartnerSection() {
  return (
    <section sx={{ variant: 'section.partner' }} id="mission" >
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
        <Box sx={{ px: [0, null, '40px', 0] }} css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40%',
            height: '100%',
            marginLeft: "3rem",
          }}>
          <Image src={World} alt="Partner" />
        </Box>
      </Container>
    </section>
  );
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
};
