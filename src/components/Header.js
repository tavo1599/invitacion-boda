// src/components/Header.js
import React from 'react';
import Countdown from './Countdown';
import Icono from '../assets/icons/corazon.png';

const Header = () => {
    const targetDate = "2024-08-15T00:00:00";

    return (
        <header className="relative w-full h-screen flex flex-col items-center justify-center">
            <div className="relative w-3/4 h-3/4 flex items-center justify-center">
                <img
                    src="https://media.istockphoto.com/id/868924246/es/foto/novia-y-el-novio-disfrutando-de-su-amor.jpg?s=612x612&w=0&k=20&c=0fzIB3l3T1VdUmTw9KnAhw4BZSlO_kz4eUT0Rli9HU0="  // Reemplaza esta URL con la URL de tu imagen
                    alt="Invitación de Boda"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full  text-white text-center p-4 font-serif">
                    <div className="border-t-2 border-white w-64 mb-4"></div>
                    <h1 className="text-4xl md:text-6xl font-serif">Jose & Mileydi</h1>
                    <div className='flex'>
                    <div className="border-t-2 border-white w-24 mt-4"></div>
                    <p>15.08.2024</p>
                    <div className="border-t-2 border-white w-24 mt-4"></div>
                    </div>
                    <p className="text-xl md:text-2xl">Te invitamos a nuestra boda</p>
                    <div className='pt-20 w-2/4'>
                    <div className='flex justify-center'>
                    <img src={Icono} alt="Icono" className="w-8 h-8 mb-4" />
                    </div>
                
                    <p className=''>
                    Estamos encantados de invitarte a celebrar nuestro matrimonio</p>
                    </div>
                </div>
            </div>
            <div className="w-full py-8 bg-red-900 text-white">
            <h1 className='text-5xl font-serif font-semibold flex justify-center'>Falta</h1>
                <Countdown targetDate={targetDate} />
            </div>
            
           
            

        </header>
    );
};

export default Header;
