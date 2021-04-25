/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx, Heading, Box, Container, Text, Button, Grid, IconButton, Image } from 'theme-ui';
import { IoLogoFacebook, IoLogoInstagram, IoLogoReddit } from 'react-icons/io5';
import { Link } from 'components/link';
import menuItems from './footer.data';
import GlobalGiveLogo from 'assets/logos/gg_icon.svg';
import Logo from 'components/logo';
export default function Footer() {
  return (
    <footer sx={styles.footer} id="payment">
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          <Box sx={styles.footer.menus} css={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem'
          }} >
            <Image src={GlobalGiveLogo} sx={{
              height: '100px'
            }} />
            <Text as="h2" sx={{
              color: 'white'
            }} >
              GlobalGive
            </Text>
          </Box>
          <Box sx={styles.footer.menus}>
            <Heading sx={styles.footer.heading}>
              CONTACT US
            </Heading>
            <Heading as="h1" sx={{
              color: 'white',
              fontSize: '2rem',
              fontFamily: "'Jost', 'DM Sans'"
            }}>
              We are on social media
            </Heading>
            <Grid py="8px" gap={1} columns={[6, 6, 6, 6, 6]} >
              <Box sx={styles.socialIconContainer} >
                <a href="https://www.reddit.com/r/globalgive/" target="_blank" rel="noopener noreferrer" >
                  <IconButton sx={styles.socialButton}>
                    <IoLogoReddit sx={styles.socialIcon} />
                  </IconButton>
                </a>
              </Box>
              <Box sx={styles.socialIconContainer} >
                <a href="https://www.reddit.com/r/globalgive/" target="_blank" rel="noopener noreferrer" >
                  <IconButton sx={styles.socialButton}>
                    <IoLogoInstagram sx={styles.socialIcon} />
                  </IconButton>
                </a>
              </Box>
              <Box sx={styles.socialIconContainer} >
                <a href="https://www.reddit.com/r/globalgive/" target="_blank" rel="noopener noreferrer" >
                  <IconButton sx={styles.socialButton}>
                    <IoLogoFacebook sx={styles.socialIcon} />
                  </IconButton>
                </a>
              </Box>
            </Grid>
          </Box>
          <Box sx={styles.footer.menus} css={{
            justifyContent: 'center',
            alignItems: 'center'
          }} >
            <a href="https://t.me/globalgivetokencommunity" target="_blank" rel="noopener noreferrer">
              <Button variant="accentButton" sx={{
                width: 'max-content',
                marginLeft: '10%'
              }}>
                Join Telegram
              </Button>
            </a>
          </Box>
          {/* {menuItems.map(({ header, items }, i) => (
            <Box sx={styles.footer.menus} key={i}>
              <Heading sx={styles.footer.heading}>{header}</Heading>
              <nav>
                {items.map(({ path, label }, i) => (
                  <Link
                    path={path}
                    key={i}
                    label={label}
                    sx={styles.footer.link}
                  />
                ))}
              </nav>
            </Box>
          ))} */}
        </Box>
      </Container>
      {/* <Text sx={styles.footer.copyright}>
        All right reserved - Design & Developed by
        <Link path="https://redq.io/" target="_blank">
          The GlobalGive Organization
        </Link>
      </Text> */}
    </footer>
  );
}

const styles = {
  socialIconContainer: {
    backgroundColor: 'dark',
    width: 'min-content',
    borderRadius: '50%'
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
    },
    footerTopArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      flexWrap: 'wrap',
      pt: [7, null, 8],
      pb: ['10px', null, null, '20px'],
      px: [5, null, null, null, 4],
      alignItems: 'center',
      justifyContent: 'center'
    },
    menus: {
      width: [, null, null, '33%'],
      display: 'flex',
      flexDirection: 'column',
      mb: ['40px', null, null, '60px'],
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
