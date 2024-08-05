// src/components/Mesa.js
import React, { useState } from 'react';
import Icono from '../assets/icons/confirmar-asistencia.png';

const Mesa = ({ numGuests, selectedSeats, setSelectedSeats }) => {
    const [selectedTable, setSelectedTable] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleTableClick = (index) => {
        setSelectedTable(index);
    };

    const handleSeatClick = (seatIndex) => {
        if (selectedTable !== null) {
            const tableStart = selectedTable * 8;
            const tableSeats = selectedSeats[tableStart] || Array(8).fill(false);

            if (getSelectedSeatsCount(tableSeats) < numGuests || tableSeats[seatIndex]) {
                const newSeats = [...tableSeats];
                newSeats[seatIndex] = !newSeats[seatIndex]; // Alterna la selección del asiento

                setSelectedSeats(prev => ({
                    ...prev,
                    [tableStart]: newSeats
                }));
            }
        }
    };

    const getSelectedSeatsCount = (seats) => {
        return seats.filter(seat => seat).length;
    };

    const handleRegister = () => {
        setShowConfirmation(true);
        // Aquí puedes manejar el registro de la selección de sillas
        console.log('Sillas registradas:', selectedSeats[selectedTable * 8]);
        // Puedes agregar lógica adicional para registrar la selección
    };

    return (
        <div className="p-4">
            {showConfirmation ? (
                <div className="text-center bg-pink-200">
                    <div className="flex justify-center">
                    <img src={Icono} alt="Icono" className="w-24 h-24 mb-4" />
                    </div>
                    <h1 className="text-2xl font-bold mb-4">¡Confirmación de Asistencia!</h1>
                    <p className="text-lg mb-4">Tu selección de mesa y sillas ha sido registrada con éxito.</p>
                    <p className="text-lg">¡Gracias por confirmar tu asistencia!</p>
                </div>
            ) : (
                <>
                    <h1 className="text-4xl font-bold mb-4 text-center">Selecciona tu Mesa y Asientos</h1>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[...Array(30)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-24 h-24 flex items-center justify-center rounded-full border-2 cursor-pointer ${selectedTable === index ? 'border-cyan-600' : 'border-gray-400'}`}
                                onClick={() => handleTableClick(index)}
                            >
                                Mesa {index + 1}
                            </div>
                        ))}
                    </div>
                    {selectedTable !== null && (
                        <>
                            <h2 className="text-2xl font-semibold mb-4 text-center">Mesa {selectedTable + 1} - Asientos</h2>
                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                {[...Array(8)].map((_, seatIndex) => (
                                    <div
                                        key={seatIndex}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 cursor-pointer ${selectedSeats[selectedTable * 8]?.[seatIndex] ? 'bg-cyan-600' : 'bg-gray-200'}`}
                                        onClick={() => handleSeatClick(seatIndex)}
                                    >
                                        {seatIndex + 1}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-semibold mb-2 text-center">Estado de los Asientos</h2>
                                <div className="flex justify-center">
                                    <div className="w-full max-w-md">
                                        <div className="flex justify-between mb-2">
                                            <span>Ocupados: {getSelectedSeatsCount(selectedSeats[selectedTable * 8] || Array(8).fill(false))}</span>
                                            <span>Libres: {8 - getSelectedSeatsCount(selectedSeats[selectedTable * 8] || Array(8).fill(false))}</span>
                                        </div>
                                        <div className="bg-gray-200 rounded-full h-4">
                                            <div
                                                className="bg-cyan-600 h-full rounded-full"
                                                style={{ width: `${(getSelectedSeatsCount(selectedSeats[selectedTable * 8] || Array(8).fill(false)) / 8) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <button
                                    onClick={handleRegister}
                                    className="px-6 py-3 bg-cyan-600 text-white font-bold rounded hover:bg-cyan-700"
                                >
                                    Registrar
                                </button>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Mesa;
