import { Link, useRouteError } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';

export function TrackErrorBoundary() {
  const error = useRouteError();
  const { t } = useTranslation();

  let errMsg = 'Something went wrong';
  let status;

  if (error instanceof AxiosError) {
    errMsg = error.response?.data.error;
    status = error.response?.status;
  }

  return (
    <div className='text-center pt-20 space-y-4'>
      <h1 className='text-3xl font-bold'>{errMsg}</h1>

      {status && <h2 className='text-2xl font-bold'>{status}</h2>}

      <Link
        to='/tracking-shipments'
        className='bg-primary block text-white py-2 px-4 rounded-md w-fit mx-auto hover:bg-primary/90 duration-300'
      >
        {t('Try Again')}
      </Link>
    </div>
  );
}
