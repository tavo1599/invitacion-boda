// src/components/Confirmacion.js
import React, { useState } from 'react';
import Mesa from './mesa';
import useFetch from './useFetch';
import axios from 'axios';
import { API_URL } from './env';

const Confirmacion = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [numGuests, setNumGuests] = useState(1);
    const [meal, setMeal] = useState('pollo');
    const [specialRequests, setSpecialRequests] = useState('');
    const [attending, setAttending] = useState(null);
    const [showMesa, setShowMesa] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState({}); // Estado para los asientos seleccionados
    const [selectedTable, setSelectedTable] = useState(null); // Mesa seleccionada
    const { data, loading, error } = useFetch(`guests`);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (attending === 'yes') {
            setShowMesa(true);
        }
    };

    const handel = (e) => {
        axios
            .post(`${API_URL}/guests`, data, {
                // headers: {
                //     Authorization: `Bearer ${token()}`,
                // },
            });
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-pink-200 text-black rounded">

            {!showMesa ? (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-lg font-medium mb-2">¿Asistirás?</label>
                        <div className="flex space-x-4 justify-center mb-4">
                            <label>
                                <input
                                    type="radio"
                                    name="attending"
                                    value="yes"
                                    checked={attending === 'yes'}
                                    onChange={() => setAttending('yes')}
                                />
                                Sí
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="attending"
                                    value="no"
                                    checked={attending === 'no'}
                                    onChange={() => setAttending('no')}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {attending === 'yes' && (
                        <>
                            <form onSubmit={handel}>
                                <div className="mb-4">
                                    <label className="block text-lg font-medium mb-2">Número de asistentes</label>
                                    <input
                                        type="number"
                                        value={numGuests}
                                        onChange={(e) => setNumGuests(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        required
                                    />
                                </div>
                                <div className="mb-4 flex space-x-4">
                                    <div className="flex-1">
                                        <label className="block text-lg font-medium mb-2">Plato a servirse</label>
                                        <select
                                            value={meal}
                                            onChange={(e) => setMeal(e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        >
                                            <option value="pollo">Pollo</option>
                                            <option value="chancho">Chancho</option>
                                            <option value="res">Res</option>
                                            <option value="vegetariana">Vegetariana</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-lg font-medium mb-2">Peticiones especiales</label>
                                    <textarea
                                        value={specialRequests}
                                        onChange={(e) => setSpecialRequests(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    ></textarea>
                                </div>
                            </form>

                        </>
                    )}

                    {(attending === 'yes' || attending === 'no') && (
                        <>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2">Nombre</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2">Apellidos</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2">Correo electrónico</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required={attending === 'yes'}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-lg font-medium mb-2">Número de teléfono</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="px-6 py-3 bg-cyan-600 text-white font-bold rounded hover:bg-cyan-700"
                    >
                        Elegir Mesa
                    </button>
                </form>
            ) : (
                <Mesa numGuests={numGuests} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} selectedTable={selectedTable} setSelectedTable={setSelectedTable} />
            )}
        </div>
    );
};

export default Confirmacion;
