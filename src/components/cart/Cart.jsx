import './Cart.css';

//Hooks
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
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                        {inCart.map((e, index) => 
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{e.item.item.title} ({e.item.item.description})</td>
                                <td>{e.quantity}</td>
                                <td>{e.quantity * e.item.item.price}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </span>
                
            </Row>
        </>
    )
}

export default Cart
