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
                        <h5 className="card-title">
                            {products.title}</h5>
                        <p className="card-text">{products.description}</p>
                        <div className="d-flex ">
                            <p><span className="fs-5 badge bg-warning mx-1">H</span></p>
                            <p><span className="fs-5 badge bg-success mx-1">R</span></p>
                            <p><span className="fs-5 badge bg-danger mx-1">M</span></p>
                            <p><span className="fs-5 badge bg-primary mx-1">+60</span></p>
                        </div>
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
