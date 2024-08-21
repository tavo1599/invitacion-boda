// src/components/GuestTable.js
import React from 'react';


const GuestTable = () => {
    

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-4 text-center">Tabla de Asistentes</h1>

            <div className="mb-4 flex justify-center space-x-4">
                <button
                    
                    className={`py-2 px-4  text-white rounded`}
                >
                    Asistirán
                </button>
                <button
                    
                    className={`py-2 px-4  text-white rounded`}
                >
                    No Asistirán
                </button>
            </div>

            <table className="min-w-full bg-neutral-800 text-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Nombre</th>
                        <th className="py-2 px-4 border-b">Número de Asistentes</th>
                        <th className="py-2 px-4 border-b">Comida</th>
                        <th className="py-2 px-4 border-b">Peticiones Especiales</th>
                        <th className="py-2 px-4 border-b">Mesa</th>
                    </tr>
                </thead>
                <tbody>
                    
                            <tr>
                                <td className="py-2 px-4 border-b">Nombre</td>
                                <td className="py-2 px-4 border-b">asistentes</td>
                                <td className="py-2 px-4 border-b">plato</td>
                                <td className="py-2 px-4 border-b">peticion</td>
                                <td className="py-2 px-4 border-b">mesa</td>
                            </tr>
                        <tr>
                            <td colSpan="5" className="py-2 px-4 text-center">No hay datos disponibles</td>
                        </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default GuestTable;
