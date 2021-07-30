import React, { useState } from 'react';
import { Nav, Navbar, NavItem, NavLink, NavbarToggler, DropdownItem, Collapse, DropdownMenu, UncontrolledDropdown, DropdownToggle } from 'reactstrap';


export const NavegationBar = () => {

    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div id="scrollUp" className="container" >
            <Navbar expand="md" className="row">
                <NavbarToggler onClick={toggleNavbar} className=" mr-2"/>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className="container justify-content-end" >  
                    
                        <NavItem ><NavLink href="#scrollspyAbout">NOSOTROS</NavLink></NavItem>

                        <UncontrolledDropdown nav inNavbar  >
                            <DropdownToggle nav >PRODCUCTOS</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Ventanas</DropdownItem>
                                <DropdownItem>Puertas</DropdownItem>
                                <DropdownItem>Vidrios</DropdownItem>
                                <DropdownItem>Muros Cortina</DropdownItem>
                                <DropdownItem>Especiales</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem><NavLink>SERVICIOS</NavLink></NavItem>
                        <NavItem><NavLink>OBRAS</NavLink></NavItem>
                        <NavItem><NavLink href="#foot">CONTACTO</NavLink></NavItem>

                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    )
}
