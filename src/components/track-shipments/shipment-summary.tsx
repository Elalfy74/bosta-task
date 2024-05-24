import { useLoaderData } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { parseISO, format } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';

import { type Shipment } from '../../types';
import { getShipmentStatusColor, getShipmentStatusKey } from '../../lib/utils';
import { SummarySteps } from './summary-steps';

export const ShipmentSummary = () => {
  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: 'trackingShipmentDetails.shipmentSummary',
  });
  const data = useLoaderData() as Shipment;

  const lastUpdateDate = parseISO(data.CurrentStatus.timestamp);
  const formattedLastUpdatedDate = format(lastUpdateDate, "eeee 'at' p MM/dd/yyyy", {
    locale: i18n.language === 'en' ? enUS : ar,
  });

  const promisedDate = parseISO(data.PromisedDate);
  const formattedPromisedDate = format(promisedDate, 'd MMMM yyyy', {
    locale: i18n.language === 'en' ? enUS : ar,
  });

  return (
    <div className='overflow-hidden shadow-sm rounded-lg border bg-white'>
      <div className='flex flex-col md:flex-row justify-between px-6 py-10'>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-400'>
            {t('shipmentNumber')}: {data.TrackingNumber}
          </p>
          <p className={`font-bold text-lg uppercase ${getShipmentStatusColor(data.CurrentStatus.state)}`}>
            {t(`shipmentStatus.${getShipmentStatusKey(data.CurrentStatus.state)}`)}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-400'>{t('lastUpdate')}</p>
          <p className='font-bold text-lg'>{formattedLastUpdatedDate}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-400'>{t('providerName')}</p>
          <p className='font-bold text-lg'>{data.provider}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-gray-400'>{t('promisedDate')}</p>
          <p className='font-bold text-lg'>{formattedPromisedDate}</p>
        </div>
      </div>

      <div className='border-t px-6 py-10'>
        <SummarySteps status={getShipmentStatusKey(data.CurrentStatus.state)} />
      </div>
    </div>
  );
};
