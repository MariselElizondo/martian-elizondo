import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [inCart, setInCart] = useState([]);

   function guardarEnEstado(esto){
       setInCart([...inCart, esto])
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

    return (
        <CartContext.Provider 
            value={{
                inCart, 
                guardarEnEstado,
                isInCart,
                agregarCantidad
            }}
        >
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;



