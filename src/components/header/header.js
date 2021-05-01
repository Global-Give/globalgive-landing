/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx, Container, Flex, Button, Text, Image} from 'theme-ui'
import {keyframes} from '@emotion/react'
import {Link} from 'react-scroll'
import Logo from 'components/logo'
import LogoDark from 'assets/logo-dark.svg'
import GlobalGiveLogo from 'assets/logos/gg_icon.svg'

import LogoWhite from 'assets/logo.svg'
import {DrawerProvider} from '../../contexts/drawer/drawer.provider'
import MobileDrawer from './mobile-drawer'
import menuItems from './header.data'

export default function Header({className}) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id='header'>
        <Container sx={styles.container}>
          <div
            sx={{
              display: 'block',
              margin: '0 auto',
            }}
          >
           <a href='#home'> <Image
              src={GlobalGiveLogo}
              sx={{
                height: '115px'
              }}
            /> </a>
            <Text
              as='h2'
              sx={{
                display: 'none',
                '@media screen and (min-width: 768px)': {
                  display: 'block',
                },
              }}
            >
            </Text>
          </div>
          <Flex as='nav' sx={styles.nav}>
            <a
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href='https://pdfhost.io/v/GNoFVV13X_GlobalGive_Whitepaper.pdf'
              rel='noopener noreferrer'
              target='_blank'
              sx={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Whitepaper
            </a>
            <a
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              href='https://bscscan.com/token/0x60e9880daef10e960da3c45b076dbdac4f111edf'
              rel='noopener noreferrer'
              target='_blank'
              sx={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Contract Address
            </a>
            {menuItems.map(({path, label, rest}, i) => (
              <Link
                activeClass='active'
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                {...rest}
              >
                {label}
              </Link>
            ))}
            <a href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x60e9880daef10e960da3c45b076dbdac4f111edf' target='_blank' rel='noopener noreferrer'>
            <Button
              className='donate__btn'
              variant='secondary'
              aria-label='Buy'
              sx={{
                opacity: 0.5,
                pointerEvents: 'none',
              }}
            >
              Buy $GGIVE
            </Button>
            </a>
          </Flex>
         
          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  )
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`

const styles = {
  header: {
    color: 'white',
    fontWeight: 'normal',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.5s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      borderColor: 'primary',
      color: 'primary',
      '&:hover': {
        boxShadow: 'rgba(0, 211, 186, 0.37) 0px 9px 20px -5px',
        backgroundColor: 'primary',
        color: 'white',
      },
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#FFFFFF', // This modifies the nav links colors
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
      '.donate__btn': {
        borderColor: 'primary',
        color: 'primary',
        '&:hover': {
          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
          backgroundColor: 'primary',
          color: 'white',
        },
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: ['none', 'none', 'none', 'none', 'none', 'block'],
    a: {
      fontSize: '16px',
      fontWeight: '400',
      px: 25,
      cursor: 'pointer',
      lineHeight: '1.2',
      '&.active': {
        color: 'primary',
      },
    },
  },
}
