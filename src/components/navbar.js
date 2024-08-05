import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black py-4">
            <div className="text-center text-2xl font-bold text-white mb-2">J + M</div>
            <ul className="flex justify-center space-x-6">
                <li><a href="#bienvenidos" className="hover:underline text-white">¡BIENVENIDOS!</a></li>
                <li><a href="#blog-de-boda" className="hover:underline text-white">BLOG DE BODA</a></li>
                <li><Link to="#confirmacion" className="hover:underline text-white">CONFIRMA TU ASISTENCIA</Link></li>
                <li><a href="#contactanos" className="hover:underline text-white">CONTÁCTANOS</a></li>
                <li><a href="#libro-de-visitas" className="hover:underline text-white">LIBRO DE VISITAS</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
