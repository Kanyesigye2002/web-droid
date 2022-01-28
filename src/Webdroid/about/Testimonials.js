import PropTypes from 'prop-types';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Paper, Rating, Container, Typography, useMediaQuery } from '@mui/material';
//
import { varFade } from '../../components';

import image from '../../assets/images/testmonials1440x840.jpg'
import { m } from 'framer-motion';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: 'Glorious Church',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `The Website really looks great and all that new technologies its a break through for our business and we are great full`
  },
  {
    name: 'Cody Fisher',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `It's a perfect School Management System and we are really liking the product . We've done some things, like migrate to the cloud storage to fit in perfectly. The team did a really good job.`
  },
  {
    name: 'Darrell Steward',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Amazing, really perfect code quality and gives all the security one needs for assurance.`
  },
  {
    name: 'Jacob Jones',
    rating: 5,
    dateCreate: 'April 19, 2021',
    content: `Greatest support team on the go. Fastest replies and solutions especially with there phone numbers. All in all perfect work!`
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  backgroundSize: 'cover',
  backgroundImage: `linear-gradient(to right, ${alpha(theme.palette.grey[900], 0.95)} , ${alpha(
    theme.palette.grey[900],
    0.95
  )}), url(${image})`,
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 840,
    overflow: 'hidden'
  }
}));

// ----------------------------------------------------------------------

TestimonialCard.propTypes = {
  testimonial: PropTypes.object
};

function TestimonialCard({ testimonial }) {
  const { name, rating, dateCreate, content } = testimonial;
  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: 'common.white',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)', // Fix on Mobile
        bgcolor: (theme) => alpha(theme.palette.common.white, 0.04)
      }}
    >
      <Typography variant='subtitle1' gutterBottom>
        {name}
      </Typography>
      <Typography gutterBottom component='p' variant='caption' sx={{ color: 'grey.500' }}>
        {dateCreate}
      </Typography>
      <Rating value={rating} readOnly size='small' />
      <Typography variant='body2' sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}

export default function Testimonials() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <RootStyle>
      <Container maxWidth='lg' sx={{ position: 'relative', height: '100%' }}>
        <Grid
          container
          spacing={3}
          alignItems='center'
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: '100%' }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <m.div variants={varFade().inUp}>
                <Typography component='p' variant='overline' sx={{ mb: 2, color: 'text.secondary' }}>
                  Testimonials
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant='h2' sx={{ mb: 3, color: 'common.white' }}>
                  Who love <br />
                  our work
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white' }}>
                  We are on a mission to create a space that respects failures just as much as it celebrates success, so
                  that people can defy their own expectations.
                  <br />
                  A space where ideas for tomorrow hit the ground running, today. A space that values its people and
                  serves with pride. A space to dream, imagine, think, design, create and execute.
                </Typography>
              </m.div>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{
              right: { md: 24 },
              position: { md: 'absolute' }
            }}
          >
            <Grid container spacing={isDesktop ? 3 : 0} alignItems='center'>
              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <m.div variants={varFade().inUp} key={testimonial.name}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <m.div variants={varFade().inUp} key={testimonial.name}>
                    <TestimonialCard testimonial={testimonial} />
                  </m.div>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
