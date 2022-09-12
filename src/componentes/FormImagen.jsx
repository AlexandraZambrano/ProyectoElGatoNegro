import React from 'react';
import gatoFormulario from '../media/gatoFormulario.png';
import FormMasters from './FormMasters';

function FormImagen() {
    return (
      <div className="App">
            <img src={gatoFormulario} alt="gato" />
            <FormMasters />
      </div>
    );
  }
  
  export default FormImagen;
