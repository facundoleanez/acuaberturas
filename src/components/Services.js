import React from 'react'
import {GiPencilRuler, GiDrill} from 'react-icons/gi';
import {AiOutlineCalculator} from 'react-icons/ai';
export const Services = () => {
    return (
        <div className="container text-center" style={{color:"#d0eaff"}}>
            <div className="row justify-content-center">
                <div className="col-10 col-sm-5 col-md-3  m-4">
                    <GiPencilRuler size="100" className="border-lightblue m-3 rounded-circle border border-5 p-2"/>
                    <h3>Relevamiento y diseño</h3>
                    <p>Diseñamos la carpintería en busca de la utilidad y la estética de las mismas. En nuestras visitas, revisaremos las medidas
 Logrando así una instalación rápida y limpia.</p>
                </div>
                <div className="col-10 col-sm-5 col-md-3  m-4">
                    <AiOutlineCalculator size="100" className="border-lightblue m-3 rounded-circle border border-5 p-2"/>
                    <h3>Computo y presupuesto</h3>
                    <p>En nuestras oficinas, encontraras el personal capacitado para ayudarte a elegir la mejor opción para tu proyecto. Calculando los presupuestos en el acto.</p>
                </div>
                <div className="col-10 col-sm-5 col-md-3  m-4">
                    <GiDrill size="100" className="border-lightblue m-3 rounded-circle border border-5 p-1" />
                    <h3>Instalacion y mantenimiento</h3>
                    <p>Te acompañamos desde el primer paso hasta el ultimo. Al finalizar la instalacion, se procedera con un asesoramiento del correcto uso de las aberturas instaladas.</p>
                </div>
                <hr style={{border:"4px solid #d0eaff", width:"200px", marginBottom:"50px" }}/>
            </div>
        </div>
    )
}
