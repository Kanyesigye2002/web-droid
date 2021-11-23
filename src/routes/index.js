import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'payment', element: <Payment /> },
        { path: '*', element: <Navigate to='/404' replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <LandingPage /> },
        { path: 'projects/ongoing/vumah', element: <VumahWorkFlow /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'projects', element: <ComingSoon /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
      ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
  ]);
}

// IMPORT COMPONENTS
const LandingPage = Loadable(lazy(() => import('../pages/landing')));
const VumahWorkFlow = Loadable(lazy(() => import('../pages/Projects/workFlows/VumahWorkFlow')));
const About = Loadable(lazy(() => import('../pages/about')));
const Contact = Loadable(lazy(() => import('../pages/contact')));
const Faqs = Loadable(lazy(() => import('../pages/faqs')));
const Pricing = Loadable(lazy(() => import('../pages/pricing')));
const Payment = Loadable(lazy(() => import('../pages/payment')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
