import React from 'react'
import nosotros from '../images/nosotros.jpg';
import {Card, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap';

export const Nosotros = () => {
    return (
        <div>
            <Card inverse>
                <CardImg src={ nosotros } alt="Nosotros" />
                <CardImgOverlay className="row justify-content-center">
                    <div className="col-6 align-self-center text-tag " >
                        <CardTitle tag="h5">Creados para solucionar problemas</CardTitle>
                        <CardText>Somos emprendedores de la industria del aluminio motivados a innovar constantemente para desarrollar un sistema eficiente que brinde a nuestros clientes una experiencia única y productos de alta calidad. Nuestra vasta experiencia y capacitación constante nos permite ofrecer soluciones de calidad al mercado; nuestro espíritu emprendedor y la pasión por lo que hacemos nos permite ofrecer un servicio único y personalizado.</CardText>
                    </div>
                </CardImgOverlay>
            </Card>
        
        </div>
    )
}
