import { useCartContext } from "../utils/context/cartContext"



const Cart = () => {
const {cartList} = useCartContext()

    return(
        <>
        soy cart
            {cartList.map(item => (item.item.marca))}

        </>
    )
}

export default Cart