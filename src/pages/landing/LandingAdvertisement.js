import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Button, Box, Container, Typography } from '@mui/material';
//
import { varFadeInDown, varFadeInUp, MotionInView } from '../../components/animate';

import Lottie from 'react-lottie';
import animationData from '../../lotties/data-in-move.json';
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  paddingBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    paddingBottom: 0,
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Container maxWidth="lg">
      <ContentStyle>
        <MotionInView
          variants={varFadeInUp}
          sx={{
            py: { xs: 3, md: 3 }
          }}
        >
          <motion.div animate={{ y: [-20, 0, -20] }} transition={{ duration: 4, repeat: Infinity }}>
            <Lottie options={defaultOptions} height={300} width={300} />
          </motion.div>
        </MotionInView>

        <Box
          sx={{
            pl: { md: 10 },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 5 }}>
            <Typography variant="h2">
              Get started with
              <br /> Web Droid today
            </Typography>
          </MotionInView>
          <MotionInView variants={varFadeInDown}>
            <Button
              size="large"
              variant="contained"
              component={RouterLink}
              to={'/contact-us'}
              sx={{
                whiteSpace: 'nowrap',
                boxShadow: (theme) => theme.customShadows.z8,
                color: (theme) => theme.palette.getContrastText(theme.palette.common.white),
                bgcolor: 'common.white',
                '&:hover': { bgcolor: 'grey.300' }
              }}
            >
              Hire Us Now
            </Button>
          </MotionInView>
        </Box>
      </ContentStyle>
    </Container>
  );
}
