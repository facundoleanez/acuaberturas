import React, { useState }from 'react';
import { Lines } from './Lines';
import { ProductCard } from './ProductCard';

export const ProductCatNav = () => {
    const [selectedNav, setselectedNav] = useState("");
    const handleClick = (item) => {
        setselectedNav(item)
    }
    return (
        <div id="scrollProducts" className="my-5">   
            <div className="card text-center container" id="nav-products">
                <h2 style={{color:"GrayText"}} className=" text-center mt-3">NUESTRAS LINEAS</h2>
                <Lines/>
                <h2 style={{color:"GrayText"}} className=" text-center mt-3">PRODUCTOS</h2>
                <div className="container d-flex justify-content-center">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item" >
                            <a onClick={() => handleClick("ventana")}
                            className={selectedNav === "ventana" ? "nav-link active" : "nav-link "} href="#nav-products">Ventanas</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => handleClick("puerta")}
                            className={selectedNav === "puerta" ? "nav-link active" : "nav-link"} href="#nav-products">Puertas</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => handleClick("vidrio")}
                            className={selectedNav === "vidrio" ? "nav-link active" : "nav-link "} href="#nav-products">Vidrios</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => handleClick("muro")}
                            className={selectedNav === "muro" ? "nav-link active" : "nav-link "} href="#nav-products">Muro Cortina</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body d-flex flex-wrap justify-content-around">
                <ProductCard selectedNav={selectedNav}/>
                </div>
            </div>
        </div>
    )
}
