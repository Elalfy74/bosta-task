import { axiosInstance } from './axios';
import { type Shipment } from '../types';

export const getShipmentByTrackingNumber = async (trackingNumber: string) => {
  const response = await axiosInstance.get<Shipment>(`shipments/track/${trackingNumber}`);

  return response.data;
};
