import React, { useContext } from 'react';
import { Button} from 'theme-ui'
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoReddit,
  IoLogoYoutube
} from 'react-icons/io5';
import menuItems from './header.data';

const social = [
  {
    path: 'https://www.twitter.com/globalgivetoken',
    Icon: IoLogoTwitter,
  },
  {
    path: 'https://www.instagram.com/globalgivetoken/',
    Icon: IoLogoInstagram,
  },
  {
    path: 'https://www.reddit.com/r/globalgive/',
    Icon: IoLogoReddit,
  },
  {
    path: 'https://www.youtube.com/channel/UCOv_Op-b4KWOcubauyYjg-g',
    Icon: IoLogoYoutube,
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            <a
              activeclass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}     
              href="https://pdfhost.io/v/gF29NitGV_GlobalGive_Whitepaper.pdf"
              rel="noopener noreferrer"
              target="_blank"
              sx={styles.item}
              style={{'color': '#fff', 'text-decoration': 'none'}}
            >
              Whitepaper
            </a>
            <a
              activeclass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/charities"
              sx={{
                color: "#fff",
                textDecoration: "none",
              }}
              style={{'color': '#fff', 'text-decoration': 'none'}}
            >
              Charities
            </a>
            {menuItems.map(({ path, label }, i) => (
              <Link
                onClick={toggleHandler}
                activeclass="active"
                href='/#'
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                style={{'color': '#fff', 'text-decoration': 'none'}}
              >
                {label}
              </Link>
            ))}
             <a
              activeclass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href="/latestNews"
              sx={{
                color: "#fff",
                textDecoration: "none",
              }}
              style={{'color': '#fff', 'text-decoration': 'none'}}
            >
              Latest News
            </a>
            <a href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x60e9880daef10e960da3c45b076dbdac4f111edf'
              target='_blank' 
              rel='noopener noreferrer'
              sx={{
                height: "min-content"
              }}
            >
              <Button
                className='donate__btn'
                variant='secondary'
                aria-label='Buy'
                sx={{
                  marginTop: '20px',
                }}
              >
                Buy $GGIVE
              </Button>
            </a>
          </Box>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, Icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <a 
                    href={path}
                    rel="noopener noreferrer"
                    target="_blank"
                    sx={{
                      color: '#fff',
                      textDecoration: 'none'
                    }}
                  >
                    <Icon style={{
                      'color': 'grey'
                    }} />
                  </a>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  item: {
    color: '#fff',
    textDecoration: 'none'          
  },
  handler: {
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    cursor: 'pointer',
    display: ['flex', 'flex', 'flex', 'flex', 'flex', 'none'],
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    ".donate__btn": {
      mr: 0,
      ml: 0,
      borderColor: 'primary',
      color: 'primary',
      width: "100%",
      '&:hover': {
        boxShadow: 'rgba(0, 211, 186, 0.37) 0px 9px 20px -5px',
        backgroundColor: 'primary',
        color: '#fff',
      },
    },
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '20px',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: '#fff',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};

export default MobileDrawer;
