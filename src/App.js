import './App.css';

//Hooks
import CartContextProvider from "./context/CartContext";

//Components
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"; //Con as redefino el nombre : BrowserRouter as Router
//Switch hace que cambie de pag a pag --> Navegación de SPA (sin refrescar pag)
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {

  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <NavBar/>
            <Switch>
              <Route exact path="/" component={ItemListContainer} /> {/* exact-> toma exactamente lo que le mando, para no "duplicar" */}
              <Route exact path="/categoria/:categoryId" component={ItemListContainer} /> {/* :parametroDinámico */}
              <Route exact path="/categoria/:categoryId/:itemId" component={ItemDetailContainer} /> 
              <Route exact path="/cart" component={Cart} />
            </Switch>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
