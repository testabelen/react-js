import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./nav.css";

const NavBar = (props) => {
    return (
        <>
        <div>
            <nav className="nav__list">
                <Link exact to={`/`}>
                     <h1>CARDENO VINOS</h1>
                </Link>
                <ul>
                    <Link to={`/categoria/Cervezas`}>
                    <li>{props.cat[0]}</li>
                    </Link>
                    <Link to={`/categoria/Vinos`}>
                    <li>{props.cat[1]}</li>
                    </Link>
                    <Link to={`/categoria/Espumantes`}>
                    <li>{props.cat[2]}</li>
                    </Link>
                    <Link to={`/categoria/Destilados`}>
                    <li>{props.cat[3]}</li>
                    </Link>
                    
                </ul>
                    <Link exact to={`/cart`}>
                    <CartWidget/>
                     </Link>
            </nav>
            
        </div>
        
        </>
    );
}

export default NavBar