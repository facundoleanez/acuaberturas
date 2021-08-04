import React from 'react'
import footer from '../images/footer.png';
import { FaFacebook, FaInstagram, FaWhatsapp, FaHeart} from 'react-icons/fa';
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";


export const Footer = () => {
    return (
        <footer className="footer" id="foot">
            <img alt="footer" src={footer} />
            <div className="bg-white" style={{borderTop: "1px solid white"}}>
                <div className="row pb-5">
                    <div className="col-12 col-sm-6 d-flex justify-content-center pb-3 pb-sm-0">
                        <a style={{textDecoration:"none", color:"GrayText"}} href="https://www.facebook.com/acuberturas/">
                        <FaFacebook className="display-1 m-2"/>
                        </a>
                        <a style={{textDecoration:"none", color:"GrayText"}} href="https://www.instagram.com/acu.aberturas/">
                        <FaInstagram className="display-1 m-2"/>
                        </a>
                        <a style={{textDecoration:"none", color:"GrayText"}} href="https://api.whatsapp.com/send?phone=[387][5418184]">
                        <FaWhatsapp className="display-1 m-2"/>
                        </a>
                    </div>
                    <div className="col-12 col-sm-6 px-5" style={{color:"GrayText"}}>
                        <p><GrMail/> acuaberturas@gmail.com</p>
                        <p><ImLocation /> Radio El Esquel N° 2948 B°Intersindical - Salta - Argentina</p>
                    </div>
                </div>
            </div>
            <div className="fs-6 p-1 bg-secondary">
                <div className="row text-center">
                    <div className="col-md-6">
                        <p className="m-0 text-black-50">&copy; 2021 AcuAberturas. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-black-50">
                        <p className="m-0">Made with <span><FaHeart/></span> by MateDev</p>
                    </div>
                </div>

            </div>
        </footer>
    )
}
