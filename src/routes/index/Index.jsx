import { Link, ScrollRestoration } from "react-router-dom"

import ImgScroller from "./ImgScroller"
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/9.png'


export default function Index(){

  return(
    <>
      <div className="bg-white h-full">
        <ScrollRestoration />
        <ImgScroller />
        
        <div className="p-10 text-black text-justify">
          <h1 className="font-normal text-4xl sm:ml-5">Conócenos</h1>
          <div className="mt-5 flex flex-wrap justify-center h-fit sm:flex-nowrap sm:justify-between">
            <p className="leading-loose text-3xl sm:w-2/3 sm:mr-5 sm:m-5">
              Jarutany's Trade significa ayuda al comercio, considerando al comercio desde la perspectiva del
              que por un lado ofrece, y por otro quien paga por un bien o servicio, buscando aportar
              transacciones que consideren el ganar-ganar como una prioridad, asegurando valor de uso y valor
              de cambio en cada operación.
            </p>
            <div className="sm:w-1/3 items-center justify-center flex">
              <img className="sm:w-2/3" src={img4} alt="" />
            </div>
          </div>
        </div>


        <div className="text-black flex flex-col items-center p-10">
          <h1 className="font-normal text-4xl">Nuestros servicios</h1>
          <div className="flex flex-wrap justify-center sm:flex-nowrap sm:justify-between p-5 sm:p-10 w-full ">
            <div className="w-full m-2 sm:m-10 flex flex-wrap justify-center">
              <img src={img3} alt="" />
              <Link to="/Productos" className="p-3 hover:underline text-3xl">Productos</Link>
            </div>
            <div className="w-full m-2 sm:m-10 items-center flex flex-wrap justify-center">
              <img src={img1} alt="" />
              <Link to="/Ganado" className="p-3 hover:underline text-3xl">Ganado</Link>
            </div>
            <div className="w-full m-2 sm:m-10 flex flex-wrap justify-center">
              <img src={img2} alt="" />
              <Link to="/Raizes" className="p-3 text-3xl">Bienes Raizes</Link>
            </div>
          </div>
        </div>

        <div className="">

        </div>
      </div>
    </>
  )
}