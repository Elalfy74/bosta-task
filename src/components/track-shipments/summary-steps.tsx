import { useTranslation } from 'react-i18next';
import { State } from '../../types';

const colors = {
  delivered: {
    bg: 'bg-green-500',
    text: 'text-green-500',
    border: 'after:border-green-500',
  },
  cancelled: {
    bg: 'bg-red-500',
    text: 'text-red-500',
    border: 'after:border-red-500',
  },
  notDelivered: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-500',
    border: 'after:border-yellow-500',
  },
};

type Steps = {
  id: number;
  status: 'completed' | 'current' | 'incomplete';
  key: State;
  icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
}[];

const steps = (status: 'delivered' | 'cancelled' | 'notDelivered') =>
  [
    {
      id: 1,
      status: 'completed',
      key: 'TICKET_CREATED',
    },
    {
      id: 2,
      status: 'completed',
      key: 'PACKAGE_RECEIVED',
    },
    {
      id: 3,
      status: status === 'delivered' ? 'completed' : 'current',
      key: 'IN_TRANSIT',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 640 512'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path d='M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z'></path>
        </svg>
      ),
    },
    {
      id: 4,
      status: status === 'delivered' ? 'completed' : 'incomplete',
      key: 'DELIVERED',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          {...props}
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z'
          />
        </svg>
      ),
    },
  ] as Steps;

export function SummarySteps({ status }: { status: 'delivered' | 'cancelled' | 'notDelivered' }) {
  const stepsArray = steps(status);

  return (
    <ol className='flex items-center w-full'>
      {stepsArray.map((step) => (
        <Step key={step.key} status={status} isLastStep={step.id === stepsArray.length} step={step} />
      ))}
    </ol>
  );
}

const Step = ({
  status,
  isLastStep,
  step,
}: {
  status: 'delivered' | 'cancelled' | 'notDelivered';
  isLastStep: boolean;
  step: {
    id: number;
    status: 'completed' | 'current' | 'incomplete';
    key: string;
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  };
}) => {
  const { t } = useTranslation(undefined, {
    keyPrefix: 'trackingShipmentDetails.shipmentDetails.shipmentStatus',
  });

  return (
    <div
      className={`flex relative flex-col
      ${!isLastStep ? 'w-full' : 'items-center'}`}
    >
      <li
        className={`flex items-center relative w-full
      ${step.status === 'completed' ? colors[status].border : 'after:border-gray-100'} 
      ${!isLastStep && 'after:content-[""] after:w-full after:h-1 after:border-b after:border-4 after:inline-block'}`}
      >
        <span
          className={`flex items-center justify-center rounded-full shrink-0
        ${step.status === 'completed' ? 'size-6' : 'size-12'}
        ${step.status !== 'incomplete' ? `${colors[status].bg} text-white` : 'bg-white text-gray-500 border-2'}
    `}
        >
          {step.status === 'completed' ? (
            <svg
              className='size-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 16 12'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5.917 5.724 10.5 15 1.5'
              />
            </svg>
          ) : (
            step.icon && (
              <step.icon className={`size-7 ${step.status === 'current' ? 'text-white ' : 'text-gray-500'}`} />
            )
          )}
        </span>
      </li>
      <p
        className={`whitespace-nowrap font-bold capitalize
      ${step.status === 'incomplete' ? 'text-gray-500 ' : 'text-black'}`}
      >
        {t(step.key)}
      </p>
    </div>
  );
};
