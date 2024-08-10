import React, { useState } from 'react';
import Icono from '../assets/icons/confirmar-asistencia.png';
import axios from 'axios';
import { API_URL } from './env';
import Swal from 'sweetalert2';
import useFetch from './useFetch';

const Mesa = ({ numGuests, selectedSeats, setSelectedSeats, name, guestId }) => {
    const [selectedTableId, setSelectedTableId] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const { data } = useFetch("tables");
    const tables = data?.tables || [];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            table_id: selectedTableId,
            number_of_people: numGuests
        };
        try {
            const response = await axios.put(`${API_URL}/guests/${guestId}`, data);
            Swal.fire({
                title: "Sillas seleccionadas exitosamente !",
                text: "Seleciona tu mesa y la cantidad que ocuparas",
                icon: "success"
            });

        } catch (error) {
            alert("ocurrio un error");
        }
    };

    const handleTableClick = (tableId) => {
        const tableSeats = selectedSeats[selectedTableId] || Array(8).fill(false);

        const ocupados = getSelectedSeatsCount(tableSeats); // Función para contar asientos ocupados
        const suposicion = Number(ocupados) + Number(numGuests);

        setSelectedTableId(tableId);

        const newTableSeats = [...tableSeats];

        if (ocupados > 1) {
            // Aquí simplemente respetamos los asientos ya ocupados
            setSelectedSeats(prev => ({
                ...prev,
                [tableId]: tableSeats
            }));
            return;
        }

        setSelectedSeats(prev => ({
            ...prev,
            [tableId]: newTableSeats
        }));
    };
    const handleSeatClick = (seatIndex) => {
        if (selectedTableId !== null) {
            const tableSeats = selectedSeats[selectedTableId] || Array(8).fill(false);
            const ocupados = getOccupiedSeatsCount(); // Asientos ocupados en la mesa
            const selectedSeatsCount = tableSeats.filter(seat => seat).length; // Asientos seleccionados actualmente

            console.log(`Asiento: ${seatIndex}`);
            console.log(`Asientos ocupados: ${ocupados}`);
            console.log(`Asientos seleccionados: ${selectedSeatsCount}`);
            console.log(`Estado de los asientos: ${JSON.stringify(tableSeats)}`);

            // Verifica si el asiento está ocupado
            if (tableSeats[seatIndex] && ocupados >= 8) {
                alert("Este asiento está ocupado. No se puede seleccionar.");
                return;
            }

            // Verifica si hay suficientes asientos disponibles
            if (selectedSeatsCount >= numGuests && !tableSeats[seatIndex]) {
                alert("No puedes seleccionar más asientos.");
                return;
            }

            if (ocupados + selectedSeatsCount >= 8 && !tableSeats[seatIndex]) {
                alert("Mesa insuficiente. No hay suficientes asientos disponibles.");
                return;
            }

            // Alterna el estado del asiento seleccionado
            const newSeats = [...tableSeats];
            newSeats[seatIndex] = !newSeats[seatIndex]; // Alterna la selección del asiento

            setSelectedSeats(prev => ({
                ...prev,
                [selectedTableId]: newSeats
            }));
        }
    };



    const getSelectedSeatsCount = (seats) => {
        const table = tables.find(table => table.id === Number(selectedTableId));
        if (!table) return 0;

        // Asegúrate de que el número de asientos ocupados no exceda la capacidad de la mesa
        const totalSeats = table.capacity_actual;
        const occupiedSeats = seats.filter(seat => seat).length;

        // La cantidad de asientos restantes no debe ser negativa
        const availableSeats = Math.max(table.table_capacity - totalSeats, 0);
        console.log(totalSeats)
        return availableSeats;
    };

    const getOccupiedSeatsCount = () => {
        const table = tables.find(table => table.id === Number(selectedTableId));
        if (!table) return 0;

        const seats = selectedSeats[selectedTableId] || Array(table.capacity_actual).fill(false);
        console.log(seats)
        return seats.filter(seat => seat).length;
    };



    const handleRegister = () => {
        setShowConfirmation(true);
        console.log('Sillas registradas:', selectedSeats[selectedTableId]);
    };

    const renderTable = (index, type, label, tableId) => {
        const isTable = type === 'table';
        const shapeClass = label ? 'w-48 h-24' : 'w-24 h-24 rounded-full';
        const bgColorClass = selectedTableId === tableId ? 'border-cyan-400' : 'border-gray-400';
        const table = tables.find(t => t.id === Number(tableId)); // Encuentra la mesa por ID
        const capacityActual = table?.capacity_actual || 0;
        const opal = Number(capacityActual) + Number(numGuests);

        if (Number(capacityActual) > 8) {
            return (<div
                key={index}
                className="flex items-center justify-center w-24 h-24 rounded-full cursor-not-allowed border-2 border-cyan-400 bg-white text-red-600"
            >
                {isTable ? `Mesa` : label} ocupada
            </div>);
        }

        if (opal > 8) {
            return (<div
                key={index}
                className="flex items-center justify-center w-24 h-24 rounded-full cursor-not-allowed border-2 border-cyan-900 bg-gray-600 text-white font-thin"
            >
                Mesa insuficiente
            </div>);
        }

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
        ...tables.slice(0, 2).map(table => ({ type: 'table', id: table.id.toString() })), { type: 'empty' },
        ...tables.slice(10, 12).map(table => ({ type: 'table', id: table.id.toString() })),
        ...tables.slice(2, 4).map(table => ({ type: 'table', id: table.id.toString() })), { type: 'empty' },
        ...tables.slice(12, 14).map(table => ({ type: 'table', id: table.id.toString() })),
        ...tables.slice(4, 6).map(table => ({ type: 'table', id: table.id.toString() })), { type: 'empty' },
        ...tables.slice(14, 16).map(table => ({ type: 'table', id: table.id.toString() })),
        ...tables.slice(6, 8).map(table => ({ type: 'table', id: table.id.toString() })), { type: 'empty' },
        ...tables.slice(16, 18).map(table => ({ type: 'table', id: table.id.toString() })),
        ...tables.slice(8, 10).map(table => ({ type: 'table', id: table.id.toString() })), { type: 'empty' },
        ...tables.slice(18, 20).map(table => ({ type: 'table', id: table.id.toString() })),
        { type: 'empty' }, ...tables.slice(20, 22).map(table => ({ type: 'table', id: table.id.toString() })),
        { type: 'table', id: tables[22]?.id.toString() }, { type: 'table', id: tables[23]?.id.toString() },
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
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-4xl font-bold mb-4 text-center">Selecciona tu Mesa y Asientos</h1>
                        <div className="grid grid-cols-5 gap-4 mb-8">
                            {tablesLayout.map((table, index) => (
                                <div key={index} className="flex items-center justify-center">
                                    {table.type !== 'empty' ? renderTable(index, table.type, table.label, table.id) : <div className="w-24 h-24"></div>}
                                </div>
                            ))}
                        </div>
                        {selectedTableId !== null && tablesLayout.find(table => table.id === selectedTableId)?.type === 'table' && (
                            <>
                                <h2 className="text-2xl font-semibold mb-4 text-center">Mesa {selectedTableId} - Asientos</h2>
                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {[...Array(8)].map((_, seatIndex) => (
                                        <div
                                            key={seatIndex}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 cursor-pointer 
                ${selectedSeats[selectedTableId]?.[seatIndex] ? 'bg-cyan-600 text-white' :
                                                    (seatIndex < getSelectedSeatsCount(selectedSeats[selectedTableId] || Array(8).fill(false)) ? 'bg-white text-black border-cyan-400' : '')}`}
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
                                                <span>Libres: {getSelectedSeatsCount(selectedSeats[selectedTableId] || Array(8).fill(false))}</span>
                                                <span>Ocupados: {8 - getSelectedSeatsCount(selectedSeats[selectedTableId] || Array(8).fill(false))}</span>
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
                                        type='submit'
                                        className="px-6 py-3 bg-cyan-600 text-white font-bold rounded hover:bg-cyan-700"
                                    >
                                        Registrar
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </>
            )}
        </div>
    );
};

export default Mesa;
