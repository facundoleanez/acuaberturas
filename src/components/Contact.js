import React from 'react'

export const Contact = () => {
    return (
        <div id="scrollContact" className="text-center " style={{color:"#d0eaff"}}>
            <div className="container">
                <div className="section-title text-center">
                    <h2>Contáctanos</h2>

                    <p>Dejanos un mensaje con tu consulta y un representate se comunicara a la brevedad.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 " >
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" className="form-control" placeholder="Nombre" required="required"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" id="email" className="form-control" placeholder="E-mail" required="required"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control" rows="4" placeholder="Mensage" required></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
