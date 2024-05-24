import { useTranslation } from 'react-i18next';
import { useLoaderData } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { enUS, ar } from 'date-fns/locale';

import { Shipment } from '../../types';

const formatDate = (date: string, locale: string) => {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'dd/MM/yyyy', { locale: locale === 'en' ? enUS : ar });
};

const formatTime = (date: string) => {
  const parsedDate = parseISO(date);
  return format(parsedDate, 'hh:mm a');
};

export function ShipmentDetails() {
  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: 'trackingShipmentDetails.shipmentDetails',
  });
  const data = useLoaderData() as Shipment;

  return (
    <div className='flex-1'>
      <div className='sm:flex sm:items-center'>
        <h1 className='text-xl font-semibold'>{t('title')}</h1>
      </div>
      <div className='mt-4 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 px-4 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className={`px-4 py-3.5 ${
                        i18n.language === 'en' ? 'text-left' : 'text-right'
                      } text-sm font-semibold text-gray-900 sm:pl-6`}
                    >
                      {t('labels.branch')}
                    </th>
                    <th
                      scope='col'
                      className={`px-3 py-3.5 ${
                        i18n.language === 'en' ? 'text-left' : 'text-right'
                      } text-sm font-semibold text-gray-900`}
                    >
                      {t('labels.date')}
                    </th>
                    <th
                      scope='col'
                      className={`px-3 py-3.5 ${
                        i18n.language === 'en' ? 'text-left' : 'text-right'
                      } text-sm font-semibold text-gray-900`}
                    >
                      {t('labels.time')}
                    </th>
                    <th
                      scope='col'
                      className={`px-3 py-3.5 ${
                        i18n.language === 'en' ? 'text-left' : 'text-right'
                      } text-sm font-semibold text-gray-900`}
                    >
                      {t('labels.details')}
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {data.TransitEvents.map((order, index) => (
                    <tr key={index}>
                      <td
                        className={`whitespace-nowrap ${i18n.language === 'en' ? 'px-6' : 'px-4'} py-4 text-sm text-gray-500 font-semibold`}
                      >
                        {order.hub}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-semibold'>
                        {formatDate(order.timestamp, i18n.language)}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-semibold'>
                        <span dir='ltr'>{formatTime(order.timestamp)}</span>
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-semibold capitalize'>
                        {t(`shipmentStatus.${order.state}`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
