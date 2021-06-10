import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import brand from '../images/brand.jpeg';

export const NavegationBar = () => {
    return (
        <div>
            <Navbar  color="white" light expand="md">
                <Nav className="container" navbar>  
                    <img width="15%" src={ brand }  />
                    <NavItem><NavLink>Nosotros</NavLink></NavItem>
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
