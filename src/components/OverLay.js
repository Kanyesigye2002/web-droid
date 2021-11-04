import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { varFadeIn } from './animate';
import { Box } from '@mui/material';
import useSettings from '../hooks/useSettings';

const HeroOverlayStyles = styled(motion.img)({
  zIndex: 9,
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
  position: 'absolute',
});

function OverLay(props) {

  const theme = useTheme();

  const { themeMode } = useSettings();

  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;


  const HeroOverlayStyle = {
    zIndex: 9,
    width: '100vw',
    height: '100vh',
    maxWidth: '100vw',
    maxHeight: '100vw',
    objectFit: 'cover',
    position: 'absolute',
    opacity: 0.2,
    background: `radial-gradient(circle at right top, ${PRIMARY_LIGHT} 0%,  ${PRIMARY_MAIN} 62%,  ${PRIMARY_DARK} 100%)`
  };


  const HeroOverlayStyleq = {
    zIndex: 9,
    width: '100vw',
    height: '100vh',
    maxWidth: '100vw',
    maxHeight: '100vw',
    objectFit: 'cover',
    position: 'absolute',
    opacity: 1,
    background: `radial-gradient(circle at right top, #161c244C 0%,  #161c2490 62%,  #161c24 100%)`
  };

  const color = 'rgba(22,28,36,0.56)'

  return (
    <>
      <Box sx={HeroOverlayStyleq} variants={varFadeIn}/>
    <Box sx={HeroOverlayStyle} variants={varFadeIn}/>
      {/*<svg height="1024" viewBox="0 0 1440 1024" width="1440" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">*/}
      {/*  <defs>*/}
      {/*    <radialGradient id='radial-gradient' cx='0.143' cy='1.115' r='1.095' gradientTransform='matrix(0.289, -0.913, -0.65, -0.407, 0.915, 1.516)' gradientUnits='objectBoundingBox'>*/}
      {/*      <stop offset='0' stopColor={PRIMARY_LIGHT} stopOpacity='0.2' />*/}
      {/*      <stop offset='0.499' stopColor={PRIMARY_MAIN} stopOpacity='0.3' />*/}
      {/*      <stop offset='1' stopColor={PRIMARY_DARK} stopOpacity='0.4' />*/}
      {/*    </radialGradient>*/}
      {/*    <radialGradient id='radial-gradient1' cx="14.340549%" cy="-11.486891%"*/}
      {/*                    gradientTransform="matrix(.28937714 .91345637 -.64956887 .40693667 .027292 -.199119)"*/}
      {/*                    r="109.474303%">*/}
      {/*      <stop offset='0' stopColor='#161c24' stopOpacity='0.3' />*/}
      {/*      <stop offset='0.499' stopColor='#161c24' stopOpacity='0.5' />*/}
      {/*      <stop offset='1' stopColor='#161c24' stopOpacity='0.7' />*/}
      {/*    </radialGradient>*/}
      {/*    <radialGradient id='radial-gradient2' cx="14.340549%" cy="-11.486891%"*/}
      {/*                    gradientTransform="matrix(.28937714 .91345637 -.64956887 .40693667 .027292 -.199119)"*/}
      {/*                    r="109.474303%">*/}
      {/*      <stop offset='0' stopColor='#161c24' stopOpacity='0.4' />*/}
      {/*      <stop offset='0.499' stopColor='#161c24' stopOpacity='0.8' />*/}
      {/*      <stop offset='1' stopColor='#161c24' stopOpacity='1' />*/}
      {/*    </radialGradient>*/}
      {/*  </defs>*/}
      {/*  {themeMode === 'light' ? <>*/}
      {/*    <path d="m0 0h1440v1024h-1440z" fill="url(#radial-gradient)" fillRule="evenodd" transform="matrix(-1 0 0 1 1440 0)"/>*/}
      {/*    <path d="m0 0h1440v1024h-1440z" fill="url(#radial-gradient1)" fillRule="evenodd" transform="matrix(-1 0 0 1 1440 0)"/>*/}
      {/*  </> : <>*/}
      {/*    <path d="m0 0h1440v1024h-1440z" fill="url(#radial-gradient2)" fillRule="evenodd" transform="matrix(-1 0 0 1 1440 0)"/>*/}
      {/*  </>*/}
      {/*  }*/}
      {/*</svg>*/}
    </>
  );
}

export default OverLay;