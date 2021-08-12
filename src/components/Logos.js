import React from 'react'
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';

export const Logos = () => {
    return (
        <div className="container text-center my-5 d-none d-sm-block" >
            <div className="row justify-content-center">
                <div className="col-2">
                    <img src={logo1} alt="logo marcas" style={{height:"100px", width:"auto"}}/>
                </div>
                <div className="col-2">
                    <img src={logo2} alt="logo marcas" style={{height:"100px", width:"auto"}}/>
                </div>
                <div className="col-2">
                    <img src={logo3} alt="logo marcas" style={{height:"100px", width:"auto"}}/>
                </div>
                <div className="col-2">
                    <img src={logo4} alt="logo marcas" style={{height:"100px", width:"auto"}}/>
                </div>
                <div className="col-2">
                    <img src={logo5} alt="logo marcas" style={{height:"100px", width:"auto"}}/>
                </div>
            </div>
        </div>
    )
}
