import React from 'react'
import nosotros from '../images/nosotros.jpg';
import {Card, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap';

export const Nosotros = () => {
    return (
        <div className="container" >
            <Card inverse>
                <CardImg src={ nosotros } alt="Nosotros" />
                <CardImgOverlay>
                    <div className="col-sm-12 col-md-8 col-lg-6 p-4 text-tag mx-auto mt-5" >
                        <CardTitle tag="h3" >Creados para solucionar problemas</CardTitle>
                        <CardText className="d-none d-md-block">Somos emprendedores de la industria del aluminio motivados a innovar constantemente para desarrollar un sistema eficiente que brinde a nuestros clientes una experiencia única y productos de alta calidad. Nuestra vasta experiencia y capacitación constante nos permite ofrecer soluciones de calidad al mercado; nuestro espíritu emprendedor y la pasión por lo que hacemos nos permite ofrecer un servicio único y personalizado.</CardText>
                    </div>
                    <h1 className="display-4 text-center mt-3 d-none d-md-block">¿Quienes Somos?</h1>
                </CardImgOverlay>
            </Card>
            <h1 className="display-4 text-center mt-3 d-md-none ">¿Quienes Somos?</h1>
            <hr/>
        </div>
    )
}
