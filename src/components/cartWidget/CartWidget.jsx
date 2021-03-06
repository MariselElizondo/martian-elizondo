import './CartWidget.css';

//Hooks
import { useCartContext } from '../../context/CartContext';

//Componentes
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function CartWidget() {

    const { quantityInCart } = useCartContext();

    return (
        <>
        { quantityInCart>0 ?
        <Link to="/cart">
            <Button variant="secondary">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="24" height="24" viewBox="0 0 512.008 512.008" >
                        <g>
                        <path d="M488.791,65.235c-16.992-4.854-34.705,4.985-39.561,21.978l-2.51,8.791H148.249l-4.496-35.969
                            C141.751,44.021,128.138,32.004,112,32.004H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h51.751l28.496,227.969
                            c2.002,16.014,15.615,28.031,31.753,28.031h272c14.287,0,26.844-9.473,30.77-23.209l64-224
                            C515.623,87.802,505.783,70.09,488.791,65.235z M256,224.004v-32h63.998v32H256z M319.998,256.004v32H256v-32H319.998z
                            M256,160.004v-32h63.998v32H256z M152.249,128.004H224v32h-67.751L152.249,128.004z M160.249,192.004H224v32h-59.751
                            L160.249,192.004z M168.249,256.004H224v32h-51.751L168.249,256.004z M391.861,288.004h-39.863v-32h49.008L391.861,288.004z
                            M410.148,224.004h-58.15v-32h67.293L410.148,224.004z M428.434,160.004h-76.436v-32h85.578L428.434,160.004z M128,432.004
                            c0,26.51,21.49,48,48,48s48-21.49,48-48l0,0c0-26.51-21.49-48-48-48S128,405.494,128,432.004z M320,432.004c0,26.51,21.49,48,48,48
                            s48-21.49,48-48l0,0c0-26.51-21.49-48-48-48S320,405.494,320,432.004z"/>
                        </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>
                </Button>   
                
                <div className="cart-count"> { quantityInCart } </div> 
            </Link>
            : <div></div>}
        </>
    )
}

export default CartWidget
