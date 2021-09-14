import Item from './Item'

const ItemList = ({bebidas}) => {
    return (
        <>
        {bebidas.map(bebida=> <Item bebida={bebida}/>)}
        </>
    )
}

export default ItemList
