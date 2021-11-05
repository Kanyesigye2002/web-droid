import LandingHero from './LandingHero';
import LandingMinimal from './LandingMinimal';
import LandingPricingPlans from './LandingPricings';
import LandingAdvertisement from './LandingAdvertisement';

// material
import { styled } from '@mui/material/styles';
// components
import Page from '../../components/Page';
import AboutWhat from '../about/AboutWhat';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Web-Droid" id="move_top">
      <LandingHero />
      <ContentStyle>
        <AboutWhat/>
        <LandingMinimal />
        <LandingPricingPlans />
        <LandingAdvertisement />
      </ContentStyle>
    </RootStyle>
  );
}
