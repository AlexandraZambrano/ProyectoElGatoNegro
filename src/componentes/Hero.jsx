import React from "react";
import '../hojas-de-estilo/Hero.css';
import Boton from "./Boton";

function Hero(props) {
  return (
    <div className="hero">
      <div className="info-content">
        <h3><strong>El Gato Negro</strong></h3>
        <h1>Coctelería en Madrid</h1>
        <p>Una de las ciudades cosmopolita del mundo te ofrece adentrarte en la degustación mas aterradora de todos los
          tiempos, inspirada en pociones creadas por brujas que podian transformarse en gatos negros en la edad media.</p>

      </div>
      <div className="contenedor-boton">
        <Boton
          texto='Reservar' />
      </div>
    </div>
  );

}

export default Hero;



