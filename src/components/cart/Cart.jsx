import './Cart.css';

//Hooks
import { useCartContext } from '../../context/CartContext';

//Componentes
import { Image, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getFirestore } from '../../services/firebaseService'
import firebase from 'firebase/app';
import '@firebase/firestore';

import PurchaseModal from '../purchaseModal/PurchaseModal';

function Cart() {

    const [total, setTotal] = useState(0);
    const [buyer, setBuyer] = useState({name:'', phone:'', email:''});
    const [orderCode, setOrderCode] = useState(0)
    const {inCart, removeQuantity} = useCartContext();

    const handlerChangeBuyer = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }
    
    const handlerSubmitPurchase = (e) => {
        e.preventDefault()
        const db = getFirestore()
        //set actuliza o crea, add, además, agrega un id automáticamente
        db.collection('Order').add({
            buyer, 
            item: inCart.map( i => i.item.item), 
            date: firebase.firestore.Timestamp.fromDate(new Date()), 
            total: total}) 
        .then( res => setOrderCode(res.id))
        .then( res => console.log(res))
        .catch( err => console.log(err))
    }

    useEffect(() => {
        let variable = 0;
        inCart.map(e => variable+=(e.quantity * e.item.item.price))
        setTotal(variable);
    })

    return (
        <>
            <h4>Carrito de compras</h4>
            {inCart.length > 0 ? (
            <Row>
                <Image id="cart-image" src="https://image.flaticon.com/icons/png/512/107/107831.png" />
                
                <span className="list-cart col-6">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio ($)</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {inCart.map((e, index) => 
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{e.item.item.title} ({e.item.item.description})</td>
                                    <td>{e.quantity}</td>
                                    <td>{e.quantity * e.item.item.price}</td> 
                                    <td>
                                        <button className="btn btn-secondary remove" onClick={() => removeQuantity(e.item.item.id)}>
                                            Remover</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </span>
                <div className="center total navbar-brand">Total: ${total > 0 && total}</div>
               
                <h4>Para continuar con la compra, por favor ingrese sus datos</h4>
                <form id='cart-form' onChange={handlerChangeBuyer} onSubmit={handlerSubmitPurchase}>
                    <input type='text' placeholder='Nombre' name='name' value={buyer.name}></input>
                    <input type='text' placeholder='Teléfono' name='phone' value={buyer.phone}></input>
                    <input type='email' placeholder='Mail' name='email' value={buyer.email}></input>
                    {
                        (buyer.name !== '' && buyer.phone !== '' && buyer.email !== '') &&
                        <PurchaseModal phrase={'Confirmar compra'} orderCode={orderCode}/>
                    }
                </form>
            </Row>
            ) : (
                <div className="center">
                    <div className="space">Actualmente no hay items en el carrito</div>
                    <Link className="navbar-brand space" to="/">Volver al inicio</Link>
                </div>
            ) }

            
        </>
    )
}

export default Cart
