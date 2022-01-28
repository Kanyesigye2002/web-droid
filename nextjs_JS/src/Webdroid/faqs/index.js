import FaqsHero from './FaqsHero';
import FaqsList from './FaqsList';
import FaqsForm from './FaqsForm';
import FaqsCategory from './FaqsCategory';

// material
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));
//M-Blue
//Orange Pink
//Green
//curchie
//red
//yellow
//white

// ----------------------------------------------------------------------

export default function Faqs() {
  return (
    <RootStyle title='Faqs | Web-Droid'>
      <FaqsHero />
      <ContentStyle>

        <Container sx={{ mt: 15, mb: 10 }}>
          <FaqsCategory />

          <Typography variant='h3' sx={{ mb: 5 }}>
            Frequently asked questions
          </Typography>

          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <FaqsList />
            </Grid>
            <Grid item xs={12} md={6}>
              <FaqsForm />
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
);
}
