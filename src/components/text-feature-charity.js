/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx, Box, Heading, Text, Button, Link} from 'theme-ui'

export default function TextFeatureCharity({
  subTitle,
  title,
  paragraph,
  description,
  
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Text as='p' sx={styles.wrapper.subTitle}>
          {subTitle}
        </Text>
        <Heading as='h2' sx={styles.wrapper.title}>
          {title}
        </Heading>
        <Text as='p' sx={styles.wrapper.paragraph}>
          {paragraph}
        </Text>
      </Box>

      {description && (
        <Text as='p' className='description' sx={styles.description}>
          {description}
        </Text>
      )}
      
    </Box>
  )
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: ['24px', null, '28px', '32px', '36px', '42px', null, '46px'],
      color: 'orangutan',
      lineHeight: [1.35, null, null, 1.3, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
    },
    paragraph:{
      fontSize: [0, null, '17px'],
      color: 'jungleGreen',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, null, null, null, 3],
      lineHeight: 1.6,
    },
    subTitle: {
      fontSize: [0, null, '14px'],
      color: 'heading',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, null, null, null, 3],
      lineHeight: 1.5,
    },
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px',
  },
}
