import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-white via-lightGreen to-white z-50">
      <div className="flex sm:flex-row flex-col sm:h-24 h-40 sm:justify-between justify-center sm:px-20 px-5 w-full items-center">
        {/* First Row: Logo */}
        <NavLink
          to="/"
          className="sm:p-5 p-2 flex justify-center w-full sm:w-auto mt-4 mb-2"
        >
          <img className="w-40 sm:w-48 lg:w-52" src={Logo} alt="Logo" />
        </NavLink>

        {/* Second Row: Navigation Links */}
        <div className="flex sm:flex-row flex-wrap sm:gap-5 gap-2 items-center sm:w-auto w-full justify-center mt-2 mb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-black underline' : 'text-black hover:underline'
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/Productos"
            className={({ isActive }) =>
              isActive ? 'text-black underline' : 'text-black hover:underline'
            }
          >
            Productos
          </NavLink>

          <NavLink
            to="/Ganado"
            className={({ isActive }) =>
              isActive ? 'text-black underline' : 'text-black hover:underline'
            }
          >
            Ganado
          </NavLink>

          <NavLink
            to="/Raizes"
            className={({ isActive }) =>
              isActive ? 'text-black underline' : 'text-black hover:underline'
            }
          >
            Bienes Raices
          </NavLink>

          <NavLink
            to="/Nosotros"
            className={({ isActive }) =>
              isActive ? 'text-black underline' : 'text-black hover:underline'
            }
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/Contacto"
            className={({ isActive }) =>
              isActive ? 'text-black underline' : 'text-black hover:underline'
            }
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </div>
  );
}
