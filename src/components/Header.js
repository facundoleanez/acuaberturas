import React from 'react'
import { NavegationBar } from './NavegationBar'
import header from '../images/header.jpg';

export const Header = () => {
    return (
        <div style={{background:"url(" + header +") no-repeat center center", backgroundSize: "cover",  }}>

            <NavegationBar/>
            <header id="header" >
                <div className="center text-light">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="intro-text" >
                                    <h1 style={{fontSize: "5vw"}}>Pedi tu presupuesto</h1>
                                    <p style={{fontSize: "2vw"}} className="d-none d-sm-block"> lotem itsum alsdinbvcwnoa asnd oansodjaosndown oasd</p>
                                    <button className="btn btn-primary m-3">contactanos ahora</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}