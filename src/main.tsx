import React from 'react';
import ReactDOM from 'react-dom/client';
import PlayGround from './PlayGround';
import PlayGround2 from './PlayGround2';
import './index.css';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import './test.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Outlet />
        <div>Root</div>
        <PlayGround />
      </>
    ),
    children: [
      {
        path: 'contact',
        element: <PlayGround2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
