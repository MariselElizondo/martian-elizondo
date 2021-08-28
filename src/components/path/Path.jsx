import 'bootstrap/dist/css/bootstrap.css'
import './Path.css';

import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import go from "../../icons/go.svg";

function Path( { category, id, title } ) {

    return (
        <>
            <Nav>
                <NavLink to="/" className="path-text"> Home </NavLink> &nbsp;&nbsp;

                {category !== undefined && 
                    <>
                        <img src={go} alt="go"></img>&nbsp;&nbsp;
                        <NavLink to={`/categoria/${category}`}> 
                            {category[0].toUpperCase() + category.slice(1, category.length) }
                        </NavLink> &nbsp;&nbsp;
                    </>}

                    {id !== '' && 
                    <>
                        <img src={go} alt="go"></img>&nbsp;&nbsp;
                        <NavLink to={`/categoria/${category}/${id}`}> 
                            {title}
                        </NavLink> &nbsp;&nbsp;
                    </>}
                
            </Nav>
            <br/>
        </>
    )
}

export default Path
