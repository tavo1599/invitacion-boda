import React from 'react';
import Icono from '../assets/icons/anillos-de-boda.png';

const Info = () => {
    return (
    <div className="w-full py-36 text-white">
    <div className="max-w-3xl mx-auto px-4 text-center">
    <div className="flex justify-center">
        <img src={Icono} alt="Icono" className="w-20 h-20 mb-4" />
        </div>
        <p className="text-4xl mb-12 font-sans">¡Bienvenidos a nuestro matrimonio!</p>
        <p className="text-xl mb-4">Adivina! Nos casamos!!!</p>
        <p className="text-xl mb-4">
            ¡Estamos super felices! Nos sentimos en las nubes y queremos compartir contigo todo nuestro amor. Por eso estamos preparando un matrimonio que hará historia y en el que te lo pasarás genial.
        </p>
        <p className="text-xl mb-4">
            Mientras llega el gran día hemos creado esta web con un montón de secciones para que estés al día de todo y para compartir nuestra historia de amor.
        </p>
        <p className="text-xl mb-4">
            Una cosa importante, en la sección asistencia puedes confirmar si vas al matrimonio o no. Confírmanos lo antes posible por favor, porque así organizarlo todo nos será mucho más fácil.
        </p>
        <p className="text-xl">
            Disfruta la web y nos vemos muy pronto, mil besos!
        </p>
    </div>
</div>

);
};
    export default Info;