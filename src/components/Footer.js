import React from 'react'
import footer from '../images/footer.png';
import { FaFacebook, FaInstagram, FaWhatsapp,} from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";


export const Footer = () => {
    return (
        <div className="footer" id="foot">
            <img alt="footer" src={footer} />
            <div className="bg-white" style={{borderTop: "1px solid white"}}>
                <div className="row pb-5">
                    <div className="col-12 col-sm-6 d-flex justify-content-center pb-3 pb-sm-0" style={{color:"GrayText"}}>
                        <a href="https://www.facebook.com/acuberturas/">
                        <FaFacebook className="display-1"/>
                        </a>
                        <a href="https://www.instagram.com/acu.aberturas/">
                        <FaInstagram className="display-1" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=[387][5418184]">
                        <FaWhatsapp className="display-1" />
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 px-5">
                        <p><GrMail/> acuaberturas@gmail.com</p>
                        <p><ImLocation /> Radio El Esquel N° 2948 B°Intersindical - Salta - Argentina</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
