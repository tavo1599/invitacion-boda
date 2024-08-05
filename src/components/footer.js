// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-left">
                    <p className="text-lg font-bold">José y Miledi</p>
                    <p className="text-sm">15 de agosto 2024</p>
                </div>
                <div className="text-right">
                    <p className="text-sm">Hecho con amor por Grupo Manis. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
