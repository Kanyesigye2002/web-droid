import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled, useTheme } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, useMediaQuery } from '@mui/material';

//
import { varFadeIn, varWrapEnter, varFadeInRight } from '../../components/animate';
import Languages from '../../components/Languages';
import Lottie from 'react-lottie';
import animationData from '../../lotties/computer-work.json';
import animationData1 from '../../lotties/scroll-down-arrows.json';

import logo1 from '../../assets/languageIcons/logo-white.svg';
import logo2 from '../../assets/languageIcons/Logo3.svg';

import overLayLight from '../../assets/images/overlay-light.svg';
import overLayDark from '../../assets/images/overlay-dark.svg';

// ----------------------------------------------------------------------

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroImgStyle = styled((props) => <Stack {...props} />)(({ theme }) => ({
  top: 0,
  bottom: 0,
  zIndex: 8,
  opacity: 0.6,
  margin: 'auto',
  position: 'absolute',
  right: '2%',
  width: 'auto',
  height: '60vh'
}));

const ScrollImgStyle = styled((props) => <Stack {...props} />)(({ theme }) => ({
  bottom: 0,
  zIndex: 10,
  opacity: 0.6,
  margin: 'auto',
  position: 'absolute',
  width: '100%',
  height: '20vh'
}));

const HeroOverlayStyle = styled(motion.img)(({ theme }) => ({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
}));

// ----------------------------------------------------------------------

export default function LandingHero() {

  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;

  const RootStyle = styled(motion.div)(({ theme }) => ({
    position: 'relative',
    background: `${PRIMARY_MAIN}6C`,
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      position: 'fixed',
      alignItems: 'center'
    }
  }));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const scrollOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const isMobile = useMediaQuery(theme.breakpoints.up('md'));

  const lottieSize = isMobile ? 600 : 300;

  const overLayTheme = theme.palette.mode === 'light';

  return (
    <>
      <RootStyle initial='initial' animate='animate' variants={varWrapEnter}>

        <HeroOverlayStyle alt='overlay' src={overLayTheme ? overLayLight : overLayDark} variants={varFadeIn}
                          xs={{ opacity: 0.4 }} />

        <HeroImgStyle>
          <Lottie options={defaultOptions} height={lottieSize} width={lottieSize} />
        </HeroImgStyle>

        {isMobile && <ScrollImgStyle><Lottie options={scrollOptions} height={200} width={200} /></ScrollImgStyle>}

        <Container maxWidth='lg'>
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant='h2' sx={{ color: 'common.white' }}>
                Welcome <br /> to
                <Typography component='span' variant='h1' sx={{ color: 'primary.main' }}>
                  &nbsp;Web Droid
                </Typography>
              </Typography>
            </motion.div>

            {isMobile && <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white' }}>
                This is the kick off of your business based on perfectly designed web apps, desktop, mobile and more
                technology solutions © Web Droid.
              </Typography>
            </motion.div>}

            <Stack
              component={motion.div}
              variants={varFadeInRight}
              direction='row'
              spacing={1}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <img alt='sketch icon' src={logo2} width={20} height={20} />

              <Link
                underline='always'
                to='products'
                color='common.white'
                sx={{ typography: 'body2' }}
              >
                Check out our Projects
              </Link>
            </Stack>

            <motion.div variants={varFadeInRight}>
              <Button
                size='medium'
                variant='contained'
                component={RouterLink}
                to={'/coming-soon'}
                startIcon={<img alt='sketch icon' src={logo1} width={20} height={20} />}
              >
                Check out out school management system
              </Button>
            </motion.div>

            <Languages />

          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
