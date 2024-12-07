import { Link, ScrollRestoration } from "react-router-dom"

import img1 from '../../assets/2.png';
import img2 from '../../assets/4.png';
import img3 from '../../assets/9.png';
import img4 from '../../assets/14.png';


export default function Raizes() {
  return (
    <>
      <ScrollRestoration />
      <div className="sm:h-min-screen">
        <h1 className="text-4xl p-5">Bienes Raizes</h1>
        <div className="flex flex-col items-center justify-center p-10 text-2xl text-justify">
          <p className="mb-10">
            Jarutany's Trade realiza desarrollos y obras y proyectos en diferentes lugares, asi como ofrecemos obras de infraestructura para instalaciones rurales, tales como cabañas, caballerizas, depósitos de agua, albercas para equinos y baños garrapaticidas. Ponte en contacto con nuestro equipo mencionando el área de interés y con gusto te ofreceremos soluciones a tus necesidades.
          </p>
          <div className="flex flex-wrap gap-5 justify-center sm:flex-nowrap sm:justify-between p-5">
            <img
              className="w-60 sm:w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-md"
              src={img1}
              alt="Casa"
            />
            <img
              className="w-60 sm:w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-md"
              src={img2}
              alt="Casa"
            />
            <img
              className="w-60 sm:w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-md"
              src={img3}
              alt="Casa"
            />
            <img
              className="w-60 sm:w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-md"
              src={img4}
              alt="Casa"
            />
          </div>
        </div>
      </div>
    </>
  );
}
