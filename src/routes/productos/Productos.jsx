import { ScrollRestoration } from "react-router-dom";

import img1 from '../../assets/5.png';
import img2 from '../../assets/6.png';
import img3 from '../../assets/7.png';
import img4 from '../../assets/8.png';


import Producto from "./Producto"

export default function Productos(){
  const productos = [{nombre: "Te de Manzanilla", sub: "Manzanilla, Chamomile Tea, Matricaria Chamomilla.", img:img1 ,desecripcion: ["Alivia trastornos digestivos, como la diarrea, la indigestión, los síntomas de la enfermedad por reflujo gastroesofágico (ERGE), las náuseas y los gases" ,"Ayuda a tratar úlceras gástricas y gastritis" ,"Descongestiona las vías respiratorias y ayuda con la gripe y el catarro ","Ayuda con dolores menstruales ","Ayuda a tratar infecciones del tracto urinario ","Reduce la presión arterial y es ideal para personas hipertensas ","Alivia el estrés y la ansiedad ","Mejora la calidad del sueño "]},
                     {nombre: "Te de Limon", sub: "Limon, Lemon Grass ( Cymbopogon Citratus)", img:img2 ,desecripcion: ["Ayuda a la digestión: el té de limón ayuda a aliviar problemas digestivos como la indigestión, los gases y los calambres abdominales.","Propiedades antimicrobianas y antifúngicas: el té de limón es efectivo contra ciertos patógenos bacterianos y hongos, lo que puede ayudar a prevenir infecciones y fomentar una piel más saludable. ","Previene enfermedades cardiovasculares: el té de limón tiene un alto contenido en potasio, que ayuda a calmar la tensión en los vasos sanguíneos. ","Alivia el dolor de cabeza o migraña: el té de limón tiene compuestos antiinflamatorios naturales. ","Desinfecta: el té de limón contiene un aceite esencial que se puede usar para limpiar heridas. ","Ayuda a bajar la presión arterial. ","Ayuda a aliviar los dolores musculares,  inflamaciones e infecciones por hongos. ","Ayuda a controlar  el colesterol. "]},
                     {nombre: "Te de Hierba Buena", sub: "Hierbabuena, Spearmint Tea, (Mentha Spicata)", img:img3 ,desecripcion: ["Alivia la tos, el dolor de garganta y los resfriados. ","Combate el mal aliento gracias a sus propiedades antibacterianas y antimicrobianas. ","Puede utilizarse en forma de té o infusión para combatir el estrés y la ansiedad. ","Tomar infusiones de hierbabuena antes de ir a dormir puede ayudar a tratar el insomnio y mejorar la calidad del sueño. ","Mejora la circulación sanguínea y baja la inflamación en casos de tensión o sobrecarga muscular, dolores de cabeza, etc." ,"La hierbabuena, también conocida como menta de jardín, es una variedad de la menta con un aroma intenso y fresco. Su uso curativo viene de tiempos remotos. "]},
                     {nombre: "Oregano", sub: "Oregano Mexicano", img:img4 ,desecripcion: ["Cosechado a mano en el Norte de Jalisco es el condimento perfecto para la cocina mexicana e italiana, asi como para remedios caseros y agricultura orgánica ofrecemos la mejor calidad  contactanos para mayor informe"]},
  ]

  return(
    <>
      <div className="p-10">
        <ScrollRestoration />
        <h1 className='pb-10 text-4xl'>Nuestros Productos</h1>
        <h2 className="pb-5 text-3xl"> Jarutany's Trade Tea&infusions </h2>
        <p className="pb-5 text-2xl text-justify">Ofrecemos Té e infusiones de la más alta calidad, seleccionados cuidadosamente, provenientes de operaciones agrícolas locales que buscan obtener la mejor calidad que exprese y entregue lo mejor de nuestra tierra.</p>
        {productos.map((x) => <Producto prop={x} />)}
      </div>
    </>
  )
}