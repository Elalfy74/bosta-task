import { useTranslation } from 'react-i18next';

export const CallSupport = () => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'trackingShipmentDetails.callSupport',
  });

  return (
    <div className='bg-white overflow-hidden shadow-sm rounded-lg border'>
      <div className='px-4 py-5 sm:p-6'>
        <div className='flex gap-6 justify-center'>
          <div className='flex flex-col gap-2 p-2 '>
            <p className='font-semibold'>{t('isThereProblem')}</p>
            <button className='w-full text-center text-white bg-primary rounded-lg p-2 font-medium md:font-semibold text-sm md:text-[1rem]'>
              {t('btn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
