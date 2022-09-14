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


function App() {
  return (
    <div className="App">
        <CookiesWeb />
        <Video />
      <div className='tragos'>
        <Navbar />
      </div>
      <div className='title'><h2>Pociones Populares</h2></div>
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
