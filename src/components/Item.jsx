import { Link } from "react-router-dom";

const Item = ({bebida}) =>{
    return(
        <div key={bebida.id} className='card w-50 mt-2'>
        <div className="card-header">{bebida.marca}</div>
        <div className="card-body">{bebida.tipo}</div>
        <div className="card-footer">
            <Link to={`/detalle/${bebida.id}`}>
        <button className="btn btn-outline-primary btn-block">Detalles</button>
            </Link>
        </div>
    </div>  
    )
}

export default Item










