import React from 'react'
import brand from '../images/brand.jpg';

export const Brand = () => {
    return (
        <div >
            <a href="#scrollUp">
                <img  className="brand animate__animated animate__zoomIn" src={ brand } alt="Acuña Aberturas" />          
            </a>
        </div>
    )
}
