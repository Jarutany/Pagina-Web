import { ScrollRestoration } from "react-router-dom";

import img1 from '../../assets/10.png';
import img2 from '../../assets/11.png';
import img3 from '../../assets/12.png';

import Animal from './Animal';

export default function Ganado(){
  const animales = [{nombre: "Pato", raza: "Blanco y Cafe", img:img1 ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
                    {nombre: "Vaca", raza: "Normal", img:img2 ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
                    {nombre: "Caballo", raza: "Pura Sangre", img:img3 ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
  ]

  return(
    <>
      <div className="p-10">
        <ScrollRestoration />
        <h1 className='pb-10 text-4xl'>Nuestros Ganado</h1>
        {animales.map((x) => <Animal prop={x} />)}
      </div>
    </>
  )
}