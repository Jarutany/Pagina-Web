import { ScrollRestoration } from "react-router-dom";

import img1 from '../../assets/10.png';
import img2 from '../../assets/11.png';
import img3 from '../../assets/12.png';
import img4 from '../../assets/1.png';

import Animal from './Animal';

export default function Ganado() {
  const animales = [
    {
      nombre: "Pato",
      raza: "Blanco y Cafe",
      img: img1,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue",
    },
    {
      nombre: "Vaca",
      raza: "Normal",
      img: img2,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue",
    },
    {
      nombre: "Caballo",
      raza: "Pura Sangre",
      img: img3,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper tellus eu risus ullamcorper commodo. Vivamus ac interdum orci, sed fringilla lacus. Integer sollicitudin dignissim est, congue",
    },
  ];

  return (
    <>
      <div className="p-10">
        <ScrollRestoration />
        <h1 className="pb-10 text-4xl">Ganado</h1>
        <p className="p-5 text-2xl text-justify">
          En Jarutany's Trade nos dedicamos a la crianza y desarrollo de
          Equinos, Ovinos y otros animales de granja, si estas interesado por
          favor contáctanos mencionando tu inquietud y pronto recibiras la
          información solicitada asi como lo que esta disponible para venta.
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:p-10 w-full">
          <img
            className="w-60 sm:w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-md"
            src={img4}
            alt="Borregos"
          />
          <img
            className="w-60 sm:w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-md"
            src={img1}
            alt="Pato"
          />
          <img
            className="w-60 sm:w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-md"
            src={img2}
            alt="Vaca"
          />
          <img
            className="w-60 sm:w-72 md:w-80 lg:w-96 object-cover rounded-lg shadow-md"
            src={img3}
            alt="Caballo"
          />
        </div>
      </div>
    </>
  );
}
