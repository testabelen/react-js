import {useState} from `react`

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState (initial)
    
    Suma = ()=>{
        if (count < stock){
            setCount (count +1)
        }
        
    }

    Resta = () => {
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
       <button onClick={Suma}>Sumar</button>
       <button onClick={Resta}>Restar</button>
       <button onClick={agregarCarrito}>Agregar al Carrito</button>
       </>
    )
}

export default ItemCount