import { StrictMode } from 'react';
import * as React from "react";
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './routes/App';
import './index.css';

import Index from './routes/index/Index';
import Nosotros from './routes/nosotros/Nosotros';
import Productos from './routes/productos/Productos';
import Ganado from './routes/ganado/Ganado'
import Raizes from './routes/raizes/Raizes';
import Contacto from './routes/contacto/Contacto';
import AvisoPriv from './routes/avisoPriv/AvisoPriv';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App includes Navbar and Footer
    children: [
      { path: "/", element: <Index /> },
      { path: "/Productos", element: <Productos /> },
      { path: "/Nosotros", element: <Nosotros /> },
      { path: "/Ganado", element: <Ganado /> },
      { path: "/Raizes", element: <Raizes /> },
      { path: "/Contacto", element: <Contacto /> },
      { path: "/AvisoPriv", element: <AvisoPriv /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
