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

                                <p><strong>CARPINTERÍA DE ALUMINIO</strong> Contamos con la más alta calidad de productos y tecnología debido a que nos ocupamos de seleccionar empresas líderes en el rubro, tales como ALUAR , HYDRO y GIESSE, los cuáles nos permiten fabricar productos competitivos por la excelencia de su elaboración y calidad.</p>
                                <p><strong>VIDRIOS</strong> El ahorro de energía, el control de ruidos, la Seguridad y la Protección son aspectos cada vez más importantes en los programas de necesidades de nuestros clientes y en las especificaciones del vidrio. El objetivo de nuestra empresa es brindar productos confiables para dichos requerimientos.</p>
                            </div>
                        </div>
                    </div>
                
            </div>

    )
}
