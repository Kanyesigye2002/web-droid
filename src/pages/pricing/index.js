// material
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Button } from '@mui/material';
// components
import Page from '../../components/Page';
import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../../assets';
import { MotionInView, varFadeIn, varFadeInDown, varFadeInUp } from '../../components/animate';
import PricingPlans from './PricingPlans';

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

        <MotionInView variants={varFadeIn}>
          <Box sx={{ p: 5, mt: 10, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant='h3'>Still have questions?</Typography>
            </MotionInView>

            <MotionInView variants={varFadeInDown}>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Please describe your case to receive the most accurate advice.
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <Button
                size='large'
                variant='contained'
                href='mailto:kanyeallan@gmail.com?subject=[Feedback] from Customer'
              >
                Contact us
              </Button>
            </MotionInView>
          </Box>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
