import './Contact.css'

//Hooks
import { useState } from 'react'

//Componentes
import { Button } from 'react-bootstrap'

//Iconos
import instagram from "../../icons/instagram.svg";
import linkedin from "../../icons/linkedin.svg";
import dialog from "../../icons/dialog.svg";

function Contact() {

    const [count, setCount] = useState('')
   
 
    const handleSum = () => {
    }


    return (
        <>
            <div className="contact">
                <span id="follow">Seguime en:</span>
                <a className="contact-icon" href="https://www.instagram.com/marisel.elizondo/">
                    <img src={instagram} alt="instagram"></img>
                </a>
                <a className="contact-icon" href="https://www.linkedin.com/in/casandra-elizondo-2981b0174/">
                    <img src={linkedin} alt="instagram"></img>
                </a>
                <div className="contact-web" style={{float:'right', clear:'left'}}>
                    <img src={dialog} alt="dialog"></img>
                    <span> ¿Tenés una consulta?</span><br/>
                    <span><a href="">Contactate con nosotros</a></span>
                </div>
            </div>      
        </>
    )
}

export default Contact
