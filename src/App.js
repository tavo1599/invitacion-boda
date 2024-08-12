// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/navbar';
import Info from './components/info';
import Detalles from './components/detalles';
import Asistencia from './components/asistencia';
import Confirmacion from './components/confirmacion';
import Recuerdo from './components/recuerdos';
import Footer from './components/footer';


function App() {
    return (
        <Router>
        <div className="bg-zinc-900 text-white min-h-screen">
            <Navbar />
            <Header />
            <Info/>
            <Detalles/>
            <Asistencia/>
            
            <Routes>
            <Route path="/confirmacion" element={<Confirmacion />} />
            </Routes>
            <Recuerdo/>
            <Footer/>
        </div>
        </Router>
    );
}

export default App;