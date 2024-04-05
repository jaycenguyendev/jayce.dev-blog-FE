import LogoIcon from '@public/images/logo.svg';
import Link from 'next/link';
import AnalyticsLink from './analytics-link';
import MobileNav from './mobile-nav';
import ThemeSwitch from './theme-switch';
import siteMetadata from '@/data/siteMetadata';
import HeaderNav from '@/components/ui/header-nav';
import { LanguageSwitcher } from '@/components/homepage/language-switcher';
const Header = () => {
  return (
    <header className="fixed top-0 w-full  z-40 py-4 bg-white/75 backdrop-blur supports-backdrop-blur dark:bg-dark/75">
      <div className="flex mx-auto items-center justify-between max-w-4xl xl:max-w-5xl px-3 xl:px-0">
        <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center">
          <div className="animate-wave">
            <LogoIcon className="fill-dark dark:fill-white" />
          </div>
          <div className="group ml-2 text-xl font-bold transition duration-300">
            Jayce.dev
            <span className="block h-0.5 max-w-0 bg-black transition-all duration-500 group-hover:max-w-[85%] dark:bg-white"></span>
          </div>
        </Link>
        <ul className="flex items-center text-base leading-5">
          <HeaderNav />
          <AnalyticsLink />
          <ThemeSwitch />
          <LanguageSwitcher />
          <MobileNav />
        </ul>
      </div>
    </header>
  );
};

export default Header;
