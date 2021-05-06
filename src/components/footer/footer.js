/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx, Heading, Box, Container, Text, Button, Grid, IconButton, Image, Alert } from 'theme-ui';
import { IoLogoTwitter, IoLogoInstagram, IoLogoReddit } from 'react-icons/io5';
import { Link } from 'components/link';
import menuItems from './footer.data';
import GlobalGiveLogo from 'assets/logos/gg_icon.svg';
import Logo from 'components/logo';
export default function Footer() {
  return (
    <footer sx={styles.footer} id="payment">
      <Container sx={styles.footer.container}>
        
          <Box sx={styles.footer.menus} css={{flexDirection: 'row',
                                              justifyContent: 'center',
                                              alignItems: 'center',
                                              padding: '1.5rem'
                                            }} >                  
            <a href='#home'>
              <Image src={GlobalGiveLogo} sx={{ height: '100px' }} /> 
            </a>
            <a href='#home'>
              <Text as="h2" sx={{ color: 'white' }} > GlobalGive
              </Text>
            </a>
          </Box>
          <Box sx={styles.footer.menus}>
           
            <Heading as="h1" sx={{color: 'white',
                                  fontSize: '1.5rem',
                                  textAlign: 'center',
                                  fontFamily: "'Jost', 'DM Sans'"
                                }}>
              We are on social media
            </Heading>
            <Grid py="10px" columns={[3, 3, 3]}  >
              <Box sx={styles.socialIconContainer} >
                <a href="https://www.reddit.com/r/globalgive/" target="_blank" rel="noopener noreferrer" >
                  <IconButton sx={styles.socialButton}>
                    <IoLogoReddit sx={styles.socialIcon} />
                  </IconButton>
                </a>
              </Box>
              <Box sx={styles.socialIconContainer} >
                <a href="https://www.instagram.com/globalgivetoken/" target="_blank" rel="noopener noreferrer" >
                  <IconButton sx={styles.socialButton}>
                    <IoLogoInstagram sx={styles.socialIcon} />
                  </IconButton>
                </a>
              </Box>
              <Box sx={styles.socialIconContainer} >
                <a href="https://www.twitter.com/globalgivetoken" target="_blank" rel="noopener noreferrer" >
                  <IconButton sx={styles.socialButton}>
                    <IoLogoTwitter sx={styles.socialIcon} />
                  </IconButton>
                </a>
              </Box>
            </Grid>
          </Box>
          <Box sx={styles.footer.menus} css={{ justifyContent: 'center', alignItems: 'center' }} >
            <a href="https://t.me/globalgivetokencommunity" target="_blank" rel="noopener noreferrer">
              <Button variant="accentButton" sx={{ width: 'max-content', marginLeft:'20px',
                                                  '@media screen and (max-width: 1215px)': {
                                                    fontSize: '15px',
                                                    width: '250px',
                                                  },}}>
                Join Us on Telegram
              </Button>
            </a>
          </Box>         
          <Box>
          <p>globalgive.finance © 2021 All rights reserved</p>  
          </Box>                                        
      </Container>
      <Container sx={styles.footer.secondcontainer}>
        
        <span class="disclaimer"><a href="#" sx={{color:'crimson'}}>IMPORTANT DISCLAIMER:</a></span>
        <span class="text-lite text-xs">The content of this website and any documents are provided for educational and informational purposes only. It is not intended to be and does not 
            constitute financial, investment or trading advice of any kind. YOu shouldn't make any decisions as to finances, investing, trading or anything else 
            based on this information without undertaking independent due diligence. Trading of Bitcoin and Altcoins have potential risks involved. Anyone wishing 
            to invest should seek their own financial advice.</span>
        
      </Container>
      
    </footer>
  );
}

const styles = {
  socialIconContainer: {
    backgroundColor: 'dark',
    //width: 'min-content',
    borderRadius: '30%',
    display: 'block',
    margin: '0 auto'
  },
  socialIcon: {
    color: 'white'
  },
  socialButton: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  footer: {
    backgroundColor: 'background_secondary',
    container: {
      width: '100%',
      alignItems: 'stretch',    
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      flexWrap: 'wrap',
      pt: [7, null, 8],
     // pb: ['10px', null, null, '20px'],
      px: [5, null, null, null, 4],
      alignItems: 'center',
      justifyContent: 'center'
    },
    secondcontainer: {
      width: '100%',
      alignItems: 'stretch',    
      borderTop: '1px solid',
      borderTopColor: 'muted',
      display: 'flex',
      flexWrap: 'wrap',
      textAlign:'center',
     // pt: [7, null, 8],
      pb: ['10px', null, null, '20px'],
      px: [5, null, null, null, 4],
      alignItems: 'center',
      justifyContent: 'center'
    },
    menus: {
      width: [ null, null, '33.3%'],
      display: 'flex',
      flexDirection: 'column',
      mb: ['30px', null, null, '50px'],
    },

    heading: {
      fontSize: [3, null, null, 4],
      background: 'linear-gradient(180deg, #5A82F6 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(91.34deg, #2698EA 11.48%, #FFB176 53.97%, #ED5158 100.98%)',
      fontWeight: '500',
      fontFamily: "'Poppins', 'DM Sans'",
      mb: [3, 4, 5, null, 6],
      lineHeight: '1.35',
      backgroundClip: 'text',
	    '-webkit-background-clip': 'text',
	    '-webkit-text-fill-color': '#0000',
      width: 'max-content'
    },

    link: {
      fontSize: ['14px', null, 1],
      color: 'text',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, null, 1.6, 1.8],
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
    copyright: {
      fontSize: ['14px', null, 1],
      width: '100%',
      textAlign: 'center',
      p: ['0px 10px'],
      color: 'text',
      a: {
        textDecoration: 'none',
        color: 'inherit',
        pl: 1,
        transition: 'all 0.25s',
        '&:hover': {
          color: 'primary',
        },
      },
    },
  },
};
