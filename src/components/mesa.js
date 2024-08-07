import React, { useState } from 'react';
import Icono from '../assets/icons/confirmar-asistencia.png';

const Mesa = ({ numGuests, selectedSeats, setSelectedSeats, name }) => {
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
        console.log('Sillas registradas:', selectedSeats[selectedTable * 8]);
    };

    const renderTable = (index, type, label) => {
        const isTable = type === 'table';
        const shapeClass = label ? 'w-48 h-24' : 'w-24 h-24 rounded-full';
        const bgColorClass = selectedTable === index ? 'border-cyan-600' : 'border-gray-400';

        return (
            <div
                key={index}
                className={`flex items-center justify-center cursor-pointer border-2 ${shapeClass} ${bgColorClass}`}
                onClick={() => isTable && handleTableClick(index)}
            >
                {isTable ? `Mesa ${index - 9}` : label}
            </div>
        );
    };

    const tablesLayout = [
        { type: 'special' }, { type: 'special' }, { type: 'label', label: 'Mesa Central' }, { type: 'special' }, { type: 'special' },
        { type: 'empty' }, { type: 'special' }, { type: 'empty' }, { type: 'special' }, { type: 'empty' },
        { type: 'table' }, { type: 'table' }, { type: 'empty' }, { type: 'table' }, { type: 'table' },
        { type: 'table' }, { type: 'table' }, { type: 'empty' }, { type: 'table' }, { type: 'table' },
        { type: 'table' }, { type: 'table' }, { type: 'empty' }, { type: 'table' }, { type: 'table' },
        { type: 'table' }, { type: 'table' }, { type: 'empty' }, { type: 'table' }, { type: 'table' },
        { type: 'empty' }, { type: 'table' }, { type: 'table' }, { type: 'table' }, { type: 'table' },
        { type: 'label', label: 'entrada', shape: 'rectangle' }, { type: 'empty' }, { type: 'label', label: 'SSHH', shape: 'rectangle' },
        { type: 'label', label: 'Orquesta', shape: 'rectangle' }
    ];

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
                    <div className="grid grid-cols-5 gap-4 mb-8">
                        {tablesLayout.map((table, index) => (
                            <div key={index} className="flex items-center justify-center">
                                {table.type !== 'empty' ? renderTable(index, table.type, table.label) : <div className="w-24 h-24"></div>}
                            </div>
                        ))}
                    </div>
                    {selectedTable !== null && tablesLayout[selectedTable].type === 'table' && (
                        <>
                            <h2 className="text-2xl font-semibold mb-4 text-center">Mesa {selectedTable + 1} - Asientos</h2>
                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                {[...Array(8)].map((_, seatIndex) => (
                                    <div
                                        key={seatIndex}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 cursor-pointer ${selectedSeats[selectedTable * 8]?.[seatIndex] ? 'bg-cyan-600 text-white' : 'bg-gray-200'}`}
                                        onClick={() => handleSeatClick(seatIndex)}
                                    >
                                        {selectedSeats[selectedTable * 8]?.[seatIndex] ? name : seatIndex + 1}
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
