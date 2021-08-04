import React from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_jru98yc', 'template_ie7osem', e.target, 'user_kNqttFWtfqLvC8G4QTq4B')
        e.target.reset();
        alert("Mensaje enviado exitosamente")
    }
    return (
        <div id="scrollContact" className="text-center mb-5 " style={{color:"#d0eaff"}}>
            <div className="container">
                <div className="row section-title text-center justify-content-center">
                    <hr style={{border:"4px solid #d0eaff", width:"200px", margin:"40px 0" }}/>
                    <h2>Contáctanos</h2>
                    <p>Dejanos un mensaje con tu consulta y un representate se comunicara a la brevedad.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 " >
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="hidden" name="contact_number"/>
                                        <input type="text" name="user_name" className="form-control" placeholder="Nombre" required="required"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" name="user_email" className="form-control" placeholder="E-mail" required="required"/>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                                <textarea name="message" className="form-control" rows="4" placeholder="Mensage" required id="mensaje"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <button type="submit" value="send" className="btn btn-secondary btn-lg col-12">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
