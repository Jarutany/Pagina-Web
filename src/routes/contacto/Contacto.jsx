import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import img from '../../assets/1920x600_3.png';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [motivo, setMotivo] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Track loading state

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
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    setIsLoading(true); // Lock the button

    try {
      const response = await fetch('http://72.167.43.171:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        alert('Email enviado correctamente.');
        setNombre('');
        setCorreo('');
        setTelefono('');
        setMotivo('');
      } else {
        const errorText = await response.text();
        console.error('Server Error:', errorText);
        alert('Error al enviar el email.');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        console.error('Error: Timeout');
        alert('Error: El servidor tardó demasiado en responder. Intenta de nuevo.');
      } else {
        console.error('Error:', error);
        alert('Error al enviar el email.');
      }
    } finally {
      setIsLoading(false); // Unlock the button
    }
  };

  return (
    <>
      <div className="w-screen">
        <ScrollRestoration />
        <img src={img} alt="imagen" className="relative w-full h-full" />
        <div className="p-10">
          <h1 className="text-2xl pb-5 sm:text-4xl">Nosotros te contactamos</h1>
          <p className="sm:text-2xl">
            En nuestra empresa, valoramos la comunicación con nuestros clientes. Si tienes dudas, comentarios o deseas recibir información detallada sobre nuestros servicios, no dudes en contactarnos. <br />
            Nuestro equipo estará encantado de resolver cualquier inquietud y proporcionarte la atención personalizada que mereces. Completa el siguiente formulario con tus datos, y uno de nuestros asesores se pondrá en contacto contigo a la brevedad. <br /><br />
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

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`mt-4 p-2 rounded-lg ${
                isLoading ? 'bg-grey/50 cursor-not-allowed' : 'bg-grey hover:bg-darkGrey/50 active:bg-darkGrey/30'
              }`}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
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
