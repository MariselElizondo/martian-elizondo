import 'bootstrap/dist/css/bootstrap.css'
import './ItemList.css';

import { Row } from 'react-bootstrap'
import Item from '../item/Item'

function ItemList({list}) {

    return (
        <>
            <Row>
                { list.map( i => <Item id={i.id} title={i.title} description={i.description} price={i.price} pictureUrl={i.pictureUrl}/> ) }
            </Row>
        </>
    )
}

export default ItemList
