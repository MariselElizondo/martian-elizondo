import './Cart.css';

//Hooks
import {useState, useEffect} from 'react'
//Componentes
import { Image } from 'react-bootstrap'

function Cart() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        let p = localStorage.getItem('carrito-items');
        setProducts(p)
        console.log(products);
    }, [])

    return (
        <>
            <h4>Carrito de compras</h4>
            <Image id="cart-image" src="https://image.flaticon.com/icons/png/512/107/107831.png" />
        </>
    )
}

export default Cart
