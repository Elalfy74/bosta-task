import { useTranslation } from 'react-i18next';
import { TrackShipmentForm } from './track-shipment.form';

export const TrackShipmentBtn = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'header.trackShipment',
  });

  return (
    <div className='relative group'>
      <div className='cursor-pointer group-hover:text-primary capitalize'>{t('btn')}</div>
      <div className='absolute pt-10 lg:right-0 -right-10 rtl:left-0 rtl:right-auto top-0 z-10 hidden group-hover:block'>
        <div className='flex flex-col border border-gray-300 rounded-lg shadow-lg bg-white w-80 h-28 p-4'>
          <label htmlFor='search' className='block text-sm font-medium capitalize'>
            {t('label')}
          </label>
          <TrackShipmentForm />
        </div>
      </div>
    </div>
  );
};
