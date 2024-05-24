import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { LogoEn } from '../components/ui/logo-en';
import { LogoAr } from '../components/ui/logo-ar';
import { MobileNav } from './mobile-nav';
import { links } from './links';
import { TrackShipmentBtn } from '../components/shared/track-shipment-btn';

export const Header = () => {
  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: 'header',
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  };

  return (
    <header className='flex items-center px-4 py-6 border-b justify-between font-bold text-lg'>
      <Link to='/'>{i18n.language === 'en' ? <LogoEn /> : <LogoAr />}</Link>

      <nav className='hidden lg:flex'>
        <Links />
      </nav>

      {/* third div */}
      <div className='hidden lg:flex gap-8'>
        <TrackShipmentBtn />

        <a href='#' className='hover:text-primary duration-300 capitalize'>
          {t('loginBtn')}
        </a>
        <button className='text-primary cursor-pointer uppercase' onClick={handleClick}>
          {i18n.language === 'en' ? 'عربي' : 'eng'}
        </button>
      </div>

      <div className='lg:hidden flex gap-4'>
        <TrackShipmentBtn />
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>
      {isMenuOpen && <MobileNav closeMenu={() => setIsMenuOpen(false)} />}
    </header>
  );
};

const Links = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'header.links',
  });

  return (
    <ul className='grow flex justify-center gap-x-12'>
      {links.map((link) => (
        <li key={link.key}>
          <Link to={link.path} className='hover:text-primary duration-300 capitalize tracking-wide'>
            {t(link.key)}
          </Link>
        </li>
      ))}
    </ul>
  );
};
