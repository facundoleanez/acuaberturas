import React from 'react'
import productsData from '../data/productsData';

export const ProductCard = ( {selectedNav} ) => {

    return (
        <>
        {
            productsData.filter( (products) => products.category === selectedNav ).map( (products) => {
                return (
                <div className="card m-1" style={{width: "18rem"}} key={products.id}>
                    <img src={products.src} className="card-img-top" alt={products.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{products.title}</h5>
                        <p className="card-text">{products.description}</p>
                        <a href="#scrollContact">
                                        <button className="btn btn-secondary m-3">Pedí tu presupuesto</button>
                        </a>
                    </div>
                </div>
                )
                })
        }
      </>
    )
}
