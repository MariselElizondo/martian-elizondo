import './App.css';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"; //Con as redefino el nombre : BrowserRouter as Router
//Switch hace que cambie de pag a pag --> Navegación de SPA (sin refrescar pag)
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={ItemListContainer} /> {/* exact-> toma exactamente lo que le mando, para no "duplicar" */}
          <Route exact path="/detail" component={ItemDetailContainer} /> 
          <Route exact path="/categoria/:categoryId" component={ItemListContainer} /> {/* :parametroDinámico */}
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
