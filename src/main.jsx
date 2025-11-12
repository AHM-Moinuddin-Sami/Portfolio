import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
