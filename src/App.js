import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList/ProductList';
import './styles/globals.css';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import CustomNavbar from './Components/NavbarContainer/NavbarContainer';
import CartContextProvider from './context/CartContext';
import Footer from './Components/Footer/Footer';
import ContactoContainer from './Components/ContactoContainer/ContactoContainer';
import CartContainer from './Components/CartContainer/CartContainer';

function App() {
  return (
    <CartContextProvider> {/* GESTIÓN DEL CARRITO*/}
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/category/:category" element={<ProductList />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/contacto" element={ <ContactoContainer /> }/>
          <Route path="/cart" element={ <CartContainer /> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;