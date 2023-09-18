import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList/ProductList';
import './styles/globals.css';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ProductDetail from './Components/ProductDetail/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/producto/:idProducto" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;