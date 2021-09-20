import "./nav.css";
import ItemCount from './ItemCount';
import { bebidaCerveza } from '../utils/mock';
import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

console.log(bebidaCerveza);

const ItemListContainer = (props) =>{
    const [bebidas, setBebidas]=useState([])
    const [loading, setLoading]=useState(true)
    const {idCategoria}=useParams()

    useEffect(()=>{
        if(idCategoria){
            bebidaCerveza
            .then(result=>{
                setBebidas(result.filter(bebida => bebida.categoria === idCategoria))
            })
            .catch(error=>console.log(error))
            .finally(()=>setLoading(false))
        }else{
            bebidaCerveza
            .then(result=>{
                setBebidas(result)
            })
            .catch(error=>console.log(error))
            .finally(()=>setLoading(false))
        } 

    },[idCategoria]);
    
    const onAdd = (cant)=>{
        console.log(cant)
    }
    
    return (
        <>
        <b className="saludo">{props.greeting}</b>

        <ItemCount stock ={10} initial = {1} onAdd={onAdd}/>

        {loading ? <h2>Espere un momento por favor!</h2> : <ItemList bebidas={bebidas}/>}
        </>
    );
}

export default ItemListContainer