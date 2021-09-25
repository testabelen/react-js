import ItemCount from './ItemCount'; 
import { Col, Row } from 'react-bootstrap';
import {useState} from 'react';
import { Link } from "react-router-dom";




const ItemDetail = ({item}) => {
    const [selectQ, setSelectQ]= useState (0)
    const [cambiarButton, setCambiarButton]=useState(true)

    const onAdd = (cant)=>{
        console.log(cant)
        setSelectQ(cant)
        setCambiarButton(false)
    } 
    return(
        <>
        <Row>
            <Col>
        <div className='card w-50 mt-2'>
        <div className="card-header">{item.marca}</div>
        <div className="card-body">{item.tipo}</div>
        <div className="container">
            <img src={item.foto} className="w-25" alt="foto producto"/>
            </div>
        <div className="card-footer">{item.precio} </div>
        </div>  
        </Col>


        {cambiarButton ?
            <ItemCount stock ={10} initial = {1} onAdd={onAdd}/>
            :
            <div>
            <Link to="/"><button>Seguir Comprando</button> </Link>

            <Link to="/cart"><button>Finalizar Compra</button> </Link>
            </div>
            }
        </Row>
        </>
    )
}

export default ItemDetail