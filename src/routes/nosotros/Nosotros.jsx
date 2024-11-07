import { ScrollRestoration } from "react-router-dom";

import ImgScroller from "./ImgScroller"
import img from '../../assets/4.png'
import img2 from '../../assets/13.png'
import Divider from '@mui/material/Divider';


export default function Productos() {
  return (
    <>
      <div className="sm:text-2xl">
       <ScrollRestoration />
        <ImgScroller />

        <div className="bg-white text-black">
          <div className="p-10">

            <div className="flex flex-wrap sm:flex-nowrap sm:justify-between ">
              <div className="sm:grid sm:place-content-center sm:w-2/3 text-justify sm:pr-10">
                <h1 className="font-normal text-4xl pb-5">Nuestra Historia</h1>
                <p className=" sm:leading-loose ">
                Jarutany's Trade nace en el año 2000, derivado de la necesidad de ofrecer servicios de
                comercialización, asesoría y desarrollo en el ámbito rural y urbano, asi como en los mercados
                globales, participando desde la producción primaria, la agroindustria, el comercio y prestación de
                servicios, innovando y generando oportunidades de desarrollo holístico a quienes participan en los
                diferentes procesos.
                </p>
              </div>
              <div className=" flex items-center justify-center w-full sm:m-5 pt-5 sm:w-1/3 sm:pt-0">
                <img
                  src={img}
                  alt="Imagen del Rancho"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <Divider variant="middle" />

          <div className="flex flex-col items-center p-5">
            <h1 className="font-normal text-4xl pb-5">Misión y Visión</h1>
            <div className="flex flex-wrap gap-y-5  sm:flex-nowrap justify-between p-5 text-justify">
              <p className="sm:leading-loose sm:pr-5">
                Fabricar y poner al alcance de nuestros clientes y consumidores una variedad de productos y
                servicios de elaborados bajo altos estándares de calidad que contribuyan a su bienestar y
                satisfacción.
              </p>
              <p className=" sm:leading-loose sm:pl-5">
                Mejorar de manera continua para la satisfacción de nuestros clientes promoviendo los
                beneficios de nuestros bienes y servicios en el territorio mexicano y expandiendo nuestra
                participación en diversos mercados internacionales.
              </p>
            </div>
          </div>

          <Divider variant="middle" />

          <div className="p-10">
            <div className="flex items-center justify-center">
              <h1 className="font-normal text-4xl pb-5">Nuestra Compañía</h1>
            </div>
            <div className="flex flex-wrap justify-between sm:flex-nowrap">
              <img
                src={img2}
                alt="Imagen del Rancho"
                className="h-full bg-lightGreen sm:w-1/3"
              />
              <p className="sm:leading-loose sm:w-2/3 text-justify sm:place-content-center pt-10 sm:pt-0 sm:pl-10">
              Jarutany's Trade significa ayuda al comercio, considerando al comercio desde la perspectiva del
              que por un lado ofrece, y por otro quien paga por un bien o servicio, buscando aportar
              transacciones que consideren el ganar-ganar como una prioridad, asegurando valor de uso y valor
              de cambio en cada operación.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
