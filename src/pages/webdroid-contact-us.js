// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// config
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
import ContactInfo from '../Webdroid/contact/ContactInfo';
import ContactForm from '../Webdroid/contact/ContactForm';
import Newsletter from '../Webdroid/Newsletter';
import WebdroidAbout from './WebdroidAbout';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: 64,
  [theme.breakpoints.up('md')]: {
    paddingTop: 96,
  },
}));

// ----------------------------------------------------------------------

export default function WebdroidContactUsPage() {
  return (
    <Page title="Contact Us - Webdroid">
      <RootStyle>
        <Container sx={{ py: { xs: 8, md: 10 } }}>
          <Grid
            container
            spacing={{ xs: 8, md: 3 }}
            justifyContent="space-between"
            direction={{ xs: 'column-reverse', md: 'row' }}
          >
            <Grid item xs={12} md={6} lg={5}>
              <ContactInfo />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h2" sx={{ mb: 5 }}>
                Ready To Get Started?
              </Typography>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
        <Newsletter />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------
WebdroidContactUsPage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};
