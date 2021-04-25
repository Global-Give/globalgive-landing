/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Container, Box} from 'theme-ui'
import TextFeature from 'components/text-feature'
import Image from 'components/image'

import SecurePaymentIllustration from 'assets/illustrations/SecurePayment.png'
import PaymentPattern from 'assets/payment-pattern.png'

const data = {
  subTitle: 'PAYMENT SECURITY',
  title: 'Secure Payment Transaction System with #1 Ranking',
  description:
    'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
  btnName: 'Learn More',
  btnURL: '#',
  btnNameTwo: 'How to buy',
  btnURLTwo: '#',
}

export default function SecurePayment() {
  return (
    <section
      sx={{
        variant: 'section.securePayment',
        background:
          'linear-gradient(0deg, rgba(29,31,41,1) 0%, rgba(23,25,33,1) 100%)',
      }}
      id='payment'
    >
      <Box sx={styles.bgOverlay} />
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={SecurePaymentIllustration} alt={data.title} />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            btnNameTwo={data.btnNameTwo}
            btnURLTwo={data.btnURLTwo}
          />
        </Box>
      </Container>
    </section>
  )
}

const styles = {
  bgOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: -1,
    width: [
      '100%',
      null,
      null,
      'calc(50% + 400px)',
      'calc(50% + 480px)',
      'calc(50% + 570px)',
      null,
      'calc(50% + 625px)',
    ],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    mb: -2,
    ml: [0, 0, null, null, 0],
    order: [2, null, null, 0],
    pr: [0, null, 0, 0],
    py: '30px',
  },
  contentBox: {
    width: ['100%', 420, 480, 380, 500, 570],
    mx: 'auto',
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    pt: [0, null, null, 4, '50px', null, 4, '80px'],
    pl: [0, null, null, 40, '90px'],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6],
  },
}
