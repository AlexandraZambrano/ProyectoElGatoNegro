import React from 'react';
import './App.css';
import Galeria from './componentes/Galeria';
import Navbar from './componentes/Navbar.jsx';


function App() {
  return (
    <div className="App">

      <div className='nav'>
      <Navbar />
      </div>

      <Galeria />



    </div>
  );
}

export default App;
