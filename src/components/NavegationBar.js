import React, { useState } from 'react';
import { Nav, Navbar, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';


export const NavegationBar = () => {

    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar  color="white" light expand="sm" className="justify-content-end">
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="container justify-content-between">  
                    
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
