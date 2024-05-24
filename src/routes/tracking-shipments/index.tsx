import { useTranslation } from 'react-i18next';
import { TrackShipmentForm } from '../../components/shared/track-shipment.form';

export const TrackingShipmentsPage = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'trackShipments',
  });

  return (
    <div className='text-center pt-20 lg:max-w-xl mx-auto'>
      <h1 className='text-5xl font-bold mb-4'>{t('title')}</h1>
      <p className='text-lg mb-10'>{t('subTitle')}</p>

      <TrackShipmentForm className='h-14 mx-10' />
    </div>
  );
};
