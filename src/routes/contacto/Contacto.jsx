import { useState } from "react"

import img from '../../assets/1920x600.png'

export default function Contacto(){
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [motivo, setMotivo] = useState('')

  return(
    <>
      <div className="w-screen">
        <img src={img} alt="imagen" 
        className="w-full h-32 sm:h-96"/>
        <div className="p-10">
          <h1 className="text-2xl pb-5 sm:text-4xl">Nosotros the contactamos</h1>
          <p className="sm:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue mi  ut volutpat pellentesque. Proin nisi nulla, semper id enim et,  sollicitudin convallis mi. Sed egestas blandit odio laoreet finibus. <br/><br/></p>
          
          <div className="flex flex-col">
            <label htmlFor="input">Nombre</label>
            <input type="text" className="rounded-lg p-2 sm:h-10 bg-white border-2 border-grey" />

            <label htmlFor="input">Correo</label>
            <input type="text" className="rounded-lg p-2 sm:h-10 bg-white border-2 border-grey" />
            
            <label htmlFor="input">Telefono</label>
            <input type="tel" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" className="rounded-lg p-2 sm:h-10 bg-white border-2 border-grey" />
            
            <label htmlFor="input">Motivo</label>
            <textarea  type="text" className="h-32 p-2 text-start rounded-lg bg-white border-2 border-grey resize-none"/>
          </div>
        </div>
      </div>
    </>
  )
}