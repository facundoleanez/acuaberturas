import React from 'react'


export const NewNav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark justify-content-end container animate__animated animate__backInRight">
            <div className="container-end">
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#scrollAbout">NOSOSTROS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollServices">SERVICIOS</a>
                        </li>    
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#scrollProducts">PRODCUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollWorks">OBRAS</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollContact">CONTACTO</a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>

    )
}