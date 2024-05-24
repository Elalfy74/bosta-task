import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';
import './i18n';

import { RootLayout } from './layouts/root-layout';
import { TrackingShipmentsPage } from './routes/tracking-shipments';
import { TrackingShipmentDetailsPage } from './routes/tracking-shipments/[trackingNumber]';
import { getShipmentByTrackingNumber } from './lib/api';
import { TrackErrorBoundary } from './components/track-shipments/track-error-boundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/tracking-shipments' />,
      },
      {
        path: '/tracking-shipments',
        element: <TrackingShipmentsPage />,
      },
      {
        path: '/tracking-shipments/:trackingNumber',
        element: <TrackingShipmentDetailsPage />,

        loader: ({ params }) => {
          if (!params.trackingNumber) {
            return null;
          }

          return getShipmentByTrackingNumber(params.trackingNumber);
        },

        errorElement: <TrackErrorBoundary />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
