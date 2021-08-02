import React, { useState }from 'react';
import { ProductCard } from './ProductCard';

export const ProductCatNav = () => {
    const [selectedNav, setselectedNav] = useState("ventana");
    const handleClick = (item) => {
        setselectedNav(item)
    }
    return (
        <div id="scrollProducts" className="my-5">
            <h1 className="display-4 text-center mt-3 ">Productos</h1>
            <div className="card text-center container" id="nav-products">
                <div className="card-header ">
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
                        <li className="nav-item">
                            <a onClick={() => handleClick("especial")}
                            className={selectedNav === "especial" ? "nav-link active" : "nav-link "} href="#nav-products">Especiales</a>
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
