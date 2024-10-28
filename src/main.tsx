import React from 'react';
import ReactDOM from 'react-dom/client';
import PlayGround2 from './PlayGround2';
import PlayGround3 from './PlayGround3';
import './index.css';

import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import './test.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Outlet />
        <div>Root</div>
        <PlayGround3 />
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
  <RouterProvider router={router} />
);
