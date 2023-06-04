import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Favourite from './pages/Favourite';
import OrderProcess from './pages/OrderProcess';
import ProductPage from './pages/ProductPage';

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
  palette: {
    primary: {
      main: '#2FD3AE'
    },
    secondary: {
      main: '#ffffff'
    },
    success: {
      main: '#ed6c02'
    }
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="/:category/*" element={<Products />} />

        <Route path="/favourite" element={<Favourite />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/products/:id" element={<ProductPage />} />

        {/* Маршрут для сторінки товару, з урахуванням категорії */}
        {/* <Route path="/:category/* /:id" element={<ProductPage />} /> */}
        <Route path="/orderprocess" element={<OrderProcess />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </ThemeProvider>
);
export default App;
