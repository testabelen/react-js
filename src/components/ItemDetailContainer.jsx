import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { bebidaCerveza } from "../utils/mock";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () =>{
    const [item, setItem] = useState ({})
    const {id}=useParams()

    useEffect (() => {
        bebidaCerveza
        .then(result => setItem (result.find((i) => parseInt(id) ===i.id)))
    }, [id])


    return(
        <>
            <ItemDetail item={item}/>
        </>    
    )
}


    

export default ItemDetailContainer