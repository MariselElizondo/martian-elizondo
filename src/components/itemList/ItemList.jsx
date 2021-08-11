import './ItemList.css';

//Componentes
import { Row } from 'react-bootstrap'
import Item from '../item/Item'


function ItemList({list}) {

    return (
        <>
            <Row>
                { list.map( i => <Item key={i.id} id={i.id} title={i.title} category={i.category} price={i.price} picture_url={i.picture_url}/> ) }
            </Row>
        </>
    )
}

export default ItemList
