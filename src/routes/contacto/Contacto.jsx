import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import img from '../../assets/1920x600_3.png';



export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleMotivoChange = (e) => {
    setMotivo(e.target.value);
  };

  const handleSubmit = async () => {
    const formData = { nombre, correo, telefono, motivo };
  
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Email enviado correctamente.');
        setNombre('');
        setCorreo('');
        setTelefono('');
        setMotivo('');
      } else {
        alert('Error al enviar el email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el email.');
    }
  };
  

  return (
    <>
      <div className="w-screen">
        <ScrollRestoration />
        <img src={img} alt="imagen" className="w-full h-32 sm:h-96" />
        <div className="p-10">
          <h1 className="text-2xl pb-5 sm:text-4xl">Nosotros te contactamos</h1>
          <p className="sm:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue mi
            ut volutpat pellentesque. Proin nisi nulla, semper id enim et,
            sollicitudin convallis mi. Sed egestas blandit odio laoreet finibus. <br /><br />
          </p>

          <div className="flex flex-col">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              onChange={handleNombreChange}
              value={nombre}
              type="text"
              className="rounded-lg p-2 sm:h-10 bg-white border-2 border-grey"
            />

            <label htmlFor="correo">Correo</label>
            <input
              id="correo"
              onChange={handleCorreoChange}
              value={correo}
              type="email"
              className="rounded-lg p-2 sm:h-10 bg-white border-2 border-grey"
            />

            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              onChange={handleTelefonoChange}
              value={telefono}
              type="tel"
              pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
              className="rounded-lg p-2 sm:h-10 bg-white border-2 border-grey"
            />

            <label htmlFor="motivo">Motivo</label>
            <textarea
              id="motivo"
              onChange={handleMotivoChange}
              value={motivo}
              className="h-32 p-2 text-start rounded-lg bg-white border-2 border-grey resize-none"
            />

            <button onClick={handleSubmit} className="mt-4 p-2 bg-grey hover:bg-darkGrey/50 active:bg-darkGrey/30 rounded-lg">
              Enviar
            </button>
          </div>
          
        <div className="pt-10">
          <h1 className="text-2xl sm:text-4xl">Tu Contactanos</h1>
          <p>Da click para copiar al portapapel</p>
          <div className="pt-5 pb-5">
            <p className="font-medium">Telefono:</p>
            <p className="hover:underline">52-346-113-2727</p>
          </div>
          <div className="pb-5">
            <p className="font-medium">Correo de Ventas:</p>
            <p className="hover:underline">ventas@jarutany.com</p>
          </div>

          <div>
            <p className="font-medium">Redes Sociales:</p>
            <div>
              <a href="">Facebook</a>
            </div>
            <div>
              <a href="https://www.instagram.com/jarutany/">Instagram</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
