import React from 'react';
import Logo from '../../assets/Logo.png'

export default function Navbar(){
  return(
    <>
      <div className="sticky top-0 flex flex-wrap justify-center sm:flex-nowrap bg-gradient-to-r from-white via-lightGreen to-white lg:h-24">
        <button>
          <img className='p-5 w-40 md:w-48 lg:w-52' src={Logo} alt="Logo" />
        </button>
        <div className='flex flex-wrap p-2 sm:flex-nowrap items-center justify-between sm:px-20 text-sm w-full'>
          <button className='text-black hover:underline'>
            Inicio
          </button>
          <button className='text-black hover:underline'>
            Productos
          </button>
          <button className='text-black hover:underline'>
            Nosotros
          </button>
          <button className='text-black hover:underline'>
            Blog
          </button>
          <button className='text-black hover:underline'>
            Contacto
          </button>
        </div>
      </div>
    </>
  )
};