import React from 'react'
import './App.css';
import Navbar from './componentes/Navbar';
import Galeria from './componentes/Galeria'
import Card from './componentes/Card';
import Popular from './componentes/Popular';
import FormImagen from './componentes/FormImagen';
import SeccionMapa from './componentes/SeccionMapa';


function App() {
  return (
    <div className="App">
      <div className='tragos'>
        <Navbar />
      </div>
    <Popular />
    <Card />
    <Galeria />
    <FormImagen />
    <SeccionMapa />
    </div>
  );
}

export default App;
