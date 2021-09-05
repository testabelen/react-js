
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './components/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  return (
  <>

  <NavBar cat={["Vinos", "Cervezas", "Espumantes", "Destilados", "Varieté"]}/>
  <Greeting greeting={["Bienvenid@ a Cardeno Vinos"]}/>

  </>
  );
}

export default App;
