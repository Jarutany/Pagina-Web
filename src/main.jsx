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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App includes Navbar and Footer
    children: [
      { path: "/", element: <Index /> },
      { path: "/Productos", element: <div>Productos</div> },
      { path: "/Nosotros", element: <Nosotros /> },
      { path: "/Ganado", element: <div>Ganado</div> },
      { path: "/Contacto", element: <div>Contacto</div> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
