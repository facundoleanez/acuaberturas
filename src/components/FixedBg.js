import React from 'react';
import fixed from '../images/fixed.jpg';


export const FixedBg = () => {
    return (

            <div className="text-center my-5"
            style={{
                color: "#d0eaff",
                background: "#444 url("+fixed+") center top no-repeat fixed",
                backgroundSize: "cover"
            }} id="scrollAbout">
                
                    <div className="container" >
                        <div className="row justify-content-center">
                            <div className="col-8  shadow-lg p-3 m-5" style={{backgroundColor: "rgba(17, 77, 114, 0.507)"}}>
                                <h1>Nosotros</h1>
                                <p>Somos emprendedores de la industria del aluminio motivados a innovar constantemente para desarrollar un sistema eficiente que brinde a nuestros clientes una experiencia única y productos de alta calidad. Nuestra vasta experiencia y capacitación constante nos permite ofrecer soluciones de calidad al mercado; nuestro espíritu emprendedor y la pasión por lo que hacemos nos permite ofrecer un servicio único y personalizado.</p>
                            </div>
                        </div>
                    </div>
                
            </div>

    )
}
