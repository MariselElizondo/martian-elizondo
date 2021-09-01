import './App.css';

//Hooks
import CartContextProvider from "./context/CartContext";

//Components
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"; 
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ContactForm from './components/contactForm/ContactForm';

function App() {

  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <NavBar/>
            <Switch>
              <Route exact path="/" component={ItemListContainer} />
              <Route exact path="/categoria/:categoryId" component={ItemListContainer} />
              <Route exact path="/categoria/:categoryId/:itemId" component={ItemDetailContainer} /> 
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/contact-form" component={ContactForm} />
            </Switch>
            <div id="to-end">
              <div id="more-end">
                <Contact></Contact>
                <Footer></Footer>
              </div>
            </div>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
