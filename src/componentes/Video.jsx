import React from 'react'
import videogato from '../media/gatonegro.mp4'
import '../hojas-de-estilo/video.css';
import Boton from './Boton';
import { Link } from 'react-router-dom';

const video = () => {
  return (
    <div className='video'>
      <div className='overlay'></div>
      <video src={videogato} autoPlay loop muted />
      <div className="info-content">
        <h3><strong>El Gato Negro</strong></h3>
        <h1>Coctelería en Madrid</h1>
        <p>Una de las ciudades cosmopolita del mundo te ofrece adentrarte en la degustación mas aterradora de todos los
          tiempos, inspirada en pociones creadas por brujas que podian transformarse en gatos negros en la edad media.</p>
        <div className="contenedor-boton">
          <Link to={'/reserva'}><Boton
            texto='Reservar' /></Link>
        </div>
      </div>

    </div>
  )
}

export default video