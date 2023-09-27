import React from 'react'
import CookiesWeb from './CookiesWeb'
import Video from './Video'
import Navbar from './Navbar'
import Popular from './Popular'
import FormImagen from './FormImagen'
import Card from './Card'
import Galeria from './Galeria'
import SeccionMapa from './SeccionMapa'
import Footer from './Footer'
import "../App.css"

function Home() {
  return (
    <div className='App'>
      <CookiesWeb />
        <Video />
      <div className='tragos'>
        <Navbar />
      </div>
      <div className='title'><h2>Pociones Populares</h2></div>
      <Popular />
      <FormImagen />
      <div className='title'><h2>Cocteles</h2></div>
      <Card />
      <Galeria />
      <SeccionMapa />
    <div className='Footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Home
