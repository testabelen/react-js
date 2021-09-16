
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  return (
  <>

  <NavBar cat={["Vinos", "Cervezas", "Espumantes", "Destilados", "Varieté"]}/>
  <ItemListContainer greeting={["Bienvenid@ a Cardeno Vinos"]}/>
  <ItemDetailContainer/>
  </>
  );
}

export default App;
