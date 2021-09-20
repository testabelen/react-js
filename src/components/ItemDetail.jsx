import ItemCount from './ItemCount'; 
import { Col, Row } from 'react-bootstrap';


const onAdd = (cant)=>{
    console.log(cant)
}

const ItemDetail = ({item}) => {
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
        <div>
        <ItemCount stock ={10} initial = {1} onAdd={onAdd}/>
        </div>

        </Row>
        </>
    )
}

export default ItemDetail