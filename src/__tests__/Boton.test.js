import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Boton from '../components/Boton';

test('cambia el texto al hacer clic', () => {
    const { getByText } = render(<Boton />);
    const boton = getByText(/Hacer clic aquí/i);
    fireEvent.click(boton);
    expect(getByText(/¡Gracias por hacer clic!/i)).toBeInTheDocument();
});
