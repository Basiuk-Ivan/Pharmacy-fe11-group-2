import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import SinglePage from './pages/SinglePage';
import Layout from './components/Layout';
import Favourite from './pages/Favourite';
import OrderProcess from './pages/OrderProcess';

const theme = createTheme({
  direction: 'rtl'
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/products/:id" element={<SinglePage />} />
        <Route path="/orderprocess" element={<OrderProcess />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </ThemeProvider>
);
export default App;
