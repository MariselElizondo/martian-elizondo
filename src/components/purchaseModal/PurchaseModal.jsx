
import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Link } from "react-router-dom";


function PurchaseModal( { phrase, orderCode } ) {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <button className='btn btn-secondary' onClick={handleShow}> { phrase } </button>
        {(orderCode !== 0) && 
            <>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closebutton>
                    <Modal.Title> Su compra se ha realizado con éxito </Modal.Title>
                </Modal.Header>
                <Modal.Body> Su código de orden es {orderCode} </Modal.Body>
                <Modal.Footer>
                    <Link to="/">
                        <button className='btn btn-secondary' onClick={handleClose}> Regresar al inicio </button>
                    </Link>
                </Modal.Footer>
                </Modal>
            </>}
        </>
    );
  }
  
  export default PurchaseModal