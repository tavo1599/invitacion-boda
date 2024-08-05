// src/components/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="flex flex-col items-center mx-2">
                <span className="text-4xl md:text-5xl font-bold text-white">{timeLeft[interval]}</span>
                <span className="text-sm uppercase tracking-wide text-white">{interval}</span>
            </div>
        );
    });

    return (
        <div className="flex justify-center items-center p-4 rounded-lg shadow-lg mt-4">
            {timerComponents.length ? timerComponents : <span className="text-2xl">¡Es el día de la boda!</span>}
        </div>
    );
};

export default Countdown;
