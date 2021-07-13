import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';
import CartWidget from '../cartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <Navbar id="nav-bar" sticky="top" bg='dark' variant='dark'>
                <Navbar.Brand href="#">Martian</Navbar.Brand>
                <Nav >
                    <Nav.Link href="#">Almacen</Nav.Link>
                    <Nav.Link href="#">Verdulería</Nav.Link>
                    <Nav.Link href="#">Panadería</Nav.Link>
                    <Nav.Link href="#">Carnicería</Nav.Link>
                </Nav>
                <CartWidget/>
            </Navbar>
        </>
    )
}

export default NavBar
