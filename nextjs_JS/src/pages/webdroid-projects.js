// material
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack } from '@mui/material';
// components
import Page from '../components/Page';
import Layout from '../layouts';
import ProjectsList from '../Webdroid/Projects/ProjectsList';
import Newsletter from '../Webdroid/Newsletter';
import { _testimonials } from '../_mock/_testimonials';
import Testimonials from '../Webdroid/landing/Testimonials';


// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  minHeight: '100%',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function WebdroidProjects() {

  const projects = [
    {
          "title": "Bank of America",
          "description": "Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet augue. ",
          "category": "Branding",
          "coverImg": "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
          "heroImg": "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_hero.jpg",
          "createdAt": "2020-03-16T05:35:07.322Z",
          "galleryImgs": [
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_2.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_3.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_4.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_5.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_6.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_7.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_8.jpg"
          ],
          "website": "https://example.com/",
          "socialLinks": {
            "facebook": "#facebook-link",
            "instagram": "#instagram-link",
            "linkedin": "#linkedin-link",
            "twitter": "#twitter-link"
          }

    },
    {
          "title": "Bank of America",
          "description": "Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet augue. ",
          "category": "Branding",
          "coverImg": "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
          "heroImg": "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_hero.jpg",
          "createdAt": "2020-03-16T05:35:07.322Z",
          "galleryImgs": [
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_2.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_3.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_4.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_5.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_6.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_7.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_8.jpg"
          ],
          "website": "https://example.com/",
          "socialLinks": {
            "facebook": "#facebook-link",
            "instagram": "#instagram-link",
            "linkedin": "#linkedin-link",
            "twitter": "#twitter-link"
          }

    },
    {

          "title": "Bank of America",
          "description": "Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet augue. ",
          "category": "Branding",
          "coverImg": "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
          "heroImg": "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_hero.jpg",
          "createdAt": "2020-03-16T05:35:07.322Z",
          "galleryImgs": [
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_2.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_3.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_4.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_5.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_6.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_7.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_8.jpg"
          ],
          "website": "https://example.com/",
          "socialLinks": {
            "facebook": "#facebook-link",
            "instagram": "#instagram-link",
            "linkedin": "#linkedin-link",
            "twitter": "#twitter-link"
          }

    },
    {

          "title": "Bank of America",
          "description": "Praesent vestibulum dapibus nibh. Vestibulum fringilla pede sit amet augue. ",
          "category": "Branding",
          "coverImg": "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
          "heroImg": "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_hero.jpg",
          "createdAt": "2020-03-16T05:35:07.322Z",
          "galleryImgs": [
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_2.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_3.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_4.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_5.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_6.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_7.jpg",
            "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_8.jpg"
          ],
          "website": "https://example.com/",
          "socialLinks": {
            "facebook": "#facebook-link",
            "instagram": "#instagram-link",
            "linkedin": "#linkedin-link",
            "twitter": "#twitter-link"
          }

    }
  ];
  return (
    <RootStyle title='Projects | Web-Droid'>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mt: { xs: 8, md: 10 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Our Projects</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Nullam tincidunt adipiscing enim.
            <br /> Mauris sollicitudin fermentum libero.
          </Typography>
        </Stack>
        <ProjectsList projects={projects} />
      </Container>
      <Testimonials testimonials={_testimonials}/>
      <Newsletter />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

WebdroidProjects.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};