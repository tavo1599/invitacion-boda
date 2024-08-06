import Icono from '../assets/icons/corazon.png';
import React, { useState, useEffect, useCallback } from 'react';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="relative flex flex-col items-center justify-center p-8">
      <div className="relative flex items-center justify-center w-96 h-72 bg-white bg-opacity-90 rounded-full shadow-lg">
        {/* Imagen de hojas doradas alrededor del borde */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/images/hojas2.png" 
            alt="Hojas doradas" 
            className="absolute inset-[-10%] w-[120%] h-[120%]"
            style={{ 
              transform: 'scale(1.5)',
              transformOrigin: 'center',
              zIndex: -1 // Para que esté detrás del contenido pero en el borde
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800" style={{ fontFamily: 'Great Vibes, cursive' }}>Faltan:</h2>
          <div className="flex items-center space-x-1 text-black text-xl font-semibold">
            {Object.keys(timeLeft).map((unit, index) => {
              const unitLabels = {
                days: 'Días',
                hours: 'Horas',
                minutes: 'Minutos',
                seconds: 'Segundos',
              };
              return (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-white bg-opacity-50 rounded-full text-lg font-bold">
                    {timeLeft[unit]}
                  </div>
                  <div className="mt-2 mb-7 text-gray-700 text-sm" style={{ fontFamily: 'Kalnia Glaze, cursive' }}>{unitLabels[unit]}</div>
                  
                </div>
                
              );
              
            })}
            
          </div>
          <div className='py-1 flex justify-center'>
                        <img src={Icono} alt="Icono" className="w-8 h-8 mb-4" />
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
