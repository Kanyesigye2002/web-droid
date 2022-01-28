import AboutHero from './AboutHero';
import AboutWhat from './AboutWhat';
import AboutTeam from './AboutTeam';
import AboutVision from './AboutVision';
import Testimonials from './Testimonials';

// material
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

const RootStyles = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <RootStyle title='About us | Web-Droid' id='move_top'>
      <AboutHero />
      <ContentStyle>
        <AboutWhat />
        <AboutVision />
        <Divider orientation='vertical' sx={{ my: 4, mx: 'auto', width: 4, height: 40 }} />
        <AboutTeam />
        <Testimonials />
      </ContentStyle>
    </RootStyle>
  );
}
