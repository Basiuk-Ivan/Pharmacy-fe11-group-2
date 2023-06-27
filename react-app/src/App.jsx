import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Favourite from './pages/Favourite';
import OrderProcess from './pages/OrderProcess';
import ProductPage from './pages/ProductPage';
import { theme } from './tools/muiTheme';
import Cabinet from './pages/Cabinet';
import { Company } from './pages/FooterPage/Company';
import { Delivery } from './pages/FooterPage/Delivery';
import { Pay } from './pages/FooterPage/Pay';
import { Agreement } from './pages/FooterPage/Agreement';
import { EditorialPolicy } from './pages/FooterPage/EditorialPolicy';
import { Terms } from './pages/FooterPage/Terms';
import { Marketing } from './pages/FooterPage/Marketing';
import { Job } from './pages/FooterPage/Job';
import { Varranty } from './pages/FooterPage/Varranty';
import { setUser } from './redux/slice/userSlice';
import { Step } from './pages/BlogPages/5steps';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      const decodedToken = jwtDecode(token);
      const { _id, ...rest } = decodedToken;
      const updatedObj = { id: _id, ...rest };
      dispatch(setUser(updatedObj));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:category/*" element={<Products />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/step" element={<Step />} />
          <Route path="/company" element={<Company />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/job" element={<Job />} />
          <Route path="/varranty" element={<Varranty />} />
          <Route path="/:category/:id" element={<ProductPage />} />
          <Route path="/orderprocess" element={<OrderProcess />} />
          <Route path="/cabinet" element={<Cabinet />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
export default App;
