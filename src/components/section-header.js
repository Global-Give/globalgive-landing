import React from 'react'
import {Box, Text, Heading} from 'theme-ui'

export default function SectionHeader({title, slogan, isWhite}) {
  return (
    <Box sx={{variant: 'sectionHeader'}}>
      <Heading
        as='h2'
        sx={{
          
         // background: 'linear-gradient(180deg, #5A82F6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(91.34deg, #2698EA 11.48%, #FFB176 53.97%, #ED5158 100.98%)',
         background:'white', 
         backgroundClip: 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': '#0000',
          // color: isWhite ? 'white' : 'heading_secondary',
          variant: 'sectionHeader.title',
          fontSize: [
            '24px',
            null,
            '28px',
            '32px',
            '36px',
            '42px',
            null,
            '46px',
          ],
          lineHeight: [1.35, null, null, 1.3, 1.2],
          fontWeight: '700',
          letterSpacing: '-.5px',
          mb: 5,
        }}
      >
        {title}
      </Heading>
      <Text
        as='p'
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? '#00d3ba' : 'heading',
          opacity: isWhite ? 0.7 : 1,
        }}
      >
        {slogan}
      </Text>
    </Box>
  )
}

// const styles = {
//   title: {},
// }
