
const Item = ({bebida}) =>{
    return(
        <div key={bebida.id} className='card w-50 mt-2'>
        <div className="card-header">{bebida.marca}</div>
        <div className="card-body">{bebida.tipo}</div>
        <div className="card-footer">
        <button className="btn btn-outline-primary btn-block">Detalles</button>
        </div>
    </div>  
    )
}

export default Item










