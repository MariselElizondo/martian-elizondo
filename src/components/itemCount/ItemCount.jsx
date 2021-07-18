import { useState, useEffect } from 'react'
import { Button, Col, Card } from 'react-bootstrap'
import './ItemCount.css';

function ItemCount({ name, initial, stock, onAdd }) {

    const [count, setCount] = useState(initial)
    const [itemStock, setItemStock] = useState(stock)

    useEffect(() => {
        setItemStock(stock - count)
        setCount(initial)
    }, [onAdd])
 
    const handleSum = () => {
        setCount(count + 1)
    }

    const handleRest = () => {
        setCount(count - 1)
    }

    return (
        <>
            <Card id="card">
                <Card.Img variant="top" src="https://media.airedesantafe.com.ar/p/d6c97d0616eba6644c1d632de53e4d67/adjuntos/268/imagenes/002/057/0002057900/se-puede-decir-que-escala-macroscopica-una-habitacion-esta-vacia-cuando-se-retiran-todos-los-elementos-que-estaban-alli-embargo-la-habitacion-nunca-estara-vacia.jpg" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Stock: {stock} unidades </h6> 
                    <Col>
                        <Button variant="secondary" className="btn-count" 
                        onClick={() => count > 0 ? handleRest(itemStock): alert("No puede ser inferior a cero")}>
                            -
                        </Button>
                        <span id="count">{count}</span>
                        <Button variant="secondary" className="btn-count" 
                        onClick={() => count < stock ? handleSum(itemStock): alert("No hay más stock")}>
                            +
                        </Button>  
                        <Button variant="dark" id="add-cart"onClick={() => onAdd(count, name)}>Agregar al carrito</Button>                
                    </Col>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCount
