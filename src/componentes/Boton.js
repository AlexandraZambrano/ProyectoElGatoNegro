import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton(props) {

  return (
    <div
      className='btn'>
      {props.texto}
    </div>
  )
}

export default Boton;