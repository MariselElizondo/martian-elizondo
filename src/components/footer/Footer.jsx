import { Col, Row } from 'react-bootstrap';
import './Footer.css';

function Footer() {

    //const [total, setTotal] = useState(0);

    return (
        <div className="container-3">
            <Col className="container-inside">
                <span><strong>MARCAS CON LAS QUE TRABAJAMOS</strong></span><br/>
                <a href="https://www.molinos.com.ar/todas-marcas/cocinero/">Cocinero</a><br/>
                <a href="https://morixe.com.ar/">Morixe</a><br/>
                <a href="http://www.marolio.com.ar/?gclid=CjwKCAjw4KyJBhAbEiwAaAQbEx3lX4k1La1rqpX2KS64eDlpznlCzFI61GgZNZ9NCNCGX3-s2fOzYRoCr8oQAvD_BwE">Marolio</a><br/>
                <a href="https://www.hellmanns.com/ar/quienes-somos-y-lo-que-representamos.html">Helmann's</a><br/>
                <span>¡ Y muchas más !</span>
            </Col>
            <Col className="container-inside">
                dfgd
            </Col>
            <Col className="container-inside">
                <span><strong>SERVICIO AL CLIENTE</strong></span><br/>
                <a href="">Comunidad Coder House</a><br/>
                <a href="">Donde estamos</a><br/>
                <br/><button className="btn btn-secondary footer-button"><a href="">Boton de arrepentimiento</a></button>
            </Col>
        </div>
    )
}

export default Footer
