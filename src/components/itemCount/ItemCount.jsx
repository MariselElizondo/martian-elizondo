import {useState} from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(1)
    //const [stock, setStock] = useState(10)

    const handleCount = () => {
        alert('El stock es ' + stock + ', inicia como siempre en ' + initial)
        onAdd()
        setCount(count+1)
    }

    const agregar = () => {
        alert("Agrego")
    }

    return (
        <>
        
            <h6>Este producto tiene {stock} unidades en stock</h6>
            <Col>
                <Button class="btn-count" 
                onClick={(stock, initial, onAdd) => handleCount(stock, initial, onAdd)}>
                    -
                </Button>
                <span id="count">initial</span>
                <Button class="btn-count" 
                onClick={(stock, initial, onAdd) => handleCount(stock, initial, onAdd)}>
                    +
                </Button>                  
            </Col>
            
            <Button onClick={agregar}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount
