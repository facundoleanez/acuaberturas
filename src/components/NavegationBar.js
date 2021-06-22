import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';


export const NavegationBar = () => {
    return (
        <div>
            <Navbar  color="white" light expand="md">
                <Nav navbar className="container">  
                   
                    <NavItem ><NavLink>Nosotros</NavLink></NavItem>
                    <NavItem><NavLink>Productos</NavLink></NavItem>
                    <NavItem><NavLink>Servicios</NavLink></NavItem>
                    <NavItem><NavLink>Obras</NavLink></NavItem>
                    <NavItem><NavLink>Contacto</NavLink></NavItem>

                </Nav>
            </Navbar>
            <div className="inclinado" ></div>
        </div>
    )
}
