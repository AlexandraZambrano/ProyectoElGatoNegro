import React from 'react'
import './App.css';
import Navbar from './componentes/Navbar';
import Galeria from './componentes/Galeria'
import Card from './componentes/Card';
import Popular from './componentes/Popular';
import FormImagen from './componentes/FormImagen';
import SeccionMapa from './componentes/SeccionMapa';
import Footer from './componentes/Footer';
import Video from './componentes/Video';
import CookiesWeb from './componentes/CookiesWeb';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componentes/Home';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/card" element={<Card />} />
        <Route path="/instalaciones" element={<Galeria />}/>
        <Route path="/reseñas" element={<Galeria />}/>
        <Route path="/ubicacion" element={<SeccionMapa />}/>
        <Route path="/reserva" element={<FormImagen />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App