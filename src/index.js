import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PurchaseCourse from './Pages/PurchaseCourse';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookFreeTrial from './Pages/BookFreeTrial';
import FApp from './Pages/FApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "purchasecourse",
    element: <PurchaseCourse />,
  },
  {
    path: "bookfreetrial",
    element: <BookFreeTrial />,
  },
  
  {
    path: "fapp",
    element: <FApp />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

