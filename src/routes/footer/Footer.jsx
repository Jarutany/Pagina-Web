import { Link } from "react-router-dom";

import Logo from '../../assets/Logo.png'

export default function Footer(){

  return(
    <>
      <div className="bg-lightGreen sm:px-20 flex flex-wrap items-center sm:items-start sm:flex-nowrap sm:justify-between p-5 text-black text-sm">
        <div className='p-2 flex w-full sm:h-fit sm:w-fit justify-center sm:items-center'>
          <img className='max-h-24' src={Logo} alt="Logo" />
        </div>

        <div className='p-2 flex flex-col'>
          <h1 className='font-normal'>Nuestros contactos</h1>
          <p className='mt-2 sm:mt-4'>52-346-113-2727</p>
          <p>ventas@jarutanystrade.com</p>
          <a href="">Facebook</a>
          <a href="https://www.instagram.com/jarutany/">Instagram</a>
        </div>

        <div className=' p-2 flex flex-col'>
          <h1 className='font-normal'>Centro de Ayuda</h1>
          <Link to="AvisoPriv" className='mt-2 sm:mt-4'>Aviso de Privacidad</Link>
          <a href="">Termios y Condiciones</a>
        </div>

        <div className=' p-2 flex flex-col'>
          <h1 className='font-normal'>Recursos</h1>
          <a className='mt-2 sm:mt-4' href="">Para Empleados</a>
          
        </div>
      </div>
    </>
  )
}