import React from 'react';
import gatoFormulario from '../media/gatoFormulario.png';
import FormMasters from './FormMasters';
import '../hojas-de-estilo/FormImagen.css';

function FormImagen() {
    return (
      <div className="FormF">
            <img src={gatoFormulario} alt="gato" />
            <FormMasters />
      </div>
    );
  }
  
  export default FormImagen;
