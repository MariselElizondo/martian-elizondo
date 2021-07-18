import ItemCount from '../itemCount/ItemCount';
import { Row } from 'react-bootstrap'
import './ItemListContainer.css';

function ItemListContainer({greeting}) {

    const handleCount= (quantity, name) => {
        alert('Acaba de añadir al carrito ' + quantity + ' unidades de ' + name)
    }
    return (
        <div id="content" >
            <h5>{greeting}</h5>
            <Row className="row">
                <ItemCount name="Remera azul" initial={1} stock={10} onAdd={handleCount}/>
                <ItemCount name="Remera roja" initial={1} stock={6} onAdd={handleCount}/>
                <ItemCount name="Remera blanca" initial={1} stock={50} onAdd={handleCount}/>
            </Row>
        </div>
    )
}

export default ItemListContainer
