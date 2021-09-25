import {useState} from 'react'
import { Col, Row } from 'react-bootstrap';

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
       <Col>
        <label>{count}</label>
        <button onClick={Resta} disabled = {count<=1}>-</button>
        <button onClick={Suma} disabled = {count>=stock}>+</button>

        <button onClick={agregarCarrito}>Agregar al Carrito</button>
       </Col>
       </>
    )
}

export default ItemCount