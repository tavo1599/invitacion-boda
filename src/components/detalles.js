import React from 'react';
import Icono1 from '../assets/icons/iglesia.png';
import Icono2 from '../assets/icons/civil.png';
import Icono3 from '../assets/icons/fiesta.png';

const Detalles = () => {
 return (
    <div className="px-4 py-28 bg-fuchsia-200 text-center text-black">
            <h1 className="text-6xl font-serif font-semibold mb-20">Detalles de la boda</h1>
            <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="flex-1">
                <div className="flex justify-center">
                <img src={Icono1} alt="Icono" className="w-20 h-20 mb-4" />
                </div>
                    <h2 className="text-2xl font-serif font-semibold mb-2">Ceremonia</h2>
                    <p className="text-4xl font-semibold">10 am</p>
                    <p className="text-lg">Iglesia: Templo Matriz de Santa Catalina</p>
                    <a
                        href="https://maps.app.goo.gl/cvujk3qg8iXQ6Yin7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:underline"
                    >
                        Ubicación en el mapa
                    </a>
                </div>
                <div className="flex-1">
                <div className="flex justify-center">
                <img src={Icono3} alt="Icono" className="w-20 h-20 mb-4" />
                </div>
                    <h2 className="text-2xl font-serif font-semibold mb-2">Recepción</h2>
                    <p className="text-4xl font-semibold">1 pm</p>
                    <p className="text-lg">Dirección: Local 'Florentina, Jr. Carabaya Nº 613'</p>
                    <a
                        href="https://maps.app.goo.gl/QQ1KoTjDBcbHaUZe6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:underline"
                    >
                        Ubicación en el mapa
                    </a>
                </div>
            </div>
        </div>
 );
};
export default Detalles;