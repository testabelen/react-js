import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState (initial)
    
    const Suma = ()=>{
        if (count < stock){
            setCount (count +1)
        }
        
    }

    const Resta = () => {
        if (count > 1){
            setCount (count -1)
        }
    }

    const agregarCarrito = () => {
        onAdd(count)
    }

    return(
       <>
       <label>{count}</label>
       <button onClick={Suma} disabled = {count>=stock}>Sumar</button>
       <button onClick={Resta} disabled = {count<=1}>Restar</button>
       <button onClick={agregarCarrito}>Agregar al Carrito</button>
       </>
    )
}

export default ItemCount