import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/globals.css';
import Products from './pages/Products/Products';
import NotFound from './pages/NotFound/PageNotFound';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Navbar from './Components/Navbar/NavbarComponent';
import CartProvider from './context/CartContext';
import Footer from './Components/Footer/Footer';
import Contacto from './pages/Contacto/Contacto';
import CartContainer from './pages/Cart/Cart';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/product/:productId' element={<ProductDetail />} />
            <Route path='/category/:category' element={<Products />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/cart' element={<CartContainer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
