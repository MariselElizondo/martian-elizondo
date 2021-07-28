import './ItemDetail.css';

//Componentes
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
                                <ItemCount id={id} name={title} price={price} initial={1} stock={10} onAdd={handleCount} />
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail
