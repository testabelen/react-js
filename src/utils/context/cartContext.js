import { useState, createContext, useContext } from "react";

const cartContext=createContext([])

export const useCartContext = () => useContext (cartContext)

export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState([])

   const addToCart = (data) => {
        const index = [...cartList]

        if (index.some(i => i.item.id===data.item.id)){
            
            index.find(i=>i.item.id === data.item.id).quantity += data.quantity
            setCartList(index)
        }
        else {
            setCartList([...cartList, data])
        }
            
    }

    console.log(cartList);

    function borrarLista() {
        cartList([])
    }

    return(
        <cartContext.Provider value={{
            cartList,
            addToCart,
            borrarLista,
        }}>
            {children}
        </cartContext.Provider>
    )
}