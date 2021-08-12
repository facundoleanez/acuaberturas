import React from 'react';
import { sendEmail } from '../utils/globalFx';

export const WorkUs = () => {
    return (
        <form className="contact-form" onSubmit={sendEmail}> 
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Trabaja con Nosotros</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* <form>
                        <div className="mb-3">
                            <input type="hidden" name="contact_number"/>
                            <label for="recipient-name" className="col-form-label"  >Nombre y Apellido</label>
                            <input type="text" name="user_name" className="form-control" id="recipient-name" required="required"/>
                        </div>

                        <div className="mb-3">
                            <label for="recipient-email" className="col-form-label">E-mail</label>
                            <input type="email" name="user_email" className="form-control" id="recipient-email" required="required"/>
                        </div>
                         <div className="mb-3">
                            <label for="message-text" className="col-form-label">Mensaje:</label>
                            <textarea name="message" className="form-control" id="message-text" required></textarea>
                        </div>
                        </form> */}
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
                                <textarea name="message" className="form-control" rows="4" placeholder="Mensaje" required id="mensaje"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                            <button type="submit" value="send" className="btn btn-secondary btn-lg col-12">Enviar Mensaje</button>
                        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" value="send" className="btn btn-primary">Enviar Mensaje</button> */}
                    </div>
                    </div>
                </div>
            </div>
        </form>
    )
}