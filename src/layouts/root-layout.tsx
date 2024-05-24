import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { Header } from './header';

export const RootLayout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'en' ? 'ltr' : 'rtl';
    document.documentElement.dir = dir;
  }, [i18n.language]);

  return (
    <div className='container'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
