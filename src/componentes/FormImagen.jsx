import React from 'react';
import gatoFormulario from '../assets/img/gatoFormulario.png';
import FormMasters from './FormMasters';
import '../assets/hojas-de-estilo/FormImagen.css';

function FormImagen() {
    return (
      <div className="FormF">
            <img src={gatoFormulario} alt="gato" />
            <FormMasters />
      </div>
    );
  }
  
  export default FormImagen;
