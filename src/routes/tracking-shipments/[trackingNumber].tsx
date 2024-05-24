import { ShipmentSummary } from '../../components/track-shipments/shipment-summary';
import { ShipmentDetails } from '../../components/track-shipments/shipment-details';
import { CallSupport } from '../../components/track-shipments/call-support';
import { DeliveryAddress } from '../../components/track-shipments/delivery-address';

export const TrackingShipmentDetailsPage = () => {
  return (
    <div className='flex flex-col gap-6 py-8'>
      <ShipmentSummary />
      <div className='flex flex-col lg:flex-row gap-6'>
        <ShipmentDetails />
        <div className='flex flex-col gap-4'>
          <DeliveryAddress />
          <CallSupport />
        </div>
      </div>
    </div>
  );
};
