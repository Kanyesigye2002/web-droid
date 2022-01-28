// material
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Button } from '@mui/material';
// components
import Page from '../../components/Page';
import { varFade } from '../../components';
import PricingPlans from './PricingPlans';
import { m } from 'framer-motion';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Pricing() {
  return (
    <RootStyle title='Pricing | Web-Droid'>
      <Container maxWidth='lg'>
        <Typography variant='h3' align='center' paragraph>
          Flexible plans for your all Businesses
        </Typography>
        <Typography align='center' sx={{ color: 'text.secondary' }}>
          Choose your plan and make modern online conversation magic
        </Typography>

        <PricingPlans/>

        <m.div variants={varFade().in}>
          <Box sx={{ p: 5, mt: 10, textAlign: 'center' }}>
            <m.div variants={varFade().inDown}>
              <Typography variant='h3'>Still have questions?</Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Please describe your case to receive the most accurate advice.
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Button
                size='large'
                variant='contained'
                href='mailto:kanyeallan@gmail.com?subject=[Feedback] from Customer'
              >
                Contact us
              </Button>
            </m.div>
          </Box>
        </m.div>
      </Container>
    </RootStyle>
  );
}
