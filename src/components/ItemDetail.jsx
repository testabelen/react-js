
const ItemDetail = ({item}) => {
    return(
        <div className='card w-50 mt-2'>
        <div className="card-header">{item.marca}</div>
        <div className="card-body">{item.tipo}</div>
        <div className="card-footer">{item.precio} </div>
        </div>  
    )

}

export default ItemDetail