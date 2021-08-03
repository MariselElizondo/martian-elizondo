import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [inCart, setInCart] = useState([]);

   function guardarEnEstado(esto){
       //ver si ya esta sumo cantidad
       setInCart([...inCart, esto])
    } 

    return (
        <CartContext.Provider 
            value={{
                inCart, 
                guardarEnEstado
            }}
        >
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;



