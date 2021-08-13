import React from 'react';
import { SendEmail } from './SendEmail';



export const Contact = () => {

    return (
        <div id="scrollContact" className="text-center mb-5 " style={{color:"#d0eaff"}}>
            <div className="container">
                <div className="row section-title text-center justify-content-center">
                    <hr style={{border:"4px solid #d0eaff", width:"200px", margin:"40px 0" }}/>
                    <h2>Contáctanos</h2>
                    <p>Dejanos un mensaje con tu consulta y un representate se comunicara a la brevedad.</p>
                </div>
                <SendEmail/>
            </div>
        </div>
    )
}
