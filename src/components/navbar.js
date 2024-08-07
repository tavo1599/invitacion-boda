import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-zinc-900 py-4">
            <div className="flex items-center justify-between px-4">
                <div className="text-3xl font-extrabold text-custom-brown" style={{ fontFamily: 'Great Vibes, cursive' }}>
                    J + M
                </div>
                <button 
                    className="md:hidden text-black focus:outline-none" 
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className="hidden md:flex space-x-6">
                    <a href="#bienvenidos" className="font-bold text-custom-brown hover:text-violet-200 mb-2 transition">¡BIENVENIDOS!</a>
                    <a href="#blog-de-boda" className="font-bold text-custom-brown hover:text-violet-200 mb-2 transition">BLOG DE BODA</a>
                    <Link to="#confirmacion" className="font-bold text-custom-brown hover:text-violet-200 mb-2 transition">CONFIRMA TU ASISTENCIA</Link>
                    <a href="#contactanos" className="font-bold text-custom-brown hover:text-violet-200 mb-2 transition">CONTÁCTANOS</a>
                    <a href="#libro-de-visitas" className="font-bold text-custom-brown hover:text-violet-200 mb-2 transition">LIBRO DE VISITAS</a>
                </div>
            </div>
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
                <ul className="flex flex-col items-center space-y-4 mt-4 text-center">
                    <li><a href="#bienvenidos" className="font-bold text-gray-800 hover:text-violet-200 mb-2 transition">¡BIENVENIDOS!</a></li>
                    <li><a href="#blog-de-boda" className="font-bold text-gray-800 hover:text-violet-200 mb-2 transition">BLOG DE BODA</a></li>
                    <li><Link to="#confirmacion" className="font-bold text-gray-800 hover:text-violet-200 mb-2 transition">CONFIRMA TU ASISTENCIA</Link></li>
                    <li><a href="#contactanos" className="font-bold text-gray-800 hover:text-violet-200 mb-2 transition">CONTÁCTANOS</a></li>
                    <li><a href="#libro-de-visitas" className="font-bold text-gray-800 hover:text-violet-200 mb-2 transition">LIBRO DE VISITAS</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
