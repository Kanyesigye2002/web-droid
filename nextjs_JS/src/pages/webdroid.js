// @mui
import { styled } from '@mui/material/styles';
// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomeMinimal,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';
import LandingHero from '../sections/landing/LandingHero';
import Hero from '../Webdroid/landing/Hero';
import About from '../Webdroid/About';
import Process from '../Webdroid/landing/Process';
import Team from '../Webdroid/landing/Team';
import { _members } from '../_mock/_members';
import Pricing from '../Webdroid/landing/Pricing';
import Tasks from '../Webdroid/landing/Tasks';
import Testimonials from '../Webdroid/landing/Testimonials';
import Newsletter from '../Webdroid/Newsletter';
import { _testimonials } from '../_mock/_testimonials';
import OurClients from '../Webdroid/OurClients';
import { _brands } from '../_mock/_brands';

// ----------------------------------------------------------------------

webdroid.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};
// ----------------------------------------------------------------------

export default function webdroid() {
  return (
    <Page title="Web-Droid">
      <Hero/>
      <OurClients  brands={_brands}/>
      <About/>
      <Tasks/>
      <Process/>
      <Pricing/>
      <Team members={_members}/>
      <Testimonials testimonials={_testimonials}/>
      <Newsletter/>
    </Page>
  );
}
