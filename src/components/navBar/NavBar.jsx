import 'bootstrap/dist/css/bootstrap.css'
import './NavBar.css';

import { Navbar, Nav } from 'react-bootstrap'
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
