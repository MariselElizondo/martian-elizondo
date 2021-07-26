import './ItemDetail.css';

import { Card, Col, Row } from 'react-bootstrap'
import ItemCount from '../itemCount/ItemCount'

function ItemDetail({ id, title, description, price, pictureUrl }) {

    const handleCount= (quantity, name) => {
        alert('Acaba de añadir al carrito ' + quantity + ' unidades de ' + name)
    }
    
    return (
        <>
            <Card className='detail'>
                <Card.Body>
                    <Row>
                        <Col className='col-5'>
                            <Card.Img variant="top" src={pictureUrl} />
                        </Col>
                        <Col>
                            <Row>
                                <Card.Title className="upper">{title}</Card.Title>
                                <div className="container-1">
                                    <p>{description} </p>
                                    <div>Cod: {id}</div> 
                                    <div className="container-1 mb-3">
                                        <strong className='price'>{price}</strong>
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <ItemCount name={title} initial={1} stock={10} onAdd={handleCount} />
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail
