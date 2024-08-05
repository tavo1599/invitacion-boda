import React from 'react';
import Icono1 from '../assets/icons/iglesia.png';
import Icono2 from '../assets/icons/civil.png';
import Icono3 from '../assets/icons/fiesta.png';

const Detalles = () => {
 return (
    <div className="px-4 py-28 bg-fuchsia-100 text-center text-black">
            <h1 className="text-6xl font-serif font-semibold mb-20">Detalles de la boda</h1>
            <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="flex-1">
                <div className="flex justify-center">
                <img src={Icono1} alt="Icono" className="w-20 h-20 mb-4" />
                </div>
                    <h2 className="text-2xl font-serif font-semibold mb-2">Ceremonia</h2>
                    <p className="text-4xl font-semibold">4 pm</p>
                    <p className="text-lg">Dirección: Iglesia San Pedro, Calle Principal 123, Ciudad</p>
                    <a
                        href="https://maps.google.com/?q=Registro+Civil+de+la+Ciudad,+Avenida+de+la+Ley+456,+Ciudad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:underline"
                    >
                        Ubicación en el mapa
                    </a>
                </div>
                <div className="flex-1">
                <div className="flex justify-center">
                <img src={Icono2} alt="Icono" className="w-20 h-20 mb-4" />
                </div>
                    <h2 className="text-2xl font-serif font-semibold mb-2">Civil</h2>
                    <p className="text-4xl font-semibold">2 pm</p>
                    <p className="text-lg">Dirección: Registro Civil de la Ciudad, Avenida de la Ley 456, Ciudad</p>
                    <a
                        href="https://maps.google.com/?q=Registro+Civil+de+la+Ciudad,+Avenida+de+la+Ley+456,+Ciudad"
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
                    <p className="text-4xl font-semibold">6 pm</p>
                    <p className="text-lg">Dirección: Hotel Grand Plaza, Avenida de la Fiesta 789, Ciudad</p>
                    <a
                        href="https://maps.google.com/?q=Registro+Civil+de+la+Ciudad,+Avenida+de+la+Ley+456,+Ciudad"
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