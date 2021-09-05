import { propTypes } from "react-bootstrap/esm/Image";
import CartWidget from "./CartWidget";
import "./nav.css";

const NavBar = (props) => {
    return (
        <>
        <div>
            <nav className="nav__list">
            <h1>CARDENO VINOS</h1>
                <ul>
                    <li>{props.cat[0]}</li>
                    <li>{props.cat[1]}</li>
                    <li>{props.cat[2]}</li>
                    <li>{props.cat[3]}</li>
                    <li>{props.cat[4]}</li>
                </ul>
                <CartWidget />
            </nav>
            
        </div>
        
        </>
    );
}

export default NavBar