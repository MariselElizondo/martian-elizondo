import 'bootstrap/dist/css/bootstrap.css'
import './Item.css'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({id, title, description, price, pictureUrl}) {
    
    return (
        <>
            <Card id='card'>
                <Link to={`/item/${id}`}>
                    <Card.Img variant="top" src={pictureUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <div className="container-1 mb-3">
                            <strong className='price'>$ {price}</strong>
                        </div>
                    </Card.Body>
                </Link>    
            </Card>
        </>
    )
}

export default Item
