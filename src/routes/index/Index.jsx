import { Link, ScrollRestoration } from "react-router-dom"

import ImgScroller from "./ImgScroller"
import img from '../../assets/800x800.png'
import img2 from '../../assets/1200x800.png'


export default function Index(){

  return(
    <>
      <div className="bg-white h-full">
        <ScrollRestoration />
        <ImgScroller />
        
        <div className="p-10 text-black text-justify">
          <h1 className="font-normal text-2xl sm:ml-5">Conocenos</h1>
          <div className="mt-5 flex flex-wrap justify-center h-fit sm:flex-nowrap sm:justify-between">
            <p className="leading-loose text-lg sm:w-1/2 sm:mr-5 sm:m-5">
              Jarutany's Trade significa ayuda al comercio, considerando al comercio desde la perspectiva del
              que por un lado ofrece, y por otro quien paga por un bien o servicio, buscando aportar
              transacciones que consideren el ganar-ganar como una prioridad, asegurando valor de uso y valor
              de cambio en cada operación. <br/><br/>
              Jarutany's Trade nace en el año 2000, derivado de la necesidad de ofrecer servicios de
              comercialización, asesoría y desarrollo en el ámbito rural y urbano, así como en los mercados
              globales, participando desde la producción primaria, la agroindustria, el comercio y prestación de
              servicios, innovando y generando oportunidades de desarrollo holístico a quienes participan en los
              diferentes procesos.
            </p>
            <div className="sm:w-1/2 mt-5 sm:mt-0 sm:ml-5 bg-lightGreen flex items-center justify-center overflow-hidden relative">
              <img className="object-cover w-fit sm:h-full" src={img2} alt="" />
            </div>
          </div>
        </div>

        <div className="text-black flex flex-col items-center p-5">
          <h1 className="font-normal text-2xl">Nuestros servicios</h1>
          <div className="flex flex-wrap justify-center sm:flex-nowrap sm:justify-between p-5 sm:p-10 w-full ">
            <div className="w-full m-2 sm:m-4 flex flex-wrap justify-center">
              <img src={img} alt="" />
              <Link to="/Productos" className="p-3 hover:underline text-2xl">Productos</Link>
            </div>
            <div className="w-full m-2 sm:m-4 items-center flex flex-wrap justify-center">
              <img src={img} alt="" />
              <Link to="/Ganado" className="p-3 hover:underline text-2xl">Ganado</Link>
            </div>
            <div className="w-full m-2 sm:m-4 flex flex-wrap justify-center">
              <img src={img} alt="" />
              <Link to="" className="p-3 text-2xl">Bienes Raizes</Link>
            </div>
          </div>
        </div>

        <div className="">

        </div>
      </div>
    </>
  )
}