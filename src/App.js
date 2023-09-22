import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList/ProductList';
import './styles/globals.css';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import CustomNavbar from './Components/NavbarContainer/NavbarContainer';
import CartContextProvider from './context/CartContext';

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
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;