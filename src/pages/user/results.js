// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import Newsletter from '../../sections/Newsletter';
import Results from '../../sections/Results';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: 64,
  [theme.breakpoints.up('md')]: {
    paddingTop: 96,
  },
}));

// ----------------------------------------------------------------------

export default function resultsPage() {
  return (
    <Page title="Results | Tier3-Engineers">
      <RootStyle>
        <Container sx={{ pb: { xs: 8, md: 10 }, pt: { xs: 2, md: 4 } }}>
          <Grid
            container
            spacing={{ xs: 8, md: 3 }}
            justifyContent="space-between"
            direction={{ xs: 'column-reverse', md: 'row' }}
          >
            <Grid item xs={12}>
              <Results />
            </Grid>
          </Grid>
        </Container>
        <Newsletter />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------
resultsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
