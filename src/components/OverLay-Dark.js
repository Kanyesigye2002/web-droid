import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { varFadeIn } from './animate';
import { Box } from '@mui/material';


const HeroOverlayStyle = {
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
};

function OverLay(props) {

  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box sx={HeroOverlayStyle}>
      <svg xmlns='http://www.w3.org/2000/svg' width='1440' height='1024' viewBox='0 0 1440 1024'>
        <defs>
          <radialGradient id='radial-gradient' cx='0.143' cy='1.115' r='1.095' gradientTransform='matrix(0.289, -0.913, -0.65, -0.407, 0.915, 1.516)' gradientUnits='objectBoundingBox'>
            <stop offset='0' stop-color="#161c24" stop-opacity='0.4' />
            <stop offset='0.499' stop-color="#161c24" stop-opacity='0.5' />
            <stop offset='1' stop-color="#161c24" stop-opacity='0.7' />
          </radialGradient>
        </defs>
        <path id='overlay' d='M0,0H1440V-1024H0Z' transform='translate(1440) rotate(180)' fill-rule='evenodd'
              fill='url(#radial-gradient)' />
      </svg>
    </Box>
  );
}

export default OverLay;