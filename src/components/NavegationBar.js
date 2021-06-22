import React, { useState } from 'react';
import { Nav, Navbar, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';


export const NavegationBar = () => {

    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar  color="white" light expand="md">
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="container">  
                    
                        <NavItem ><NavLink>Nosotros</NavLink></NavItem>
                        <NavItem><NavLink>Productos</NavLink></NavItem>
                        <NavItem><NavLink>Servicios</NavLink></NavItem>
                        <NavItem><NavLink>Obras</NavLink></NavItem>
                        <NavItem><NavLink>Contacto</NavLink></NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
            <div className="inclinado" ></div>
        </div>
    )
}
