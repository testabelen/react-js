import {useState} from 'react'
import { Link } from "react-router-dom";

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState (initial)
    const [cambiarButton, setCambiarButton]=useState(true)
    
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
        setCambiarButton(false)
    }

    return(
       <>
       <label>{count}</label>
       <button onClick={Resta} disabled = {count<=1}>-</button>
       <button onClick={Suma} disabled = {count>=stock}>+</button>
       

       {cambiarButton ?

       <button onClick={agregarCarrito}>Agregar al Carrito</button>
       :
       <div>
       <Link to="/"><button>Seguir Comprando</button> </Link>

       <Link to="/cart"><button>Finalizar Compra</button> </Link>
       </div>

       }
       </>
    )
}

export default ItemCount