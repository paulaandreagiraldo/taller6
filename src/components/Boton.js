import React, { useState } from 'react';

const Boton = () => {
    const [texto, setTexto] = useState('Hacer clic aquí');

    const handleClick = () => {
        setTexto('¡Gracias por hacer clic!');
    };

    return (
        <button onClick={handleClick}>{texto}</button>
    );
};

export default Boton;
