import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';

function NavBar() {
    return (
        <>
            <Navbar sticky="top" bg='dark' variant='dark'>
                <Navbar.Brand href="#">Martian</Navbar.Brand>
                    <Nav >
                    <Nav.Link href="#">Almacen</Nav.Link>
                    <Nav.Link href="#">Verdulería</Nav.Link>
                    <Nav.Link href="#">Panadería</Nav.Link>
                    <Nav.Link href="#">Carnicería</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBar
