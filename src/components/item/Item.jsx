import 'bootstrap/dist/css/bootstrap.css'
import './Item.css'

import { Card } from 'react-bootstrap'

function Item({id, title, description, price, pictureUrl}) {
    return (
        <>
            <Card id='card'>
                <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="container-1">
                        <p>{description} </p>
                        <div class="spaced">
                            <span>Cod: {id}</span> <strong class='price'>{price}</strong>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item
