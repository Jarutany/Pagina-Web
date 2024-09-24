import img from '../../assets/800x800.png';

import Producto from "./Producto"

export default function Productos(){
  const productos = [{nombre: "Vainilla", precio: "12.00", img:img ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
                     {nombre: "2", precio: "12.00", img:img ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
  ]

  return(
    <>
      <div className="p-10">
        <h1 className='pb-10 text-4xl'>Nuestros Productos</h1>
        {productos.map((x) => <Producto prop={x} />)}
      </div>
    </>
  )
}