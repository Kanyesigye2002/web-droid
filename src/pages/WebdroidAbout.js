// components
import { styled } from '@mui/material/styles';
import Page from '../components/Page';
import Layout from '../layouts';
import Hero from '../Webdroid/about/Hero';
import About from '../Webdroid/About';
import OurVision from '../Webdroid/about/OurVision';
import Testimonials from '../Webdroid/about/Testimonials';
import Newsletter from '../Webdroid/Newsletter';
import Team from '../Webdroid/about/Team';
// import AboutTeam from '../Webdroid/about/AboutTeam';
import { _members } from '../_mock/_members';
import { _brands } from '../_mock/_brands';
import OurClients from '../Webdroid/OurClients';

WebdroidAbout.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

export default function WebdroidAbout() {
  return (
    <Page title="About Us - E-Learning">
      <Hero/>
      <About/>
      <OurVision/>
      <OurClients  brands={_brands}/>
      <Team  members={_members}/>
      <Testimonials/>
      <Newsletter/>
    </Page>
  );
}