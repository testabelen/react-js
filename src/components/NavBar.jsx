import CartWidget from "./CartWidget"


function NavBar (){
    return(
        <>
        <div>
            <h1>CARDENO VINOS</h1>
            <a>Vinos</a>
            <a>Cervezas</a>
            <a>Espumantes</a>
            <a>Destilados</a>
            <a>Variete</a>
        </div>
        <CartWidget />
        </>
    )
}

export default NavBar