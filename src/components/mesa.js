import React, { useState, useEffect } from 'react';
import Icono from '../assets/icons/confirmar-asistencia.png';

const Mesa = ({ numGuests, selectedSeats, setSelectedSeats, name }) => {
    const [selectedTableId, setSelectedTableId] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleTableClick = (tableId) => {
        setSelectedTableId(tableId);
        // Rellenar automáticamente las sillas con el nombre del invitado
        const tableSeats = Array(8).fill(false);
        for (let i = 0; i < numGuests; i++) {
            tableSeats[i] = true;
        }
        setSelectedSeats(prev => ({
            ...prev,
            [tableId]: tableSeats
        }));
    };

    const handleSeatClick = (seatIndex) => {
        if (selectedTableId !== null) {
            const tableSeats = selectedSeats[selectedTableId] || Array(8).fill(false);

            if (getSelectedSeatsCount(tableSeats) < numGuests || tableSeats[seatIndex]) {
                const newSeats = [...tableSeats];
                newSeats[seatIndex] = !newSeats[seatIndex]; // Alterna la selección del asiento

                setSelectedSeats(prev => ({
                    ...prev,
                    [selectedTableId]: newSeats
                }));
            }
        }
    };

    const getSelectedSeatsCount = (seats) => {
        return seats.filter(seat => seat).length;
    };

    const handleRegister = () => {
        setShowConfirmation(true);
        console.log('Sillas registradas:', selectedSeats[selectedTableId]);
    };

    const renderTable = (index, type, label, tableId) => {
        const isTable = type === 'table';
        const shapeClass = label ? 'w-48 h-24' : 'w-24 h-24 rounded-full';
        const bgColorClass = selectedTableId === tableId ? 'border-cyan-600' : 'border-gray-400';

        return (
            <div
                key={index}
                className={`flex items-center justify-center cursor-pointer border-2 ${shapeClass} ${bgColorClass}`}
                onClick={() => isTable && handleTableClick(tableId)}
            >
                {isTable ? `Mesa` : label}
            </div>
        );
    };

    const tablesLayout = [
        { type: 'special', id: 'special-1' }, { type: 'special', id: 'special-2' }, { type: 'label', label: 'Mesa Central', id: 'central' }, { type: 'special', id: 'special-3' }, { type: 'special', id: 'special-4' },
        { type: 'empty' }, { type: 'special', id: 'special-5' }, { type: 'empty' }, { type: 'special', id: 'special-6' }, { type: 'empty' },
        { type: 'table', id: '1' }, { type: 'table', id: '2' }, { type: 'empty' }, { type: 'table', id: '11' }, { type: 'table', id: '12' },
        { type: 'table', id: '3' }, { type: 'table', id: '4' }, { type: 'empty' }, { type: 'table', id: '13' }, { type: 'table', id: '14' },
        { type: 'table', id: '5' }, { type: 'table', id: '6' }, { type: 'empty' }, { type: 'table', id: '15' }, { type: 'table', id: '16' },
        { type: 'table', id: '7' }, { type: 'table', id: '8' }, { type: 'empty' }, { type: 'table', id: '17' }, { type: 'table', id: '18' },
        { type: 'table', id: '9' }, { type: 'table', id: '10' }, { type: 'empty' }, { type: 'table', id: '19' }, { type: 'table', id: '20' },
        { type: 'empty' }, { type: 'table', id: '21' }, { type: 'table', id: '22' }, { type: 'table', id: '23' }, { type: 'table', id: '24' },
        { type: 'label', label: 'entrada', shape: 'rectangle', id: 'entrance' }, { type: 'empty' }, { type: 'label', label: 'SSHH', shape: 'rectangle', id: 'sshh' },
        { type: 'label', label: 'Orquesta', shape: 'rectangle', id: 'orchestra' }
    ];

    return (
        <div className="p-4">
            {showConfirmation ? (
                <div className="text-center bg-neutral-700 text-pink-200">
                    <div className="flex justify-center">
                        <img src={Icono} alt="Icono" className="w-24 h-24 mb-4 my-9" />
                    </div>
                    <h1 className="text-2xl font-bold mb-4 ">¡Confirmación de Asistencia!</h1>
                    <p className="text-lg mb-4 ">Tu selección de mesa y sillas ha sido registrada con éxito.</p>
                    <p className="text-lg py-8">¡Gracias por confirmar tu asistencia!</p>
                </div>
            ) : (
                <>
                    <h1 className="text-4xl font-bold mb-4 text-center">Selecciona tu Mesa y Asientos</h1>
                    <div className="grid grid-cols-5 gap-4 mb-8">
                        {tablesLayout.map((table, index) => (
                            <div key={index} className="flex items-center justify-center">
                                {table.type !== 'empty' ? renderTable(index, table.type, table.label, table.id) : <div className="w-24 h-24"></div>}
                            </div>
                        ))}
                    </div>
                    {selectedTableId !== null && tablesLayout.find(table => table.id === selectedTableId).type === 'table' && (
                        <>
                            <h2 className="text-2xl font-semibold mb-4 text-center">Mesa {selectedTableId} - Asientos</h2>
                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                {[...Array(8)].map((_, seatIndex) => (
                                    <div
                                        key={seatIndex}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 cursor-pointer ${selectedSeats[selectedTableId]?.[seatIndex] ? 'bg-cyan-600 text-white' : 'bg-gray-200'}`}
                                        onClick={() => handleSeatClick(seatIndex)}
                                    >
                                        {selectedSeats[selectedTableId]?.[seatIndex] ? name : seatIndex + 1}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-semibold mb-2 text-center">Estado de los Asientos</h2>
                                <div className="flex justify-center">
                                    <div className="w-full max-w-md">
                                        <div className="flex justify-between mb-2">
                                            <span>Ocupados: {getSelectedSeatsCount(selectedSeats[selectedTableId] || Array(8).fill(false))}</span>
                                            <span>Libres: {8 - getSelectedSeatsCount(selectedSeats[selectedTableId] || Array(8).fill(false))}</span>
                                        </div>
                                        <div className="bg-gray-200 rounded-full h-4">
                                            <div
                                                className="bg-cyan-600 h-full rounded-full"
                                                style={{ width: `${(getSelectedSeatsCount(selectedSeats[selectedTableId] || Array(8).fill(false)) / 8) * 100}%` }}
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
