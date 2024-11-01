import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/inicio">Inicio</Link>
                <Link to="/sobre">Sobre</Link>
            </nav>
            <Routes>
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/sobre" element={<Sobre />} />
            </Routes>
        </Router>
    );
};

export default App;

