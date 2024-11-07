import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

export default function Navbar() {
  return (
    <div className="fixed text-sm sm:text-lg top-0 left-0 w-full flex flex-wrap justify-center sm:flex-nowrap bg-gradient-to-r from-white via-lightGreen to-white sm:h-24 z-50">
      <NavLink to="/">
        <img className="p-5 sm:pt-4 sm:pl-5 w-40 md:w-48 lg:w-52" src={Logo} alt="Logo" />
      </NavLink>

      <div className="flex flex-wrap p-2 sm:flex-nowrap items-center justify-between sm:px-20 w-full">
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
          Bienes Raizes
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
  );
}
