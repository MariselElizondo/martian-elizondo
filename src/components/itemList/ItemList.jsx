import './ItemList.css';

//Componentes
import { Row } from 'react-bootstrap'
import Item from '../item/Item'


function ItemList({list}) {

    return (
        <>
            <Row>
                { list.map( i => <Item key={i.id} id={i.id} title={i.title} cat={i.cat} price={i.price} pictureUrl={i.pictureUrl}/> ) }
            </Row>
        </>
    )
}

export default ItemList
