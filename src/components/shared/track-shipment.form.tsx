import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TrackShipmentForm = ({ className, onSubmit, ...props }: React.ComponentProps<'form'>) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: 'header.trackShipment',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={`flex rounded-md shadow-sm ${className}`}
      {...props}
      onSubmit={(e) => {
        e.preventDefault();

        if (!inputRef.current?.value.trim()) return;

        navigate(`/tracking-shipments/${inputRef.current?.value}`);
      }}
    >
      <div className='flex flex-grow'>
        <input
          type='text'
          name='search'
          ref={inputRef}
          id='search'
          className={`block w-full text-sm font-normal rounded-none rounded-l-md sm:text-sm outline-none border ${
            i18n.language === 'en' ? 'pl-2' : 'pr-2'
          }`}
          placeholder={t('placeholder')}
        />
      </div>
      <button
        type='submit'
        className={`-ml-px relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium bg-primary text-white ${
          i18n.language === 'en' ? 'rounded-r-md' : 'rounded-l-md'
        }`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>
      </button>
    </form>
  );
};
