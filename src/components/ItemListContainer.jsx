import "./nav.css";
import ItemCount from './components/ItemCount';

const ItemListContainer = (props) =>{
    
    const onAdd = (cant)=>{
        console.log(cant)
    }
    
    return (
        <>
        <b className="saludo">{props.greeting}</b>
        <ItemCount stock ={10} initial = {1} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer