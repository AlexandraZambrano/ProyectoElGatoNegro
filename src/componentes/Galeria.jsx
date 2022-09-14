import React from 'react'
import Carousel from './Carousel'
import {Images, Comments} from './CarouselData'
import '../hojas-de-estilo/Carousel.css'

function Galeria() {
  return (

    <div className='ins-com'>
      <div className='text-box'>
        <div className='text-box-ins'>
        <h2>Instalaciones</h2>
        <p>En las tinieblas de la Calle del embrujo 28900 Alcobendas, Madrid, España</p>
        </div>
        <Carousel
        fotos={Images}/>
      </div>

      <div className='carousel'>
      <Carousel
      fotos={Comments}/>
      </div>
    </div>
  )
}

export default Galeria

