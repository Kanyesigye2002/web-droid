import PricingPlanCard from '../pricing/PricingPlanCard';
// material
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Button } from '@mui/material';
// components
import Page from '../../components/Page';
//
import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../../assets';
import { MotionInView, varFadeIn, varFadeInDown, varFadeInUp } from '../../components/animate';

// ----------------------------------------------------------------------

const PLANS = [
  {
    subscription: 'STATIC WEBSITE',
    icon: <PlanFreeIcon />,
    price: 100,
    priceTwo: 300,
    priceMo: 20,
    caption: 'Basic Website',
    commons: ['One end products', '12 months updates', '6 months of support'],
    options: ['React Js App', 'Material Styles', 'Content Management System', 'Mode Theming', 'Interactive Dashboard'],
    labelAction: 'choose starter'
  },
  {
    subscription: 'DYNAMIC WEBSITE',
    icon: <PlanStarterIcon />,
    price: 300,
    priceTwo: 1000,
    caption: 'Dynamic sites',
    priceMo: 20,
    commons: ['One end products', '12 months updates', '6 months of support'],
    options: ['React Js App', 'Material Styles', 'Content Management System', 'Mode Theming', 'Interactive Dashboard'],
    labelAction: 'choose zonal'
  },
  {
    subscription: 'CUSTOM SYSTEMS',
    icon: <PlanPremiumIcon />,
    price: 1000,
    priceTwo: '1****',
    caption: 'Company Systems',
    priceMo: 20,
    commons: ['One end products', '12 months updates', '6 months of support'],
    options: ['React Js App', 'Material Styles', 'Content Management System', 'Mode Theming', 'Interactive Dashboard'],
    labelAction: 'choose premium'
  }
];

//Web Progressive Apps


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

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {PLANS.map((card, index) => (
            <Grid item xs={12} md={4} key={card.subscription}>
              <PricingPlanCard card={card} index={index} />
            </Grid>
          ))}
        </Grid>

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
