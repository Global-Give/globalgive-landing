/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx, Heading, Box, Container, Text, Button } from 'theme-ui';
import { Link } from 'components/link';
import menuItems from './footer.data';
export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          <Box sx={styles.footer.menus}>

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
          </Box>
          <Box sx={styles.footer.menus}>
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
      px: [0, null, null, null, 4],
      alignItems: 'center',
      justifyContent: 'center'
    },
    menus: {
      width: ['50%', null, null, '33%'],
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
