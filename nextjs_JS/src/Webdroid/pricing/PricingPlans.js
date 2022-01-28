import PricingPlanCard from './PricingPlanCard';
import { Grid } from '@mui/material';
//
import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../../assets';

// ----------------------------------------------------------------------

const PLANS = [
  {
    subscription: 'STATIC WEBSITE',
    icon: <PlanFreeIcon />,
    price: 200,
    priceTwo: 450,
    priceMo: 30,
    caption: 'Basic Website',
    commons: ['One end products', '1 months updates', '3 months of support'],
    options: ['Next.js/React.js web App', 'Material Styles', 'Content Management System', 'Mode Theming', 'Interactive Dashboard'],
    labelAction: 'Choose Basic'
  },
  {
    subscription: 'DYNAMIC WEBSITE',
    icon: <PlanStarterIcon />,
    price: 450,
    priceTwo: 999,
    caption: 'Dynamic sites',
    priceMo: 30,
    commons: ['One end products', '1 months updates', '3 months of support'],
    options: ['Next.js/React.js web App', 'Material Styles', 'Content Management System', 'Mode Theming', 'Interactive Dashboard'],
    labelAction: 'Choose Standard'
  },
  {
    subscription: 'CUSTOM SYSTEMS',
    icon: <PlanPremiumIcon />,
    price: 1000,
    priceTwo: '1****',
    caption: 'Company Systems',
    priceMo: 100,
    commons: ['One end products', '* months updates', '* months of support'],
    options: ['Next.js/React.js web App', 'Material Styles', 'Content Management System', 'Mode Theming', 'Interactive Dashboard'],
    labelAction: 'Choose premium'
  }
];

//Web Progressive Apps
//Api Development

// ----------------------------------------------------------------------

export default function PricingPlans() {
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
