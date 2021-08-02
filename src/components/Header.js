import React from 'react'
import header from '../images/header.jpg';
import { NewNav } from './NewNav';

export const Header = () => {
    return (
        <div style={{background:"url(" + header +") no-repeat center center", backgroundSize: "cover",  }} id="scrollUp">

            <NewNav/>
            <header id="header" >
                <div className="center text-light">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="intro-text" >
                                    <h1 style={{fontSize: "5vw"}}>Pedi tu presupuesto</h1>
                                    <p style={{fontSize: "2vw"}} className="d-none d-sm-block"> lotem itsum alsdinbvcwnoa asnd oansodjaosndown oasd</p>
                                    <button className="btn btn-primary m-3">CONTACTANOS AHORA</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}