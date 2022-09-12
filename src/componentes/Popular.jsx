import React  from 'react';
import '../hojas-de-estilo/Popular.css';
import Cards from '../json/populares.json';


 function Popular() {

    return (
	    <div className="populares">
			{
				 Cards.map(card=>{
					return(
							<div className="tarjeta" key={card.id}>
								
								<h3 className="nombre"><strong>{card.nombre}</strong></h3>

								<div className='layer'></div>
								<img src={(`${process.env.PUBLIC_URL}../imagenes/cocteles-cuadro/${card.imagen}`)}
									className='frontal' 
									alt=""/>	
							</div>						
					)
				})
			}
		</div>

	); 
}
export default Popular;