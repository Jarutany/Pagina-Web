import img from '../../assets/800x800.png';

import Animal from './Animal';

export default function Ganado(){
  const animales = [{nombre: "Caballo", raza: "Pura Sangre", img:img ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
                     {nombre: "Borrego", raza: "Normal", img:img ,desecripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue"},
  ]

  return(
    <>
      <div className="p-10">
        <h1 className='pb-10 text-4xl'>Nuestros Ganado!</h1>
        {animales.map((x) => <Animal prop={x} />)}
      </div>
    </>
  )
}