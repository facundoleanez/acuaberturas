import React from 'react'
import ventana from '../images/ventana.jpg';

export const ProductCard = () => {
    return (
        <div className="card m-1" style={{width: "18rem"}}>
            <img src={ventana} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Ventana guillotina</h5>
                <p className="card-text">- Ideal para espacios reducidos.
- Ideal para habitaciones que 
necesiten buena ventilación.
- Recomendable para baño, cocina,
oficinas, etc</p>
            </div>
        </div>
      
    )
}
