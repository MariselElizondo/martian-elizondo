import 'bootstrap/dist/css/bootstrap.css'
import './ItemDetail.css';

import { Card } from 'react-bootstrap'
import ItemCount from '../itemCount/ItemCount'

function ItemDetail({ title, description, pictureUrl }) {
    return (
        <div>
            <Card id='card'>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="container-1">
                        <p>{description} </p>
                    </div>
                    <ItemCount name={title} initial={1} stock={10}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ItemDetail
