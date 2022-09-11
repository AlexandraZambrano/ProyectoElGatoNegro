import React  from 'react';
import '../hojas-de-estilo/Card.css';
import Cards from '../json/data.json';


 function Card() {

    return (
	    <div className="tarjeta3d">
			{
				 Cards.map(card=>{
					return(
							<div className="tarjeta" >
								<figure className='fig' key={card.id}>
								<img src={(`${process.env.PUBLIC_URL}../imagenes/${card.imagen}`)}
									className='frontal' 
									alt=""/>
									<figcaption className="atras" > 
												<h3><strong>{card.nombre}</strong></h3>
												<p>{card.descripcion}</p>
												<p>{card.ingredientes}</p>
												<p>{card.precio}</p>
									</figcaption>
								</figure>				
							</div>						
					)
				})
			}
		</div>
    ); 
}
export default Card;