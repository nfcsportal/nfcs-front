import EnvelopeSvg from '../../Assets/Icons/EnvelopeSvg';
import TelegramSvg from '../../Assets/Icons/TelegramSvg';
import WhatsAppSvg from '../../Assets/Icons/WhatsAppSvg';
import { ROUTES } from '../../Constants/Routes';
import { TFooterIcon, TLanguages, TNavBar } from './typesMolecules';

export const NAV_BAR: TNavBar[] = [
  {
    title: 'About Us',
    path: ROUTES.ABOUT,
    id: 'navbar.about',
  },
  {
    title: 'Contact Us',
    path: ROUTES.CONTACT_US,
    id: 'navbar.contactus',
  },
  {
    title: 'How it works',
    path: ROUTES.HOW_IT_WORKS,
    id: 'navbar.howitworks',
  },
  {
    title: 'Sign In',
    path: ROUTES.SIGN_IN,
    className: 'headerSignIn',
    id: 'navbar.signin',
  },
  {
    title: 'Sign Un',
    path: ROUTES.SIGN_UP,
    className: 'headerSignUp',
    id: 'navbar.signup',
  },
];

export const LANGUAGES: TLanguages[] = [
  {
    title: 'EN',
    code: 'en',
  },
  {
    title: 'German',
    code: 'ge',
  },
  {
    title: 'French',
    code: 'fr',
  },
];

export const FOOTER_ICONS: TFooterIcon[] = [
  {
    href: 'tg',
    icon: TelegramSvg,
  },
  {
    href: 'wp',
    icon: WhatsAppSvg,
  },
  {
    href: 'mail',
    icon: EnvelopeSvg,
  },
];

export const FOOTER_MENU: Record<string, string>[] = [
  {
    href: 'href',
    id: 'footer.menu.policy',
  },
  {
    href: 'href',
    id: 'footer.menu.terms',
  },
  {
    href: 'href',
    id: 'footer.menu.contactus',
  },
];
