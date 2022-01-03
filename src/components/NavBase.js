import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import stlogo from '../stussy-logo.svg'
import '../css/navbar.css'

const NavBase = () => {
    return (
        <Navbar bg="white" expand="lg" className="navbar-parent">
            <Container fluid className="d-flex" style={{ marginLeft: 0, marginRight: 0}}>
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={stlogo}
                    width="50"
                    height="50"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-fluid">
                        <Nav.Link href="#search">SEARCH</Nav.Link>
                        <NavDropdown title="SHOP" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ACC1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ACC2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">ACC3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">ALL</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link id="navbar-spacing" href="#account">ACCOUNT</Nav.Link>
                        <Nav.Link href="#bag">BAG</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBase
