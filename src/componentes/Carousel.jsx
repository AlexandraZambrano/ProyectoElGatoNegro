import React, {useState} from 'react';
import '../hojas-de-estilo/Carousel.css';
import { images } from './CarouselData';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';



export default function Carousel() {

    const [currImg, setCurrImg] = useState(0)

  return (
    <div className='carousel'>
      <div className='carouselInner' style={{backgroundImage: `url(${images[currImg].img})`}}>

      <div className='left' onClick={() => {
        currImg > 0 ? setCurrImg(currImg - 1) : setCurrImg(images.length - 1)
      }}
      >
        < FaAngleLeft />

      </div>

      <div className='center'>
      <h2>{images[currImg].title}</h2>
      <p>{images[currImg].subtitle}</p>
      </div>

      <div className='right' onClick={() => {
        currImg < images.length - 1 ? setCurrImg(currImg + 1) : setCurrImg(0);
      }}>
      <FaAngleRight />
      </div>

      </div>
    </div>
  )
}
