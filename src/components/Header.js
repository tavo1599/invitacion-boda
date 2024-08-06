import React from 'react';
import Countdown from './Countdown'; // Asegúrate de importar el componente Countdown
import Icono from '../assets/icons/corazon.png';

const Header = () => {
    const targetDate = "2024-08-15T00:00:00";

    return (
        <div className="relative flex flex-col items-center justify-center text-center p-8 min-h-screen">
            {/* Imagen de fondo con gradiente */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/images/tela.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Contenedor principal con marco transparente */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4 font-serif">
                {/* Marco transparente con fecha y nombres */}
                <div className="bg-white bg-opacity-60 border-4 border-white p-6 rounded-lg shadow-lg relative">
                    <div className="mb-4">
                        <p className="text-lg md:text-xl font-bold text-custom-brown">{targetDate.split('T')[0]}</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-custom-brown mb-4 p-4 inline-block tracking-widest font-elegant">
                        Jose & Mileydi
                    </h1>

                    {/* Botón "Asistir" */}
                    <a
                        href="#rsvp" // Puedes cambiar el enlace o acción según tu necesidad
                        className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 bg-custom-brown text-white py-2 px-6 rounded-lg shadow-lg font-bold text-lg hover:bg-blue-800"
                    >
                        Asistir
                    </a>
                </div>

                {/* Mensaje de invitación */}
                <div className='pt-10 w-3/4 md:w-2/4'>
                    <div className='flex justify-center'>
                        <img src={Icono} alt="Icono" className="w-8 h-8 mb-4" />
                    </div>
                    <p className='font-bold text-xl md:text-2xl text-custom-brown'>
                        Estamos encantados de invitarte a celebrar nuestro matrimonio
                    </p>
                </div>
            </div>

            {/* Contador de cuenta regresiva */}
            <div className="mb-7 w-full py-10 text-white z-0">
                <Countdown targetDate={targetDate} />
            </div>
        </div>
    );
};

export default Header;
