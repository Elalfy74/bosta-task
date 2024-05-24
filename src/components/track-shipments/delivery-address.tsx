import { useTranslation } from 'react-i18next';

const addressAr = 'امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل IV بلوك ٢٢ , Cairo';
const addressEn = 'Imbaba, Talaat Harb Street, Workers City, near El Prince, House IV, Block 22, Cairo';

export const DeliveryAddress = () => {
  const { t, i18n } = useTranslation(undefined, {
    keyPrefix: 'trackingShipmentDetails.shipmentAddress',
  });

  return (
    <div>
      <h1 className='font-semibold text-xl'>{t('title')}</h1>
      <div className='mt-4 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full p-4 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden px-6 shadow-sm rounded-lg border bg-gray-50 text-gray-500 font-semibold p-4'>
              {i18n.language === 'en' ? addressEn : addressAr}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
