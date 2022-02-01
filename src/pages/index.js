// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';
// sections
import Hero from '../sections/landing/Hero';
import Process from '../sections/landing/Process';
import About from '../sections/About';
import Pricing from '../sections/Pricing/Pricing';
import Newsletter from '../sections/Newsletter';
import { _pricingMarketing } from '../_mock/_pricing';
import { Testimonials } from '../sections/testimonials';
import Features from '../sections/landing/Features';
import { _coursesByCategories, _testimonials } from '../_mock';

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Tier3-Engineers">
      <Hero />
      <About />
      <Process />
      <Features  categories={_coursesByCategories} />
      <Pricing plans={_pricingMarketing} />
      <Testimonials testimonials={_testimonials} />
      <Newsletter />
    </Page>
  );
}
