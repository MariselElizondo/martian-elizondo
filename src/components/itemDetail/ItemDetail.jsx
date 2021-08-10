import './ItemDetail.css';

//Hooks
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext';

//Componentes
import { Card, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount'

function ItemDetail({ item, id, title, description, price, pictureUrl }) {

    const [final, setFinal] = useState(false)

    const { guardarEnEstado, isInCart, agregarCantidad, updateQuantity } = useCartContext();

    const handleCount= (quantity, name) => {
        isInCart(id) ? agregarCantidad(id, quantity)
        : guardarEnEstado({'item':{item}, 'quantity':quantity}) 
        updateQuantity(quantity);
        setFinal(true)
        alert('Acaba de añadir al carrito ' + quantity + ' unidades de ' + name)
    }
    
    return (
        <>
            <Card className='detail'>
                <Card.Body>
                    <Row>
                        <Col className='col-5'>
                            <Card.Img variant='top' src={pictureUrl} />
                        </Col>
                        <Col className='col-1'/>
                        <Col className='more-detail col-5'>
                            <Row className="first">
                                <div className="container-1">
                                    <Card.Title className="upper">{title}</Card.Title>
                                    <strong className='price'>$ {price}</strong> 
                                </div>
                                <div className="container-1">
                                    <div>Cod: {id}</div>
                                    <p>{description} </p>  
                                </div>
                            </Row>
                            <Row>
                                { final
                                ? <Link to="/cart"><Button variant="dark">Finalizar compra</Button></Link>
                                : <ItemCount name={title} initial={1} stock={10} onAdd={handleCount} />
                                }
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail
