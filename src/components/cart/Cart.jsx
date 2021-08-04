import './Cart.css';
/* import { useState, useEffect } from 'react' */
import { useCartContext } from '../../context/CartContext';

//Componentes
import { Image, Row } from 'react-bootstrap'

function Cart() {

    const {inCart} = useCartContext();

    return (
        <>
            <h4>Carrito de compras</h4>
            <Row>
                <Image id="cart-image" src="https://image.flaticon.com/icons/png/512/107/107831.png" />
                <span className="list-cart col-6">
                    {inCart.map((e) => <Row>
                        <span className='col-8'>{e.item.item.title} ({e.item.item.description})</span>
                        <span className='col-2'>cant. {e.quantity}</span>
                        {/* <span className='col-2'>${e.item.item.price}</span> */}
                    </Row>)}
                </span>
            </Row>
        </>
    )
}

export default Cart
