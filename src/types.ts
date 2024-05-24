export interface Shipment {
  provider: string;
  CurrentStatus: CurrentStatus;
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: TransitEvent[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: NextWorkingDay[];
}

export type State =
  | 'TICKET_CREATED'
  | 'PACKAGE_RECEIVED'
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'CANCELLED'
  | 'DELIVERY_FAILED'
  | 'DELIVERED'
  | 'NOT_YET_SHIPPED'
  | 'AVAILABLE_FOR_PICKUP';

export interface CurrentStatus {
  state: State;
  timestamp: string;
}

export interface TransitEvent {
  state: State;
  timestamp: string;
  hub?: string;
  reason?: string;
}

export interface NextWorkingDay {
  dayDate: Date;
  dayName: string;
}
