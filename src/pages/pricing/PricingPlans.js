import PricingPlanCard from './PricingPlanCard';
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
    commons: ['One end products', '1 months updates', '3 months of support'],
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
    commons: ['One end products', '1 months updates', '3 months of support'],
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
    commons: ['One end products', '* months updates', '* months of support'],
    options: ['React Js App', 'Material Styles', 'Content Management System', 'Mode Theming', 'Interactive Dashboard'],
    labelAction: 'choose premium'
  }
];

//Web Progressive Apps
//Api Development

// ----------------------------------------------------------------------

export default function Pricing() {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {PLANS.map((card, index) => (
        <Grid item xs={12} md={4} key={card.subscription}>
          <PricingPlanCard card={card} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}
