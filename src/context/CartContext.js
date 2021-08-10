import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [inCart, setInCart] = useState([]);
    const [quantityInCart, setQuantityInCart] = useState(0);

    function guardarEnEstado(esto){
       setInCart([...inCart, esto])
    } 

    const updateQuantity = (quantity) => {
        let totalQuantity = quantityInCart + quantity;
        setQuantityInCart(totalQuantity);
    }
    
    function isInCart(id) {
        let findProduct = inCart.filter(product => product.item.item.id === id)
        if (findProduct.length === 0) {
            return false;
        } else {
            return true;
        }
    }

    function agregarCantidad(id, cant) {
        for (const i of inCart) {
            if(i.item.item.id===id){
                i.quantity+= cant;
            }
        }
    }

    function removeQuantity(id) {
        let quantityToDeduct = 0;
        for (const product of inCart) {
            if(product.item.item.id === id){
                quantityToDeduct += product.quantity; 
            }
        }
        let remainingItems = inCart.filter(product => product.item.item.id !== id);
        setInCart(remainingItems);
        setQuantityInCart(quantityInCart - quantityToDeduct);
    }

    return (
        <CartContext.Provider 
            value={{
                inCart, 
                quantityInCart,
                guardarEnEstado,
                isInCart,
                agregarCantidad,
                updateQuantity,
                removeQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;



