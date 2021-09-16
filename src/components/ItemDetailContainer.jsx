import { useState, useEffect } from "react";
import { bebidaCervezaImperial } from "../utils/mock";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () =>{
    const [item, setItem] = useState ({})

    useEffect (() => {
        bebidaCervezaImperial 
        .then(result => setItem (result))
    }, [])


    return(
        <>
            <ItemDetail item={item}/>
        </>    
    )
}


    

export default ItemDetailContainer