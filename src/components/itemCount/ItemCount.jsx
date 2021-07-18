import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './ItemCount.css'

function ItemCount({ name, initial, stock, onAdd }) {

    const [count, setCount] = useState(initial)
    const [itemStock, setItemStock] = useState(stock)
 
    const handleSum = () => {
        setCount(count + 1)
    }

    const handleDiscount = () => {
        setCount(count - 1)
    }

    const update = () => {
        let newStock = itemStock - count
        setItemStock(newStock)
        setCount(initial)
    }

    return (
        <>
            <Card id="card">
                <Card.Img variant="top" src="https://media.airedesantafe.com.ar/p/d6c97d0616eba6644c1d632de53e4d67/adjuntos/268/imagenes/002/057/0002057900/se-puede-decir-que-escala-macroscopica-una-habitacion-esta-vacia-cuando-se-retiran-todos-los-elementos-que-estaban-alli-embargo-la-habitacion-nunca-estara-vacia.jpg" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>Stock: {itemStock} unidades </h6> 
                    <div className="container-1">
                        <div className="count-discount">
                            <Button variant="secondary" className="btn-count" 
                            onClick={() => count > 0 ? handleDiscount(itemStock): alert("No puede ser inferior a cero")}>
                                -
                            </Button>
                            <span id="count">{count}</span>
                            <Button variant="secondary" className="btn-count" 
                            onClick={() => count < itemStock ? handleSum(itemStock): alert("No hay más stock")}>
                                +
                            </Button>  
                        </div>
                        <Button variant="dark" id="add-cart"onClick={() => itemStock > 0 ? onAdd(count, name) & update() : alert("Acción inválida, no hay más stock")}>Agregar al carrito</Button>                
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCount
