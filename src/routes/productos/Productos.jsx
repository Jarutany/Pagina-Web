import { ScrollRestoration } from "react-router-dom";

import img1 from '../../assets/5.png';
import img2 from '../../assets/6.png';
import img3 from '../../assets/7.png';
import img4 from '../../assets/8.png';


import Producto from "./Producto"

export default function Productos(){
  const productos = [{nombre: "Te de Manzanilla", precio: "12.00", img:img1 ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
                     {nombre: "Te de Limon", precio: "12.00", img:img2 ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
                     {nombre: "Te de Hierba Buena", precio: "12.00", img:img3 ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
                     {nombre: "Oregano", precio: "12.00", img:img4 ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
  ]

  return(
    <>
      <div className="p-10">
        <ScrollRestoration />
        <h1 className='pb-10 text-4xl'>Nuestros Productos</h1>
        {productos.map((x) => <Producto prop={x} />)}
      </div>
    </>
  )
}