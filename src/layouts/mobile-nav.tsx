import { useTranslation } from 'react-i18next';
import { links } from './links';

export const MobileNav = ({ closeMenu }: { closeMenu: () => void }) => {
  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: 'header.links',
  });

  const handleClick = () => {
    i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
    closeMenu();
  };

  return (
    <div>
      <nav className='fixed top-0 right-0 left-0 bottom-0 lg:hidden bg-white'>
        {/* Close Button */}
        <button className='fixed right-0  px-8 py-4 cursor-pointer' onClick={closeMenu}>
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        <div className='p-4 text-2xl font-normal mt-20 divide-y'>
          <ul className='flex flex-col h-full divide-y '>
            {links.map((link) => (
              <li key={link.key} className='py-6'>
                <a href={link.path} className='hover:text-primary duration-300 capitalize tracking-wide'>
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
          <button
            className='py-6 w-full text-left rtl:text-right hover:text-primary duration-200'
            onClick={handleClick}
          >
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
      </nav>
    </div>
  );
};
