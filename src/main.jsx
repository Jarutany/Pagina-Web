import { StrictMode } from 'react'
import * as React from "react";
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './routes/App'
import './index.css'

import Navbar from '/src/routes/navbar/Navbar.jsx'
import Footer from '/src/routes/footer/Footer.jsx'


const router = createBrowserRouter([
  {
    path: "/",element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
