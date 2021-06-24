import React, { useState } from 'react';
import { Nav, Navbar, NavItem, NavLink, NavbarToggler, DropdownItem, Collapse, DropdownMenu, UncontrolledDropdown, DropdownToggle } from 'reactstrap';


export const NavegationBar = () => {

    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div id="scrollUp">
            <Navbar  color="white" light expand="sm" className="justify-content-end">
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="container justify-content-between">  
                    
                        <NavItem ><NavLink href="#scrollspyAbout">Nosotros</NavLink></NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav >Productos</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Ventanas</DropdownItem>
                                <DropdownItem>Puertas</DropdownItem>
                                <DropdownItem>Vidrios</DropdownItem>
                                <DropdownItem>Muros Cortina</DropdownItem>
                                <DropdownItem>Especiales</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

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
