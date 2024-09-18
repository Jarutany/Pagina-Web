import Logo from '../../assets/Logo.png'

export default function Footer(){

  return(
    <>
      <div className="bg-lightGreen sm:px-20 flex flex-wrap items-center sm:items-start sm:flex-nowrap sm:justify-between p-5 text-black text-sm">
        <div className='p-2 flex w-full sm:w-1/6 justify-center sm:justify-start'>
          <img className='max-h-24' src={Logo} alt="Logo" />
        </div>

        <div className='p-2 flex flex-col'>
          <h1 className='font-normal'>Nuestros contactos</h1>
          <p className='mt-2 sm:mt-4'>33-000-0000</p>
          <p>ventas@jarutanystrade.com</p>
          <a href="">Facebook</a>
        </div>

        <div className=' p-2 flex flex-col'>
          <h1 className='font-normal'>Centro de Ayuda</h1>
          <a className='mt-2 sm:mt-4' href="">Aviso de Privacidad</a>
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