import './Cart.css';
/* import { useState, useEffect } from 'react' */
import { useCartContext } from '../../context/CartContext';

//Componentes
import { Image } from 'react-bootstrap'

function Cart() {

    const {inCart} = useCartContext();
   
    /* useEffect(() => {
        guardarEnEstado({id:'100',name:'thing'})
        
    }, []) */

    return (
        <>
            {console.log(inCart)}
            <h4>Carrito de compras</h4>
            <Image id="cart-image" src="https://image.flaticon.com/icons/png/512/107/107831.png" />
        
        </>
    )
}

export default Cart
