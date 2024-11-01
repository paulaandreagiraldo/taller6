import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeComponent = () => {
    const { tema, toggleTema } = useTheme();
    
    return (
        <div style={{ background: tema === 'claro' ? '#fff' : '#333', color: tema === 'claro' ? '#000' : '#fff' }}>
            <p>El tema actual es: {tema}</p>
            <button onClick={toggleTema}>Cambiar Tema</button>
        </div>
    );
};

export default ThemeComponent;
