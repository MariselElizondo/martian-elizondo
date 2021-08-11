import './Item.css'

//Componentes
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({id, title, category, price, picture_url}) {
    
    return (
        <>
            <Card id='card'>
                <Link to={`/categoria/${category}/${id}`}>
                    <Card.Img variant="top" src={picture_url} />
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
