import React from 'react';
import './App.css';
import Carousel from './componentes/Carousel';
import Navbar from './componentes/Navbar.jsx'

function App() {
  return (
    <div className="App">

      <div className='nav'>
      <Navbar />
      </div>

      <div className='Container-crs'>
      <Carousel />
      </div>

      <div className='black'></div>

    </div>
  );
}

export default App;
