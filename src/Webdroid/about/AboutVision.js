// material
import { Box, Container, Typography, Grid } from '@mui/material';
//
import { varFadeInUp, varFadeIn, MotionInView, varFadeInDown } from '../../components/animate';

// ----------------------------------------------------------------------

export default function AboutVision() {
  return (
    <Container maxWidth='lg' sx={{ mt: 5 }}>
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <MotionInView variants={varFadeInDown}>
            <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary', textAlign: 'center' }}>
              Our Vision
            </Typography>
          </MotionInView>
        </Grid>
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h3"
              sx={{
                mb: 5,
                mx: 'auto',
                maxWidth: 830, textAlign: 'center',
                color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white')
              }}
            >
              Provide an opportunity for growth, inspire excellence, value people and serve with pride.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
