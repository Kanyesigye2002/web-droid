
import { motion } from 'framer-motion';
// material
import { styled, useTheme } from '@mui/material/styles';
import { Box, Container, Stack, useMediaQuery } from '@mui/material';
//
import {
  varFadeIn,
  varFadeInUp,
  varWrapEnter,
  varFadeInRight,
  TextAnimate,
} from '../../components/animate';

import Lottie from 'react-lottie';
import animationData from '../../lotties/website-faq.json';
import animationData1 from '../../lotties/scroll-down-arrows.json';
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

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const ScrollImgStyle = styled((props) => <Stack {...props} />)(({ theme }) => ({
  bottom: 0,
  zIndex: 10,
  opacity: 0.6,
  margin: 'auto',
  position: 'absolute',
  width: '100%',
  height: '20vh'
}));

const HeroImgStyle = styled((props) => <Stack {...props} />)(({ theme }) => ({
  top: 0,
  bottom: 0,
  zIndex: 8,
  opacity: 0.6,
  margin: 'auto',
  position: 'absolute',
  right: '8%',
  width: 'auto',
  height: '60vh'
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
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const scrollOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
  };

  const isMobile = useMediaQuery(theme.breakpoints.up('md'));

  const lottieSize = isMobile ? 400 : 200;

  const overLayTheme = theme.palette.mode === 'light'

  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>

        <HeroOverlayStyle alt="overlay" src={overLayTheme ? overLayLight: overLayDark} variants={varFadeIn} xs={{opacity: 0.4}}/>

        <HeroImgStyle>
          <Lottie options={defaultOptions} height={lottieSize} width={lottieSize} />
        </HeroImgStyle>

        {isMobile && <ScrollImgStyle><Lottie options={scrollOptions} height={200} width={200} /></ScrollImgStyle>}

        <Container maxWidth="lg">
          <ContentStyle>
            <TextAnimate text="How" sx={{ color: 'primary.main' }} variants={varFadeInRight} />
            <br />
            <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
              <TextAnimate text="can" sx={{ mr: 2 }} />
              <TextAnimate text="we" sx={{ mr: 2 }} />
              <TextAnimate text="help" sx={{ mr: 2 }} />
              <TextAnimate text="you?" />
            </Box>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}