import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import roundArrowRightAlt from '@iconify/icons-ic/round-arrow-right-alt';
// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, LinearProgress } from '@mui/material';
// utils
import { fPercent } from '../../utils/formatNumber';
import mockData from '../../utils/mock-data';
//
import { MHidden } from '../../components/@material-extend';
import { varFadeInUp, varFadeInRight, MotionInView } from '../../components/animate';

import image1 from '../../assets/images/what_1.jpg'
import image2 from '../../assets/images/what_2.jpg'

// ----------------------------------------------------------------------

const LABEL = ['Marketing', 'Development', 'Design'];

const MOCK_SKILLS = [...Array(3)].map((_, index) => ({
  label: LABEL[index],
  value: mockData.number.percent(index)
}));


const SKILLS = [
  {
    label: 'Web Development',
    value: 96.8
  },
  {
    label: 'React JS',
    value: 95.4
  },
  {
    label: 'Java & Spring Boot',
    value: 85.7
  },
  {
    label: 'Kotlin',
    value: 89.7
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(20),
    paddingBottom: theme.spacing(10),
    textAlign: 'left'
  },
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(3)
}));

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number
  })
};

function ProgressItem({ progress }) {
  const { label, value } = progress;
  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant='subtitle2'>{label}&nbsp;-&nbsp;</Typography>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant='determinate'
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' }
        }}
      />
    </Box>
  );
}

export default function AboutWhat() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <MHidden width='mdDown'>
            <Grid container spacing={3} alignContent='flex-end' alignItems='flex-end' item xs={12} md={6} lg={7}
                  sx={{ pr: { md: 7 } }}>
              <Grid item xs={6}>
                <MotionInView variants={varFadeInUp}>
                  <Box
                    component='img'
                    src={image1}
                    sx={{
                      borderRadius: 2,
                      boxShadow: shadow
                    }}
                  />
                </MotionInView>
              </Grid>
              <Grid item xs={6}>
                <MotionInView variants={varFadeInUp}>
                  <Box component='img' src={image2} sx={{ borderRadius: 2 }} />
                </MotionInView>
              </Grid>
            </Grid>
          </MHidden>

          <Grid item xs={12} md={6} lg={5}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant='h2' sx={{ mb: 3 }}>
                What is Web Droid?
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
                }}
              >
                Web Droid is a bridge between business needs and the world of IT solutions. We see ourselves as
                trusted solutions partner. We understand your needs, Identify-Integrate-Support High quality, affordable
                IT Solutions in Software, Systems and Web Development Services.
              </Typography>
            </MotionInView>

            <Box sx={{ my: 5 }}>
              {SKILLS.map((progress) => (
                <MotionInView key={progress.label} variants={varFadeInRight}>
                  <ProgressItem progress={progress} />
                </MotionInView>
              ))}
            </Box>

          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
