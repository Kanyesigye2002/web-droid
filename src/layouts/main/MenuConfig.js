
import {HomeRounded, BadgeRounded, ContactPageRounded, AssignmentRounded, CreditCardRounded, WorkRounded} from '@mui/icons-material'

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  { title: 'Home', icon: <HomeRounded {...ICON_SIZE} />, path: '/' },
  { title: 'About us', icon: <BadgeRounded {...ICON_SIZE} />, path: '/about-us' },
  { title: 'Contact us', icon: <ContactPageRounded {...ICON_SIZE} />, path: '/contact-us' },
  { title: 'FAQs', icon: <AssignmentRounded {...ICON_SIZE} />, path: '/faqs' },
  { title: 'Pricing', icon: <CreditCardRounded {...ICON_SIZE} />, path: '/pricing' },
  { title: 'Projects', icon: <WorkRounded {...ICON_SIZE} />, path: '/projects' },
];

export default menuConfig;
