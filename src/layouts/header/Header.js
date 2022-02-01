import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Button, AppBar, Divider, Container } from '@mui/material';
// hooks
import { useOffSetTop, useResponsive } from '../../hooks';
// components
import { Logo } from '../../components';
//
import LanguagePopover from './LanguagePopover';
import { NavMobile, NavDesktop } from '../nav';
import { ToolbarStyle, ToolbarShadowStyle } from './HeaderToolbarStyle';
import AccountPopover from './AccountPopover';
import useAuth from '../../hooks/useAuth';

// ----------------------------------------------------------------------

const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'Contact Us', path: '/contact-us' },
];

const MENU_OPTIONS = [
  { title: 'Home', path: '/' },
  {
    title: 'Account',
    path: '/user/account',
  },
  {
    title: 'Results',
    path: '/user/results',
  },
  {
    title: 'Calendar',
    path: '/user/calendar',
  },
  { title: 'Contact Us', path: '/contact-us' },
];

// ----------------------------------------------------------------------

Header.propTypes = {
  transparent: PropTypes.bool,
};

export default function Header({ transparent }) {
  const { isAuthenticated, isInitialized } = useAuth();
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'md');

  const isLight = theme.palette.mode === 'light';

  const isScrolling = useOffSetTop(96);

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle disableGutters transparent={transparent} scrolling={isScrolling}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Box sx={{ lineHeight: 0, position: 'relative' }}>
            <Logo onDark={transparent && !isScrolling} />
          </Box>

          {isDesktop && (
            <NavDesktop
              isScrolling={isScrolling}
              isTransparent={transparent}
              navConfig={isAuthenticated ? MENU_OPTIONS : navConfig}
            />
          )}

          <Box sx={{ flexGrow: 1 }} />

          <Stack spacing={2} direction='row' alignItems='center'>

            <LanguagePopover />

            {isInitialized && (<>
              {isAuthenticated ?
                <AccountPopover />
                :
                <>
                  <Divider orientation='vertical' sx={{ height: 24 }} />
                  {isDesktop && (
                    <Stack direction='row' spacing={1}>
                      <NextLink href='/login' prefetch={false}>
                        <Button
                          color='inherit'
                          variant='outlined'
                          sx={{
                            ...(transparent && {
                              color: 'common.white',
                            }),
                            ...(isScrolling && isLight && { color: 'text.primary' }),
                          }}
                        >
                          Login
                        </Button>
                      </NextLink>
                      <NextLink href='/register' prefetch={false}>
                        <Button variant='contained'>
                          Register
                        </Button>
                      </NextLink>
                    </Stack>
                  )}
                </>
              }
            </>)}
          </Stack>

          {!isDesktop && (
            <NavMobile
              navConfig={navConfig}
              sx={{
                ml: 1,
                ...(isScrolling && { color: 'text.primary' }),
              }}
            />
          )}
        </Container>
      </ToolbarStyle>

      {isScrolling && <ToolbarShadowStyle />}
    </AppBar>
  );
}
