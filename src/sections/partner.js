/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import Meteor from 'assets/illustrations/Meteor.png';

const data = {
  subTitle: 'What we do',
  title: 'Our goal is to donate more to charities than any other token out there.',
  description:
    " We have 6 Global charities that we support, and they will each receive 1 month’s tax redistribution on the Charity wallet, once a year. The other 6 months, we will choose charities in need, disaster funds if this unfortunate event should happen and we will hold competitions on our groups allowing our investors to choose a charity. Influencers will have the opportunity to show their skills off, allowing the most popular promotions by video, Tik Tok, Instagram and Reddit to be designated with choosing a charity too. We are here to make lives better, end hunger, save animals from the cruelty of man and show that Politicians are not the only ones who can do ‘stuff’. We can and we can do it without the fear of a public vote at the end of a term. We will see your vote on our progress related to our Token Price.",
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
            width: '50%',
            height: '100%'
          }}>
          <Image src={Meteor} alt="Partner" />
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
