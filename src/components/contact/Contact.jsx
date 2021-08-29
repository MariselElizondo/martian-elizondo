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
                <a className="contact-icon" href="">
                    <img src={instagram} alt="instagram"></img>
                </a>
                <a className="contact-icon" href="">
                    <img src={linkedin} alt="instagram"></img>
                </a>
                <a id="contact-web-icon" href="">
                    <img src={dialog} alt="dialog"></img>
                </a>
            </div>      
        </>
    )
}

export default Contact
