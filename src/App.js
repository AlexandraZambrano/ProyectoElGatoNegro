import React from 'react'
import './App.css';
import Navbar from './componentes/Navbar';
import Galeria from './componentes/Galeria'
import Card from './componentes/Card';
import Popular from './componentes/Popular';
import FormImagen from './componentes/FormImagen';
import SeccionMapa from './componentes/SeccionMapa';
import Hero from './componentes/Hero';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="App">
      <div className='Hero'>
        <Hero />
      </div>
      <div className='tragos'>
        <Navbar />
      </div>
      <Popular />
      <FormImagen />
      <div className='title'><h2>Cocteles</h2></div>
      <Card />
      <Galeria />
      <SeccionMapa />
    <div className='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
