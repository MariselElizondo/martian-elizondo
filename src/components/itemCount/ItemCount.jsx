import './ItemCount.css'

//Hooks
import { useState } from 'react'

//Componentes
import { Button } from 'react-bootstrap'

function ItemCount({ id, name, price, initial, stock, onAdd }) {

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
            let actual = localStorage.getItem('carrito-items')
            localStorage.setItem("carrito-items", JSON.stringify([...actual, {'id':id, 'name':name, 'price':price, 'count':count}]))
        } else { alert("Acción inválida, no hay más stock") }
    }

    return (
        <>
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
                <Button variant="dark" id="add-cart" onClick={() => update() }>Agregar al carrito</Button>                
            </div>      
        </>
    )
}

export default ItemCount
