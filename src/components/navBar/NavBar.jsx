import 'bootstrap/dist/css/bootstrap.css'
import './NavBar.css';

import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <Navbar id="nav-bar" sticky="top" bg='dark' variant='dark'>
                {/* to={`/categories/${cat.id}`} activeClassName="currentCategory" className="text-white">{cat.name}< */}
                <NavLink className="navbar-brand" to="/">Martian</NavLink>
                <Nav >
                    {/* Etiqueta a hace refrescar, quita funcionabilidad a react. Sirve solo cuando voy a externo.*/}
                    <NavLink className="nav-link" to="/categoria/almacen">Almacen</NavLink>
                    <NavLink className="nav-link" to="/categoria/verduleria">Verdulería</NavLink>
                    <NavLink className="nav-link" to="/categoria/panaderia">Panadería</NavLink>
                    <NavLink className="nav-link" to="/categoria/carniceria">Carnicería</NavLink> 
                </Nav>
                <CartWidget/>
            </Navbar>
        </>
    )
}

export default NavBar
