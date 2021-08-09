import React from 'react'
import header from '../images/header.jpg';
import { NewNav } from './NewNav';

export const Header = () => {
    return (
        <div className="mb-5"
        style={{background:"url(" + header +") no-repeat center center", backgroundSize: "cover", minHeight:"100vh" }} id="scrollUp">

            <NewNav/>
            <header id="header" >
                <div className="center text-light">
                    <div className="overlay">
                        <div className="container">
                            <div className="row animate__animated animate__pulse">
                                <div className="intro-text text-white-50" >
                                    <h1 style={{fontSize: "5vw"}}>Pedi tu presupuesto</h1>
                                    <p style={{fontSize: "2vw"}} className="d-none d-sm-block">Todo tipo de aberturas de aluminio</p>
                                    <a href="#scrollContact">
                                        <button className="btn btn-secondary m-3">CONTACTANOS AHORA</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}