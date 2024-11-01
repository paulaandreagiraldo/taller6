import React, { useState, useEffect } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log(`Contador ha cambiado: ${contador}`);
    }, [contador]);

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
};

export default Contador;
