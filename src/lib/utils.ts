import { State } from '../types';

export const getShipmentStatusColor = (status: State) => {
  switch (status) {
    case 'DELIVERED':
      return 'text-green-500';
    case 'CANCELLED':
      return 'text-red-500';
    default:
      return 'text-yellow-500';
  }
};

export const getShipmentStatusBg = (status: State) => {
  switch (status) {
    case 'DELIVERED':
      return 'bg-green-500';
    case 'CANCELLED':
      return 'bg-red-500';
    default:
      return 'bg-yellow-500';
  }
};

export const getShipmentStatusKey = (status: State) => {
  switch (status) {
    case 'DELIVERED':
      return 'delivered';
    case 'CANCELLED':
      return 'cancelled';
    default:
      return 'notDelivered';
  }
};
