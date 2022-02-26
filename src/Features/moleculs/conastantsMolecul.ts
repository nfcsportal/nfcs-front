import EnvelopeSvg from '../../Assets/Icons/EnvelopeSvg';
import CheckPaperSvg from '../../Assets/Icons/how-it-works/CheckPaperSvg';
import FindSvg from '../../Assets/Icons/how-it-works/FindSvg';
import OrderSvg from '../../Assets/Icons/how-it-works/OrderSvg';
import TimelineSvg from '../../Assets/Icons/how-it-works/TimelineSvg';
import TelegramSvg from '../../Assets/Icons/TelegramSvg';
import WhatsAppSvg from '../../Assets/Icons/WhatsAppSvg';
import ShieldLockSvg from '../../Assets/Icons/why-we/ShieldLockSvg';
import ShieldQuality from '../../Assets/Icons/why-we/ShieldQuality';
import ShieldReliability from '../../Assets/Icons/why-we/ShieldReliability';
import { ROUTES } from '../../Constants/Routes';
import { TFooterIcon, THowItWorks, TLanguages, TNavBar, TWhyWe } from './typesMolecules';

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

export const WHY_WE: TWhyWe[] = [
  {
    icon: ShieldQuality,
    title: 'home.whywe.quality',
    info: 'home.whywe.quality.content',
  },
  {
    icon: ShieldLockSvg,
    title: 'home.whywe.confidence',
    info: 'home.whywe.confidence.content',
  },
  {
    icon: ShieldReliability,
    title: 'home.whywe.reliability',
    info: 'home.whywe.reliability.content',
  },
];

export const HOW_IT_WORKS: THowItWorks[] = [
  {
    icon: FindSvg,
    info: 'home.howitworks.find',
  },
  {
    icon: OrderSvg,
    info: 'home.howitworks.order',
  },
  {
    icon: TimelineSvg,
    info: 'home.howitworks.timeline',
  },
  {
    icon: CheckPaperSvg,
    info: 'home.howitworks.purchase',
  },
];
