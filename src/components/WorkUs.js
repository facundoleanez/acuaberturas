import React from 'react';
import { SendEmail } from './SendEmail';


export const WorkUs = () => {
    return (

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Trabaja con Nosotros</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <SendEmail/>

                        </div>
                    </div>
                </div>
            </div>

    )
}