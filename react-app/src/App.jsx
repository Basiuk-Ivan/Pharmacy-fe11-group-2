import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import SinglePage from './pages/SinglePage';
import Layout from './components/Layout';
import Favourite from './pages/Favourite';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/products/:id" element={<SinglePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);
export default App;
