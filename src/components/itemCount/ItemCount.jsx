import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import './ItemCount.css'

import { Button, Card } from 'react-bootstrap'

function ItemCount({ name, initial, stock, onAdd }) {

    const [count, setCount] = useState(initial)
    const [itemStock, setItemStock] = useState(stock)
 
    const handleSum = () => {
        count < itemStock ? setCount(count + 1) : alert("No hay más stock")
    }

    const handleDiscount = () => {
        count > 1 ? setCount(count - 1) : alert("No puede agregar al carrito una cantidad inferior a uno de un producto")  
    }

    const update = () => {
        if ( itemStock > 0 ) {
            onAdd(count, name)
            let newStock = itemStock - count
            setItemStock(newStock)
            setCount(initial)
        } else { alert("Acción inválida, no hay más stock") }
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
                            onClick={() => handleDiscount()}>
                                -
                            </Button>
                            <span id="count">{count}</span>
                            <Button variant="secondary" className="btn-count" 
                            onClick={() =>  handleSum()}>
                                +
                            </Button>  
                        </div>
                        <Button variant="dark" id="add-cart"onClick={() => update() }>Agregar al carrito</Button>                
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemCount
