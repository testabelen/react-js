import {BrowserRouter, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from "./components/Cart";



function App() {
  
  return (
  <BrowserRouter>
    <>

      <NavBar cat={["Cervezas", "Vinos", "Espumantes", "Destilados"]}/>

    <Switch>
        <Route path="/" exact> 

      <ItemListContainer greeting={["Bienvenid@ a Cardeno Vinos"]}/>

        </Route>

      <Route path="/categoria/:idCategoria" component={ItemListContainer}/>  

      <Route path="/detalle/:id" exact component= {ItemDetailContainer}/>
      
      <Route path="/cart" exact component={Cart}/>

    </Switch>

    </>
  </BrowserRouter>
  );
}

export default App;
