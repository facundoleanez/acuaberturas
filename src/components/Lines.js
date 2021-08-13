import React from 'react'

export const Lines = () => {
    return (
        <div className="accordion container d-flex justify-content-center" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Linea Herrero Pesado
                        <p><span className="fs-5 badge bg-warning mx-4">H</span></p>
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Linea liviana, con tamara central, corte de hojas a 90°, marco y contramarco a 45°. Buena calidad de herrajes y hermeticidad
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Linea Rotonda 640
                        <p><span className="fs-5 badge bg-success mx-4">R</span></p>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Línea pesada de mediana prestación, corte de hojas, marco y contra marco a 45°. Resiste DVH. Se nota una mejora en herrajes y hermeticidad comparada con la línea herrero.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Linea Moderna
                        <p><span className="fs-5 badge bg-danger mx-4">M</span></p>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Línea Pesada de media alta prestación . Es versátil sus hojas pueden ir a 90° como a 45°. Marco y contramarco a 45°. Resiste DVH. Se nota una mejora en herrajes y hermeticidad comparada con la línea herrero.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Linea Mass R60
                        <p><span className="fs-5 badge bg-primary mx-4">+60</span></p>
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Línea pesada de alta prestaciones. Resiste DVH y TVH. Resiste aberturas de gran tamaño. Herrajes y hermeticidad superior a las líneas Modena y Rotonda 640.
                    </div>
                </div>
            </div>
        </div>
    )
}
