import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../la-logo.svg'
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
                            <NavDropdown.Item className="navbar-parent" href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item className="navbar-parent" href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item className="navbar-parent" href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className="navbar-parent" href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="ms-auto" href="#account">ACCOUNT</Nav.Link>
                        <Nav.Link href="#bag">BAG</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBase
